import React, { useState } from 'react';
import { useBusiness } from '../context/BusinessContext';
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Send,
  Sparkles,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import GoogleMapsIcon from './GoogleMapsIcon';

export default function ContactSection() {
  const { config, generateWhatsAppUrl } = useBusiness();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `*NEW WHOLESALE ENQUIRY — MOBILE MALL*\n
*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone / WhatsApp:* ${formData.phone}
*Message:* ${formData.message}`;

    setSubmitted(true);
    setTimeout(() => {
      window.open(generateWhatsAppUrl(msg), '_blank');
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[#040D09] text-white py-20 px-4 sm:px-6 lg:px-8 border-b border-[#143527]">
      
      {/* Giant Background Watermark (matching reference: "C O N T A C T") */}
      <div className="section-watermark">
        CONTACT
      </div>

      <div className="max-w-3xl mx-auto relative z-10 space-y-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E5C07B]/15 border border-[#E5C07B]/30 text-[#F3E5AB] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#E5C07B]" />
            <span>LET'S CONNECT FOR WHOLESALE BUSINESS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            LOOKING TO BUY MOBILES IN <span className="gold-gradient-text">BULK?</span>
          </h2>

          <p className="text-xs sm:text-sm text-[#A3B8AD] max-w-lg mx-auto leading-relaxed">
            Whether you are a mobile shop owner, reseller or business buyer, share your requirements with Mobile Mall to request a wholesale quotation. Have a bulk mobile, tablet or iPad purchasing requirement? Contact our wholesale team to discuss your business enquiry.
          </p>
        </div>

        {/* Physical Dispatch Hub & Verified Google Business Location */}
        <div className="emerald-card rounded-2xl p-4 sm:p-5 border border-[#143828] flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-r from-[#071A13] via-[#0A2219] to-[#071A13] shadow-xl relative overflow-hidden group">
          <div className="flex items-start gap-3.5 w-full sm:w-auto relative z-10">
            <div className="w-11 h-11 rounded-xl bg-[#061912] border border-[#E5C07B]/40 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md">
              <GoogleMapsIcon className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] uppercase tracking-wider font-extrabold text-[#E5C07B] block">
                  Official Wholesale Hub & Trade Desk Address
                </span>
                <span className="text-[9px] bg-[#143527] text-emerald-400 font-bold px-2 py-0.5 rounded-full border border-emerald-500/30 flex items-center gap-1">
                  <CheckCircle2 className="w-2.5 h-2.5" />
                  <span>Google Verified</span>
                </span>
              </div>
              <p className="text-sm font-bold text-white mt-0.5 leading-snug">
                {config.warehouseAddress}
              </p>
              <p className="text-xs text-[#A3B8AD] mt-0.5">
                {config.cityStateCountry} • Landmark: Opp. Rupam Cinema
              </p>
            </div>
          </div>

          <a
            href={config.googleBusinessProfileUrl || 'https://share.google/bpMAmDlqvDH4GRPAK'}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs font-extrabold bg-[#05130E] border-2 border-[#E5C07B] text-[#F3E5AB] hover:bg-[#E5C07B] hover:text-[#05130E] transition-all flex items-center justify-center gap-2 whitespace-nowrap shadow-lg group/btn cursor-pointer relative z-10"
            title="Open Verified Google Business Profile (GMB) & Get Directions"
          >
            <GoogleMapsIcon className="w-4 h-4" dropShadow={false} />
            <span>Open in Google Maps (GMB)</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Direct Contact Buttons (Phone & WhatsApp) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <a
            href={generateWhatsAppUrl("Hello Mobile Mall Wholesale Desk. I am an electronics retailer and would like to connect on WhatsApp regarding bulk phone orders.")}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between p-4 rounded-xl bg-[#071A13] border border-[#25D366]/40 hover:border-[#25D366] hover:bg-[#0A2219] transition-all group shadow-lg cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#25D366]/15 flex items-center justify-center text-[#25D366]">
                <MessageCircle className="w-5 h-5 fill-current" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#A3B8AD] font-bold block">
                  Official WhatsApp Desk
                </span>
                <span className="text-sm font-extrabold text-white group-hover:text-[#25D366] transition-colors">
                  +91 98255 55005
                </span>
              </div>
            </div>
            <span className="text-xs font-bold text-[#25D366] bg-[#25D366]/10 px-2.5 py-1 rounded-lg">
              Chat Now
            </span>
          </a>

          <a
            href={`tel:${config.wholesaleDeskPhone.replace(/[^0-9+]/g, '')}`}
            className="flex items-center justify-between p-4 rounded-xl bg-[#071A13] border border-[#E5C07B]/40 hover:border-[#E5C07B] hover:bg-[#0A2219] transition-all group shadow-lg cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E5C07B]/15 flex items-center justify-center text-[#E5C07B]">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#A3B8AD] font-bold block">
                  Wholesale Trade Phone
                </span>
                <span className="text-sm font-extrabold text-white group-hover:text-[#E5C07B] transition-colors">
                  +91 98255 55005
                </span>
              </div>
            </div>
            <span className="text-xs font-bold text-[#E5C07B] bg-[#E5C07B]/10 px-2.5 py-1 rounded-lg">
              Call Now
            </span>
          </a>
        </div>

        {/* Minimalist Contact Form (matching the reference styling) */}
        <div className="emerald-card rounded-2xl p-6 sm:p-8 border border-[#143828] shadow-2xl">
          {submitted ? (
            <div className="text-center py-10 space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
              <h3 className="text-base font-bold text-white">Opening WhatsApp Wholesale Desk...</h3>
              <p className="text-xs text-[#A3B8AD]">Your inquiry details have been formatted for instant response.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#A3B8AD] mb-1.5">
                  Business / Store Name & Contact Person *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Apex Mobile Retailers — Ramesh Patel"
                  className="w-full bg-[#071A13] border border-[#143828] rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-[#5A7466] focus:outline-none focus:border-[#E5C07B] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#A3B8AD] mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="retailer@store.com"
                    className="w-full bg-[#071A13] border border-[#143828] rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-[#5A7466] focus:outline-none focus:border-[#E5C07B] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#A3B8AD] mb-1.5">
                    WhatsApp Contact Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 / International WhatsApp"
                    className="w-full bg-[#071A13] border border-[#143828] rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-[#5A7466] focus:outline-none focus:border-[#E5C07B] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#A3B8AD] mb-1.5">
                  Models & Bulk Quantities Required *
                </label>
                <textarea
                  required
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us the mobile phones, tablets, or iPads and approximate quantities your business needs..."
                  className="w-full bg-[#071A13] border border-[#143828] rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-[#5A7466] focus:outline-none focus:border-[#E5C07B] transition-colors"
                ></textarea>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:w-auto gold-gradient-btn px-7 py-3 rounded-xl text-xs sm:text-sm font-extrabold shadow-md hover:brightness-110 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>GET YOUR WHOLESALE QUOTE</span>
                </button>

                <a
                  href={generateWhatsAppUrl("Hello Mobile Mall. I have a bulk mobile, tablet or iPad purchasing requirement and would like to contact your wholesale team.")}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs sm:text-sm font-bold bg-[#071A13] text-[#E5C07B] border border-[#143828] hover:border-[#E5C07B] transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>CONTACT OUR WHOLESALE TEAM</span>
                </a>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
