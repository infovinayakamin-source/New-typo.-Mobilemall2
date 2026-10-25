import React, { useState } from 'react';
import { useBusiness } from '../context/BusinessContext';
import {
  X,
  Sparkles,
  Building2,
  User,
  Phone,
  Mail,
  MapPin,
  Layers,
  MessageCircle,
  CheckCircle2
} from 'lucide-react';

export default function RetailerRegistrationModal() {
  const { isDealerModalOpen, setIsDealerModalOpen, generateWhatsAppUrl } = useBusiness();

  const [formData, setFormData] = useState({
    businessName: '',
    ownerName: '',
    phone: '',
    email: '',
    city: '',
    businessType: 'Retail Store (Physical Counter)',
    monthlyVolume: '20 - 50 Units / month',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isDealerModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `*NEW DEALER ACCOUNT APPLICATION — MOBILE MALL*\n
*Business Name:* ${formData.businessName}
*Owner / Contact:* ${formData.ownerName}
*Phone / WhatsApp:* ${formData.phone}
*Email:* ${formData.email}
*City & State:* ${formData.city}
*Business Type:* ${formData.businessType}
*Expected Monthly Volume:* ${formData.monthlyVolume}
*Notes:* ${formData.notes || 'None'}
\nPlease approve dealer account credentials, assign a Key Account Manager, and provide wholesale proforma access.`;

    setSubmitted(true);
    setTimeout(() => {
      window.open(generateWhatsAppUrl(msg), '_blank');
      setIsDealerModalOpen(false);
      setSubmitted(false);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#141414] border border-[#2A2A2A] rounded-3xl max-w-xl w-full text-white overflow-hidden shadow-2xl relative my-6">
        
        {/* Close Button */}
        <button
          onClick={() => setIsDealerModalOpen(false)}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#080808] text-[#9B9B9B] hover:text-white flex items-center justify-center border border-[#2A2A2A]"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="p-6 bg-gradient-to-r from-[#080808] via-[#141414] to-[#080808] border-b border-[#2A2A2A]">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] text-xs font-bold uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Authorized Partner Tier</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-white">
            Open a Mobile Mall Dealer Account
          </h2>
          <p className="text-xs text-[#9B9B9B] mt-1">
            Unlock exclusive tier-3 master pricing, dedicated key account manager, and priority morning stock broadcasts.
          </p>
        </div>

        {/* Form Body */}
        {submitted ? (
          <div className="p-10 text-center space-y-4">
            <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto animate-bounce" />
            <h3 className="text-lg font-bold text-white">Application Prepared!</h3>
            <p className="text-xs text-[#9B9B9B]">
              Opening WhatsApp Wholesale Key Account Desk with your dealer profile details...
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-[#9B9B9B] uppercase mb-1">
                  Business / Store Name *
                </label>
                <div className="relative">
                  <input
                    required
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    placeholder="e.g. Apex Electronics Ltd."
                    className="w-full bg-[#080808] border border-[#2A2A2A] rounded-xl pl-9 pr-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                  <Building2 className="w-4 h-4 text-[#777777] absolute left-3 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#9B9B9B] uppercase mb-1">
                  Proprietor / Contact Name *
                </label>
                <div className="relative">
                  <input
                    required
                    type="text"
                    value={formData.ownerName}
                    onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                    placeholder="Full Name"
                    className="w-full bg-[#080808] border border-[#2A2A2A] rounded-xl pl-9 pr-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                  <User className="w-4 h-4 text-[#777777] absolute left-3 top-1/2 -translate-y-1/2" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-[#9B9B9B] uppercase mb-1">
                  WhatsApp Contact Number *
                </label>
                <div className="relative">
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 / International WhatsApp"
                    className="w-full bg-[#080808] border border-[#2A2A2A] rounded-xl pl-9 pr-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                  <Phone className="w-4 h-4 text-[#777777] absolute left-3 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#9B9B9B] uppercase mb-1">
                  Email Address *
                </label>
                <div className="relative">
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="dealer@yourdomain.com"
                    className="w-full bg-[#080808] border border-[#2A2A2A] rounded-xl pl-9 pr-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                  <Mail className="w-4 h-4 text-[#777777] absolute left-3 top-1/2 -translate-y-1/2" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-[#9B9B9B] uppercase mb-1">
                  City & State / Region *
                </label>
                <div className="relative">
                  <input
                    required
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="City, State"
                    className="w-full bg-[#080808] border border-[#2A2A2A] rounded-xl pl-9 pr-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                  <MapPin className="w-4 h-4 text-[#777777] absolute left-3 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#9B9B9B] uppercase mb-1">
                  Business Model
                </label>
                <select
                  value={formData.businessType}
                  onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                  className="w-full bg-[#080808] border border-[#2A2A2A] rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                >
                  <option value="Physical Electronics Retail Store">Physical Retail Store</option>
                  <option value="Online / Marketplace Reseller">Online / Marketplace Reseller</option>
                  <option value="Mobile Repair & Refurbished Shop">Mobile Repair & Refurbished Shop</option>
                  <option value="Corporate / Institutional Bulk Buyer">Corporate / Bulk Purchaser</option>
                  <option value="Export / International Distributor">Export & Sub-Distributor</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#9B9B9B] uppercase mb-1">
                Projected Monthly Volume
              </label>
              <select
                value={formData.monthlyVolume}
                onChange={(e) => setFormData({ ...formData, monthlyVolume: e.target.value })}
                className="w-full bg-[#080808] border border-[#2A2A2A] rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
              >
                <option value="5 - 20 Units / month (Sample & Boutique)">5 - 20 Units / month</option>
                <option value="20 - 50 Units / month (Standard Retailer)">20 - 50 Units / month</option>
                <option value="50 - 150 Units / month (Volume Store)">50 - 150 Units / month</option>
                <option value="150+ Units / month (Master Dealer)">150+ Units / month (Master Dealer)</option>
              </select>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 bg-[#25D366] text-black font-bold rounded-xl text-xs sm:text-sm hover:bg-[#20ba59] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Submit Dealer Application via WhatsApp</span>
              </button>
              <p className="text-[10px] text-[#777777] text-center mt-2">
                *Verified B2B dealers receive daily morning rate card broadcasts before public release.
              </p>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}
