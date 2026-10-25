import React, { useState, useMemo } from 'react';
import { useBusiness } from '../context/BusinessContext';
import {
  HelpCircle,
  Search,
  ChevronDown,
  ChevronUp,
  Truck,
  ShieldCheck,
  TrendingDown,
  CreditCard,
  Building2,
  PackageCheck,
  MessageCircle,
  PhoneCall,
  Sparkles,
  CheckCircle2,
  Clock,
  Boxes,
  FileText,
  BadgePercent
} from 'lucide-react';

const FAQ_DATA = [
  // 1. Shipping & Logistics
  {
    id: 'shipping-cutoff',
    category: 'shipping',
    categoryLabel: 'Shipping & Transit',
    question: 'What are the daily dispatch cut-off times and delivery timelines?',
    answer:
      'Orders confirmed with payment receipt by 4:00 PM IST on any business day are dispatched on the same day. Transit timelines depend on your location:',
    details: [
      'Express Metro Delivery (Mumbai, Delhi NCR, Bengaluru, Hyderabad, Pune, Chennai): Delivered within 24 to 48 hours.',
      'Pan-India Tier 2 & Tier 3 Hubs: Delivered within 2 to 4 business days via insured priority express air cargo.',
      'Local Counter Pickup: Registered retailers in Ahmedabad can collect sealed stock directly from our central depot (L1-L3 Murtimant Complex, Relief Rd) within 1 hour of order confirmation.'
    ],
    tag: 'Same-Day Dispatch',
    icon: Truck
  },
  {
    id: 'shipping-insurance',
    category: 'shipping',
    categoryLabel: 'Shipping & Transit',
    question: 'How are transit security, courier insurance, and carton damages handled?',
    answer:
      'Every consignment dispatched from Mobile Mall is 100% insured against loss, theft, and transit damage from our warehouse dock until physical sign-off at your store.',
    details: [
      'All master cartons are sealed with heavy-duty tamper-evident holographic security tape.',
      'We partner exclusively with tier-1 logistics networks: Blue Dart Apex Air, Delhivery Express, FedEx, and DHL Express.',
      'Every shipment is assigned a live GPS tracking docket code shared instantly on your WhatsApp trade window upon handover.'
    ],
    tag: '100% Insured Cargo',
    icon: ShieldCheck
  },

  // 2. Warranty & IMEI Policies
  {
    id: 'warranty-authenticity',
    category: 'warranty',
    categoryLabel: 'Warranty & IMEI',
    question: 'Are all smartphones and tablets 100% original, brand-sealed with official manufacturer warranty?',
    answer:
      'Yes, 100% strictly brand-new, factory-sealed OEM devices only. We have a zero-tolerance policy against refurbished, repackaged, or grey-market inventory.',
    details: [
      'All units arrive with pristine manufacturer seal stickers intact (Apple pull-tabs, Samsung security tape, OnePlus seals).',
      'Each device carries the standard 1-Year Official Manufacturer Warranty valid across all authorized brand service centers pan-India.',
      'Every device is GSMA-certified with clean Indian regulatory certifications (BIS certified).'
    ],
    tag: '1-Year Brand Warranty',
    icon: CheckCircle2
  },
  {
    id: 'warranty-imei-invoice',
    category: 'warranty',
    categoryLabel: 'Warranty & IMEI',
    question: 'Do you provide printed IMEI and serial numbers on the official GST invoice?',
    answer:
      'Yes. To protect our retail partners and make retail resale effortless, all device serial numbers and clean 15-digit IMEI numbers are digitally captured and itemized directly on your official B2B GST tax invoice.',
    details: [
      'Allows your walk-in retail customers to verify warranty coverage at any authorized brand service center without hassle.',
      'Eliminates billing discrepancies and ensures smooth claim settlement if a consumer visits an Apple Genius Bar or Samsung Service Center.',
      'Full compliance with Indian GST and consumer protection norms.'
    ],
    tag: 'Printed IMEI on Tax Invoice',
    icon: FileText
  },
  {
    id: 'warranty-doa',
    category: 'warranty',
    categoryLabel: 'Warranty & IMEI',
    question: 'What is the policy for Dead-On-Arrival (DOA) or factory defective units?',
    answer:
      'Because all devices are 100% brand-sealed originals, they fall directly under official OEM manufacturer DOA replacement terms.',
    details: [
      'If an unboxed device has a factory hardware defect out-of-the-box, the retailer or end customer can obtain a DOA certificate or instant replacement from the brand’s authorized service center.',
      'Mobile Mall provides full back-office escalation and verification documentation if any authorized center requests distributor confirmation.'
    ],
    tag: 'OEM DOA Coverage',
    icon: ShieldCheck
  },

  // 3. Bulk Ordering Discounts & Pricing Tiers
  {
    id: 'pricing-tiers',
    category: 'pricing',
    categoryLabel: 'Bulk Discounts & Tiers',
    question: 'How do wholesale volume discounts and pricing tiers work?',
    answer:
      'We offer transparent, slab-based wholesale discounts structured to maximize your retail profit margins:',
    details: [
      'Tier 1 (5 – 24 Units): Starter Wholesale Slab — Ideal for boutique retail shops, trial orders, and weekly restocks.',
      'Tier 2 (25 – 99 Units): Master Carton Bulk Slab — Preferred for multi-counter mobile stores, with additional cash-discount incentives.',
      'Tier 3 (100+ Units): High-Volume Enterprise Slab — Maximum wholesale discount tier designed for regional retail chains and institutional procurement.'
    ],
    tag: '3-Tier Slab Pricing',
    icon: BadgePercent
  },
  {
    id: 'mixed-models',
    category: 'pricing',
    categoryLabel: 'Bulk Discounts & Tiers',
    question: 'Can I mix and match different smartphone brands and models to qualify for bulk rates?',
    answer:
      'Yes! You do NOT need to buy full single-SKU master cartons. You are free to mix iPhones, Samsung Galaxy S & A series, OnePlus, tablets, and iPads in the same wholesale purchase order to reach the minimum order volume.',
    details: [
      'Enables retailers with varying customer demand to maintain balanced inventory without high capital lock-in.',
      'Volume slabs calculate across the combined total units in your purchase order.'
    ],
    tag: 'Mix & Match Allowed',
    icon: Boxes
  },
  {
    id: 'daily-rate-lock',
    category: 'pricing',
    categoryLabel: 'Bulk Discounts & Tiers',
    question: 'When is the daily rate sheet updated, and how long is a wholesale quote locked?',
    answer:
      'Due to dynamic market conditions and daily distributor intake, our Wholesale Rate Sheet is updated every morning at 09:30 AM IST.',
    details: [
      'Quotes generated through our Wholesale Desk or Proforma Invoice are locked for 24 hours from issuance.',
      'Subscribing to our WhatsApp Broadcast delivers the daily price card directly to your phone every morning.'
    ],
    tag: '09:30 AM Daily Rate Lock',
    icon: Clock
  },

  // 4. Ordering & Payment Terms
  {
    id: 'moq-requirement',
    category: 'ordering',
    categoryLabel: 'Ordering & Invoicing',
    question: 'What is the Minimum Order Quantity (MOQ) for wholesale purchasing?',
    answer:
      'Our baseline MOQ is just 5 units per consignment (mixed models and brands allowed). We intentionally keep our entry threshold accessible so growing electronics retailers can buy at genuine distributor rates without heavy initial capital outlay.',
    details: [
      'First-time retailers can start with a 5-unit trial order.',
      'Repeat volume buyers can scale seamlessly into 25+ or 100+ master carton allotments.'
    ],
    tag: 'Low 5-Unit MOQ',
    icon: PackageCheck
  },
  {
    id: 'payment-methods',
    category: 'ordering',
    categoryLabel: 'Ordering & Invoicing',
    question: 'What payment methods and banking channels are accepted?',
    answer:
      'To adhere to strict wholesale compliance and provide transparent GST credit, all transactions are processed through official banking channels:',
    details: [
      'RTGS / NEFT / IMPS transfers directly to Mobile Mall’s corporate current account.',
      'Corporate CMS (Cash Management System) transfers and bank drafts against formal Proforma Invoices.',
      'We do not accept third-party UPI or unverified personal remittances for inter-state wholesale despatches.'
    ],
    tag: '100% Official Banking',
    icon: CreditCard
  },
  {
    id: 'gst-itc-credit',
    category: 'ordering',
    categoryLabel: 'Ordering & Invoicing',
    question: 'Do you issue compliant 18% GST tax invoices with Input Tax Credit (ITC)?',
    answer:
      'Yes, 100%. Every single sale is backed by an authentic B2B GST tax invoice containing your valid GSTIN number.',
    details: [
      'All 18% GST tax values are itemized clearly for effortless Input Tax Credit (ITC) reconciliation in your GSTR-2B and GSTR-3B filings.',
      'Invoices contain complete HSN codes (8517 for smartphones/cellular devices).',
      'Electronic E-Way Bills generated automatically for all interstate shipments exceeding statutory thresholds.'
    ],
    tag: '100% GST ITC Pass-through',
    icon: FileText
  },

  // 5. Store Hub & In-Person Inspection
  {
    id: 'physical-inspection',
    category: 'hub',
    categoryLabel: 'Physical Hub Visits',
    question: 'Can I visit your Ahmedabad wholesale hub to physically inspect stock before buying?',
    answer:
      'Yes, absolutely. We welcome all retail owners, procurement executives, and corporate buyers to visit our central distribution office in Ahmedabad.',
    details: [
      'Address: L1, L2, L3, Murtimant Complex, Relief Rd, Opp. Rupam Cinema, Ahmedabad, Gujarat 380001.',
      'Operating Hours: Monday through Saturday, 10:00 AM – 09:00 PM IST.',
      'You can physically verify factory seals, inspect packaging, review live inventory lots, and settle accounts for immediate counter collection.'
    ],
    tag: 'Relief Rd Ahmedabad Hub',
    icon: Building2
  }
];

