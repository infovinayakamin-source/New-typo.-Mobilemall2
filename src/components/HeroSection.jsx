import React from 'react';
import { useBusiness } from '../context/BusinessContext';
import HeroMotionPhones from './HeroMotionPhones';
import {
  ShieldCheck,
  Truck,
  Layers,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Package,
  Award,
  FileSpreadsheet,
  MessageCircle,
  FileText,
  Boxes
} from 'lucide-react';

export default function HeroSection() {
  const {
    config,
    setIsStockSheetModalOpen,
    setIsDealerModalOpen,
    generateWhatsAppUrl,
    formatPrice
  } = useBusiness();

  const handleWhatsAppInquiry = () => {
    const text = `Hello Mobile Mall Wholesale Desk. I am an electronics retailer requesting master carton allocations and bulk proforma pricing.`;
    window.open(generateWhatsAppUrl(text), '_blank');
  };

  const handleJoinBroadcast = () => {
    const text = `Hello Mobile Mall. Please add our store to your Daily 09:30 AM Wholesale Rate Broadcast list.`;
    window.open(generateWhatsAppUrl(text), '_blank');
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-[#030C08] via-[#071A13] to-[#040D09] border-b border-[#143527] pt-6 sm:pt-8 pb-16">
      
      {/* Emerald Atmospheric Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-[#10B981]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-16 right-1/4 w-72 h-72 bg-[#E5C07B]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Wholesale Pill Badge */}
        <div className="flex items-center justify-center mb-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#05130E] border border-[#E5C07B]/40 text-xs sm:text-sm text-[#F3E5AB] shadow-lg shadow-black/50">
            <span className="w-2 h-2 rounded-full bg-[#E5C07B] animate-pulse"></span>
            <span className="font-extrabold uppercase tracking-wider">
              B2B Mobile, Tablet & iPad Wholesale Business
            </span>
            <span className="text-[#143527]">|</span>
            <span className="text-[#A3B8AD] hidden sm:inline">Built for Bulk Buyers</span>
          </div>
        </div>

        {/* Top Centered Brand Wordmark & Main Headlines */}
        <div className="text-center space-y-2 mb-4">
          <div className="text-xs sm:text-sm uppercase tracking-widest text-[#A3B8AD] font-bold">
            MOBILE <span className="gold-gradient-text font-black">MALL</span> • WHOLESALE DISTRIBUTION
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-wide text-white uppercase font-heading">
            YOUR TRUSTED MOBILE <span className="gold-gradient-text inline-block">WHOLESALE</span> PARTNER
          </h1>
          <p className="text-xs sm:text-base text-[#E5C07B] font-bold tracking-wider">
            Smartphones • Tablets • iPads — Wholesale Solutions for Your Business
          </p>
        </div>

        {/* --- PREMIUM MOTION PHONES SHOWCASE (CENTERPIECE) --- */}
        <HeroMotionPhones />

        {/* Wholesale Description Box */}
        <div className="max-w-3xl mx-auto text-center space-y-3 my-8">
          <p className="text-sm sm:text-base text-[#C4D6CD] leading-relaxed font-normal">
            Welcome to Mobile Mall, your destination for wholesale enquiries for mobile phones, tablets and iPads. Built for mobile retailers, resellers and bulk buyers looking to source devices for their businesses.
          </p>
        </div>

        {/* 4 Wholesale Operational Pillars (Stats Matrix) */}
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-10">
          <div className="emerald-card p-4 sm:p-5 rounded-2xl text-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#E5C07B] block font-heading">
              Wholesale
            </span>
            <span className="text-[11px] font-bold text-white mt-1 block">
              Focused Business
            </span>
            <span className="text-[10px] text-[#A3B8AD] block">
              For retailers & resellers
            </span>
          </div>

          <div className="emerald-card p-4 sm:p-5 rounded-2xl text-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-white block font-heading">
              Mobiles & Tabs
            </span>
            <span className="text-[11px] font-bold text-white mt-1 block">
              Complete Sourcing
            </span>
            <span className="text-[10px] text-[#A3B8AD] block">
              Smartphones, Tablets & iPads
            </span>
          </div>

          <div className="emerald-card p-4 sm:p-5 rounded-2xl text-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#E5C07B] block font-heading">
              Bulk Quotes
            </span>
            <span className="text-[11px] font-bold text-white mt-1 block">
              Direct Pricing Info
            </span>
            <span className="text-[10px] text-[#A3B8AD] block">
              Volume-based quotations
            </span>
          </div>

          <div className="emerald-card p-4 sm:p-5 rounded-2xl text-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-white block font-heading">
              B2B Direct
            </span>
            <span className="text-[11px] font-bold text-white mt-1 block">
              Fast Communication
            </span>
            <span className="text-[10px] text-[#A3B8AD] block">
              Direct team connection
            </span>
          </div>
        </div>

        {/* 3 Prominent Wholesale Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-14">
          <a
            href="#catalogue"
            className="w-full sm:w-auto px-7 py-3.5 gold-gradient-btn rounded-xl font-bold text-xs sm:text-sm shadow-xl flex items-center justify-center gap-2"
          >
            <Boxes className="w-4 h-4" />
            <span>EXPLORE WHOLESALE PRODUCTS</span>
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto px-7 py-3.5 bg-[#25D366] text-black font-extrabold rounded-xl text-xs sm:text-sm hover:bg-[#20ba59] transition-all flex items-center justify-center gap-2 shadow-lg"
          >
            <MessageCircle className="w-4 h-4" />
            <span>GET WHOLESALE QUOTE</span>
          </a>

          <button
            onClick={() => setIsStockSheetModalOpen(true)}
            className="w-full sm:w-auto px-6 py-3.5 gold-outline-btn rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2"
          >
            <FileSpreadsheet className="w-4 h-4" />
            <span>Download Wholesale Rate Sheet</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Featured Master Lot Banner (Wholesale Master Cartons) */}
        <div className="max-w-4xl mx-auto emerald-card rounded-3xl p-6 sm:p-8 relative overflow-hidden border border-[#E5C07B]/40 shadow-2xl">
          <div className="relative z-10 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5C07B]/15 border border-[#E5C07B]/30 text-[#F3E5AB] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#E5C07B]" />
                <span>Tier-1 Factory Allocation • Master Cartons Available</span>
              </div>
              <span className="text-xs font-bold text-emerald-400 bg-emerald-950/70 border border-emerald-800/50 px-2.5 py-0.5 rounded-full">
                Same-Day Air Dispatch
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Featured Wholesale Lots & Sealed Master Boxes
            </h2>

            <p className="text-xs sm:text-sm text-[#C4D6CD] max-w-2xl leading-relaxed">
              Every shipment is backed by clean IMEI GSX whitelist reports, sealed retail packaging, and commercial tax invoices for GST input tax credit (ITC).
            </p>

            {/* Spec Tag Pills */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#E5C07B]">
              <span className="px-3 py-1 rounded-lg bg-[#071A13] border border-[#143828] flex items-center gap-1.5 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E5C07B]" />
                <span>MOQ: 5 Units (Mix Freely)</span>
              </span>
              <span className="px-3 py-1 rounded-lg bg-[#071A13] border border-[#143828] flex items-center gap-1.5 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E5C07B]" />
                <span>Master Carton of 20 Units</span>
              </span>
              <span className="px-3 py-1 rounded-lg bg-[#071A13] border border-[#143828] flex items-center gap-1.5 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E5C07B]" />
                <span>GST Invoicing with Full ITC</span>
              </span>
            </div>

            {/* 4 Wholesale Lot Previews */}
            <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-[#071A13] border border-[#143828] rounded-xl p-3 flex flex-col justify-between">
                <div className="flex items-center gap-2 mb-2">
                  <img
                    src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=120&q=80"
                    alt="iPhone 16 Pro Max"
                    className="w-8 h-8 object-contain rounded bg-[#0A2219] p-0.5"
                  />
                  <div className="min-w-0">
                    <span className="text-[11px] font-bold text-white block truncate">iPhone 16 Pro Max</span>
                    <span className="text-[10px] text-[#A3B8AD]">256GB Titanium</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-[#143828] text-[11px]">
                  <span className="text-[#A3B8AD] block text-[10px]">Wholesale Tier 3:</span>
                  <span className="text-[#E5C07B] font-extrabold text-sm block">{formatPrice(999)} / pc</span>
                  <span className="text-emerald-400 text-[10px] font-bold">MSRP: {formatPrice(1199)}</span>
                </div>
              </div>

              <div className="bg-[#071A13] border border-[#143828] rounded-xl p-3 flex flex-col justify-between">
                <div className="flex items-center gap-2 mb-2">
                  <img
                    src="https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=120&q=80"
                    alt="Galaxy S24 Ultra"
                    className="w-8 h-8 object-contain rounded bg-[#0A2219] p-0.5"
                  />
                  <div className="min-w-0">
                    <span className="text-[11px] font-bold text-white block truncate">S24 Ultra 5G</span>
                    <span className="text-[10px] text-[#A3B8AD]">256GB Titanium</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-[#143828] text-[11px]">
                  <span className="text-[#A3B8AD] block text-[10px]">Wholesale Tier 3:</span>
                  <span className="text-[#E5C07B] font-extrabold text-sm block">{formatPrice(875)} / pc</span>
                  <span className="text-emerald-400 text-[10px] font-bold">MSRP: {formatPrice(1099)}</span>
                </div>
              </div>

              <div className="bg-[#071A13] border border-[#143828] rounded-xl p-3 flex flex-col justify-between">
                <div className="flex items-center gap-2 mb-2">
                  <img
                    src="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=120&q=80"
                    alt="iPad Pro M4"
                    className="w-8 h-8 object-contain rounded bg-[#0A2219] p-0.5"
                  />
                  <div className="min-w-0">
                    <span className="text-[11px] font-bold text-white block truncate">iPad Pro 13" M4</span>
                    <span className="text-[10px] text-[#A3B8AD]">256GB Cellular</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-[#143828] text-[11px]">
                  <span className="text-[#A3B8AD] block text-[10px]">Wholesale Tier 3:</span>
                  <span className="text-[#E5C07B] font-extrabold text-sm block">{formatPrice(1049)} / pc</span>
                  <span className="text-emerald-400 text-[10px] font-bold">MSRP: {formatPrice(1299)}</span>
                </div>
              </div>

              <div className="bg-[#071A13] border border-[#143828] rounded-xl p-3 flex flex-col justify-between">
                <div className="flex items-center gap-2 mb-2">
                  <img
                    src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=120&q=80"
                    alt="OnePlus 12"
                    className="w-8 h-8 object-contain rounded bg-[#0A2219] p-0.5"
                  />
                  <div className="min-w-0">
                    <span className="text-[11px] font-bold text-white block truncate">OnePlus 12 5G</span>
                    <span className="text-[10px] text-[#A3B8AD]">16GB + 512GB</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-[#143828] text-[11px]">
                  <span className="text-[#A3B8AD] block text-[10px]">Wholesale Tier 3:</span>
                  <span className="text-[#E5C07B] font-extrabold text-sm block">{formatPrice(585)} / pc</span>
                  <span className="text-emerald-400 text-[10px] font-bold">MSRP: {formatPrice(699)}</span>
                </div>
              </div>
            </div>

            {/* Banner Actions */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={handleWhatsAppInquiry}
                className="w-full sm:w-auto px-6 py-3 bg-[#25D366] text-black font-extrabold rounded-xl text-xs sm:text-sm hover:bg-[#20ba59] transition-all flex items-center justify-center gap-2"
              >
                <span>Request Commercial Proforma (WhatsApp)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsDealerModalOpen(true)}
                className="w-full sm:w-auto px-6 py-3 gold-outline-btn rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2"
              >
                <span>Open Authorized Retailer Account</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
