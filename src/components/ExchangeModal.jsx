import React, { useState, useMemo } from 'react';
import { useBusiness } from '../context/BusinessContext';
import {
  X,
  Repeat,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  MessageCircle,
  Building2,
  CheckCircle2,
  Layers,
  Smartphone,
  Check
} from 'lucide-react';

const popularExchangeDevices = [
  { id: 'ip15pm', name: 'iPhone 15 Pro Max (256GB)', baseTradeInUsd: 780 },
  { id: 'ip15p', name: 'iPhone 15 Pro (128GB)', baseTradeInUsd: 650 },
  { id: 'ip14pm', name: 'iPhone 14 Pro Max (128GB)', baseTradeInUsd: 540 },
  { id: 'ip13pm', name: 'iPhone 13 Pro Max (128GB)', baseTradeInUsd: 420 },
  { id: 's23u', name: 'Galaxy S23 Ultra 5G (256GB)', baseTradeInUsd: 510 },
  { id: 's22u', name: 'Galaxy S22 Ultra 5G (256GB)', baseTradeInUsd: 360 },
  { id: 'op11', name: 'OnePlus 11 5G (256GB)', baseTradeInUsd: 310 },
  { id: 'ipadpro_m2', name: 'iPad Pro 12.9" M2 (128GB)', baseTradeInUsd: 520 },
];

