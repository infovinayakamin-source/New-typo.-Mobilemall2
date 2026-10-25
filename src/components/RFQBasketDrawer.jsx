import React, { useState } from 'react';
import { useBusiness } from '../context/BusinessContext';
import {
  X,
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  MessageCircle,
  FileSpreadsheet,
  CheckCircle2,
  Copy,
  Sparkles,
  Truck,
  ShieldCheck,
  Building2,
  Receipt,
  MapPin
} from 'lucide-react';

export default function RFQBasketDrawer() {
  const {
    rfqBasket,
    isRfqDrawerOpen,
    setIsRfqDrawerOpen,
    updateRfqQuantity,
    removeFromRfq,
    clearRfq,
    generateWhatsAppUrl,
    formatPrice,
    config
  } = useBusiness();

  const [shopName, setShopName] = useState('');
  const [gstin, setGstin] = useState('');
  const [contactName, setContactName] = useState('');
  const [city, setCity] = useState('');
  const [dispatchMethod, setDispatchMethod] = useState('hub-pickup'); // 'hub-pickup' | 'cargo-freight'
  const [copied, setCopied] = useState(false);

  if (!isRfqDrawerOpen) return null;

  // Calculate totals
  const totalUnits = rfqBasket.reduce((sum, item) => sum + item.quantity, 0);

  const calculateItemPrice = (item) => {
    if (item.quantity >= 100) return item.tier3Price;
    if (item.quantity >= 25) return item.tier2Price;
    return item.tier1Price;
  };

  const totalWholesaleValue = rfqBasket.reduce((sum, item) => {
    return sum + calculateItemPrice(item) * item.quantity;
  }, 0);

  // 18% GST Input Tax Credit breakdown
  const gstCreditEst = totalWholesaleValue * 0.18;
  const grandTotalWithGst = totalWholesaleValue + gstCreditEst;

  const buildRfqText = () => {
    let text = `*OFFICIAL WHOLESALE PURCHASE ORDER — MOBILE MALL*\n\n`;
    text += `*Wholesale Trade Desk:* +91 ${config.wholesaleDeskPhone || '98255 55005'}\n`;
    text += `*Hub:* ${config.warehouseAddress}, ${config.cityStateCountry}\n\n`;
    if (shopName) text += `*Retail Store / Enterprise:* ${shopName}\n`;
    if (gstin) text += `*GSTIN:* ${gstin}\n`;
    if (contactName) text += `*Buyer / Proprietor:* ${contactName}\n`;
    if (city) text += `*Destination City:* ${city}\n`;
    text += `*Dispatch Preference:* ${dispatchMethod === 'hub-pickup' ? 'Relief Rd Ahmedabad Hub Pickup (Immediate)' : 'Insured Air Cargo Freight'}\n`;
    text += `*Total Units Ordered:* ${totalUnits} Units\n\n`;
    text += `*ORDERED WHOLESALE LOTS:*\n`;

    rfqBasket.forEach((item, idx) => {
      const rate = calculateItemPrice(item);
      const sub = rate * item.quantity;
      text += `${idx + 1}. *${item.name}* (${item.storage})\n`;
      text += `   - Condition: ${item.condition} (Clean IMEI)\n`;
      text += `   - Qty: ${item.quantity} pcs @ ${formatPrice(rate)}/pc = ${formatPrice(sub)}\n`;
    });

    text += `\n*NET WHOLESALE BASE:* ${formatPrice(totalWholesaleValue)}\n`;
    text += `*EST. 18% GST INPUT TAX CREDIT:* ${formatPrice(gstCreditEst)}\n`;
    text += `*TOTAL ESTIMATE (INCL. GST):* ${formatPrice(grandTotalWithGst)}\n\n`;
    text += `Please issue formal proforma tax invoice and lock serial allocation for immediate dispatch.`;
    return text;
  };

  const handleWhatsAppSubmit = () => {
    if (rfqBasket.length === 0) return;
    const msg = buildRfqText();
    window.open(generateWhatsAppUrl(msg), '_blank');
  };

  const handleCopyText = () => {
    const text = buildRfqText();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-sm">
      <div className="absolute inset-0" onClick={() => setIsRfqDrawerOpen(false)} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div className="w-screen max-w-lg bg-[#071A13] border-l border-[#143527] text-white flex flex-col shadow-2xl">
          
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-[#143527] flex items-center justify-between bg-[#05130E]">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#E5C07B]/15 border border-[#E5C07B]/30 flex items-center justify-center text-[#E5C07B]">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-base font-extrabold text-white font-heading">Wholesale Cart & PO</h2>
                  <span className="bg-[#E5C07B] text-[#05130E] text-[10px] font-black px-2 py-0.5 rounded-full">
                    {totalUnits} Units
                  </span>
                </div>
                <p className="text-[10px] text-[#A3B8AD]">Amazon & Flipkart Wholesale Tier • Relief Rd Hub</p>
              </div>
            </div>

            <button
              onClick={() => setIsRfqDrawerOpen(false)}
              className="p-1.5 rounded-lg text-[#A3B8AD] hover:text-white hover:bg-[#0A2219] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-5">
            {rfqBasket.length === 0 ? (
              <div className="text-center py-20 space-y-3">
                <ShoppingBag className="w-14 h-14 text-[#789284] mx-auto opacity-40" />
                <p className="text-sm font-bold text-white">Your Wholesale Cart Is Empty</p>
                <p className="text-xs text-[#A3B8AD] max-w-xs mx-auto">
                  Add smartphone master cartons or iPad lots from the catalogue to prepare your bulk wholesale order.
                </p>
                <button
                  onClick={() => setIsRfqDrawerOpen(false)}
                  className="mt-4 px-5 py-2.5 bg-[#05130E] border border-[#E5C07B]/40 text-xs font-black text-[#E5C07B] rounded-xl hover:border-[#E5C07B]"
                >
                  Browse Catalogue
                </button>
              </div>
            ) : (
              <>
                {/* Product List */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#A3B8AD]">
                    <span className="font-bold uppercase tracking-wider text-[11px] text-[#E5C07B]">
                      Selected Lots ({rfqBasket.length})
                    </span>
                    <button
                      onClick={clearRfq}
                      className="text-rose-400 hover:text-rose-300 text-[11px] font-bold underline"
                    >
                      Clear All
                    </button>
                  </div>

                  {rfqBasket.map((item) => {
                    const unitRate = calculateItemPrice(item);
                    const subtotal = unitRate * item.quantity;
                    const tierName =
                      item.quantity >= 100 ? 'Tier 3 (100+ pcs)' : item.quantity >= 25 ? 'Tier 2 (25+ pcs)' : 'Tier 1';

                    return (
                      <div
                        key={item.id}
                        className="bg-[#05130E] border border-[#143828] rounded-2xl p-3.5 flex gap-3 relative group shadow-md"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-contain rounded-xl bg-white/5 p-1 flex-shrink-0"
                        />

                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="text-xs font-extrabold text-white truncate">
                              {item.name}
                            </h4>
                            <button
                              onClick={() => removeFromRfq(item.id)}
                              className="text-[#789284] hover:text-rose-400 p-0.5"
                              title="Remove item"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <div className="text-[10px] text-[#A3B8AD] mt-0.5">
                            {item.storage} • {item.condition} • <span className="text-[#E5C07B]">{tierName}</span>
                          </div>

                          <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-[#143828]">
                            {/* Quantity Adjuster */}
                            <div className="flex items-center gap-1.5 bg-[#071A13] rounded-lg border border-[#143828] px-2 py-0.5">
                              <button
                                onClick={() => updateRfqQuantity(item.id, item.quantity - 5)}
                                className="text-[#A3B8AD] hover:text-white text-xs font-bold px-1"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="text-xs font-black text-[#E5C07B] px-1">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateRfqQuantity(item.id, item.quantity + 5)}
                                className="text-[#A3B8AD] hover:text-white text-xs font-bold px-1"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>

                            {/* Subtotal */}
                            <div className="text-right">
                              <span className="text-[10px] text-[#789284] block">
                                @ {formatPrice(unitRate)}/pc
                              </span>
                              <span className="text-xs font-black text-white">
                                {formatPrice(subtotal)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Dispatch Preference Selector */}
                <div className="bg-[#05130E] border border-[#143828] rounded-2xl p-4 space-y-2.5">
                  <label className="block text-xs font-extrabold text-[#E5C07B] uppercase tracking-wider flex items-center gap-1.5">
                    <Truck className="w-3.5 h-3.5" />
                    <span>Dispatch & Delivery Method</span>
                  </label>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <button
                      type="button"
                      onClick={() => setDispatchMethod('hub-pickup')}
                      className={`p-2.5 rounded-xl border text-left transition-all ${
                        dispatchMethod === 'hub-pickup'
                          ? 'bg-[#E5C07B]/15 border-[#E5C07B] text-white font-bold'
                          : 'bg-[#071A13] border-[#143828] text-[#A3B8AD] hover:text-white'
                      }`}
                    >
                      <div className="font-extrabold text-xs">Relief Rd Hub Pickup</div>
                      <div className="text-[10px] text-[#789284]">Free • Same Day Direct</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setDispatchMethod('cargo-freight')}
                      className={`p-2.5 rounded-xl border text-left transition-all ${
                        dispatchMethod === 'cargo-freight'
                          ? 'bg-[#E5C07B]/15 border-[#E5C07B] text-white font-bold'
                          : 'bg-[#071A13] border-[#143828] text-[#A3B8AD] hover:text-white'
                      }`}
                    >
                      <div className="font-extrabold text-xs">Insured Air Cargo</div>
                      <div className="text-[10px] text-[#789284]">Doorstep • All India 24-48h</div>
                    </button>
                  </div>
                </div>

                {/* Retailer Information Form */}
                <div className="bg-[#05130E] border border-[#143828] rounded-2xl p-4 space-y-3">
                  <div className="flex items-center gap-1.5 text-xs font-extrabold text-[#E5C07B] uppercase tracking-wide">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Retailer Invoicing Details</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-[11px] text-[#A3B8AD] mb-1">
                        Store / Enterprise Name:
                      </label>
                      <input
                        type="text"
                        value={shopName}
                        onChange={(e) => setShopName(e.target.value)}
                        placeholder="e.g. Gujarat Mobile World"
                        className="w-full bg-[#071A13] border border-[#143828] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#E5C07B]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-[#A3B8AD] mb-1">
                        GSTIN Number (Optional):
                      </label>
                      <input
                        type="text"
                        value={gstin}
                        onChange={(e) => setGstin(e.target.value)}
                        placeholder="24AAAAA0000A1Z5"
                        className="w-full bg-[#071A13] border border-[#143828] rounded-xl px-3 py-2 text-xs text-white uppercase focus:outline-none focus:border-[#E5C07B]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-[11px] text-[#A3B8AD] mb-1">
                        Proprietor Name:
                      </label>
                      <input
                        type="text"
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        placeholder="Full Name"
                        className="w-full bg-[#071A13] border border-[#143828] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#E5C07B]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-[#A3B8AD] mb-1">
                        Delivery City & State:
                      </label>
                      <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="e.g. Surat, Gujarat"
                        className="w-full bg-[#071A13] border border-[#143828] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#E5C07B]"
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Footer Subtotal & Action */}
          {rfqBasket.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-[#143527] bg-[#05130E] space-y-3">
              
              {/* Order Cost Breakdown */}
              <div className="space-y-1.5 text-xs">
                <div className="flex items-center justify-between text-[#A3B8AD]">
                  <span>Total Order Units:</span>
                  <span className="font-bold text-white">{totalUnits} Pieces</span>
                </div>
                <div className="flex items-center justify-between text-[#A3B8AD]">
                  <span>Net Wholesale Value:</span>
                  <span className="font-bold text-white">{formatPrice(totalWholesaleValue)}</span>
                </div>
                <div className="flex items-center justify-between text-[#A3B8AD]">
                  <span className="flex items-center gap-1">
                    <Receipt className="w-3 h-3 text-[#E5C07B]" />
                    <span>Est. 18% GST Input Credit:</span>
                  </span>
                  <span className="font-semibold text-emerald-400">+{formatPrice(gstCreditEst)}</span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-[#143527]">
                  <span className="text-sm font-black text-white">Estimated Proforma Total:</span>
                  <span className="text-xl font-black text-[#E5C07B]">
                    {formatPrice(grandTotalWithGst)}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 gap-2 pt-1">
                <button
                  onClick={handleWhatsAppSubmit}
                  className="w-full py-3 bg-[#25D366] text-black font-black rounded-xl text-xs sm:text-sm hover:bg-[#20ba59] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20 active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Submit Wholesale PO via WhatsApp Desk</span>
                </button>

                <button
                  onClick={handleCopyText}
                  className="w-full py-2 bg-[#071A13] border border-[#143527] text-xs font-bold text-[#A3B8AD] hover:text-white rounded-xl flex items-center justify-center gap-1.5 transition-all"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copied ? 'Copied PO Text to Clipboard!' : 'Copy Proforma PO Summary'}</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#789284]">
                <MapPin className="w-3 h-3 text-[#E5C07B]" />
                <span>Dispatches from Murtimant Complex, Relief Rd, Ahmedabad</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

