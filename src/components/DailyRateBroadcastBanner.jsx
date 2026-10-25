import React from 'react';
import { useBusiness } from '../context/BusinessContext';
import { MessageCircle, FileSpreadsheet, Bell, Sparkles, CheckCircle2 } from 'lucide-react';

export default function DailyRateBroadcastBanner() {
  const { generateWhatsAppUrl, setIsStockSheetModalOpen } = useBusiness();

  const handleSubscribe = () => {
    const msg = `Hello Mobile Mall Wholesale Desk. Please subscribe our retail store to your Daily 09:30 AM WhatsApp Wholesale Rate Card & Stock Broadcast.`;
    window.open(generateWhatsAppUrl(msg), '_blank');
  };

  return (
    <section id="broadcast" className="bg-[#0A2219] border-y border-[#143828] py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
        
        {/* Left: Headline & Value Prop */}
        <div className="space-y-2 text-center lg:text-left max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#05130E] border border-[#E5C07B]/40 text-[#E5C07B] text-[11px] font-extrabold uppercase tracking-wider">
            <Bell className="w-3.5 h-3.5 text-[#E5C07B] animate-bounce" />
            <span>Daily Retailer Service • Delivered Every Morning at 09:30 AM</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight font-heading">
            Get Today's <span className="gold-gradient-text">Wholesale Rate Card</span> Delivered to Your WhatsApp
          </h2>

          <p className="text-xs sm:text-sm text-[#C4D6CD] leading-relaxed">
            Receive morning stock intake updates, fresh master carton arrivals, and locked tier-3 volume prices directly on WhatsApp before the open market opens.
          </p>
        </div>

        {/* Right: Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto flex-shrink-0">
          <button
            onClick={handleSubscribe}
            className="w-full sm:w-auto px-6 py-3.5 bg-[#25D366] text-black font-extrabold rounded-xl text-xs sm:text-sm hover:bg-[#20ba59] transition-all flex items-center justify-center gap-2 shadow-lg"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Subscribe on WhatsApp (Free)</span>
          </button>

          <button
            onClick={() => setIsStockSheetModalOpen(true)}
            className="w-full sm:w-auto px-5 py-3.5 bg-[#05130E] border border-[#E5C07B]/50 text-[#F3E5AB] font-bold rounded-xl text-xs sm:text-sm hover:border-[#E5C07B] transition-all flex items-center justify-center gap-2"
          >
            <FileSpreadsheet className="w-4 h-4 text-[#E5C07B]" />
            <span>Download CSV Rate Sheet</span>
          </button>
        </div>

      </div>
    </section>
  );
}