export default function ExchangeModal() {
  const {
    isExchangeModalOpen,
    setIsExchangeModalOpen,
    generateWhatsAppUrl,
    formatPrice,
    config
  } = useBusiness();

  const [selectedOldDevice, setSelectedOldDevice] = useState(popularExchangeDevices[0].id);
  const [condition, setCondition] = useState('Grade A+ (Flawless, Screen Clean)');
  const [exchangeQty, setExchangeQty] = useState(5);
  const [targetModel, setTargetModel] = useState('iPhone 16 Pro Max (256GB Sealed Master Carton)');
  const [retailerName, setRetailerName] = useState('');
  const [city, setCity] = useState('');

  if (!isExchangeModalOpen) return null;

  const currentOldDevice = popularExchangeDevices.find((d) => d.id === selectedOldDevice) || popularExchangeDevices[0];

  const conditionMultiplier = useMemo(() => {
    if (condition.includes('Grade A+')) return 1.0;
    if (condition.includes('Grade B')) return 0.85;
    return 0.70;
  }, [condition]);

  const unitTradeValue = Math.round(currentOldDevice.baseTradeInUsd * conditionMultiplier);
  const totalTradeCredit = unitTradeValue * exchangeQty;

  const handleWhatsAppExchange = () => {
    const msg = `*OFFICIAL B2B MOBILE EXCHANGE & TRADE-IN REQUEST — MOBILE MALL*\n\n` +
      `*Trade Desk:* +91 ${config.wholesaleDeskPhone || '98255 55005'}\n` +
      `*Physical Hub:* ${config.warehouseAddress}, ${config.cityStateCountry}\n\n` +
      (retailerName ? `*Store / Business:* ${retailerName}\n` : '') +
      (city ? `*City:* ${city}\n` : '') +
      `*OLD TRADE-IN LOT:*\n` +
      `- Model: ${currentOldDevice.name}\n` +
      `- Quantity: ${exchangeQty} units\n` +
      `- Physical Condition: ${condition}\n` +
      `- Estimated Trade Value / Piece: ${formatPrice(unitTradeValue)}\n` +
      `- Total Estimated Exchange Credit: ${formatPrice(totalTradeCredit)}\n\n` +
      `*DESIRED NEW WHOLESALE LOT:*\n` +
      `- Upgrading to: ${targetModel}\n\n` +
      `Please provide formal inspection intake slip and confirm final proforma trade credit value.`;

    window.open(generateWhatsAppUrl(msg), '_blank');
    setIsExchangeModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#071A13] border border-[#143527] rounded-3xl max-w-2xl w-full text-white overflow-hidden shadow-2xl relative my-6">
        
        {/* Close Button */}
        <button
          onClick={() => setIsExchangeModalOpen(false)}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#05130E] text-[#A3B8AD] hover:text-white flex items-center justify-center border border-[#143828] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="p-6 bg-gradient-to-r from-[#05130E] via-[#071A13] to-[#0A2219] border-b border-[#143527]">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5C07B]/15 text-[#E5C07B] text-xs font-black uppercase mb-2">
            <Repeat className="w-3.5 h-3.5" />
            <span>B2B Wholesale Exchange Program</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-white font-heading">
            Exchange Old Mobiles for Fresh Master Cartons
          </h2>
          <p className="text-xs text-[#A3B8AD] mt-1">
            Trade in retail trade-in lots or pre-owned inventory against sealed OEM flagships at our Relief Rd, Ahmedabad Hub.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5">
          
          {/* Step 1: Select Old Device */}
          <div className="space-y-2">
            <label className="block text-xs font-extrabold text-[#E5C07B] uppercase tracking-wider">
              1. Select Old Device Lot Model:
            </label>
            <select
              value={selectedOldDevice}
              onChange={(e) => setSelectedOldDevice(e.target.value)}
              className="w-full bg-[#05130E] border border-[#143828] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#E5C07B]"
            >
              {popularExchangeDevices.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.name} (~{formatPrice(d.baseTradeInUsd)} / pc)
                </option>
              ))}
            </select>
          </div>

          {/* Step 2: Condition & Quantity */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-extrabold text-[#A3B8AD] uppercase mb-1.5">
                2. Device Condition:
              </label>
              <select
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
                className="w-full bg-[#05130E] border border-[#143828] rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#E5C07B]"
              >
                <option value="Grade A+ (Flawless, Screen Clean)">Grade A+ (Flawless, Pristine)</option>
                <option value="Grade B (Minor Signs of Wear)">Grade B (Minor Wear, 100% Working)</option>
                <option value="Grade C (Visible Scratches, Working)">Grade C (Visible Marks, Working)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-extrabold text-[#A3B8AD] uppercase mb-1.5">
                3. Lot Quantity ({exchangeQty} Units):
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min="1"
                  max="500"
                  value={exchangeQty}
                  onChange={(e) => setExchangeQty(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-full bg-[#05130E] border border-[#143828] rounded-xl px-3 py-2 text-xs text-white font-bold focus:outline-none focus:border-[#E5C07B]"
                />
                <span className="text-xs text-[#789284] whitespace-nowrap">Units</span>
              </div>
            </div>
          </div>

          {/* Trade-In Credit Valuation Display */}
          <div className="bg-[#05130E] border border-[#E5C07B]/40 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#789284] block">
                Estimated Trade-In Valuation
              </span>
              <div className="text-xl sm:text-2xl font-black text-[#E5C07B]">
                {formatPrice(totalTradeCredit)}
              </div>
              <span className="text-[10px] text-[#A3B8AD] block">
                ({formatPrice(unitTradeValue)} / piece × {exchangeQty} pieces)
              </span>
            </div>

            <div className="sm:text-right">
              <span className="text-[11px] text-emerald-400 font-bold block flex items-center sm:justify-end gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Instant Proforma Credit</span>
              </span>
              <span className="text-[10px] text-[#789284] block">
                Offset 100% against new master cartons
              </span>
            </div>
          </div>

          {/* Desired Upgrade Model */}
          <div>
            <label className="block text-xs font-extrabold text-[#A3B8AD] uppercase mb-1.5">
              4. Desired Upgrade Master Carton:
            </label>
            <input
              type="text"
              value={targetModel}
              onChange={(e) => setTargetModel(e.target.value)}
              placeholder="e.g. iPhone 16 Pro Max 256GB Master Carton"
              className="w-full bg-[#05130E] border border-[#143828] rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#E5C07B]"
            />
          </div>

          {/* Retailer Info */}
          <div className="grid grid-cols-2 gap-3 pt-1">
            <div>
              <label className="block text-[11px] text-[#A3B8AD] mb-1">
                Shop / Store Name:
              </label>
              <input
                type="text"
                value={retailerName}
                onChange={(e) => setRetailerName(e.target.value)}
                placeholder="e.g. City Mobile World"
                className="w-full bg-[#05130E] border border-[#143828] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#E5C07B]"
              />
            </div>
            <div>
              <label className="block text-[11px] text-[#A3B8AD] mb-1">
                City, State:
              </label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Ahmedabad, Surat, etc."
                className="w-full bg-[#05130E] border border-[#143828] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#E5C07B]"
              />
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <button
              onClick={handleWhatsAppExchange}
              className="w-full py-3 bg-[#25D366] text-black font-black rounded-xl text-xs sm:text-sm hover:bg-[#20ba59] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20 active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Submit B2B Exchange Enquiry on WhatsApp</span>
            </button>
            <p className="text-[10px] text-[#789284] text-center mt-2">
              *Physical inspection completed at Murtimant Complex, Relief Rd, Ahmedabad. Clean IMEI guaranteed.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
