import React, { useState, useRef, useEffect } from 'react';
import { useBusiness } from '../context/BusinessContext';
import {
  MessageCircle,
  FileSpreadsheet,
  Menu,
  X,
  Search,
  ChevronRight,
  Sparkles
} from 'lucide-react';

export default function Navbar({ onSearchChange, searchTerm }) {
  const {
    config,
    setIsStockSheetModalOpen,
    generateWhatsAppUrl
  } = useBusiness();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('Home');
  const [isFocused, setIsFocused] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const searchContainerRef = useRef(null);
  const searchInputRef = useRef(null);

  // Global ⌘K or Ctrl+K shortcut to focus search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        searchInputRef.current?.focus();
        setShowDropdown(true);
      } else if (e.key === 'Escape') {
        setShowDropdown(false);
        setIsFocused(false);
        searchInputRef.current?.blur();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Click outside listener to close search dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target)) {
        setShowDropdown(false);
        setIsFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectQuickSearch = (keyword) => {
    if (onSearchChange) {
      onSearchChange(keyword);
    }
    setShowDropdown(false);
    setIsFocused(false);
    const catalogueEl = document.getElementById('smartphones') || document.getElementById('tablets') || document.getElementById('about');
    if (catalogueEl) {
      catalogueEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Clean, focused, premium wholesale menu items including Contact Us & FAQ
  const menuItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About Us', href: '#about' },
    { name: 'Smartphones', href: '#smartphones' },
    { name: 'Tablets & iPads', href: '#tablets' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact Us', href: '#contact', isHighlight: true }
  ];

  const handleWhatsAppGeneralClick = () => {
    const text = `Hello Mobile Mall Wholesale Desk. I am an electronics retailer requesting today's wholesale rate sheet and master carton availability.`;
    window.open(generateWhatsAppUrl(text), '_blank');
  };

  const handleJoinBroadcast = () => {
    const text = `Hello Mobile Mall. Please add my number to your Daily 09:30 AM Wholesale Rate Broadcast list for retailers.`;
    window.open(generateWhatsAppUrl(text), '_blank');
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#05130E]/95 backdrop-blur-md border-b border-[#143527] transition-all">
      {/* Main Luxury Header Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Brand Logo & Wordmark */}
          <a href="#hero" className="flex items-center gap-3.5 flex-shrink-0 group">
            <div className="relative">
              <img
                src={config.logoUrl}
                alt="Mobile Mall Wholesale"
                className="w-12 h-12 rounded-full object-cover border-2 border-[#E5C07B]/80 group-hover:border-[#F3E5AB] shadow-lg shadow-[#E5C07B]/15 transition-all duration-300"
                onError={(e) => {
                  e.target.src = '/mobile-mall-logo.jpg';
                }}
              />
              <div className="absolute -bottom-1 -right-1 bg-[#E5C07B] text-[#05130E] text-[8px] font-black px-1.5 py-0.2 rounded-full uppercase tracking-tighter shadow-sm">
                B2B
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-white group-hover:text-[#F3E5AB] transition-colors font-heading">
                  MOBILE <span className="gold-gradient-text font-black">MALL</span>
                </span>
              </div>
              <p className="text-[10px] text-[#E5C07B] tracking-wider uppercase font-extrabold">
                Wholesale Mobiles • Tablets • iPads
              </p>
            </div>
          </a>

          {/* Premium Desktop Navigation Bar — Exactly 7 Menus */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {menuItems.map((item) => {
              const isActive = activeNav === item.name;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setActiveNav(item.name)}
                  className={`relative px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold tracking-wide transition-all duration-200 group ${
                    item.isHighlight
                      ? 'text-[#E5C07B] hover:text-white bg-[#0A2219]/80 border border-[#E5C07B]/40 hover:border-[#E5C07B]'
                      : isActive
                      ? 'text-[#F3E5AB] font-bold'
                      : 'text-[#C4D6CD] hover:text-[#E5C07B]'
                  }`}
                >
                  <span>{item.name}</span>
                  
                  {/* Subtle Underline Hover Glint */}
                  <span
                    className={`absolute bottom-0.5 left-3 right-3 h-[2px] bg-gradient-to-r from-transparent via-[#E5C07B] to-transparent transition-all duration-300 ${
                      isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Right Action Cluster — Featuring Premium Luxury Wholesale Search Box */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Premium Luxury Search Box */}
            <div className="relative" ref={searchContainerRef}>
              <div
                className={`relative flex items-center rounded-xl transition-all duration-300 ${
                  isFocused
                    ? 'bg-[#061F15] border-[#E5C07B] shadow-[0_0_22px_rgba(229,192,123,0.3)] ring-1 ring-[#E5C07B]/40'
                    : 'bg-[#071912]/90 hover:bg-[#0A2219] border-[#E5C07B]/35 hover:border-[#E5C07B]/70 shadow-[0_2px_12px_rgba(0,0,0,0.4)]'
                } border`}
              >
                {/* Gold Search Icon with Subtle Glow */}
                <div className="pl-3 pr-1 flex items-center pointer-events-none">
                  <Search
                    className={`w-4 h-4 transition-all duration-300 ${
                      isFocused ? 'text-[#F3E5AB] scale-110 drop-shadow-[0_0_6px_rgba(229,192,123,0.6)]' : 'text-[#E5C07B]'
                    }`}
                  />
                </div>

                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchTerm || ''}
                  onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
                  onFocus={() => {
                    setIsFocused(true);
                    setShowDropdown(true);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleSelectQuickSearch(searchTerm || '');
                    }
                  }}
                  placeholder="Search wholesale stock..."
                  className="w-32 sm:w-48 md:w-56 lg:w-64 xl:w-72 py-2 pr-12 bg-transparent text-xs sm:text-sm text-white placeholder-[#789686] focus:outline-none font-medium tracking-wide transition-all"
                />

                {/* Right Action: Clear Button or ⌘K Pill */}
                <div className="absolute right-2.5 flex items-center">
                  {searchTerm ? (
                    <button
                      onClick={() => {
                        if (onSearchChange) onSearchChange('');
                        searchInputRef.current?.focus();
                      }}
                      className="p-1 rounded-md text-[#789686] hover:text-white hover:bg-white/10 transition-colors"
                      title="Clear search"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <kbd className="hidden sm:inline-flex items-center gap-0.5 text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-[#030E09] text-[#E5C07B]/85 border border-[#E5C07B]/25 select-none shadow-sm">
                      <span>⌘</span>
                      <span>K</span>
                    </kbd>
                  )}
                </div>
              </div>

              {/* Luxury Spotlight Suggestions Dropdown */}
              {showDropdown && (
                <div className="absolute right-0 top-full mt-2 w-80 sm:w-96 bg-[#051610]/98 backdrop-blur-xl border border-[#E5C07B]/40 rounded-2xl p-4 shadow-2xl shadow-black/90 z-50 animate-fadeIn">
                  {/* Dropdown Header */}
                  <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[#143527]">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#E5C07B] uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5 text-[#E5C07B]" />
                      <span>Wholesale Inventory Search</span>
                    </div>
                    <span className="text-[10px] text-[#789686]">Instant Filter</span>
                  </div>

                  {/* Active query quick action */}
                  {searchTerm && searchTerm.trim() !== '' && (
                    <div className="mb-3">
                      <button
                        onClick={() => handleSelectQuickSearch(searchTerm)}
                        className="w-full text-left p-2.5 rounded-xl bg-[#0A241A] hover:bg-[#0E3224] border border-[#E5C07B]/35 hover:border-[#E5C07B] transition-all flex items-center justify-between group cursor-pointer"
                      >
                        <div>
                          <span className="text-[11px] text-[#789686] block">Search all inventory for:</span>
                          <p className="text-sm font-bold text-[#F3E5AB] group-hover:text-white">
                            "{searchTerm}"
                          </p>
                        </div>
                        <span className="text-xs font-bold text-[#E5C07B] group-hover:translate-x-0.5 transition-transform">
                          View Results →
                        </span>
                      </button>
                    </div>
                  )}

                  {/* Top Trending Wholesale Models */}
                  <div className="mb-3">
                    <p className="text-[11px] font-semibold text-[#8DA89A] mb-2 uppercase tracking-wide">
                      Popular Wholesale Models:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        'iPhone 16 Pro',
                        'iPhone 15',
                        'S24 Ultra',
                        'OnePlus 13',
                        'M4 iPad Pro',
                        'iPad Air M2',
                        'Realme GT 6',
                        'Pixel 9 Pro'
                      ].map((keyword) => (
                        <button
                          key={keyword}
                          onClick={() => handleSelectQuickSearch(keyword)}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium bg-[#0A241A] text-[#C4D6CD] hover:text-[#05130E] hover:bg-[#E5C07B] border border-[#143527] hover:border-[#E5C07B] transition-all cursor-pointer"
                        >
                          {keyword}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Wholesale Brand Shortcuts */}
                  <div className="pt-2.5 border-t border-[#143527]/70 flex items-center justify-between text-[11px] text-[#789686]">
                    <span>Wholesale Brands:</span>
                    <div className="flex items-center gap-2.5 font-semibold">
                      {['Apple', 'Samsung', 'OnePlus', 'Xiaomi', 'Google'].map((brand) => (
                        <button
                          key={brand}
                          onClick={() => handleSelectQuickSearch(brand)}
                          className="text-[#A3B8AD] hover:text-[#E5C07B] transition-colors cursor-pointer"
                        >
                          {brand}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 lg:hidden text-[#A3B8AD] hover:text-white hover:bg-[#0A2219] rounded-xl transition-all"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu — Clean 7 Menus */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#071A13] border-b border-[#143527] px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          {/* Mobile Luxury Search Box */}
          <div className="relative w-full mb-3">
            <input
              type="text"
              value={searchTerm || ''}
              onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
              placeholder="Search wholesale models, iPads, tablets..."
              className="w-full bg-[#051810] text-sm text-white placeholder-[#789686] pl-10 pr-10 py-2.5 rounded-xl border border-[#E5C07B]/40 focus:border-[#E5C07B] focus:outline-none focus:ring-1 focus:ring-[#E5C07B]/50 transition-all shadow-inner"
            />
            <Search className="w-4 h-4 text-[#E5C07B] absolute left-3.5 top-1/2 -translate-y-1/2" />
            {searchTerm && (
              <button
                onClick={() => onSearchChange && onSearchChange('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#789686] hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* The 7 Navigation Links */}
          <div className="flex flex-col divide-y divide-[#143527]/50 text-sm font-semibold text-white/90">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => {
                  setActiveNav(item.name);
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center justify-between py-2.5 transition-colors ${
                  item.isHighlight
                    ? 'text-[#E5C07B] font-bold'
                    : 'hover:text-[#E5C07B]'
                }`}
              >
                <span>{item.name}</span>
                <ChevronRight className="w-4 h-4 text-[#789284]" />
              </a>
            ))}
          </div>

          {/* Quick Action CTAs in Mobile Drawer */}
          <div className="pt-3 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleWhatsAppGeneralClick();
              }}
              className="w-full py-2.5 bg-[#25D366] text-black font-extrabold rounded-xl flex items-center justify-center gap-2 text-sm shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-current text-black" />
              <span>WhatsApp Desk (+91 98255 55005)</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsStockSheetModalOpen(true);
              }}
              className="w-full py-2.5 bg-[#0A2219] border border-[#143828] text-[#E5C07B] font-bold rounded-xl flex items-center justify-center gap-2 text-sm"
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>Download Wholesale Rate Sheet</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