const CATEGORIES = [
  { id: 'all', label: 'All Inquiries' },
  { id: 'shipping', label: 'Shipping & Transit' },
  { id: 'warranty', label: 'Warranty & IMEI' },
  { id: 'pricing', label: 'Bulk Discounts & Tiers' },
  { id: 'ordering', label: 'Ordering & Invoicing' },
  { id: 'hub', label: 'Store Visit' }
];

export default function FAQSection() {
  const { config, generateWhatsAppUrl, setIsDealerModalOpen } = useBusiness();
  const phoneDisplay = config?.wholesaleDeskPhone || config?.whatsappNumber || config?.phone || '+91 98255 55005';
  const phoneTel = phoneDisplay.replace(/\s+/g, '');
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIds, setOpenIds] = useState(() => new Set(['shipping-cutoff', 'warranty-authenticity', 'pricing-tiers']));

  const toggleAccordion = (id) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const expandAll = () => {
    setOpenIds(new Set(FAQ_DATA.map((item) => item.id)));
  };

  const collapseAll = () => {
    setOpenIds(new Set());
  };

  // Filter questions based on category & search term
  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const questionMatch = item.question.toLowerCase().includes(q);
      const answerMatch = item.answer.toLowerCase().includes(q);
      const tagMatch = item.tag.toLowerCase().includes(q);
      const detailsMatch = item.details?.some((d) => d.toLowerCase().includes(q));

      return questionMatch || answerMatch || tagMatch || detailsMatch;
    });
  }, [activeCategory, searchQuery]);

  const handleWhatsAppInquiry = (questionText) => {
    const text = `Hello Mobile Mall Wholesale Desk. I have a specific question regarding: "${questionText}". Please provide details for my business bulk procurement.`;
    window.open(generateWhatsAppUrl(text), '_blank');
  };

  const handleGeneralHelpWhatsApp = () => {
    const text = `Hello Mobile Mall Trade Desk. I am reviewing your wholesale FAQ and need assistance with custom bulk pricing and dispatch schedules for my store.`;
    window.open(generateWhatsAppUrl(text), '_blank');
  };

  return (
    <section id="faq" className="relative overflow-hidden bg-[#05130E] text-white py-16 sm:py-24 border-b border-[#143527] scroll-mt-20">
      
      {/* Background Watermark */}
      <div className="section-watermark select-none pointer-events-none">
        FAQ
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5C07B]/15 border border-[#E5C07B]/30 text-xs font-bold text-[#F3E5AB] uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-[#E5C07B]" />
            <span>B2B Wholesale Knowledge Base</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            FREQUENTLY ASKED <span className="gold-gradient-text">QUESTIONS</span>
          </h2>

          <p className="text-sm sm:text-base text-[#A3B8AD] leading-relaxed">
            Essential information for mobile retailers, showroom dealers, and bulk procurement officers. Everything you need to know about shipping timelines, warranty coverage, IMEI invoicing, and volume discount tiers.
          </p>

          {/* Quick Wholesale Confidence Metrics Bar */}
          <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
            <div className="emerald-card p-3 rounded-xl border border-[#143828]">
              <div className="flex items-center gap-2 text-[#E5C07B] mb-1">
                <Truck className="w-4 h-4" />
                <span className="text-xs font-black font-mono">4:00 PM IST</span>
              </div>
              <div className="text-[11px] text-[#A3B8AD] leading-tight">Same-Day Pan-India Dispatch Cutoff</div>
            </div>

            <div className="emerald-card p-3 rounded-xl border border-[#143828]">
              <div className="flex items-center gap-2 text-[#E5C07B] mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-xs font-black font-mono">100% SEALED</span>
              </div>
              <div className="text-[11px] text-[#A3B8AD] leading-tight">1-Year Official Brand OEM Warranty</div>
            </div>

            <div className="emerald-card p-3 rounded-xl border border-[#143828]">
              <div className="flex items-center gap-2 text-[#E5C07B] mb-1">
                <Boxes className="w-4 h-4" />
                <span className="text-xs font-black font-mono">5 UNITS MOQ</span>
              </div>
              <div className="text-[11px] text-[#A3B8AD] leading-tight">Mix Brands & Models in Single Order</div>
            </div>

            <div className="emerald-card p-3 rounded-xl border border-[#143828]">
              <div className="flex items-center gap-2 text-[#E5C07B] mb-1">
                <FileText className="w-4 h-4" />
                <span className="text-xs font-black font-mono">18% GST ITC</span>
              </div>
              <div className="text-[11px] text-[#A3B8AD] leading-tight">Full Tax Credit with Printed IMEIs</div>
            </div>
          </div>
        </div>

        {/* Search & Filter Controls */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A3B8AD]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search shipping, warranty, discounts, GST..."
                className="w-full pl-10 pr-4 py-2.5 bg-[#071A13] border border-[#143828] rounded-xl text-sm text-white placeholder-[#789283] focus:outline-none focus:border-[#E5C07B] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#A3B8AD] hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Expand / Collapse Actions */}
            <div className="flex items-center gap-2 text-xs self-end sm:self-auto">
              <button
                onClick={expandAll}
                className="px-3 py-1.5 rounded-lg bg-[#071A13] border border-[#143828] text-[#A3B8AD] hover:text-white hover:border-[#E5C07B]/40 transition-colors"
              >
                Expand All
              </button>
              <button
                onClick={collapseAll}
                className="px-3 py-1.5 rounded-lg bg-[#071A13] border border-[#143828] text-[#A3B8AD] hover:text-white hover:border-[#E5C07B]/40 transition-colors"
              >
                Collapse All
              </button>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full whitespace-nowrap font-medium transition-all ${
                    isActive
                      ? 'bg-[#E5C07B] text-[#05130E] font-bold shadow-md shadow-[#E5C07B]/20'
                      : 'bg-[#071A13] text-[#A3B8AD] border border-[#143828] hover:border-[#E5C07B]/40 hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* FAQ Accordion List */}
        {filteredFaqs.length === 0 ? (
          <div className="emerald-card p-10 rounded-2xl text-center space-y-3">
            <HelpCircle className="w-10 h-10 text-[#E5C07B] mx-auto opacity-70" />
            <h3 className="text-lg font-bold text-white">No matching wholesale inquiries found</h3>
            <p className="text-sm text-[#A3B8AD] max-w-md mx-auto">
              Try searching with another keyword or connect with our Trade Desk directly on WhatsApp for real-time assistance.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#071A13] border border-[#E5C07B]/50 text-xs font-bold text-[#E5C07B] hover:bg-[#E5C07B] hover:text-[#05130E] transition-all"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredFaqs.map((faq) => {
              const isOpen = openIds.has(faq.id);
              const Icon = faq.icon;

              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-[#071A13] border-[#E5C07B]/60 shadow-xl'
                      : 'bg-[#071A13]/60 border-[#143828] hover:border-[#1F533C]'
                  }`}
                >
                  {/* Header / Question Accordion Trigger */}
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full text-left p-5 sm:p-6 flex items-start sm:items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start sm:items-center gap-3.5 sm:gap-4 flex-1">
                      <div
                        className={`w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center transition-colors ${
                          isOpen
                            ? 'bg-[#E5C07B] text-[#05130E]'
                            : 'bg-[#0A2219] text-[#E5C07B] border border-[#143828]'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-[#E5C07B] bg-[#E5C07B]/10 px-2 py-0.5 rounded border border-[#E5C07B]/20">
                            {faq.tag}
                          </span>
                          <span className="text-[11px] text-[#789283]">
                            • {faq.categoryLabel}
                          </span>
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#F3E5AB]">
                          {faq.question}
                        </h3>
                      </div>
                    </div>

                    <div className="mt-1 sm:mt-0 flex-shrink-0 w-8 h-8 rounded-lg bg-[#05130E] border border-[#143828] flex items-center justify-center text-[#A3B8AD]">
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-[#E5C07B]" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  {/* Body Content */}
                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 pt-1 border-t border-[#143828]/60 space-y-4">
                      <p className="text-sm sm:text-base text-[#D4E2DA] leading-relaxed">
                        {faq.answer}
                      </p>

                      {faq.details && faq.details.length > 0 && (
                        <ul className="space-y-2.5 pt-1">
                          {faq.details.map((detail, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#A3B8AD] leading-relaxed">
                              <CheckCircle2 className="w-4 h-4 text-[#E5C07B] flex-shrink-0 mt-0.5" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Direct WhatsApp Question Prompt */}
                      <div className="pt-3 flex flex-wrap items-center justify-between gap-3 border-t border-[#143828]/40">
                        <span className="text-[11px] text-[#789283]">
                          Need clarification on your specific shipment?
                        </span>
                        <button
                          onClick={() => handleWhatsAppInquiry(faq.question)}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E5C07B] hover:text-[#F3E5AB] transition-colors"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>Ask Trade Desk on WhatsApp</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Direct CTA Help Box */}
        <div className="mt-12 sm:mt-16 rounded-2xl bg-gradient-to-r from-[#071A13] via-[#0A2219] to-[#071A13] border border-[#E5C07B]/40 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5C07B]/15 border border-[#E5C07B]/30 text-xs font-bold text-[#F3E5AB]">
                <Sparkles className="w-3.5 h-3.5 text-[#E5C07B]" />
                <span>Dedicated B2B Sourcing Support</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white font-heading">
                Have a Custom Bulk Lot or Tender Requirement?
              </h3>
              <p className="text-xs sm:text-sm text-[#A3B8AD] max-w-xl">
                Our wholesale managers are available on WhatsApp and phone for instant lot availability, corporate tender bids, and same-day bank proforma invoices.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 flex-shrink-0">
              <button
                onClick={handleGeneralHelpWhatsApp}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-lg shadow-[#25D366]/20 transition-all hover:scale-[1.02]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </button>

              <a
                href={`tel:${phoneTel}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#05130E] border border-[#E5C07B]/60 text-[#E5C07B] hover:bg-[#E5C07B] hover:text-[#05130E] font-bold text-sm transition-all"
              >
                <PhoneCall className="w-4 h-4" />
                <span>{phoneDisplay}</span>
              </a>

              <button
                onClick={() => setIsDealerModalOpen?.(true)}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#E5C07B] hover:bg-[#d4ae6a] text-[#05130E] font-extrabold text-sm transition-all hover:scale-[1.02] shadow-md shadow-[#E5C07B]/20"
              >
                <span>Register Store</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
