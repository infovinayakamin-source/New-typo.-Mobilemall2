import React, { useState } from 'react';
import { useBusiness } from '../context/BusinessContext';
import {
  X,
  ShieldCheck,
  Package,
  Layers,
  ShoppingBag,
  MessageCircle,
  Truck,
  CheckCircle2,
  FileText,
  ExternalLink,
  Sparkles,
  Zap,
  MapPin,
  Receipt,
  Repeat
} from 'lucide-react';

export default function ProductDetailModal() {
  const {
    selectedProductForModal,
    setSelectedProductForModal,
    addToRfq,
    generateWhatsAppUrl,
    formatPrice,
    config,
    setIsExchangeModalOpen
  } = useBusiness();

  const [quantity, setQuantity] = useState(
    selectedProductForModal ? selectedProductForModal.moq || 5 : 5
  );

  if (!selectedProductForModal) return null;
  const p = selectedProductForModal;

  const currentPrice =
    quantity >= 100 ? p.tier3Price : quantity >= 25 ? p.tier2Price : p.tier1Price;
  const totalAmount = currentPrice * quantity;
  const retailerMargin = Math.round(((p.suggestedMSRP - currentPrice) / currentPrice) * 100);
  const totalProfit = (p.suggestedMSRP - currentPrice) * quantity;

  const handleWhatsAppInquiry = () => {
    const msg = `*OFFICIAL WHOLESALE LOT INQUIRY — MOBILE MALL*\n\n` +
      `*Model:* ${p.name}\n` +
      `*Condition:* ${p.condition} (Clean IMEI Guaranteed)\n` +
      `*Storage / Specs:* ${p.storage}\n` +
      `*Master Carton:* ${p.masterCartonSize} Units / Box\n` +
      `*Order Quantity:* ${quantity} units\n` +
      `*Wholesale Unit Rate:* ${formatPrice(currentPrice)} / pc\n` +
      `*Total Wholesale Value:* ${formatPrice(totalAmount)}\n` +
      `*Dispatch Location:* ${config.warehouseAddress}, ${config.cityStateCountry}\n\n` +
      `Please verify lot availability and issue formal proforma tax invoice.`;
    window.open(generateWhatsAppUrl(msg), '_blank');
  };

  const handleAddToRfq = () => {
    addToRfq(p, quantity);
    setSelectedProductForModal(null);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#071A13] border border-[#143527] rounded-3xl max-w-3xl w-full text-white overflow-hidden shadow-2xl relative my-8">
        
        {/* Close Button */}
        <button
          onClick={() => setSelectedProductForModal(null)}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#05130E] text-[#A3B8AD] hover:text-white flex items-center justify-center border border-[#143828] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8">
          
          {/* Left Column: Image & Quick Badges */}
          <div className="md:col-span-5 flex flex-col items-center justify-between bg-[#05130E] rounded-2xl p-6 border border-[#143828]">
            <div className="w-full flex items-center justify-between text-xs text-[#A3B8AD] mb-4">
              <span className="uppercase font-extrabold text-[#E5C07B]">{p.brand}</span>
              <span className="bg-[#0A2219] border border-emerald-800/60 px-2 py-0.5 rounded text-[11px] font-bold text-emerald-400">
                {p.stockCount} In Stock
              </span>
            </div>

            <div className="my-auto py-4 flex items-center justify-center">
              <img
                src={p.image}
                alt={p.name}
                className="max-h-60 max-w-full object-contain filter drop-shadow-xl"
              />
            </div>

            <div className="w-full mt-4 pt-3 border-t border-[#143828] text-center space-y-1">
              <div className="text-[11px] text-[#789284]">Wholesale Packaging:</div>
              <div className="text-xs font-bold text-white">
                Master Carton of {p.masterCartonSize} Units (Factory Sealed)
              </div>
              <div className="text-[10px] text-emerald-400 font-semibold flex items-center justify-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                <span>100% Clean IMEI Scan Included</span>
              </div>
            </div>
          </div>

          {/* Right Column: Specifications & Pricing Calculator */}
          <div className="md:col-span-7 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-[#E5C07B] text-[#05130E] uppercase">
                  {p.condition}
                </span>
                <span className="text-xs text-[#A3B8AD]">SKU: {p.id.toUpperCase()}</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-extrabold text-white font-heading">
                {p.name}
              </h2>
              <p className="text-xs text-[#A3B8AD] mt-0.5">{p.tagline}</p>

              {/* Wholesale Pricing Tiers Matrix */}
              <div className="mt-3.5 bg-[#05130E] border border-[#143828] rounded-xl p-3.5 space-y-2">
                <div className="flex items-center justify-between text-[11px] uppercase font-black text-[#E5C07B] pb-1 border-b border-[#143828]">
                  <span>Order Volume Bracket</span>
                  <span>Unit Wholesale Rate</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#A3B8AD]">Tier 1 (MOQ {p.moq}–24 pcs):</span>
                  <strong className="text-white text-sm">{formatPrice(p.tier1Price)}</strong>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#A3B8AD]">Tier 2 (25–99 pcs):</span>
                  <strong className="text-[#E5C07B] text-sm">{formatPrice(p.tier2Price)}</strong>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#A3B8AD]">Master Lot (100+ pcs):</span>
                  <strong className="text-[#F3E5AB] text-sm font-black">{formatPrice(p.tier3Price)}</strong>
                </div>
                <div className="pt-2 border-t border-[#143828] flex items-center justify-between text-[11px]">
                  <span className="text-[#789284]">Suggested MSRP: {formatPrice(p.suggestedMSRP)}</span>
                  <span className="font-black text-emerald-400">+{retailerMargin}% Dealer Margin</span>
                </div>
              </div>

              {/* Technical Spec List */}
              <div className="mt-3 space-y-1.5 text-xs">
                <div className="bg-[#05130E] rounded-lg px-3 py-1.5 flex justify-between border border-[#143828]/60">
                  <span className="text-[#A3B8AD]">Display:</span>
                  <span className="font-semibold text-white text-right">{p.specs.display}</span>
                </div>
                <div className="bg-[#05130E] rounded-lg px-3 py-1.5 flex justify-between border border-[#143828]/60">
                  <span className="text-[#A3B8AD]">Processor:</span>
                  <span className="font-semibold text-white text-right">{p.specs.processor}</span>
                </div>
                <div className="bg-[#05130E] rounded-lg px-3 py-1.5 flex justify-between border border-[#143828]/60">
                  <span className="text-[#A3B8AD]">Camera:</span>
                  <span className="font-semibold text-white text-right">{p.specs.camera}</span>
                </div>
                <div className="bg-[#05130E] rounded-lg px-3 py-1.5 flex justify-between border border-[#143828]/60">
                  <span className="text-[#A3B8AD]">Warranty:</span>
                  <span className="font-semibold text-[#E5C07B] text-right">{p.warranty}</span>
                </div>
                <div className="bg-[#05130E] rounded-lg px-3 py-1.5 flex justify-between border border-[#143828]/60">
                  <span className="text-[#A3B8AD]">IMEI Verification:</span>
                  <span className="font-semibold text-emerald-400 text-right">{p.specs.imeiStatus}</span>
                </div>
              </div>

              {/* Quantity Picker & Total */}
              <div className="mt-3.5 pt-3 border-t border-[#143828] flex items-center justify-between">
                <div>
                  <span className="block text-xs uppercase font-extrabold text-[#A3B8AD]">
                    Select Order Units:
                  </span>
                  <div className="flex items-center gap-2 mt-1">
                    <button
                      onClick={() => setQuantity((q) => Math.max(p.moq, q - 5))}
                      className="w-8 h-8 rounded-lg bg-[#05130E] border border-[#143828] text-white font-bold hover:border-[#E5C07B] transition-colors"
                    >
                      -
                    </button>
                    <span className="w-12 text-center font-black text-sm text-[#E5C07B]">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity((q) => q + 5)}
                      className="w-8 h-8 rounded-lg bg-[#05130E] border border-[#143828] text-white font-bold hover:border-[#E5C07B] transition-colors"
                    >
                      +
                    </button>
                    <span className="text-xs text-[#789284] ml-1">(MOQ: {p.moq})</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="block text-xs uppercase font-extrabold text-[#A3B8AD]">
                    Total Order Value:
                  </span>
                  <span className="text-xl font-black text-white">
                    {formatPrice(totalAmount)}
                  </span>
                  <span className="block text-[10px] text-emerald-400 font-bold">
                    Est. Profit: +{formatPrice(totalProfit)}
                  </span>
                </div>
              </div>
            </div>

            {/* Exchange Option Banner (Amazon/Flipkart Style) */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setSelectedProductForModal(null);
                  setIsExchangeModalOpen(true);
                }}
                className="w-full py-2 px-3 bg-[#05130E] border border-[#E5C07B]/40 hover:border-[#E5C07B] rounded-xl text-xs text-[#F3E5AB] font-bold flex items-center justify-between transition-all group cursor-pointer"
              >
                <span className="flex items-center gap-1.5">
                  <Repeat className="w-3.5 h-3.5 text-[#E5C07B] group-hover:rotate-180 transition-transform duration-300" />
                  <span>Buy With B2B Exchange (Trade-In Old Lot)</span>
                </span>
                <span className="text-[10px] text-emerald-400 font-extrabold bg-emerald-950/60 px-2 py-0.5 rounded">
                  Save up to 70%
                </span>
              </button>
            </div>

            {/* Modal Action Buttons: Add To Cart & Buy Now */}
            <div className="grid grid-cols-2 gap-3 pt-2 border-t border-[#143828]">
              <button
                onClick={handleAddToRfq}
                className="py-3 px-4 bg-[#05130E] border border-[#E5C07B]/40 hover:border-[#E5C07B] text-white font-bold rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
              >
                <ShoppingBag className="w-4 h-4 text-[#E5C07B]" />
                <span>Add To Cart ({quantity})</span>
              </button>

              <button
                onClick={handleWhatsAppInquiry}
                className="py-3 px-4 bg-[#25D366] text-black font-black rounded-xl text-xs sm:text-sm hover:bg-[#20ba59] flex items-center justify-center gap-2 transition-all shadow-md shadow-[#25D366]/20 active:scale-[0.98]"
              >
                <Zap className="w-4 h-4 fill-current" />
                <span>Buy Wholesale</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
