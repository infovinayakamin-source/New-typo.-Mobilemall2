import React from 'react';
import { useBusiness } from '../context/BusinessContext';
import {
  Smartphone,
  Tablet,
  RotateCcw,
  Boxes,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const services = [
  {
    icon: Smartphone,
    title: 'WHOLESALE SMARTPHONES',
    desc: 'Explore mobile phone models for retailers, resellers and bulk purchasing requirements.',
    tag: 'Mobile Phones',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=300&q=80'
  },
  {
    icon: Tablet,
    title: 'WHOLESALE TABLETS',
    desc: 'Discover tablet options for electronics retailers and business buyers.',
    tag: 'Tablets',
    image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=300&q=80'
  },
  {
    icon: Tablet,
    title: 'WHOLESALE iPADS',
    desc: 'Enquire about iPad models for your wholesale purchasing requirements.',
    tag: 'iPads',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=300&q=80'
  },
  {
    icon: Boxes,
    title: 'BULK ORDER ENQUIRIES',
    desc: 'Share your product requirements and quantity to request a wholesale quotation.',
    tag: 'Bulk Sourcing',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=300&q=80'
  }
];

export default function ServicesSection() {
  const { setIsStockSheetModalOpen, generateWhatsAppUrl } = useBusiness();

  const handleWhatsAppService = (title) => {
    const msg = `Hello Mobile Mall Wholesale Desk. I am interested in wholesale allocation for: *${title}*.`;
    window.open(generateWhatsAppUrl(msg), '_blank');
  };

  return (
    <section id="services" className="relative overflow-hidden bg-[#05130E] text-white py-20 px-4 sm:px-6 lg:px-8 border-b border-[#143527]">
      
      {/* Giant Background Watermark (matching reference: "S E R V I C E S") */}
      <div className="section-watermark">
        SERVICES
      </div>

      <div className="max-w-4xl mx-auto relative z-10 space-y-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E5C07B]/15 border border-[#E5C07B]/30 text-[#F3E5AB] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#E5C07B]" />
            <span>Wholesale Categories</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            EXPLORE OUR WHOLESALE PRODUCT RANGE
          </h2>

          <p className="text-xs sm:text-sm text-[#A3B8AD] max-w-xl mx-auto">
            Sourcing opportunities in mobile phones, tablets and iPads tailored for mobile shop owners, retailers, resellers and bulk purchasers.
          </p>
        </div>

        {/* 4 Service Cards matching the reference list */}
        <div className="space-y-4">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                id={idx === 0 ? "smartphones" : idx === 1 ? "tablets" : undefined}
                className="emerald-card rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 group hover:border-[#E5C07B]/60 transition-all scroll-mt-28"
              >
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover border border-[#143828] p-1 bg-[#071A13] flex-shrink-0"
                  />
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] uppercase font-bold text-[#E5C07B] bg-[#071A13] border border-[#143828] px-2 py-0.5 rounded">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="text-sm sm:text-base font-extrabold text-white group-hover:text-[#F3E5AB] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#A3B8AD] mt-1 line-clamp-2 max-w-xl leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto justify-end flex-shrink-0">
                  <button
                    onClick={() => handleWhatsAppService(item.title)}
                    className="px-4 py-2 bg-[#25D366] text-black font-extrabold rounded-xl text-xs hover:bg-[#20ba59] transition-all"
                  >
                    REQUEST WHOLESALE PRICE
                  </button>
                  <a
                    href="#catalogue"
                    className="p-2 text-[#E5C07B] hover:text-white"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
