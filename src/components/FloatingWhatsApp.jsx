import React, { useState } from 'react';
import { useBusiness } from '../context/BusinessContext';
import WhatsAppIcon from './WhatsAppIcon';
import { X, Send, Sparkles, PhoneCall } from 'lucide-react';

export default function FloatingWhatsApp() {
  const { config, generateWhatsAppUrl } = useBusiness();
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const defaultText = `Hello Mobile Mall Wholesale Desk. I am an electronics retailer interested in today's wholesale availability and pricing tiers.`;
  const directApiUrl = generateWhatsAppUrl(defaultText);

  const handleSendCustom = (e) => {
    e.preventDefault();
    const textToSend = customMsg.trim() || defaultText;
    window.open(generateWhatsAppUrl(textToSend), '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  const handleQuickPrompt = (promptText) => {
    window.open(generateWhatsAppUrl(promptText), '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <aside aria-label="WhatsApp Support Desk" className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
      
      {/* Official WhatsApp Chat Dialog Window */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="WhatsApp Wholesale Chat"
          className="mb-3 w-[320px] sm:w-[360px] rounded-2xl overflow-hidden shadow-2xl border border-[#25D366]/40 bg-[#0B141A] text-white animate-in fade-in slide-in-from-bottom-4 duration-300 select-none"
        >
          {/* WhatsApp Brand Header */}
          <div className="bg-[#075E54] p-4 flex items-center justify-between border-b border-[#128C7E]">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src="/assets/aistudio/857933617_122098904577520697_1007430803464821606_n_803cc052.jpg"
                  alt="Mobile Mall Profile"
                  className="w-10 h-10 rounded-full object-cover border-2 border-white/80 shadow"
                  onError={(e) => {
                    e.currentTarget.src = '/mobile-mall-logo.jpg';
                  }}
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#25D366] rounded-full border-2 border-[#075E54]" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="font-bold text-sm text-white">Mobile Mall Wholesale</h4>
                  <span className="w-3.5 h-3.5 rounded-full bg-[#25D366] text-[#075E54] flex items-center justify-center text-[9px] font-black" title="Verified Wholesale Business">✓</span>
                </div>
                <p className="text-[11px] text-[#A3D9C9] font-medium flex items-center gap-1">
                  <span>Online</span>
                  <span>•</span>
                  <span>Typically replies in 2 mins</span>
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-white/80 hover:text-white hover:bg-black/20 transition-colors"
              aria-label="Close WhatsApp chat popup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* WhatsApp Chat Body */}
          <div
            className="p-4 space-y-3 min-h-[190px] max-h-[260px] overflow-y-auto bg-[#0B141A]"
            style={{
              backgroundImage: `radial-gradient(circle at 50% 50%, rgba(18, 140, 126, 0.08) 0%, transparent 80%)`
            }}
          >
            {/* Timestamp Badge */}
            <div className="text-center">
              <span className="text-[10px] uppercase font-bold text-[#8696A0] bg-[#182229] px-2.5 py-0.5 rounded-md shadow-sm">
                Official WhatsApp Business API
              </span>
            </div>

            {/* Inbound Agent Message Bubble */}
            <div className="flex items-start gap-2 max-w-[88%]">
              <div className="bg-[#202C33] rounded-2xl rounded-tl-none p-3 shadow-md border border-white/5 text-xs text-[#E9EDEF] space-y-1.5 leading-relaxed">
                <p className="font-semibold text-[#25D366]">Vicky Gupta (Mobile Mall II)</p>
                <p>
                  Welcome to Mobile Mall! How can we assist your retail business with wholesale smartphones, tablets, or iPads today?
                </p>
                <div className="text-right text-[10px] text-[#8696A0]">Just now</div>
              </div>
            </div>

            {/* Quick Action Chips */}
            <div className="pt-1 space-y-1.5">
              <button
                type="button"
                onClick={() => handleQuickPrompt("Hello Mobile Mall. Please send today's 09:30 AM Wholesale Master Carton Rate Sheet.")}
                className="w-full text-left text-[11px] px-3 py-1.5 rounded-lg bg-[#182229] hover:bg-[#202C33] border border-[#25D366]/30 hover:border-[#25D366] text-[#E9EDEF] hover:text-[#25D366] transition-all flex items-center justify-between"
              >
                <span>📄 Request Today's Master Rate Sheet</span>
                <span className="text-[10px] text-[#25D366]">→</span>
              </button>
              <button
                type="button"
                onClick={() => handleQuickPrompt("Hello Mobile Mall. I want to inquire about bulk Apple iPhone / iPad wholesale lot availability.")}
                className="w-full text-left text-[11px] px-3 py-1.5 rounded-lg bg-[#182229] hover:bg-[#202C33] border border-[#25D366]/30 hover:border-[#25D366] text-[#E9EDEF] hover:text-[#25D366] transition-all flex items-center justify-between"
              >
                <span>🍏 Bulk Apple iPhone & iPad Lots</span>
                <span className="text-[10px] text-[#25D366]">→</span>
              </button>
            </div>
          </div>

          {/* WhatsApp Message Input & Send Form */}
          <form onSubmit={handleSendCustom} className="p-2.5 bg-[#202C33] border-t border-[#2A3942] flex items-center gap-2">
            <input
              type="text"
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              placeholder="Type a wholesale inquiry..."
              className="flex-1 bg-[#2A3942] text-xs text-white placeholder-[#8696A0] px-3 py-2 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#25D366]"
            />
            <button
              type="submit"
              className="p-2 rounded-xl bg-[#25D366] hover:bg-[#20BA5A] text-black font-bold transition-transform active:scale-95 shadow-md flex items-center justify-center cursor-pointer"
              title="Send via WhatsApp API"
            >
              <Send className="w-4 h-4 fill-current" />
            </button>
          </form>

          {/* Official WhatsApp API Direct Link Bar */}
          <div className="bg-[#111B21] px-3 py-2 text-center border-t border-white/5">
            <a
              href={directApiUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#25D366] hover:text-[#53e887] transition-colors"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>Continue directly in WhatsApp Web / App</span>
            </a>
          </div>
        </div>
      )}

      {/* Main Original WhatsApp Button & Pill */}
      <div className="flex items-center gap-2.5">
        
        {/* Official "Chat on WhatsApp" Brand Pill Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="hidden md:inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#1F2C34]/95 hover:bg-[#233138] border border-[#25D366]/60 text-white hover:text-[#25D366] text-xs font-semibold backdrop-blur-md shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer group"
          title="Chat on WhatsApp: +91 98255 55005"
        >
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          <span className="tracking-wide">Chat on WhatsApp</span>
        </button>

        {/* The Authentic Circular WhatsApp Floating Button */}
        <div className="relative group">
          {/* Pulsing Ripple Aura */}
          <span className="absolute -inset-1.5 rounded-full bg-[#25D366]/40 blur-md group-hover:bg-[#25D366]/70 animate-pulse pointer-events-none" />

          {/* Primary Action Button (Click to toggle dialog, or right click / middle click opens API directly) */}
          <a
            href={directApiUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              // On mobile or on click, open directly or toggle chat dialog smoothly
              if (window.innerWidth < 768 && !isOpen) {
                // on mobile, opens WhatsApp app directly
                return;
              }
              e.preventDefault();
              setIsOpen(!isOpen);
            }}
            className="relative flex items-center justify-center w-14 h-14 sm:w-15 sm:h-15 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-[0_4px_24px_rgba(37,211,102,0.65)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
            title="Chat on WhatsApp: +91 98255 55005"
            aria-label="Open WhatsApp API Chat with Mobile Mall (+91 98255 55005)"
          >
            {/* Official White WhatsApp Handset & Speech Bubble Icon */}
            <WhatsAppIcon className="w-8 h-8 text-white filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" />

            {/* Notification Badge: Active Green Online Indicator */}
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#128C7E] border-2 border-[#0B141A] rounded-full flex items-center justify-center text-[9px] font-black text-white shadow">
              1
            </span>
          </a>
        </div>

      </div>
    </aside>
  );
}
