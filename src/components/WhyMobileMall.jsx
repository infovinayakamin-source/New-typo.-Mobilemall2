import React from 'react';
import { wholesaleBenefits } from '../data/catalogData';
import {
  ShieldCheck,
  Layers,
  Truck,
  FileText,
  Headphones,
  RotateCcw,
  Check,
  X,
  Award,
  Sparkles
} from 'lucide-react';

const iconMap = {
  ShieldCheck,
  Layers,
  Truck,
  FileText,
  Headphones,
  RotateCcw
};

export default function WhyMobileMall() {
  return (
    <section id="why-us" className="bg-[#141414] text-white py-16 sm:py-20 border-b border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#080808] border border-[#D4AF37]/30 text-xs font-bold text-[#F4E1A1] uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>The Wholesale Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Why Electronics Retailers Partner with <span className="gold-gradient-text">Mobile Mall</span>
          </h2>
          <p className="text-sm sm:text-base text-[#9B9B9B] mt-2">
            Built from the ground up for mobile shop owners, resellers, and corporate buyers who demand reliability, legitimate sourcing, and protected margins.
          </p>
        </div>

        {/* 6 Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {wholesaleBenefits.map((b, idx) => {
            const IconComponent = iconMap[b.icon] || ShieldCheck;
            return (
              <div
                key={idx}
                className="luxury-card p-6 rounded-2xl flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#080808] border border-[#D4AF37]/30 group-hover:border-[#D4AF37] flex items-center justify-center text-[#D4AF37] mb-4 transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#F4E1A1] transition-colors">
                    {b.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#9B9B9B] leading-relaxed">
                    {b.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#2A2A2A] flex items-center justify-between text-[11px] text-[#D4AF37] font-semibold">
                  <span>Guaranteed SLA</span>
                  <span>Mobile Mall Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Table: Mobile Mall vs Grey Market */}
        <div className="bg-[#080808] border border-[#2A2A2A] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Direct Wholesale vs. Unregulated Grey Channels
            </h3>
            <p className="text-xs sm:text-sm text-[#9B9B9B] mt-1">
              Protect your retail store reputation with certified authentic inventory and documented warranty backing.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#2A2A2A] text-xs uppercase tracking-wider text-[#9B9B9B]">
                  <th className="py-3 px-4 font-bold">Wholesale Parameter</th>
                  <th className="py-3 px-4 font-bold text-[#D4AF37]">Mobile Mall Wholesale</th>
                  <th className="py-3 px-4 font-bold text-[#777777]">Typical Grey Market Brokers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2A2A2A]/50 text-xs sm:text-sm">
                <tr>
                  <td className="py-3.5 px-4 font-medium text-white">IMEI Whitelist & Authenticity</td>
                  <td className="py-3.5 px-4 text-[#F4E1A1] font-semibold flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>100% Genuine Brand IMEI, Zero Blacklist</span>
                  </td>
                  <td className="py-3.5 px-4 text-[#777777] flex items-center gap-1.5">
                    <X className="w-4 h-4 text-rose-500" />
                    <span>Risky carrier-locked or disputed units</span>
                  </td>
                </tr>

                <tr>
                  <td className="py-3.5 px-4 font-medium text-white">Tax Invoice & Input Tax Credit</td>
                  <td className="py-3.5 px-4 text-[#F4E1A1] font-semibold flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Official Commercial GST Proforma Provided</span>
                  </td>
                  <td className="py-3.5 px-4 text-[#777777] flex items-center gap-1.5">
                    <X className="w-4 h-4 text-rose-500" />
                    <span>Cash-only, zero tax documentation</span>
                  </td>
                </tr>

                <tr>
                  <td className="py-3.5 px-4 font-medium text-white">Minimum Order Quantity (MOQ)</td>
                  <td className="py-3.5 px-4 text-[#F4E1A1] font-semibold flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Flexible 5-Unit MOQ (Mix models freely)</span>
                  </td>
                  <td className="py-3.5 px-4 text-[#777777] flex items-center gap-1.5">
                    <X className="w-4 h-4 text-rose-500" />
                    <span>Demands 50+ rigid cartons upfront</span>
                  </td>
                </tr>

                <tr>
                  <td className="py-3.5 px-4 font-medium text-white">Transit Logistics & Insurance</td>
                  <td className="py-3.5 px-4 text-[#F4E1A1] font-semibold flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Same-day insured air courier with live tracking</span>
                  </td>
                  <td className="py-3.5 px-4 text-[#777777] flex items-center gap-1.5">
                    <X className="w-4 h-4 text-rose-500" />
                    <span>Uninsured transport, buyer assumes loss</span>
                  </td>
                </tr>

                <tr>
                  <td className="py-3.5 px-4 font-medium text-white">DOA & Replacement Warranty</td>
                  <td className="py-3.5 px-4 text-[#F4E1A1] font-semibold flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Documented replacement SLA & OEM warranty</span>
                  </td>
                  <td className="py-3.5 px-4 text-[#777777] flex items-center gap-1.5">
                    <X className="w-4 h-4 text-rose-500" />
                    <span>"Sold as is", zero dealer recourse</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
