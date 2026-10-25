import React from 'react';
import { useBusiness } from '../context/BusinessContext';
import {
  Boxes,
  ClipboardList,
  FileCheck,
  ArrowRight,
  Sparkles,
  MessageCircle
} from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: Boxes,
    title: 'SELECT YOUR PRODUCTS',
    desc: 'Browse wholesale mobile phones, tablets and iPads.'
  },
  {
    step: '02',
    icon: ClipboardList,
    title: 'SHARE YOUR REQUIREMENTS',
    desc: 'Tell us the models and quantities your business needs.'
  },
  {
    step: '03',
    icon: FileCheck,
    title: 'REQUEST YOUR QUOTATION',
    desc: 'Submit your requirements and connect with our team to discuss availability and pricing.'
  }
];

export default function OrderingProcess() {
  const { generateWhatsAppUrl } = useBusiness();

  const handleWhatsAppDesk = () => {
    const msg = `Hello Mobile Mall Wholesale Desk. I want to submit our business requirements for a wholesale quotation.`;
    window.open(generateWhatsAppUrl(msg), '_blank');
  };

  return (
    <section id="how-it-works" className="relative overflow-hidden bg-[#05130E] text-white py-16 sm:py-20 border-b border-[#143527] scroll-mt-20">
      
      {/* Background Watermark */}
      <div className="section-watermark">
        PROCESS
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5C07B]/15 border border-[#E5C07B]/30 text-xs font-bold text-[#F3E5AB] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#E5C07B]" />
            <span>Simple Sourcing Workflow</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            YOUR WHOLESALE ENQUIRY IN <span className="gold-gradient-text">3 SIMPLE STEPS</span>
          </h2>

          <p className="text-sm sm:text-base text-[#A3B8AD]">
            A clear, direct procurement process built for mobile retailers, resellers and bulk buyers.
          </p>
        </div>

        {/* 3 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="emerald-card p-6 sm:p-7 rounded-2xl flex flex-col justify-between relative group hover:border-[#E5C07B]/60 transition-all shadow-xl"
              >
                <div>
                  {/* Step Number Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-black text-[#E5C07B]/40 group-hover:text-[#E5C07B] transition-colors font-mono">
                      {item.step}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[#071A13] border border-[#143828] flex items-center justify-center text-[#E5C07B] shadow-inner">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-extrabold text-white mb-2 group-hover:text-[#F3E5AB] transition-colors font-heading">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A3B8AD] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#143828] text-xs text-[#E5C07B] font-bold flex items-center justify-between">
                  <span>Step {idx + 1} of 3</span>
                  <ArrowRight className="w-4 h-4 text-[#E5C07B] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Fast Action Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#071A13] via-[#0B261C] to-[#071A13] border border-[#E5C07B]/40 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Looking to Buy Mobiles in Bulk?
            </h3>
            <p className="text-xs sm:text-sm text-[#A3B8AD]">
              Whether you are a mobile shop owner, reseller or business buyer, share your requirements to request a wholesale quotation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto flex-shrink-0">
            <button
              onClick={handleWhatsAppDesk}
              className="w-full sm:w-auto px-6 py-3 bg-[#25D366] text-black font-extrabold rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-[#20ba59] shadow-lg shadow-[#25D366]/20 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>GET YOUR WHOLESALE QUOTE</span>
            </button>

            <a
              href="#contact"
              className="w-full sm:w-auto px-6 py-3 gold-outline-btn rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2"
            >
              <span>Contact Wholesale Team</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
