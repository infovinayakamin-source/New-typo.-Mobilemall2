import React, { useState, useMemo } from 'react';
import { catalogProducts } from '../data/catalogData';
import { useBusiness } from '../context/BusinessContext';
import {
  Calculator,
  TrendingUp,
  DollarSign,
  Package,
  Layers,
  ShoppingBag,
  MessageCircle,
  Sparkles,
  ArrowRight,
  Boxes,
  MapPin,
  CheckCircle2
} from 'lucide-react';

export default function WholesaleCalculator() {
  const { addToRfq, generateWhatsAppUrl, formatPrice, config } = useBusiness();

  const [selectedProductId, setSelectedProductId] = useState(catalogProducts[0]?.id || '');
  const [orderQuantity, setOrderQuantity] = useState(20);

  const product = useMemo(() => {
    return catalogProducts.find((p) => p.id === selectedProductId) || catalogProducts[0];
  }, [selectedProductId]);

  const calculations = useMemo(() => {
    if (!product) return null;

    let unitRate = product.tier1Price;
    let tierName = 'Tier 1 (Sample MOQ 5-24)';
    let tierDiscount = 0;

    if (orderQuantity >= 100) {
      unitRate = product.tier3Price;
      tierName = 'Master Lot Tier 3 (100+ units)';
      tierDiscount = Math.round(((product.tier1Price - product.tier3Price) / product.tier1Price) * 100);
    } else if (orderQuantity >= 25) {
      unitRate = product.tier2Price;
      tierName = 'Volume Tier 2 (25-99 units)';
      tierDiscount = Math.round(((product.tier1Price - product.tier2Price) / product.tier1Price) * 100);
    }

    const totalWholesaleCost = unitRate * orderQuantity;
    const totalRetailTurnover = product.suggestedMSRP * orderQuantity;
    const grossProfit = totalRetailTurnover - totalWholesaleCost;
    const marginPercent = Math.round((grossProfit / totalWholesaleCost) * 100);
    const cartonsCount = (orderQuantity / product.masterCartonSize).toFixed(1);

    return {
      unitRate,
      tierName,
      tierDiscount,
      totalWholesaleCost,
      totalRetailTurnover,
      grossProfit,
      marginPercent,
      cartonsCount
    };
  }, [product, orderQuantity]);

  const handleWhatsAppCalculation = () => {
    if (!calculations || !product) return;
    const msg = `*OFFICIAL WHOLESALE PURCHASE ORDER ESTIMATE — MOBILE MALL*\n\n` +
      `*Model:* ${product.name} (${product.storage})\n` +
      `*Order Volume:* ${orderQuantity} units (~${calculations.cartonsCount} Master Cartons)\n` +
      `*Wholesale Tier:* ${calculations.tierName}\n` +
      `*Wholesale Rate / Piece:* ${formatPrice(calculations.unitRate)}\n` +
      `*Total Wholesale Procurement Capital:* ${formatPrice(calculations.totalWholesaleCost)}\n` +
      `*Projected Retailer Gross Margin:* +${formatPrice(calculations.grossProfit)} (+${calculations.marginPercent}%)\n` +
      `*Dispatch Center:* ${config.warehouseAddress}, ${config.cityStateCountry}\n\n` +
      `Please lock wholesale rate and dispatch proforma tax invoice.`;
    window.open(generateWhatsAppUrl(msg), '_blank');
  };

  const handleAddCalculatedToRfq = () => {
    if (!product) return;
    addToRfq(product, orderQuantity);
  };

  return (
    <section id="calculator" className="relative overflow-hidden bg-gradient-to-b from-[#071A13] via-[#05130E] to-[#040D09] text-white py-20 px-4 sm:px-6 lg:px-8 border-b border-[#143527]">
      
      {/* Giant Background Watermark */}
      <div className="section-watermark">
        CALCULATOR
      </div>

      <div className="max-w-5xl mx-auto relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E5C07B]/15 border border-[#E5C07B]/30 text-[#F3E5AB] text-xs font-black uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5 text-[#E5C07B]" />
            <span>B2B Wholesale Procurement Simulator</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-heading">
            Calculate Your <span className="gold-gradient-text">Wholesale Carton Margins</span>
          </h2>

          <p className="text-xs sm:text-sm text-[#A3B8AD]">
            Simulate your wholesale purchase orders by cartons or loose units. Real-time margin spreads, tax compliance, and volume discounts.
          </p>
        </div>

        {/* Calculator Interactive Box */}
        <div className="max-w-4xl mx-auto emerald-card rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#143828] shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Controls */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <label className="block text-xs uppercase font-extrabold tracking-wider text-[#A3B8AD] mb-2">
                  1. Select Wholesale Model:
                </label>
                <select
                  value={selectedProductId}
                  onChange={(e) => setSelectedProductId(e.target.value)}
                  className="w-full bg-[#071A13] text-white text-xs sm:text-sm px-4 py-3 rounded-xl border border-[#143828] focus:outline-none focus:border-[#E5C07B] font-medium"
                >
                  {catalogProducts.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name} ({p.storage}) — Master Box of {p.masterCartonSize} pcs
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs uppercase font-extrabold tracking-wider text-[#A3B8AD]">
                    2. Order Volume ({orderQuantity} Units):
                  </label>
                  <span className="text-sm font-black text-[#E5C07B] bg-[#071A13] border border-[#143828] px-2.5 py-1 rounded-lg">
                    ~{calculations?.cartonsCount} Cartons
                  </span>
                </div>

                <input
                  type="range"
                  min="5"
                  max="200"
                  step="5"
                  value={orderQuantity}
                  onChange={(e) => setOrderQuantity(Number(e.target.value))}
                  className="w-full h-2 bg-[#071A13] rounded-lg appearance-none cursor-pointer accent-[#E5C07B]"
                />

                <div className="flex items-center justify-between text-[11px] text-[#789284] mt-1 font-semibold">
                  <span>MOQ (5 pcs)</span>
                  <span>1 Carton (20 pcs)</span>
                  <span>Master Lot (100+ pcs)</span>
                </div>
              </div>

              {/* Carton Quick Presets */}
              <div>
                <label className="block text-[11px] text-[#789284] mb-1.5 uppercase font-extrabold">
                  Carton Presets:
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: 'Sample (5 pcs)', qty: 5 },
                    { label: '1 Carton (20 pcs)', qty: 20 },
                    { label: '2 Cartons (40 pcs)', qty: 40 },
                    { label: '5 Cartons (100 pcs)', qty: 100 },
                    { label: '10 Cartons (200 pcs)', qty: 200 }
                  ].map((preset) => (
                    <button
                      key={preset.qty}
                      type="button"
                      onClick={() => setOrderQuantity(preset.qty)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        orderQuantity === preset.qty
                          ? 'bg-[#E5C07B] text-[#05130E] shadow-md font-black'
                          : 'bg-[#071A13] text-[#A3B8AD] border border-[#143828] hover:text-white hover:border-[#E5C07B]/50'
                      }`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>

              {calculations && (
                <div className="bg-[#071A13] border border-[#143828] rounded-xl p-3.5 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <Boxes className="w-4 h-4 text-[#E5C07B]" />
                    <span className="text-white font-bold">{calculations.tierName}</span>
                  </div>
                  {calculations.tierDiscount > 0 ? (
                    <span className="px-2 py-0.5 rounded bg-[#E5C07B]/20 text-[#F3E5AB] font-black text-[11px]">
                      Saved {calculations.tierDiscount}% vs Tier 1
                    </span>
                  ) : (
                    <span className="text-[#789284] text-[11px] font-semibold">Standard Wholesale MOQ</span>
                  )}
                </div>
              )}
            </div>

            {/* Right Results Card */}
            <div className="lg:col-span-5 bg-gradient-to-b from-[#071A13] to-[#040D09] border border-[#E5C07B]/30 rounded-2xl p-6 flex flex-col justify-between shadow-xl">
              {calculations && (
                <div className="space-y-4">
                  <div className="border-b border-[#143828] pb-3">
                    <span className="text-[11px] uppercase tracking-wider text-[#A3B8AD] font-bold">
                      Wholesale Unit Rate
                    </span>
                    <div className="text-2xl sm:text-3xl font-extrabold text-white mt-0.5 font-heading">
                      {formatPrice(calculations.unitRate)}{' '}
                      <span className="text-xs font-normal text-[#A3B8AD]">/ unit</span>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between text-[#A3B8AD]">
                      <span>Total Wholesale Capital:</span>
                      <strong className="text-white text-sm font-extrabold">
                        {formatPrice(calculations.totalWholesaleCost)}
                      </strong>
                    </div>

                    <div className="flex items-center justify-between text-[#A3B8AD]">
                      <span>Estimated Retail Revenue (MSRP):</span>
                      <span className="text-white font-semibold">
                        {formatPrice(calculations.totalRetailTurnover)}
                      </span>
                    </div>

                    <div className="pt-2 border-t border-[#143828] flex items-center justify-between">
                      <span className="text-[#E5C07B] font-bold">Net Dealer Gross Profit:</span>
                      <strong className="text-emerald-400 font-extrabold text-base">
                        +{formatPrice(calculations.grossProfit)}
                      </strong>
                    </div>

                    <div className="flex items-center justify-between text-[11px] bg-emerald-950/60 border border-emerald-800/50 rounded-lg p-2.5 text-emerald-300">
                      <span className="flex items-center gap-1 font-semibold">
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span>Protected Dealer Margin:</span>
                      </span>
                      <strong className="text-sm font-black">+{calculations.marginPercent}% ROI</strong>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-6 pt-4 border-t border-[#143828] space-y-2.5">
                <button
                  onClick={handleWhatsAppCalculation}
                  className="w-full py-3 bg-[#25D366] text-black font-extrabold rounded-xl text-xs sm:text-sm hover:bg-[#20ba59] transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Lock Wholesale Rate on WhatsApp</span>
                </button>

                <button
                  onClick={handleAddCalculatedToRfq}
                  className="w-full py-2.5 bg-[#071A13] border border-[#E5C07B]/40 text-white hover:border-[#E5C07B] font-bold rounded-xl text-xs flex items-center justify-center gap-2 transition-all"
                >
                  <ShoppingBag className="w-4 h-4 text-[#E5C07B]" />
                  <span>Add {orderQuantity} Units to Wholesale RFQ</span>
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
