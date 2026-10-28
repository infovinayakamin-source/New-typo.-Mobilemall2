import React, { useState } from 'react';
import { useBusiness } from '../context/BusinessContext';
import {
  X,
  SlidersHorizontal,
  Save,
  RotateCcw,
  CheckCircle2,
  Info,
  Phone,
  MessageCircle,
  MapPin,
  Mail,
  FileText,
  Clock
} from 'lucide-react';

export default function ConfigSettingsModal() {
  const { config, updateConfig, resetConfig, isConfigModalOpen, setIsConfigModalOpen } = useBusiness();

  const [formData, setFormData] = useState({ ...config });
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isConfigModalOpen) return null;

  const handleSave = (e) => {
    e.preventDefault();
    updateConfig(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      setIsConfigModalOpen(false);
    }, 1000);
  };

  const handleReset = () => {
    resetConfig();
    setIsConfigModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#141414] border border-[#2A2A2A] rounded-3xl max-w-xl w-full text-white overflow-hidden shadow-2xl relative my-6">
        
        {/* Close Button */}
        <button
          onClick={() => setIsConfigModalOpen(false)}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#080808] text-[#9B9B9B] hover:text-white flex items-center justify-center border border-[#2A2A2A]"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="p-6 bg-[#080808] border-b border-[#2A2A2A]">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] text-xs font-bold uppercase mb-2">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Store Configuration</span>
          </div>
          <h2 className="text-xl font-extrabold text-white">
            B2B Business Information & Contact Settings
          </h2>
          <p className="text-xs text-[#9B9B9B] mt-1">
            Customize official business placeholders (WhatsApp, phone, address, and GST) to match your company's credentials.
          </p>
        </div>

        {/* Notice Callout */}
        <div className="px-6 pt-4">
          <div className="bg-[#1C1C1C] border border-[#D4AF37]/30 rounded-xl p-3 flex items-start gap-2.5 text-xs text-[#D4AF37]">
            <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <p className="text-[#E8C978] leading-relaxed">
              Placeholders adhere to strict authenticity guidelines. Update these fields with your registered business credentials at any time.
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSave} className="p-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-[#9B9B9B] uppercase mb-1">
                Official WhatsApp Number:
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={formData.whatsappNumber}
                  onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                  className="w-full bg-[#080808] border border-[#2A2A2A] rounded-xl pl-9 pr-3 py-2 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                />
                <MessageCircle className="w-4 h-4 text-[#25D366] absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#9B9B9B] uppercase mb-1">
                Wholesale Desk Phone:
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={formData.wholesaleDeskPhone}
                  onChange={(e) => setFormData({ ...formData, wholesaleDeskPhone: e.target.value })}
                  className="w-full bg-[#080808] border border-[#2A2A2A] rounded-xl pl-9 pr-3 py-2 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                />
                <Phone className="w-4 h-4 text-[#777777] absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-[#9B9B9B] uppercase mb-1">
                Authorized Contact Person:
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={formData.contactPerson || ''}
                  onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                  placeholder="e.g. Vicky Gupta"
                  className="w-full bg-[#080808] border border-[#2A2A2A] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#9B9B9B] uppercase mb-1">
                Legal Business Name:
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={formData.legalBusinessName || ''}
                  onChange={(e) => setFormData({ ...formData, legalBusinessName: e.target.value })}
                  placeholder="e.g. Mobile Mall2"
                  className="w-full bg-[#080808] border border-[#2A2A2A] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-[#9B9B9B] uppercase mb-1">
                Official Invoicing Email:
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={formData.officialEmail}
                  onChange={(e) => setFormData({ ...formData, officialEmail: e.target.value })}
                  className="w-full bg-[#080808] border border-[#2A2A2A] rounded-xl pl-9 pr-3 py-2 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                />
                <Mail className="w-4 h-4 text-[#777777] absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#9B9B9B] uppercase mb-1">
                Website URL:
              </label>
              <div className="relative">
                <input
                  type="url"
                  value={formData.website || ''}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  placeholder="https://mobilemall2.com/"
                  className="w-full bg-[#080808] border border-[#2A2A2A] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#9B9B9B] uppercase mb-1">
              Warehouse / Hub Address:
            </label>
            <div className="relative">
              <input
                type="text"
                value={formData.warehouseAddress}
                onChange={(e) => setFormData({ ...formData, warehouseAddress: e.target.value })}
                className="w-full bg-[#080808] border border-[#2A2A2A] rounded-xl pl-9 pr-3 py-2 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
              />
              <MapPin className="w-4 h-4 text-[#777777] absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#9B9B9B] uppercase mb-1">
              Google Business Profile (GMB) / Map Link:
            </label>
            <div className="relative">
              <input
                type="url"
                value={formData.googleBusinessProfileUrl || ''}
                onChange={(e) => setFormData({ ...formData, googleBusinessProfileUrl: e.target.value })}
                placeholder="https://share.google/..."
                className="w-full bg-[#080808] border border-[#2A2A2A] rounded-xl pl-9 pr-3 py-2 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
              />
              <MapPin className="w-4 h-4 text-[#D4AF37] absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-[#9B9B9B] uppercase mb-1">
                City, State, Country:
              </label>
              <input
                type="text"
                value={formData.cityStateCountry}
                onChange={(e) => setFormData({ ...formData, cityStateCountry: e.target.value })}
                className="w-full bg-[#080808] border border-[#2A2A2A] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#9B9B9B] uppercase mb-1">
                Dispatch Operating Hours:
              </label>
              <input
                type="text"
                value={formData.operatingHours}
                onChange={(e) => setFormData({ ...formData, operatingHours: e.target.value })}
                className="w-full bg-[#080808] border border-[#2A2A2A] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
              />
            </div>
          </div>

          {/* Action buttons */}
          <div className="pt-3 border-t border-[#2A2A2A] flex items-center justify-between">
            <button
              type="button"
              onClick={handleReset}
              className="text-xs text-[#9B9B9B] hover:text-white flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset to Defaults</span>
            </button>

            <button
              type="submit"
              className="px-5 py-2.5 gold-gradient-btn rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-md"
            >
              <Save className="w-3.5 h-3.5" />
              <span>{savedSuccess ? 'Saved Successfully!' : 'Save Business Settings'}</span>
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
