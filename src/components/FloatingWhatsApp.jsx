import React from 'react';
import { useBusiness } from '../context/BusinessContext';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const { generateWhatsAppUrl } = useBusiness();

  const text = `Hello Mobile Mall Wholesale Desk. I am an electronics retailer interested in today's wholesale availability and pricing tiers.`;
  const whatsappUrl = generateWhatsAppUrl(text);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Floating WhatsApp Button with Gold Halo */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group p-4 rounded-full bg-[#25D366] text-black shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-[#D4AF37] flex items-center justify-center cursor-pointer"
        title="Chat on WhatsApp: +91 98255 55005"
        aria-label="Connect on WhatsApp: +91 98255 55005"
      >
        <span className="absolute -inset-1 rounded-full bg-[#D4AF37]/30 blur-sm group-hover:bg-[#D4AF37]/50 transition-all -z-10" />
        <MessageCircle className="w-6 h-6 fill-current text-black" />
      </a>
    </div>
  );
}
