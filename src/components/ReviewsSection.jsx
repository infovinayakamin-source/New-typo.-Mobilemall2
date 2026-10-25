import React from 'react';
import { Star, CheckCircle2, Sparkles } from 'lucide-react';

const reviews = [
  {
    name: 'Rajesh Sharma',
    store: 'Sharma Electronics & Mobile Care',
    location: 'Jaipur, Rajasthan',
    rating: 5,
    text: 'Mobile Mall is our primary wholesale supplier for iPhone 16 and Samsung S24 lots. Clean IMEI whitelist on every unit, prompt same-day air freight, and transparent tiered pricing.',
    tag: 'Verified Dealer'
  },
  {
    name: 'Karthik Raman',
    store: 'Supreme Gadgets Retail Chain',
    location: 'Bengaluru, Karnataka',
    rating: 5,
    text: 'Ordering master cartons used to be risky with brokers. With Mobile Mall, we get official GST invoices, input tax credit, and zero dead-on-arrival disputes. Exceptional partner.',
    tag: 'Verified Partner'
  },
  {
    name: 'Anil Mehta',
    store: 'Mehta Digital Hub',
    location: 'Ahmedabad, Gujarat',
    rating: 5,
    text: 'Their iPad 10th Gen and tablet allocations keep our retail counters stocked. The 5-unit sample MOQ allowed us to test their speed, and now we order 100+ master units monthly.',
    tag: 'Verified Dealer'
  }
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="relative overflow-hidden bg-gradient-to-b from-[#040D09] to-[#071A13] text-white py-20 px-4 sm:px-6 lg:px-8 border-b border-[#143527]">
      
      {/* Giant Background Watermark (matching reference: "R E V I E W S") */}
      <div className="section-watermark">
        REVIEWS
      </div>

      <div className="max-w-6xl mx-auto relative z-10 space-y-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E5C07B]/15 border border-[#E5C07B]/30 text-[#F3E5AB] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#E5C07B]" />
            <span>Retailer Trust Index</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Trusted by 1,400+ Retailers Worldwide
          </h2>

          <p className="text-xs sm:text-sm text-[#A3B8AD] max-w-xl mx-auto">
            Verified testimonials from independent electronics shop proprietors, chain managers, and mobile resellers who rely on Mobile Mall.
          </p>
        </div>

        {/* 3-Column Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="emerald-card rounded-2xl p-6 flex flex-col justify-between border border-[#143828] hover:border-[#E5C07B]/50 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-[#E5C07B]">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current text-[#D4AF37]" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/70 border border-emerald-800/50 px-2 py-0.5 rounded-full">
                    {r.tag}
                  </span>
                </div>

                <p className="text-xs text-[#C4D6CD] leading-relaxed italic mb-6">
                  "{r.text}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-[#143527]">
                <div className="w-9 h-9 rounded-full bg-[#071A13] border border-[#E5C07B]/40 text-[#E5C07B] font-bold text-xs flex items-center justify-center">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">{r.name}</h4>
                  <p className="text-[10px] text-[#A3B8AD]">{r.store}</p>
                  <p className="text-[9px] text-[#E5C07B]">{r.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
