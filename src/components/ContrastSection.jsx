import React, { useState, useEffect, useRef } from 'react';
import { useBusiness } from '../context/BusinessContext';
import {
  Star,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Truck,
  FileCheck2,
  ArrowRight,
  Sparkles,
  Award,
  Package,
  Layers,
  Zap,
  RotateCw,
  Clock,
  Activity
} from 'lucide-react';

// Ease Out Exponential curve for silky-smooth decelerating count-up
function easeOutExpo(x) {
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
}

// Individual Animated Metric Card Component
function AnimatedMetricCard({
  icon: Icon,
  type = 'single', // 'single' | 'range'
  target, // number or [num1, num2]
  decimals = 0,
  suffix = '',
  label,
  sublabel,
  badgeText,
  barPercent = 100,
  delay = 0,
  isInView,
  replayKey
}) {
  const [progress, setProgress] = useState(0);
  const [cardHover, setCardHover] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    if (!isInView) {
      setProgress(0);
      return;
    }

    let startTimestamp = null;
    let animationFrameId;
    const duration = 1800; // 1.8 seconds smooth count-up

    // Respect user's motion preference if reduced motion is requested
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setProgress(1);
      return;
    }

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const linearProgress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutExpo(linearProgress);

      setProgress(easedProgress);

      if (linearProgress < 1) {
        animationFrameId = requestAnimationFrame(step);
      }
    };

    // Stagger start using requestAnimationFrame timeout
    const timeoutId = setTimeout(() => {
      animationFrameId = requestAnimationFrame(step);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, replayKey, delay]);

  // Compute animated text display
  let displayValue = '';
  if (type === 'range' && Array.isArray(target)) {
    const startVal = Math.round(target[0] * progress);
    const endVal = Math.round(target[1] * progress);
    displayValue = `${startVal}–${endVal}${suffix}`;
  } else {
    const current = (target * progress).toFixed(decimals);
    displayValue = `${current}${suffix}`;
  }

  // Handle card click or hover to trigger a quick replay for tactile joy
  const handleCardInteraction = () => {
    setCardHover(true);
    setTimeout(() => setCardHover(false), 800);
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleCardInteraction}
      style={{
        transitionDelay: `${delay}ms`
      }}
      className={`group relative bg-white rounded-2xl p-4 sm:p-5 border border-[#E5DFD5] shadow-sm hover:shadow-xl metric-glow-card metric-gleam-container transition-all duration-500 transform ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Top Accent Gradient Line that glows on hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] via-[#E5C07B] to-[#10B981] opacity-75 group-hover:opacity-100 transition-opacity" />

      {/* Card Header: Icon Badge & Live Pulse Indicator */}
      <div className="flex items-center justify-between mb-3.5">
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#F6F3EC] border border-[#E5DFD5] group-hover:border-[#D4AF37]/60 group-hover:bg-[#FFFDF7] flex items-center justify-center text-[#967415] transition-all transform group-hover:scale-110">
          <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
        </div>

        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-[10px] font-bold text-emerald-800">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 live-pulse-indicator" />
          <span>{badgeText}</span>
        </div>
      </div>

      {/* Dynamic Animated Number */}
      <div className="text-left my-2">
        <div className="flex items-baseline">
          <span className="text-2xl sm:text-3xl lg:text-3.5xl font-extrabold text-[#080808] font-heading tracking-tight tabular-nums group-hover:text-[#967415] transition-colors">
            {displayValue}
          </span>
        </div>

        {/* Dynamic Micro Progress Meter */}
        <div className="w-full h-1.5 bg-[#F0EBE3] rounded-full overflow-hidden my-2.5">
          <div
            className="h-full bg-gradient-to-r from-[#B89025] to-[#10B981] rounded-full transition-all duration-300"
            style={{
              width: `${Math.min(progress * barPercent, 100)}%`
            }}
          />
        </div>

        {/* Primary Metric Label */}
        <span className="text-xs sm:text-[13px] text-[#222222] font-extrabold block leading-snug">
          {label}
        </span>

        {/* Secondary Sublabel */}
        <span className="text-[10px] sm:text-[11px] text-[#666666] font-medium block mt-0.5">
          {sublabel}
        </span>
      </div>

      {/* Subtle bottom indicator badge on hover */}
      <div className="mt-2 pt-2 border-t border-[#F5F1EA] flex items-center justify-between text-[9px] text-[#888888]">
        <span className="uppercase font-semibold tracking-wider text-[#A38638]">Mobile Mall SLA</span>
        <span className="text-emerald-700 font-bold group-hover:underline">100% Certified</span>
      </div>
    </div>
  );
}

export default function ContrastSection() {
  const { setIsDealerModalOpen, setIsStockSheetModalOpen, generateWhatsAppUrl } = useBusiness();
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [replayKey, setReplayKey] = useState(0);
  const [isReplaying, setIsReplaying] = useState(false);

  // Trigger animations when the section enters the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleReplay = () => {
    setIsReplaying(true);
    setReplayKey((k) => k + 1);
    setTimeout(() => setIsReplaying(false), 900);
  };

  const handleWhatsAppPartner = () => {
    const msg = `Hello Mobile Mall Wholesale Desk. I am an electronics retailer interested in opening an authorized wholesale account.`;
    window.open(generateWhatsAppUrl(msg), '_blank');
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden map-blueprint-bg text-[#141414] py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E2DDD3]"
    >
      {/* Giant Watermark Typography: "W H O L E S A L E" */}
      <div className="section-watermark-light">
        WHOLESALE
      </div>

      <div className="max-w-5xl mx-auto relative z-10 space-y-12">
        {/* Section Header: About Us */}
        <div
          className={`text-center max-w-3xl mx-auto space-y-3 transition-all duration-700 transform ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E5C07B]/30 border border-[#D4AF37]/40 text-[#8C6D1F] text-xs font-black uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Mobile Mall</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#080808] tracking-tight font-heading">
            YOUR PARTNER IN MOBILE <span className="text-[#A37B1B]">WHOLESALE</span>
          </h2>

          <p className="text-sm sm:text-base text-[#444444] leading-relaxed">
            Mobile Mall is a wholesale-focused mobile and tablet business connecting retailers, resellers and business buyers with mobile phone, tablet and iPad sourcing opportunities. Our focus is on helping businesses explore products and submit their bulk purchase requirements.
          </p>
        </div>

        {/* Floating Verified Retailer Review Card */}
        <div
          className={`max-w-2xl mx-auto bg-white rounded-2xl p-6 sm:p-7 shadow-xl border border-[#E5DFD5] relative transition-all duration-700 delay-100 transform ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="px-2.5 py-1 rounded-full text-[11px] font-black bg-emerald-50 text-emerald-800 border border-emerald-200">
              ✓ Verified Wholesale Partner
            </span>
            <div className="flex items-center gap-1 text-[#E5C07B]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current text-[#D4AF37]" />
              ))}
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#333333] leading-relaxed italic mb-4 font-normal">
            "We source 60 to 80 master cartons of iPhone and Galaxy devices every month from Mobile Mall. Every carton arrives factory sealed with clean IMEI verification and full GST proforma. They've been our most dependable wholesale distribution partner for 3 years running."
          </p>

          <div className="flex items-center gap-3 pt-3 border-t border-[#F0EBE3]">
            <div className="w-10 h-10 rounded-full bg-[#05130E] text-[#E5C07B] font-bold text-xs flex items-center justify-center shadow-md">
              VK
            </div>
            <div>
              <span className="text-xs font-extrabold text-[#080808] block">Vikas K.</span>
              <span className="text-[11px] text-[#666666] block">Proprietor, Apex Mobile Store Chain (Delhi NCR)</span>
            </div>
          </div>
        </div>

        {/* 4 Wholesale Metrics Matrix with Number Motion & Interactive Animations */}
        <div className="space-y-4">
          {/* Section Sub-bar with Live Pulse and Replay Motion Trigger */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-1">
            <div className="flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-black text-[#080808] uppercase tracking-wider">
                Live Wholesale Verification Metrics
              </span>
              <span className="text-[11px] text-[#666666] hidden md:inline">
                (Real-time SLA tracking across IMEI, Dispatch, Inventory & Dealer Margin)
              </span>
            </div>

            {/* Replay Motion Button */}
            <button
              onClick={handleReplay}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#E5DFD5] hover:border-[#D4AF37] text-[#666666] hover:text-[#080808] text-xs font-bold shadow-sm transition-all hover:shadow active:scale-95 cursor-pointer"
              title="Click to replay number motion"
            >
              <RotateCw className={`w-3.5 h-3.5 text-[#A38638] ${isReplaying ? 'animate-spin' : ''}`} />
              <span>Replay Motion</span>
            </button>
          </div>

          {/* 4 Metric Cards Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {/* Card 1: 99.8% Clean IMEI Verification */}
            <AnimatedMetricCard
              icon={ShieldCheck}
              type="single"
              target={99.8}
              decimals={1}
              suffix="%"
              label="Clean IMEI Verification"
              sublabel="GSX Whitelisted"
              badgeText="GSX Whitelist"
              barPercent={99.8}
              delay={0}
              isInView={isInView}
              replayKey={replayKey}
            />

            {/* Card 2: 24h Proforma & Dispatch SLA */}
            <AnimatedMetricCard
              icon={Clock}
              type="single"
              target={24}
              decimals={0}
              suffix="h"
              label="Proforma & Dispatch SLA"
              sublabel="Locked Stock Allocation"
              badgeText="Locked SLA"
              barPercent={100}
              delay={120}
              isInView={isInView}
              replayKey={replayKey}
            />

            {/* Card 3: 100+ Lots Daily Master Cartons */}
            <AnimatedMetricCard
              icon={Package}
              type="single"
              target={100}
              decimals={0}
              suffix="+ Lots"
              label="Daily Master Cartons"
              sublabel="Ex-Warehouse Intake"
              badgeText="Active Intake"
              barPercent={100}
              delay={240}
              isInView={isInView}
              replayKey={replayKey}
            />

            {/* Card 4: 18–24% Retailer Margin Spreads */}
            <AnimatedMetricCard
              icon={TrendingUp}
              type="range"
              target={[18, 24]}
              decimals={0}
              suffix="%"
              label="Retailer Margin Spreads"
              sublabel="Protected Dealer Margins"
              badgeText="Protected Spread"
              barPercent={94}
              delay={360}
              isInView={isInView}
              replayKey={replayKey}
            />
          </div>
        </div>

        {/* Why Choose Mobile Mall: Built Around Your Wholesale Business Needs */}
        <div id="why-choose-us" className="max-w-2xl mx-auto space-y-4 pt-4 scroll-mt-24">
          <div className="text-center space-y-1 mb-2">
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#080808] tracking-tight font-heading">
              BUILT AROUND YOUR WHOLESALE BUSINESS NEEDS
            </h3>
            <p className="text-xs text-[#666666]">
              A specialized sourcing workflow built for mobile retailers, resellers and corporate buyers.
            </p>
          </div>

          <div className="space-y-2.5">
            <div className="bg-white rounded-xl p-3.5 border border-[#E5DFD5] hover:border-[#D4AF37]/60 hover:shadow-md hover:translate-x-1 transition-all duration-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#222222] group">
              <div>
                <span className="font-extrabold text-[#080808] group-hover:text-[#A37B1B] transition-colors block text-sm">
                  1. WHOLESALE-FOCUSED BUSINESS
                </span>
                <span className="text-[#555555]">
                  An enquiry experience designed for retailers, resellers and bulk buyers.
                </span>
              </div>
              <span className="text-[#967415] font-black text-[11px] self-start sm:self-auto bg-[#FDF9ED] px-2 py-0.5 rounded border border-[#E5C07B]/40 group-hover:bg-[#F3E5AB]/40">
                B2B Core
              </span>
            </div>

            <div className="bg-white rounded-xl p-3.5 border border-[#E5DFD5] hover:border-[#D4AF37]/60 hover:shadow-md hover:translate-x-1 transition-all duration-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#222222] group">
              <div>
                <span className="font-extrabold text-[#080808] group-hover:text-[#A37B1B] transition-colors block text-sm">
                  2. MOBILE & TABLET SOURCING
                </span>
                <span className="text-[#555555]">
                  Explore smartphones, tablets and iPads for your business requirements.
                </span>
              </div>
              <span className="text-[#967415] font-black text-[11px] self-start sm:self-auto bg-[#FDF9ED] px-2 py-0.5 rounded border border-[#E5C07B]/40 group-hover:bg-[#F3E5AB]/40">
                Devices
              </span>
            </div>

            <div className="bg-white rounded-xl p-3.5 border border-[#E5DFD5] hover:border-[#D4AF37]/60 hover:shadow-md hover:translate-x-1 transition-all duration-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#222222] group">
              <div>
                <span className="font-extrabold text-[#080808] group-hover:text-[#A37B1B] transition-colors block text-sm">
                  3. BULK QUOTATION ENQUIRIES
                </span>
                <span className="text-[#555555]">
                  Share your preferred products and quantities to request pricing information.
                </span>
              </div>
              <span className="text-[#967415] font-black text-[11px] self-start sm:self-auto bg-[#FDF9ED] px-2 py-0.5 rounded border border-[#E5C07B]/40 group-hover:bg-[#F3E5AB]/40">
                Quotations
              </span>
            </div>

            <div className="bg-white rounded-xl p-3.5 border border-[#E5DFD5] hover:border-[#D4AF37]/60 hover:shadow-md hover:translate-x-1 transition-all duration-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#222222] group">
              <div>
                <span className="font-extrabold text-[#080808] group-hover:text-[#A37B1B] transition-colors block text-sm">
                  4. DIRECT BUSINESS COMMUNICATION
                </span>
                <span className="text-[#555555]">
                  Connect with Mobile Mall to discuss product requirements and availability.
                </span>
              </div>
              <span className="text-[#967415] font-black text-[11px] self-start sm:self-auto bg-[#FDF9ED] px-2 py-0.5 rounded border border-[#E5C07B]/40 group-hover:bg-[#F3E5AB]/40">
                Direct Desk
              </span>
            </div>
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="text-center pt-2">
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-xl bg-[#05130E] text-white hover:bg-[#143828] transition-all text-xs sm:text-sm font-extrabold shadow-md inline-flex items-center gap-2 transform hover:-translate-y-0.5 hover:shadow-lg cursor-pointer"
          >
            <span>GET WHOLESALE QUOTE</span>
            <ArrowRight className="w-4 h-4 text-[#E5C07B]" />
          </a>
        </div>
      </div>
    </section>
  );
}
