import React from 'react';
import { useBusiness } from '../context/BusinessContext';
import {
  Calendar,
  ArrowRight,
  Sparkles,
  MessageCircle,
  TrendingUp,
  FileSpreadsheet
} from 'lucide-react';

const newsItems = [
  {
    category: 'Fresh Intake Allocation',
    title: 'Apple iPhone 16 Pro Max 256GB Desert Titanium — Master Cartons Arrived',
    snippet: 'Verified Indian & Global factory sealed batches received at wholesale dispatch hub. Priority reservation active for registered B2B dealers.',
    date: 'Today, 09:30 AM',
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80'
  },
  {
    category: 'Wholesale Market Index',
    title: 'Samsung Galaxy S24 Ultra & Fold6 Tier-3 Price Adjustment Bulletin',
    snippet: 'Special volume margins unlocked for 50+ carton orders. Input tax credit proforma updated with immediate dispatch availability.',
    date: 'Yesterday, 04:15 PM',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=80'
  }
];

export default function NewsSection() {
  const { generateWhatsAppUrl, setIsStockSheetModalOpen } = useBusiness();

  const handleWhatsAppNews = (title) => {
    const msg = `Hello Mobile Mall Wholesale Desk. I saw the market update: *${title}*. Please send proforma quote.`;
    window.open(generateWhatsAppUrl(msg), '_blank');
  };

  return (
    <section className="relative overflow-hidden bg-[#05130E] text-white py-20 px-4 sm:px-6 lg:px-8 border-b border-[#143527]">
      
      {/* Giant Background Watermark (matching reference: "N E W S") */}
      <div className="section-watermark">
        NEWS
      </div>

      <div className="max-w-5xl mx-auto relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E5C07B]/15 border border-[#E5C07B]/30 text-[#F3E5AB] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#E5C07B]" />
            <span>Market Intelligence</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            News & Market Insights
          </h2>

          <p className="text-xs sm:text-sm text-[#A3B8AD] max-w-xl mx-auto">
            Real-time inventory arrivals, price index updates, and master carton allocation alerts.
          </p>
        </div>

        {/* 2-Card Grid (matching the two cards in the reference image) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {newsItems.map((item, idx) => (
            <div
              key={idx}
              className="emerald-card rounded-2xl overflow-hidden border border-[#143828] hover:border-[#E5C07B]/50 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-[#071A13]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#05130E]/90 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-[#143828] text-[10px] font-bold text-[#E5C07B] uppercase">
                    {item.category}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-[#05130E]/80 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] text-[#A3B8AD]">
                    {item.date}
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="text-sm sm:text-base font-extrabold text-white group-hover:text-[#F3E5AB] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#A3B8AD] leading-relaxed line-clamp-2">
                    {item.snippet}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-2 border-t border-[#143527] flex items-center justify-between">
                <button
                  onClick={() => handleWhatsAppNews(item.title)}
                  className="text-xs font-bold text-[#E5C07B] hover:text-[#F3E5AB] flex items-center gap-1"
                >
                  <span>Request Allocation Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <span className="text-[10px] text-emerald-400 font-semibold">In Stock</span>
              </div>
            </div>
          ))}
        </div>

        {/* "Meet With Us" / B2B Callout Strip (matching reference callout strip) */}
        <div className="emerald-card rounded-2xl p-6 sm:p-7 border border-[#E5C07B]/50 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E5C07B] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Commercial Access</span>
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-white">
              Connect With Our Wholesale Desk
            </h3>
            <p className="text-xs text-[#A3B8AD]">
              Speak directly with a Key Account Representative to lock in priority bulk allocations and daily morning rate cards.
            </p>
          </div>

          <div className="flex-shrink-0">
            <a
              href={generateWhatsAppUrl("Hello Mobile Mall Wholesale Desk. I would like to discuss our retail store wholesale purchasing requirements.")}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-gradient-btn px-6 py-3 rounded-xl text-xs sm:text-sm font-bold shadow-lg flex items-center gap-2 whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Connect Now →</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
