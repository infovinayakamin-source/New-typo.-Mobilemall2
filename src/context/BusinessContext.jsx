import React, { createContext, useContext, useState, useEffect } from 'react';
import { initialBusinessConfig } from '../data/businessConfig';

const BusinessContext = createContext();

export function BusinessProvider({ children }) {
  const [config, setConfig] = useState(() => {
    const saved = localStorage.getItem('mobile_mall_config');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (!parsed.officialEmail || parsed.officialEmail.includes('wholesale@mobilemall.com')) {
          parsed.officialEmail = initialBusinessConfig.officialEmail;
        }
        if (!parsed.warehouseAddress || parsed.warehouseAddress.includes('Electronic Market Zone') || parsed.warehouseAddress.includes('Distribution Hub') || parsed.warehouseAddress.includes('L1, L2, L3')) {
          parsed.warehouseAddress = initialBusinessConfig.warehouseAddress;
          parsed.cityStateCountry = initialBusinessConfig.cityStateCountry;
          parsed.pincode = initialBusinessConfig.pincode;
        }
        if (!parsed.whatsappNumber || parsed.whatsappNumber.includes('98765')) {
          parsed.whatsappNumber = initialBusinessConfig.whatsappNumber;
          parsed.wholesaleDeskPhone = initialBusinessConfig.wholesaleDeskPhone;
        }
        if (!parsed.googleBusinessProfileUrl) {
          parsed.googleBusinessProfileUrl = initialBusinessConfig.googleBusinessProfileUrl;
          parsed.gmbMapUrl = initialBusinessConfig.gmbMapUrl;
        }
        return {
          ...initialBusinessConfig,
          ...parsed,
          officialEmail: initialBusinessConfig.officialEmail,
          contactPerson: initialBusinessConfig.contactPerson,
          legalBusinessName: initialBusinessConfig.legalBusinessName,
          legalName: initialBusinessConfig.legalName,
          warehouseAddress: initialBusinessConfig.warehouseAddress,
          cityStateCountry: initialBusinessConfig.cityStateCountry,
          whatsappNumber: initialBusinessConfig.whatsappNumber,
          wholesaleDeskPhone: initialBusinessConfig.wholesaleDeskPhone,
          phone: initialBusinessConfig.phone,
          website: initialBusinessConfig.website,
        };
      } catch (e) {
        console.error('Error parsing stored config', e);
      }
    }
    return initialBusinessConfig;
  });

  const [isConfigModalOpen, setIsConfigModalOpen] = useState(false);
  const [isStockSheetModalOpen, setIsStockSheetModalOpen] = useState(false);
  const [isDealerModalOpen, setIsDealerModalOpen] = useState(false);
  const [isExchangeModalOpen, setIsExchangeModalOpen] = useState(false);
  const [selectedProductForModal, setSelectedProductForModal] = useState(null);

  // RFQ Basket state
  const [rfqBasket, setRfqBasket] = useState(() => {
    const saved = localStorage.getItem('mobile_mall_rfq');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Error parsing stored RFQ', e);
      }
    }
    return [];
  });
  const [isRfqDrawerOpen, setIsRfqDrawerOpen] = useState(false);
  const [currency, setCurrency] = useState(() => {
    return localStorage.getItem('mobile_mall_currency') || 'INR';
  });

  useEffect(() => {
    localStorage.setItem('mobile_mall_currency', currency);
  }, [currency]);

  const formatPrice = (usdAmount) => {
    if (currency === 'INR') {
      const inrValue = Math.round(usdAmount * 85);
      return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
      }).format(inrValue);
    }
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(usdAmount);
  };

  useEffect(() => {
    localStorage.setItem('mobile_mall_config', JSON.stringify(config));
  }, [config]);

  useEffect(() => {
    localStorage.setItem('mobile_mall_rfq', JSON.stringify(rfqBasket));
  }, [rfqBasket]);

  const updateConfig = (newValues) => {
    setConfig((prev) => ({ ...prev, ...newValues }));
  };

  const resetConfig = () => {
    setConfig(initialBusinessConfig);
    localStorage.removeItem('mobile_mall_config');
  };

  // RFQ Basket Actions
  const addToRfq = (product, quantity = null) => {
    const qty = quantity || product.moq || 5;
    setRfqBasket((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + qty } : item
        );
      }
      return [...prev, { ...product, quantity: qty }];
    });
    setIsRfqDrawerOpen(true);
  };

  const updateRfqQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromRfq(productId);
      return;
    }
    setRfqBasket((prev) =>
      prev.map((item) => (item.id === productId ? { ...item, quantity } : item))
    );
  };

  const removeFromRfq = (productId) => {
    setRfqBasket((prev) => prev.filter((item) => item.id !== productId));
  };

  const clearRfq = () => {
    setRfqBasket([]);
  };

  const generateWhatsAppUrl = (messageText) => {
    let cleanNumber = (config.whatsappNumber || '9825555005').replace(/[^0-9]/g, '');
    if (cleanNumber.length === 10) {
      cleanNumber = '91' + cleanNumber;
    }
    const encoded = encodeURIComponent(messageText || 'Hello Mobile Mall Wholesale Desk.');
    return `https://wa.me/${cleanNumber}?text=${encoded}`;
  };

  return (
    <BusinessContext.Provider
      value={{
        config,
        updateConfig,
        resetConfig,
        isConfigModalOpen,
        setIsConfigModalOpen,
        isStockSheetModalOpen,
        setIsStockSheetModalOpen,
        isDealerModalOpen,
        setIsDealerModalOpen,
        isExchangeModalOpen,
        setIsExchangeModalOpen,
        selectedProductForModal,
        setSelectedProductForModal,
        rfqBasket,
        isRfqDrawerOpen,
        setIsRfqDrawerOpen,
        addToRfq,
        updateRfqQuantity,
        removeFromRfq,
        clearRfq,
        generateWhatsAppUrl,
        currency,
        setCurrency,
        formatPrice,
      }}
    >
      {children}
    </BusinessContext.Provider>
  );
}

export function useBusiness() {
  const context = useContext(BusinessContext);
  if (!context) {
    throw new Error('useBusiness must be used within a BusinessProvider');
  }
  return context;
}
