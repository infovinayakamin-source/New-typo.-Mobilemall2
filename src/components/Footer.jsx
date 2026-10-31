import React from 'react';
import { useBusiness } from '../context/BusinessContext';
import {
  Phone,
  MessageCircle,
  Mail,
  FileSpreadsheet,
  Clock,
  SlidersHorizontal,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import GoogleMapsIcon from './GoogleMapsIcon';

export default function Footer() {
  const {
    config,
    setIsConfigModalOpen,
    setIsStockSheetModalOpen,
    setIsDealerModalOpen,
    generateWhatsAppUrl
  } = useBusiness();

  const handleWhatsAppDesk = () => {
    const msg = `Hello Mobile Mall Wholesale Desk. I am inquiring about current stock lots and retailer registration.`;
    window.open(generateWhatsAppUrl(msg), '_blank');
  };

  return (
    <footer className="bg-[#030C08] text-[#8FA59A] border-t border-[#143527] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#143527]">
          
          {/* Brand Info & Mission (Col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={config.logoUrl}
                alt="Mobile Mall Wholesale"
                className="w-14 h-14 rounded-full object-cover border-2 border-[#E5C07B]/70 shadow-lg shadow-[#E5C07B]/15"
                onError={(e) => {
                  e.target.src = '/mobile-mall-logo.jpg';
                }}
              />
              <div>
                <span className="text-xl font-extrabold text-white tracking-tight block font-heading">
                  MOBILE MALL
                </span>
                <span className="text-xs text-[#E5C07B] font-semibold tracking-wider uppercase block">
                  Mobiles • Tablets • iPads
                </span>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-[#8FA59A]">
              MOBILE MALL — A wholesale-focused destination for mobile phones, tablets and iPads, serving the sourcing needs of retailers, resellers and business buyers.
            </p>

            {/* Social / Facebook & Google Maps Verified Channels */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              <a
                href={config.googleBusinessProfileUrl || 'https://share.google/bpMAmDlqvDH4GRPAK'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#071A13] border border-[#143527] hover:border-[#E5C07B] text-white hover:text-[#F3E5AB] text-xs font-semibold transition-all shadow-sm"
                title="View Mobile Mall on Google Maps (Official GMB Profile)"
              >
                <GoogleMapsIcon className="w-4 h-4" />
                <span>Google Maps (GMB)</span>
                <ExternalLink className="w-3 h-3 text-[#789284]" />
              </a>

              <a
                href={config.facebookPage}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#071A13] border border-[#143527] hover:border-[#E5C07B] text-white hover:text-[#F3E5AB] text-xs font-semibold transition-all shadow-sm"
              >
                <svg className="w-4 h-4 fill-current text-[#1877F2]" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Follow on Facebook</span>
                <ExternalLink className="w-3 h-3 text-[#789284]" />
              </a>

              <button
                onClick={handleWhatsAppDesk}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#25D366]/15 border border-[#25D366]/30 hover:bg-[#25D366] hover:text-black text-[#25D366] text-xs font-semibold transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Desk</span>
              </button>
            </div>
          </div>

          {/* Wholesale Categories (Col 5-7) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#E5C07B]">
              Wholesale Portfolio
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#catalogue" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#E5C07B]" />
                  <span>Flagship Smartphones (Apple & Samsung)</span>
                </a>
              </li>
              <li>
                <a href="#catalogue" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#E5C07B]" />
                  <span>Apple iPad Pro, Air & 10th Gen Cartons</span>
                </a>
              </li>
              <li>
                <a href="#catalogue" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#E5C07B]" />
                  <span>OnePlus, Xiaomi & Vivo Volume Lots</span>
                </a>
              </li>
              <li>
                <a href="#catalogue" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#E5C07B]" />
                  <span>Grade A+ Certified Pre-Owned Master Lots</span>
                </a>
              </li>
              <li>
                <button
                  onClick={() => setIsStockSheetModalOpen(true)}
                  className="hover:text-[#E5C07B] transition-colors flex items-center gap-1.5 text-left text-[#E5C07B]"
                >
                  <FileSpreadsheet className="w-3.5 h-3.5" />
                  <span>Download Daily Stock Spreadsheet (CSV)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* B2B Services & Calculators (Col 8-9) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#E5C07B]">
              Retailer Services
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#calculator" className="hover:text-white transition-colors">
                  Profit Margin Estimator
                </a>
              </li>
              <li>
                <button onClick={() => setIsDealerModalOpen(true)} className="hover:text-white text-left">
                  Apply for Dealer Account
                </button>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  What We Offer
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">
                  Retailer Trust Index
                </a>
              </li>
              <li>
                <button
                  onClick={() => setIsConfigModalOpen(true)}
                  className="hover:text-white text-left flex items-center gap-1 text-[#8FA59A]"
                >
                  <SlidersHorizontal className="w-3 h-3" />
                  <span>B2B Profile Settings</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Official Verification & Placeholders (Col 10-12) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#E5C07B]">
              Wholesale Hub Contact
            </h3>
            
            <div className="space-y-2.5 text-xs">
              <a
                href={config.googleBusinessProfileUrl || 'https://share.google/bpMAmDlqvDH4GRPAK'}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 p-2 rounded-xl bg-[#061811] border border-[#143527] hover:border-[#E5C07B] transition-all group cursor-pointer"
                title="View on Google Maps (Official GMB Location)"
              >
                <div className="p-1 rounded-lg bg-[#030C08] border border-[#143527] flex-shrink-0 mt-0.5">
                  <GoogleMapsIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-white font-semibold group-hover:text-[#F3E5AB] transition-colors leading-snug">
                    {config.warehouseAddress}
                  </div>
                  <div className="text-[#789284] text-[11px] mt-0.5">{config.cityStateCountry}</div>
                  <div className="text-[10px] text-[#E5C07B] font-bold mt-1 flex items-center gap-1">
                    <span>Directions on Google Maps</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </div>
                </div>
              </a>

              <a href={`tel:${config.wholesaleDeskPhone.replace(/[^0-9+]/g, '')}`} className="flex items-center gap-2 group hover:text-[#E5C07B] transition-colors">
                <Phone className="w-4 h-4 text-[#E5C07B] flex-shrink-0" />
                <div>
                  <span className="text-white group-hover:text-[#E5C07B] font-medium transition-colors">{config.wholesaleDeskPhone}</span>
                  <span className="text-[10px] text-[#789284] ml-1.5">(Desk)</span>
                </div>
              </a>

              <a
                href={generateWhatsAppUrl("Hello Mobile Mall Wholesale Desk. I would like to inquire about wholesale mobile rates.")}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 group hover:text-[#25D366] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                <div>
                  <span className="text-white group-hover:text-[#25D366] font-medium transition-colors">{config.whatsappNumber}</span>
                  <span className="text-[10px] text-[#25D366] ml-1.5 font-semibold">(WhatsApp)</span>
                </div>
              </a>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#E5C07B] flex-shrink-0" />
                <a href={`mailto:${config.officialEmail}`} className="text-white hover:text-[#E5C07B] transition-colors">{config.officialEmail}</a>
              </div>

              <div className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-[#E5C07B] flex-shrink-0" />
                <a href={config.website || 'https://mobilemall2.com/'} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#E5C07B] transition-colors">{config.website ? config.website.replace('https://', '').replace('/', '') : 'mobilemall2.com'}</a>
              </div>

              <div className="flex items-start gap-2 pt-1 border-t border-[#143527]">
                <Clock className="w-4 h-4 text-[#789284] flex-shrink-0 mt-0.5" />
                <div className="text-[11px] text-[#789284]">
                  <div>{config.operatingHours}</div>
                  <div>{config.sundaySchedule}</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Exact User Requested Attribution */}
        <div className="pt-8 flex flex-col items-center justify-center text-center gap-1.5 text-xs text-[#8FA59A]">
          <div className="text-white font-bold text-sm sm:text-base tracking-wide">
            © 2026 MOBILE MALL II. All Rights Reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}
