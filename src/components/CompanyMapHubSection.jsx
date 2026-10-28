import React, { useState } from 'react';
import { useBusiness } from '../context/BusinessContext';
import {
  MapPin,
  Building2,
  Navigation,
  ExternalLink,
  Copy,
  Check,
  Phone,
  MessageCircle,
  Mail,
  Clock,
  ShieldCheck,
  Package,
  Truck,
  Sparkles,
  FileSpreadsheet,
  CheckCircle2,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import GoogleMapsIcon from './GoogleMapsIcon';

export default function CompanyMapHubSection() {
  const { config, generateWhatsAppUrl, setIsStockSheetModalOpen } = useBusiness();
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('work'); // 'work' | 'infrastructure' | 'logistics'

  const fullAddress = `${config.warehouseAddress}, ${config.cityStateCountry}`;
  const gmbUrl = config.googleBusinessProfileUrl || 'https://share.google/bpMAmDlqvDH4GRPAK';

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const mapEmbedUrl = `https://maps.google.com/maps?q=MURTIMANT+COMPLEX+Relief+Rd+opp+RUPAM+CINEMA+Ahmedabad+Gujarat+380001&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="location-hub" className="relative bg-[#030C08] text-white py-20 px-4 sm:px-6 lg:px-8 border-t border-[#143527] overflow-hidden select-none">
      
      {/* Background Giant Watermark */}
      <div className="section-watermark">
        HEADQUARTERS
      </div>

      {/* Atmospheric Stage Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[300px] bg-gradient-to-r from-[#10B981]/10 via-[#E5C07B]/12 to-[#10B981]/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3.5 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#0A2219] border border-[#E5C07B]/40 text-[#F3E5AB] text-xs font-extrabold uppercase tracking-widest shadow-md">
            <GoogleMapsIcon className="w-3.5 h-3.5" />
            <span>OFFICIAL TRADE HUB & PHYSICAL HEADQUARTERS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-heading leading-tight">
            VISIT OUR WHOLESALE TRADE DESK & <span className="gold-gradient-text">DISPATCH WAREHOUSE</span>
          </h2>

          <p className="text-xs sm:text-sm text-[#A3B8AD] leading-relaxed max-w-2xl mx-auto">
            Located in the heart of Ahmedabad's premier electronics wholesale corridor on Relief Road. Sourcing, master carton verification, and nationwide logistics managed directly under one roof.
          </p>
        </div>

        {/* Main Split Grid: Interactive Map + Company Work Intelligence Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* ========================================================
              LEFT: Interactive Map View with Luxury HUD Controls (Col 1-7)
             ======================================================== */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            
            {/* Map Frame Container */}
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#143828] bg-[#071A13] shadow-2xl flex-1 min-h-[420px] sm:min-h-[480px] group">
              
              {/* Actual Google Map Interactive Embed */}
              <iframe
                title="Mobile Mall Official Physical Headquarters & Trade Hub Map"
                src={mapEmbedUrl}
                className="w-full h-full min-h-[420px] sm:min-h-[480px] border-0 filter contrast-[1.08] saturate-[1.1] opacity-90 group-hover:opacity-100 transition-opacity"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Top Map Floating Badge */}
              <div className="absolute top-4 left-4 right-4 sm:right-auto z-20 flex flex-wrap items-center gap-2 pointer-events-auto">
                <div className="bg-[#05130E]/95 backdrop-blur-md border border-[#E5C07B]/50 rounded-2xl p-2.5 px-3.5 shadow-2xl flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#071A13] border border-[#E5C07B]/40 flex items-center justify-center flex-shrink-0">
                    <GoogleMapsIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <strong className="text-xs font-black text-white block">MOBILE MALL B2B HUB</strong>
                      <span className="text-[9px] bg-emerald-500/20 text-emerald-400 font-extrabold px-1.5 py-0.2 rounded-full border border-emerald-500/40">
                        VERIFIED
                      </span>
                    </div>
                    <span className="text-[10px] text-[#E5C07B] font-bold block">
                      Relief Road • Opp. Rupam Cinema
                    </span>
                  </div>
                </div>

                <a
                  href={gmbUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-black font-extrabold text-[11px] px-3.5 py-2 rounded-xl shadow-xl hover:bg-[#20ba59] transition-all flex items-center gap-1.5 cursor-pointer ml-auto sm:ml-0"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>GPS Directions</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>

              {/* Bottom Interactive Floating Quick-Bar over Map */}
              <div className="absolute bottom-4 left-4 right-4 z-20 pointer-events-auto">
                <div className="bg-[#05130E]/95 backdrop-blur-md border border-[#143828] rounded-2xl p-3 sm:p-4 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 text-left w-full sm:w-auto">
                    <MapPin className="w-4 h-4 text-[#E5C07B] flex-shrink-0" />
                    <span className="text-xs font-semibold text-white/90 line-clamp-1">
                      {config.warehouseAddress}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                    <button
                      onClick={handleCopyAddress}
                      className="px-3 py-1.5 rounded-lg bg-[#0A2219] border border-[#143828] hover:border-[#E5C07B] text-[#C4D6CD] hover:text-white text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                      title="Copy Address to Clipboard"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-[#E5C07B]" />
                          <span>Copy Address</span>
                        </>
                      )}
                    </button>

                    <a
                      href={gmbUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-lg bg-[#E5C07B] text-[#05130E] text-xs font-black hover:bg-[#F3E5AB] transition-all flex items-center gap-1 shadow-md whitespace-nowrap cursor-pointer"
                    >
                      <span>Open GMB Profile</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* Quick Dispatch Corridor Footnote */}
            <div className="flex flex-wrap items-center justify-between gap-2 px-2 text-[11px] text-[#789284]">
              <div className="flex items-center gap-2">
                <Building2 className="w-3.5 h-3.5 text-[#E5C07B]" />
                <span>Prime Hub: Murtimant Complex • Central Electronics Distribution Zone</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Active Walk-In Retailer Desk Open</span>
              </div>
            </div>

          </div>

          {/* ========================================================
              RIGHT: Complete Company & Work Profile Intelligence (Col 8-12)
             ======================================================== */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            
            {/* Work & Company Navigation Tabs */}
            <div className="flex items-center p-1.5 rounded-2xl bg-[#061912] border border-[#143828] gap-1">
              {[
                { id: 'work', label: 'Our Work & Scope', icon: Layers },
                { id: 'infrastructure', label: 'Company Hub', icon: Building2 },
                { id: 'logistics', label: 'Freight & Terms', icon: Truck },
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 py-2 px-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      isActive
                        ? 'bg-[#E5C07B] text-[#05130E] shadow-lg font-black'
                        : 'text-[#8DA89A] hover:text-white hover:bg-[#0A2219]'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Dynamic Tab 1: Our Work & What We Do */}
            {activeTab === 'work' && (
              <div className="emerald-card rounded-3xl p-5 sm:p-6 border border-[#143828] space-y-4 shadow-xl flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#143828]">
                    <div>
                      <h3 className="text-base font-extrabold text-white">
                        Wholesale Smartphone & Tablet Distribution
                      </h3>
                      <p className="text-[11px] text-[#E5C07B] font-bold">
                        B2B Master Lots • Pan-India Retailer Fulfillment
                      </p>
                    </div>
                    <span className="text-[10px] bg-[#05130E] text-[#E5C07B] font-black px-2.5 py-1 rounded-lg border border-[#E5C07B]/30">
                      CORE WORK
                    </span>
                  </div>

                  <div className="space-y-3 mt-4 text-xs">
                    <div className="flex items-start gap-3 p-3 rounded-2xl bg-[#061A12] border border-[#143527]">
                      <Package className="w-4 h-4 text-[#E5C07B] flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-bold">Bulk Smartphone Master Cartons</strong>
                        <p className="text-[#8FA59A] text-[11px] mt-0.5 leading-relaxed">
                          Direct volume distribution for Apple iPhones, Samsung Galaxy, OnePlus, Xiaomi, Vivo, Oppo, Realme, Motorola & Google Pixel.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-2xl bg-[#061A12] border border-[#143527]">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-bold">100% Brand Sealed OEM Warranty</strong>
                        <p className="text-[#8FA59A] text-[11px] mt-0.5 leading-relaxed">
                          Clean IMEI guarantee, non-activated fresh inventory, and registered tax proforma invoices for electronics retailers.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-2xl bg-[#061A12] border border-[#143527]">
                      <Sparkles className="w-4 h-4 text-[#F3E5AB] flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-bold">Apple iPads & Tablets Specialist</strong>
                        <p className="text-[#8FA59A] text-[11px] mt-0.5 leading-relaxed">
                          Ready stock cartons of iPad Pro M4, iPad Air M2, 10th Gen iPads & popular enterprise Android tablet units.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Micro Stats Banner */}
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#143828] text-center">
                  <div className="bg-[#061912] p-2.5 rounded-xl border border-[#143527]">
                    <div className="text-base font-black text-[#F3E5AB]">5 Units</div>
                    <div className="text-[10px] text-[#789284] font-medium">Low MOQ</div>
                  </div>
                  <div className="bg-[#061912] p-2.5 rounded-xl border border-[#143527]">
                    <div className="text-base font-black text-emerald-400">Same-Day</div>
                    <div className="text-[10px] text-[#789284] font-medium">Dispatch</div>
                  </div>
                  <div className="bg-[#061912] p-2.5 rounded-xl border border-[#143527]">
                    <div className="text-base font-black text-[#E5C07B]">14+ Brands</div>
                    <div className="text-[10px] text-[#789284] font-medium">OEM Lines</div>
                  </div>
                </div>
              </div>
            )}

            {/* Dynamic Tab 2: Company Infrastructure & Physical Hub Details */}
            {activeTab === 'infrastructure' && (
              <div className="emerald-card rounded-3xl p-5 sm:p-6 border border-[#143828] space-y-4 shadow-xl flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#143828]">
                    <div>
                      <h3 className="text-base font-extrabold text-white">
                        MOBILE MALL Headquarters & Trade Desk
                      </h3>
                      <p className="text-[11px] text-[#E5C07B] font-bold">
                        Ahmedabad Central Electronics District
                      </p>
                    </div>
                    <GoogleMapsIcon className="w-5 h-5" />
                  </div>

                  <div className="space-y-3 mt-4 text-xs">
                    <div className="p-3 rounded-2xl bg-[#061A12] border border-[#143527] space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-[#E5C07B] font-extrabold uppercase tracking-wider block">
                          Legal Entity & Contact Person:
                        </span>
                        <span className="text-[10px] bg-[#E5C07B]/15 text-[#F3E5AB] px-2 py-0.5 rounded font-bold border border-[#E5C07B]/30">
                          {config.legalBusinessName || 'Mobile Mall2'}
                        </span>
                      </div>
                      <p className="text-white font-bold text-xs">
                        Authorized Person: <span className="text-[#F3E5AB]">{config.contactPerson || 'Vicky Gupta'}</span>
                      </p>
                    </div>

                    <div className="p-3 rounded-2xl bg-[#061A12] border border-[#143527] space-y-1">
                      <span className="text-[10px] text-[#E5C07B] font-extrabold uppercase tracking-wider block">
                        Registered Dispatch Facility:
                      </span>
                      <p className="text-white font-bold text-xs leading-snug">
                        {config.warehouseAddress}
                      </p>
                      <p className="text-[#8FA59A] text-[11px]">
                        {config.cityStateCountry}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      <div className="p-3 rounded-2xl bg-[#061A12] border border-[#143527]">
                        <div className="flex items-center gap-1.5 text-[#E5C07B] mb-1">
                          <Clock className="w-3.5 h-3.5" />
                          <span className="text-[10px] font-bold uppercase">Dispatch Hours</span>
                        </div>
                        <p className="text-white font-bold text-[11px]">{config.operatingHours}</p>
                      </div>

                      <div className="p-3 rounded-2xl bg-[#061A12] border border-[#143527]">
                        <div className="flex items-center gap-1.5 text-emerald-400 mb-1">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span className="text-[10px] font-bold uppercase">B2B Response</span>
                        </div>
                        <p className="text-white font-bold text-[11px]">Under 10 Minutes</p>
                      </div>
                    </div>

                    <div className="p-3 rounded-2xl bg-[#061A12] border border-[#143527] flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-[#789284] block">Direct Trade Desk Hotline:</span>
                        <span className="text-xs font-black text-white">{config.wholesaleDeskPhone}</span>
                      </div>
                      <a
                        href={`tel:${config.wholesaleDeskPhone.replace(/[^0-9+]/g, '')}`}
                        className="px-3 py-1.5 rounded-lg bg-[#0A2219] border border-[#E5C07B]/40 text-[#E5C07B] hover:bg-[#E5C07B] hover:text-black font-bold text-xs transition-colors flex items-center gap-1"
                      >
                        <Phone className="w-3 h-3" />
                        <span>Call</span>
                      </a>
                    </div>

                    <div className="p-3 rounded-2xl bg-[#061A12] border border-[#143527] flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-[#789284] block">Official Email Address:</span>
                        <a href={`mailto:${config.officialEmail}`} className="text-xs font-black text-white hover:text-[#E5C07B] transition-colors">{config.officialEmail}</a>
                      </div>
                      <a
                        href={`mailto:${config.officialEmail}`}
                        className="px-3 py-1.5 rounded-lg bg-[#0A2219] border border-[#E5C07B]/40 text-[#E5C07B] hover:bg-[#E5C07B] hover:text-black font-bold text-xs transition-colors flex items-center gap-1"
                      >
                        <Mail className="w-3 h-3" />
                        <span>Email</span>
                      </a>
                    </div>

                    <div className="p-3 rounded-2xl bg-[#061A12] border border-[#143527] flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-[#789284] block">Official Website:</span>
                        <a href={config.website || 'https://mobilemall2.com/'} target="_blank" rel="noopener noreferrer" className="text-xs font-black text-white hover:text-[#E5C07B] transition-colors">{config.website || 'https://mobilemall2.com/'}</a>
                      </div>
                      <a
                        href={config.website || 'https://mobilemall2.com/'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-[#0A2219] border border-[#E5C07B]/40 text-[#E5C07B] hover:bg-[#E5C07B] hover:text-black font-bold text-xs transition-colors flex items-center gap-1"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>Visit</span>
                      </a>
                    </div>
                  </div>
                </div>

                <a
                  href={gmbUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#4285F4] to-[#1a73e8] text-white font-black text-xs hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                >
                  <GoogleMapsIcon className="w-4 h-4" dropShadow={false} />
                  <span>Open Official Google Business (GMB) Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}

            {/* Dynamic Tab 3: Freight, Delivery & Sourcing Terms */}
            {activeTab === 'logistics' && (
              <div className="emerald-card rounded-3xl p-5 sm:p-6 border border-[#143828] space-y-4 shadow-xl flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#143828]">
                    <div>
                      <h3 className="text-base font-extrabold text-white">
                        Pan-India Freight Logistics
                      </h3>
                      <p className="text-[11px] text-[#E5C07B] font-bold">
                        Insured Air Cargo & Secure Dispatch
                      </p>
                    </div>
                    <Truck className="w-5 h-5 text-[#E5C07B]" />
                  </div>

                  <div className="space-y-3 mt-4 text-xs">
                    <div className="p-3 rounded-2xl bg-[#061A12] border border-[#143527]">
                      <span className="text-[10px] text-[#E5C07B] font-extrabold uppercase tracking-wider block mb-1">
                        Logistics Partners:
                      </span>
                      <p className="text-white font-semibold leading-relaxed text-[11px]">
                        Insured Express Air Cargo via Blue Dart, DHL, FedEx & Regional Secure B2B Transporters.
                      </p>
                    </div>

                    <div className="p-3 rounded-2xl bg-[#061A12] border border-[#143527]">
                      <span className="text-[10px] text-emerald-400 font-extrabold uppercase tracking-wider block mb-1">
                        Dispatch Cutoff Time:
                      </span>
                      <p className="text-white font-semibold leading-relaxed text-[11px]">
                        Orders cleared and confirmed before 4:00 PM IST dispatched the exact same evening.
                      </p>
                    </div>

                    <div className="p-3 rounded-2xl bg-[#061A12] border border-[#143527]">
                      <span className="text-[10px] text-[#F3E5AB] font-extrabold uppercase tracking-wider block mb-1">
                        Retailer Booking Policy:
                      </span>
                      <p className="text-[#8FA59A] text-[11px] leading-relaxed">
                        Minimum 5 units master cartons. Transparent tier-3 volume pricing locked at time of proforma generation.
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setIsStockSheetModalOpen(true)}
                  className="w-full py-3 rounded-xl bg-[#0A241A] border border-[#E5C07B] text-[#F3E5AB] hover:bg-[#E5C07B] hover:text-black font-extrabold text-xs transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <FileSpreadsheet className="w-4 h-4 text-[#E5C07B]" />
                  <span>Download Daily Stock & Lot Availability (CSV)</span>
                </button>
              </div>
            )}

            {/* Direct Connect Action Row */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <a
                href={generateWhatsAppUrl("Hello Mobile Mall. I would like to visit your Relief Road wholesale warehouse / place a bulk order.")}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-3 rounded-xl bg-[#25D366] text-black font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-lg hover:brightness-105 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp Desk</span>
              </a>

              <a
                href={`tel:${config.wholesaleDeskPhone.replace(/[^0-9+]/g, '')}`}
                className="py-3 px-3 rounded-xl bg-[#071A13] border border-[#E5C07B]/50 hover:border-[#E5C07B] text-[#F3E5AB] font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-lg transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#E5C07B]" />
                <span>Call +91 98255 55005</span>
              </a>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
