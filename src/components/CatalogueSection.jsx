import React, { useState, useMemo } from 'react';
import { catalogProducts, categoryList, brandList } from '../data/catalogData';
import { useBusiness } from '../context/BusinessContext';
import {
  Search,
  Filter,
  Grid3X3,
  List,
  Sparkles,
  ShoppingBag,
  MessageCircle,
  Eye,
  CheckCircle2,
  TrendingUp,
  Package,
  Layers,
  ArrowUpDown,
  Tag,
  Boxes,
  Zap,
  Clock,
  ShieldCheck,
  ChevronRight,
  Flame,
  SlidersHorizontal,
  RotateCcw,
  Check,
  Percent,
  Plus,
  Minus
} from 'lucide-react';

export default function CatalogueSection({
  selectedBrand,
  onSelectBrand,
  searchTerm,
  onSearchChange
}) {
  const {
    addToRfq,
    setSelectedProductForModal,
    generateWhatsAppUrl,
    currency,
    setCurrency,
    formatPrice,
    config
  } = useBusiness();

  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedBrandsList, setSelectedBrandsList] = useState([]);
  const [priceRange, setPriceRange] = useState('all'); // 'all' | 'under-30k' | '30k-60k' | '60k-100k' | 'above-100k'
  const [selectedMoq, setSelectedMoq] = useState('all'); // 'all' | 'moq-5' | 'moq-10' | 'moq-20'
  const [readyStockOnly, setReadyStockOnly] = useState(false);
  const [minMargin, setMinMargin] = useState(0); // 0%, 10%, 15%, 20%
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list' | 'table'
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Per-product custom quantity stepper state
  const [quantities, setQuantities] = useState({});

  const getProductQty = (productId, defaultMoq = 5) => {
    return quantities[productId] || defaultMoq;
  };

  const setProductQty = (productId, newQty, moq = 5) => {
    const val = Math.max(moq, newQty);
    setQuantities((prev) => ({ ...prev, [productId]: val }));
  };

  // Sync external selectedBrand if provided from BrandBar
  React.useEffect(() => {
    if (selectedBrand && selectedBrand !== 'all') {
      setSelectedBrandsList([selectedBrand]);
    } else if (selectedBrand === 'all') {
      setSelectedBrandsList([]);
    }
  }, [selectedBrand]);

  const toggleBrandFilter = (brandId) => {
    if (selectedBrandsList.includes(brandId)) {
      const next = selectedBrandsList.filter((b) => b !== brandId);
      setSelectedBrandsList(next);
      if (onSelectBrand) onSelectBrand(next.length === 1 ? next[0] : 'all');
    } else {
      const next = [...selectedBrandsList, brandId];
      setSelectedBrandsList(next);
      if (onSelectBrand) onSelectBrand(next.length === 1 ? next[0] : 'all');
    }
  };

  const resetAllFilters = () => {
    setActiveCategory('all');
    setSelectedBrandsList([]);
    setPriceRange('all');
    setSelectedMoq('all');
    setReadyStockOnly(false);
    setMinMargin(0);
    if (onSelectBrand) onSelectBrand('all');
    if (onSearchChange) onSearchChange('');
  };

  // Top Wholesale Flash Deals (Amazon / Flipkart Deal Row)
  const flashDeals = useMemo(() => {
    return catalogProducts.slice(0, 3);
  }, []);

  // Filtered and sorted products
  const filteredProducts = useMemo(() => {
    return catalogProducts
      .filter((product) => {
        // Category filter
        if (activeCategory !== 'all' && product.category !== activeCategory) {
          return false;
        }

        // Multi-brand filter
        if (selectedBrandsList.length > 0 && !selectedBrandsList.includes(product.brand)) {
          return false;
        }

        // Price range filter (based on tier1Price in INR)
        const inrPrice = product.tier1Price * 85;
        if (priceRange === 'under-30k' && inrPrice >= 30000) return false;
        if (priceRange === '30k-60k' && (inrPrice < 30000 || inrPrice >= 60000)) return false;
        if (priceRange === '60k-100k' && (inrPrice < 60000 || inrPrice >= 100000)) return false;
        if (priceRange === 'above-100k' && inrPrice < 100000) return false;

        // MOQ filter
        if (selectedMoq === 'moq-5' && product.moq > 5) return false;
        if (selectedMoq === 'moq-10' && product.moq > 10) return false;
        if (selectedMoq === 'moq-20' && product.masterCartonSize < 20) return false;

        // Ready stock filter
        if (readyStockOnly && !product.stockStatus.toLowerCase().includes('same day')) {
          return false;
        }

        // Min margin filter
        const margin = ((product.suggestedMSRP - product.tier1Price) / product.tier1Price) * 100;
        if (margin < minMargin) return false;

        // Search Term Filter
        if (searchTerm && searchTerm.trim() !== '') {
          const query = searchTerm.toLowerCase();
          const matchesName = product.name.toLowerCase().includes(query);
          const matchesTag = product.tagline.toLowerCase().includes(query);
          const matchesBrand = product.brand.toLowerCase().includes(query);
          const matchesStorage = product.storage.toLowerCase().includes(query);
          if (!matchesName && !matchesTag && !matchesBrand && !matchesStorage) {
            return false;
          }
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.tier1Price - b.tier1Price;
        if (sortBy === 'price-desc') return b.tier1Price - a.tier1Price;
        if (sortBy === 'moq-asc') return a.moq - b.moq;
        if (sortBy === 'stock-desc') return b.stockCount - a.stockCount;
        if (sortBy === 'margin-desc') {
          const marginA = ((a.suggestedMSRP - a.tier1Price) / a.tier1Price) * 100;
          const marginB = ((b.suggestedMSRP - b.tier1Price) / b.tier1Price) * 100;
          return marginB - marginA;
        }
        return 0;
      });
  }, [
    activeCategory,
    selectedBrandsList,
    priceRange,
    selectedMoq,
    readyStockOnly,
    minMargin,
    searchTerm,
    sortBy
  ]);

  const handleWhatsAppProduct = (product, customQty = null) => {
    const qty = customQty || getProductQty(product.id, product.moq);
    const rate = qty >= 100 ? product.tier3Price : qty >= 25 ? product.tier2Price : product.tier1Price;
    const total = rate * qty;
    const msg = `*OFFICIAL WHOLESALE PURCHASE ORDER — MOBILE MALL*\n
*Model:* ${product.name}
*Storage / Specs:* ${product.storage}
*Condition:* 100% Brand Sealed (Clean IMEI Guaranteed)
*Order Quantity:* ${qty} units (${Math.ceil(qty / product.masterCartonSize)} Master Cartons)
*Wholesale Unit Rate:* ${formatPrice(rate)} / piece
*Total Wholesale Value:* ${formatPrice(total)}
*Dispatch Hub:* ${config.warehouseAddress}, ${config.cityStateCountry}
Please confirm immediate stock reservation and dispatch proforma tax invoice.`;
    window.open(generateWhatsAppUrl(msg), '_blank');
  };

  return (
    <section id="catalogue" className="bg-[#F8F6F0] text-[#141414] py-12 sm:py-16 border-b border-[#E2DDD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ============================================================
            1. FLIPKART & AMAZON STYLE WHOLESALE FLASH DEALS BANNER
           ============================================================ */}
        <div className="mb-10 bg-gradient-to-r from-[#071A13] via-[#0A2219] to-[#040D09] rounded-3xl p-5 sm:p-7 border border-[#143527] shadow-xl text-white relative overflow-hidden">
          
          {/* Ambient Gold Radial */}
          <div className="absolute right-0 top-0 w-80 h-80 bg-[#E5C07B]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5C07B] text-[#05130E] text-[10px] sm:text-xs font-black uppercase tracking-wider">
                  <Flame className="w-3.5 h-3.5 fill-current text-red-600 animate-pulse" />
                  <span>Wholesale Deal of the Day</span>
                </span>
                <span className="text-xs text-[#E5C07B] font-bold flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Ahmedabad Hub Intake • Locked Rates</span>
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-heading">
                High-Velocity Master Cartons at <span className="gold-gradient-text">Factory Direct Rates</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#A3B8AD] mt-1 max-w-xl">
                Ready for immediate same-day dispatch from Murtimant Complex, Relief Rd, Ahmedabad. Clean IMEI verification guaranteed.
              </p>
            </div>

            {/* Quick Deal Badges */}
            <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-2 lg:pb-0">
              {flashDeals.map((deal) => {
                const margin = Math.round(((deal.suggestedMSRP - deal.tier3Price) / deal.tier3Price) * 100);
                return (
                  <div
                    key={`deal-${deal.id}`}
                    onClick={() => setSelectedProductForModal(deal)}
                    className="flex-shrink-0 w-60 bg-[#05130E] border border-[#143828] hover:border-[#E5C07B] p-3 rounded-2xl flex items-center gap-3 cursor-pointer group transition-all hover:-translate-y-1"
                  >
                    <img
                      src={deal.image}
                      alt={deal.name}
                      className="w-14 h-14 object-contain rounded-xl bg-white/5 p-1 flex-shrink-0 group-hover:scale-105 transition-transform"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-white truncate group-hover:text-[#E5C07B] transition-colors">
                        {deal.name}
                      </h4>
                      <div className="flex items-baseline gap-1.5 mt-0.5">
                        <span className="text-sm font-black text-[#E5C07B]">
                          {formatPrice(deal.tier3Price)}
                        </span>
                        <span className="text-[10px] text-gray-400 line-through">
                          {formatPrice(deal.suggestedMSRP)}
                        </span>
                      </div>
                      <span className="inline-block mt-1 text-[9px] font-black text-emerald-400 bg-emerald-950/70 border border-emerald-800 px-1.5 py-0.2 rounded">
                        +{margin}% Retail Profit
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ============================================================
            2. AMAZON / FLIPKART STYLE SEARCH & CONTROL HEADER BAR
           ============================================================ */}
        <div className="bg-white rounded-2xl border border-[#E0D9CD] shadow-sm p-4 sm:p-5 mb-8">
          
          {/* Top Controls Row */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Premium Wholesale Search Input Bar */}
            <div className="relative flex-1 group">
              <div className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none flex items-center">
                <Search className="w-4 h-4 text-[#B89025] group-focus-within:text-[#05130E] transition-colors" />
              </div>
              <input
                type="text"
                value={searchTerm || ''}
                onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
                placeholder="Search wholesale models, brands, specs (e.g. iPhone 16 Pro, S24 Ultra, 256GB, Master Carton)..."
                className="w-full pl-10 pr-20 py-2.5 rounded-xl border border-[#D5CDC0] bg-[#FAF8F5] text-xs sm:text-sm text-[#141414] placeholder-[#888888] focus:outline-none focus:border-[#B89025] focus:bg-white focus:ring-2 focus:ring-[#E5C07B]/20 transition-all shadow-inner font-medium"
              />
              {searchTerm ? (
                <button
                  onClick={() => onSearchChange && onSearchChange('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 px-2 py-0.5 rounded-md text-xs font-bold text-[#888888] hover:text-[#05130E] hover:bg-black/5 transition-colors cursor-pointer"
                >
                  Clear
                </button>
              ) : (
                <span className="hidden sm:inline-block absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-bold text-[#888888] bg-[#EAE4D8] px-1.5 py-0.5 rounded border border-[#D5CDC0]">
                  Live Filter
                </span>
              )}
            </div>

            {/* Currency Switcher (INR / USD) & Sort */}
            <div className="flex items-center gap-2.5 flex-wrap">
              
              {/* Currency Selector Pill */}
              <div className="flex items-center bg-[#EAE4D8] p-1 rounded-xl border border-[#D5CDC0]">
                <button
                  onClick={() => setCurrency('INR')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all ${
                    currency === 'INR'
                      ? 'bg-[#05130E] text-[#E5C07B] shadow-sm'
                      : 'text-[#555555] hover:text-[#05130E]'
                  }`}
                  title="View wholesale prices in Indian Rupees"
                >
                  ₹ INR
                </button>
                <button
                  onClick={() => setCurrency('USD')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all ${
                    currency === 'USD'
                      ? 'bg-[#05130E] text-[#E5C07B] shadow-sm'
                      : 'text-[#555555] hover:text-[#05130E]'
                  }`}
                  title="View wholesale prices in USD"
                >
                  $ USD
                </button>
              </div>

              {/* Sort By Dropdown */}
              <div className="relative flex items-center">
                <ArrowUpDown className="w-3.5 h-3.5 text-[#777777] absolute left-3 pointer-events-none" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="pl-8 pr-7 py-2 bg-[#FAF8F5] border border-[#D5CDC0] rounded-xl text-xs font-bold text-[#141414] focus:outline-none focus:border-[#B89025] cursor-pointer appearance-none"
                >
                  <option value="featured">Sort: Top Dealer Bestsellers</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="margin-desc">Highest Dealer Margin (%)</option>
                  <option value="moq-asc">Lowest MOQ First</option>
                  <option value="stock-desc">Highest Stock Volume</option>
                </select>
              </div>

              {/* View Mode Toggle */}
              <div className="hidden sm:flex items-center bg-[#EAE4D8] p-1 rounded-xl border border-[#D5CDC0]">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded-lg transition-all ${
                    viewMode === 'grid'
                      ? 'bg-white text-black shadow-sm'
                      : 'text-[#666666] hover:text-black'
                  }`}
                  title="Amazon/Flipkart Card Grid"
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 rounded-lg transition-all ${
                    viewMode === 'list'
                      ? 'bg-white text-black shadow-sm'
                      : 'text-[#666666] hover:text-black'
                  }`}
                  title="Amazon Compact List View"
                >
                  <List className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('table')}
                  className={`px-2 py-1 rounded-lg text-xs font-extrabold transition-all ${
                    viewMode === 'table'
                      ? 'bg-white text-black shadow-sm'
                      : 'text-[#666666] hover:text-black'
                  }`}
                  title="B2B Master Carton Spreadsheet Table"
                >
                  Table
                </button>
              </div>

              {/* Mobile Filter Toggle */}
              <button
                onClick={() => setShowMobileFilters(!showMobileFilters)}
                className="md:hidden px-3 py-2 bg-[#05130E] text-[#E5C07B] rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Filters</span>
              </button>

            </div>

          </div>

          {/* Category Horizontal Quick Tabs */}
          <div className="mt-4 pt-3.5 border-t border-[#EAE4D8] flex items-center gap-2 overflow-x-auto no-scrollbar">
            {categoryList.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#05130E] text-[#E5C07B] shadow-sm'
                      : 'bg-[#FAF8F5] text-[#555555] border border-[#D5CDC0] hover:border-[#B89025] hover:text-black'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

        </div>

        {/* ============================================================
            3. MAIN MARKETPLACE GRID: SIDEBAR FILTERS + PRODUCTS
           ============================================================ */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* AMAZON / FLIPKART STYLE B2B SIDEBAR FILTERS (Col 3) */}
          <aside
            className={`md:col-span-3 space-y-6 ${
              showMobileFilters ? 'block' : 'hidden md:block'
            }`}
          >
            <div className="bg-white rounded-2xl border border-[#E0D9CD] p-5 shadow-sm space-y-6">
              
              {/* Filter Header & Reset */}
              <div className="flex items-center justify-between pb-3 border-b border-[#EAE4D8]">
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-[#B89025]" />
                  <span className="font-extrabold text-sm uppercase tracking-wider text-[#080808]">
                    Wholesale Filters
                  </span>
                </div>
                <button
                  onClick={resetAllFilters}
                  className="text-xs text-[#B89025] hover:underline font-bold flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              </div>

              {/* Ready Stock at Hub Toggle */}
              <div>
                <label className="flex items-center gap-2.5 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={readyStockOnly}
                    onChange={(e) => setReadyStockOnly(e.target.checked)}
                    className="w-4 h-4 accent-[#05130E] rounded cursor-pointer"
                  />
                  <div>
                    <span className="text-xs font-bold text-[#080808] block">
                      ⚡ Ready at Relief Rd Hub
                    </span>
                    <span className="text-[10px] text-[#777777] block">
                      Same-day dispatch or local pickup
                    </span>
                  </div>
                </label>
              </div>

              {/* Brand Checkboxes */}
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-[#080808] mb-2.5">
                  OEM Brands
                </h4>
                <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
                  {brandList.filter((b) => b.id !== 'all').map((brand) => {
                    const isChecked = selectedBrandsList.includes(brand.id);
                    return (
                      <label
                        key={`filter-brand-${brand.id}`}
                        className="flex items-center justify-between p-1.5 rounded-lg hover:bg-[#FAF8F5] cursor-pointer text-xs"
                      >
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => toggleBrandFilter(brand.id)}
                            className="w-3.5 h-3.5 accent-[#05130E] rounded"
                          />
                          <span className={`font-semibold ${isChecked ? 'text-[#080808] font-bold' : 'text-[#555555]'}`}>
                            {brand.name}
                          </span>
                        </div>
                        <span className="text-[10px] text-[#888888] bg-[#EAE4D8] px-1.5 py-0.2 rounded-full">
                          {brand.count}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Price Bracket Filter */}
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-[#080808] mb-2.5">
                  Wholesale Price (Per Piece)
                </h4>
                <div className="space-y-1.5 text-xs">
                  {[
                    { id: 'all', label: 'All Price Ranges' },
                    { id: 'under-30k', label: `Under ${formatPrice(350)}` },
                    { id: '30k-60k', label: `${formatPrice(350)} – ${formatPrice(700)}` },
                    { id: '60k-100k', label: `${formatPrice(700)} – ${formatPrice(1175)}` },
                    { id: 'above-100k', label: `Above ${formatPrice(1175)}` }
                  ].map((p) => (
                    <label
                      key={`price-${p.id}`}
                      className="flex items-center gap-2 p-1 rounded hover:bg-[#FAF8F5] cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="price-filter"
                        checked={priceRange === p.id}
                        onChange={() => setPriceRange(p.id)}
                        className="w-3.5 h-3.5 accent-[#05130E]"
                      />
                      <span className={priceRange === p.id ? 'font-bold text-black' : 'text-[#555555]'}>
                        {p.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* MOQ Filter */}
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-[#080808] mb-2.5">
                  Minimum Order (MOQ)
                </h4>
                <div className="space-y-1.5 text-xs">
                  {[
                    { id: 'all', label: 'All MOQ Quantities' },
                    { id: 'moq-5', label: 'Low MOQ (3 – 5 Units)' },
                    { id: 'moq-10', label: 'Medium Pack (10 Units)' },
                    { id: 'moq-20', label: 'Full Master Carton (20+ Units)' }
                  ].map((m) => (
                    <label
                      key={`moq-${m.id}`}
                      className="flex items-center gap-2 p-1 rounded hover:bg-[#FAF8F5] cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="moq-filter"
                        checked={selectedMoq === m.id}
                        onChange={() => setSelectedMoq(m.id)}
                        className="w-3.5 h-3.5 accent-[#05130E]"
                      />
                      <span className={selectedMoq === m.id ? 'font-bold text-black' : 'text-[#555555]'}>
                        {m.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Minimum Margin Slider */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <h4 className="text-xs font-black uppercase tracking-wider text-[#080808]">
                    Min Retailer Profit
                  </h4>
                  <span className="text-xs font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    +{minMargin}% ROI
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="25"
                  step="5"
                  value={minMargin}
                  onChange={(e) => setMinMargin(Number(e.target.value))}
                  className="w-full accent-[#05130E] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#888888] mt-1 font-semibold">
                  <span>Any</span>
                  <span>10%</span>
                  <span>15%</span>
                  <span>20%+</span>
                </div>
              </div>

              {/* Wholesale Guarantee Badge Box */}
              <div className="bg-[#FAF7F2] border border-[#E5DFD3] rounded-xl p-3.5 space-y-2 text-[11px] text-[#444444]">
                <div className="flex items-center gap-1.5 font-bold text-black">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Wholesale Buyer Protection</span>
                </div>
                <p className="text-[10px] leading-relaxed">
                  Every order includes authentic 18% GST tax invoice, clean IMEI scan list, and insured cargo freight from Ahmedabad.
                </p>
              </div>

            </div>
          </aside>

          {/* MAIN PRODUCT CATALOGUE (Col 9) */}
          <main className="md:col-span-9 space-y-6">
            
            {/* Results Counter Bar */}
            <div className="flex items-center justify-between px-2">
              <span className="text-xs font-bold text-[#444444]">
                Showing <strong className="text-[#080808]">{filteredProducts.length}</strong> Wholesale Lots
              </span>
              <span className="text-xs text-emerald-800 font-bold bg-emerald-100/80 px-2.5 py-1 rounded-full">
                ⚡ Live Wholesale Rates Active
              </span>
            </div>

            {/* Zero State if filters match nothing */}
            {filteredProducts.length === 0 && (
              <div className="bg-white rounded-2xl border border-[#E0D9CD] p-12 text-center space-y-4">
                <Boxes className="w-12 h-12 text-[#999999] mx-auto" />
                <h3 className="text-lg font-bold text-[#141414]">No Wholesale Lots Match Your Filters</h3>
                <p className="text-xs text-[#666666] max-w-md mx-auto">
                  Try clearing your brand or price filters, or contact our wholesale trade desk directly at +91 98255 55005 for customized master carton lot allocations.
                </p>
                <button
                  onClick={resetAllFilters}
                  className="px-5 py-2.5 bg-[#05130E] text-[#E5C07B] rounded-xl text-xs font-bold hover:brightness-110"
                >
                  Clear All Filters
                </button>
              </div>
            )}

            {/* ============================================================
                VIEW MODE 1: AMAZON / FLIPKART STYLE PRODUCT CARDS GRID
               ============================================================ */}
            {viewMode === 'grid' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredProducts.map((product) => {
                  const qty = getProductQty(product.id, product.moq);
                  const activeRate =
                    qty >= 100
                      ? product.tier3Price
                      : qty >= 25
                      ? product.tier2Price
                      : product.tier1Price;
                  const itemSubtotal = activeRate * qty;
                  const discountPercent = Math.round(
                    ((product.suggestedMSRP - product.tier1Price) / product.suggestedMSRP) * 100
                  );
                  const dealerProfitPerUnit = product.suggestedMSRP - activeRate;
                  const totalProfitForQty = dealerProfitPerUnit * qty;

                  return (
                    <div
                      key={product.id}
                      className="group bg-white rounded-2xl border border-[#E0D9CD] hover:border-[#B89025] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
                    >
                      {/* Top Badges & Image */}
                      <div className="relative p-4 pb-2 bg-[#FAF8F5] border-b border-[#EAE4D8]">
                        
                        {/* Status / Bestseller Badges */}
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="text-[10px] font-black uppercase tracking-wider bg-[#05130E] text-[#E5C07B] px-2.5 py-0.5 rounded-full">
                            {product.brand}
                          </span>
                          
                          <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 border border-emerald-300 px-2 py-0.5 rounded-full flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                            <span>In Stock ({product.stockCount} Units)</span>
                          </span>
                        </div>

                        {/* Product Image with Hover Zoom */}
                        <div
                          onClick={() => setSelectedProductForModal(product)}
                          className="h-48 w-full flex items-center justify-center p-2 cursor-pointer overflow-hidden rounded-xl"
                        >
                          <img
                            src={product.image}
                            alt={product.name}
                            className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-md"
                            loading="lazy"
                          />
                        </div>

                        {/* Quick View Button on Image */}
                        <button
                          onClick={() => setSelectedProductForModal(product)}
                          className="absolute bottom-3 right-3 p-2 bg-white/90 hover:bg-white text-black rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold flex items-center gap-1 cursor-pointer"
                          title="Quick View Specs"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Specs</span>
                        </button>
                      </div>

                      {/* Card Content & Wholesale Specs */}
                      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                        
                        <div>
                          {/* Product Title */}
                          <h3
                            onClick={() => setSelectedProductForModal(product)}
                            className="text-sm font-extrabold text-[#080808] hover:text-[#B89025] cursor-pointer line-clamp-1 transition-colors font-heading"
                          >
                            {product.name}
                          </h3>

                          {/* Subtitle & Specs snippet */}
                          <p className="text-[11px] text-[#666666] mt-0.5 line-clamp-1">
                            {product.storage} • {product.condition}
                          </p>

                          {/* Flipkart / Amazon Style Pricing Display */}
                          <div className="mt-2.5 pt-2 border-t border-[#EAE4D8]">
                            <div className="flex items-baseline gap-2">
                              <span className="text-xl font-black text-[#080808]">
                                {formatPrice(activeRate)}
                              </span>
                              <span className="text-xs text-gray-400 line-through">
                                {formatPrice(product.suggestedMSRP)}
                              </span>
                              <span className="text-xs font-black text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                                {discountPercent}% OFF
                              </span>
                            </div>

                            <div className="text-[10px] text-[#666666] mt-0.5">
                              Wholesale price per unit for {qty} pcs
                            </div>
                          </div>

                          {/* Wholesale Price Breaks Table (Amazon Business Style) */}
                          <div className="mt-3 bg-[#FAF8F5] border border-[#EAE4D8] rounded-xl p-2.5 text-[11px] space-y-1">
                            <div className="flex justify-between items-center text-[#555555]">
                              <span>Tier 1 (5–24 pcs):</span>
                              <strong className="text-black">{formatPrice(product.tier1Price)}</strong>
                            </div>
                            <div className="flex justify-between items-center text-[#555555]">
                              <span>Tier 2 (25–99 pcs):</span>
                              <strong className="text-[#8C6D1F]">{formatPrice(product.tier2Price)}</strong>
                            </div>
                            <div className="flex justify-between items-center bg-[#E5C07B]/20 -mx-1.5 px-1.5 py-0.5 rounded text-[#05130E] font-black">
                              <span>Master Lot (100+ pcs):</span>
                              <span>{formatPrice(product.tier3Price)}</span>
                            </div>
                          </div>

                          {/* Resale Profit & GST Credit Pill */}
                          <div className="mt-2.5 bg-emerald-50 border border-emerald-200 rounded-lg p-2 flex items-center justify-between text-[11px]">
                            <div>
                              <span className="text-emerald-900 font-bold block">
                                Resale Profit: +{formatPrice(dealerProfitPerUnit)} / pc
                              </span>
                              <span className="text-[10px] text-emerald-700 block">
                                18% GST Input Credit Eligible
                              </span>
                            </div>
                            <TrendingUp className="w-4 h-4 text-emerald-600" />
                          </div>

                          {/* Carton Packing Info */}
                          <div className="mt-2 flex items-center justify-between text-[10px] text-[#777777] font-semibold">
                            <span>MOQ: {product.moq} Units</span>
                            <span>Master Box: {product.masterCartonSize} Units</span>
                          </div>

                        </div>

                        {/* Interactive Quantity Stepper & Buy Row */}
                        <div className="pt-2 border-t border-[#EAE4D8] space-y-2.5">
                          
                          {/* Stepper + Total Value */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center border border-[#D5CDC0] rounded-xl bg-[#FAF8F5] p-0.5">
                              <button
                                onClick={() => setProductQty(product.id, qty - 5, product.moq)}
                                disabled={qty <= product.moq}
                                className="w-7 h-7 flex items-center justify-center text-gray-700 hover:text-black disabled:opacity-30 disabled:cursor-not-allowed"
                                title="Decrease by 5"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="w-10 text-center font-black text-xs text-black">
                                {qty}
                              </span>
                              <button
                                onClick={() => setProductQty(product.id, qty + 5, product.moq)}
                                className="w-7 h-7 flex items-center justify-center text-gray-700 hover:text-black"
                                title="Increase by 5"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>

                            <div className="text-right">
                              <span className="text-[9px] uppercase tracking-wider text-[#777777] block font-bold">
                                Total ({qty} pcs):
                              </span>
                              <span className="text-xs font-black text-[#05130E]">
                                {formatPrice(itemSubtotal)}
                              </span>
                            </div>
                          </div>

                          {/* Action Buttons: Add to Cart & Buy Wholesale */}
                          <div className="grid grid-cols-2 gap-2">
                            <button
                              onClick={() => addToRfq(product, qty)}
                              className="py-2.5 px-2 bg-[#05130E] hover:bg-[#143828] text-white rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 shadow-sm active:scale-95 cursor-pointer"
                              title="Add to Wholesale Cart"
                            >
                              <ShoppingBag className="w-3.5 h-3.5 text-[#E5C07B]" />
                              <span>Add To Cart</span>
                            </button>

                            <button
                              onClick={() => handleWhatsAppProduct(product, qty)}
                              className="py-2.5 px-2 bg-[#25D366] hover:bg-[#20ba59] text-black font-black rounded-xl text-xs transition-all flex items-center justify-center gap-1.5 shadow-sm active:scale-95 cursor-pointer"
                              title="Instant Wholesale WhatsApp PO"
                            >
                              <Zap className="w-3.5 h-3.5 fill-current" />
                              <span>Buy Wholesale</span>
                            </button>
                          </div>

                        </div>

                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* ============================================================
                VIEW MODE 2: AMAZON STYLE COMPACT LIST VIEW
               ============================================================ */}
            {viewMode === 'list' && (
              <div className="space-y-4">
                {filteredProducts.map((product) => {
                  const qty = getProductQty(product.id, product.moq);
                  const activeRate =
                    qty >= 100
                      ? product.tier3Price
                      : qty >= 25
                      ? product.tier2Price
                      : product.tier1Price;
                  const itemSubtotal = activeRate * qty;
                  const profitPerPc = product.suggestedMSRP - activeRate;

                  return (
                    <div
                      key={`list-${product.id}`}
                      className="bg-white rounded-2xl border border-[#E0D9CD] hover:border-[#B89025] p-4 sm:p-5 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row items-center gap-5 justify-between"
                    >
                      {/* Left: Product Image & Meta */}
                      <div className="flex items-center gap-4 w-full sm:w-auto">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-20 h-20 sm:w-24 sm:h-24 object-contain rounded-xl bg-[#FAF8F5] p-2 flex-shrink-0"
                        />
                        <div className="space-y-1">
                          <span className="text-[10px] font-black uppercase text-[#8C6D1F] bg-[#E5C07B]/20 px-2 py-0.5 rounded">
                            {product.brand}
                          </span>
                          <h3
                            onClick={() => setSelectedProductForModal(product)}
                            className="text-base font-extrabold text-[#080808] hover:text-[#B89025] cursor-pointer font-heading"
                          >
                            {product.name}
                          </h3>
                          <p className="text-xs text-[#666666]">
                            {product.storage} • {product.condition} • Carton of {product.masterCartonSize} pcs
                          </p>
                          <div className="flex items-center gap-2 text-[11px] text-emerald-800 font-bold">
                            <span>⚡ Dispatches Today from Ahmedabad</span>
                            <span>•</span>
                            <span>Profit: +{formatPrice(profitPerPc)} / pc</span>
                          </div>
                        </div>
                      </div>

                      {/* Right: Pricing & Quick Buy */}
                      <div className="flex flex-col sm:items-end justify-between gap-3 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-[#EAE4D8]">
                        <div className="text-left sm:text-right">
                          <span className="text-xl font-black text-[#080808]">
                            {formatPrice(activeRate)}
                          </span>
                          <span className="text-xs text-gray-400 line-through ml-2">
                            {formatPrice(product.suggestedMSRP)}
                          </span>
                          <span className="text-[10px] text-[#666666] block">
                            Wholesale tier rate ({qty} pcs)
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => addToRfq(product, qty)}
                            className="px-4 py-2 bg-[#05130E] hover:bg-[#143828] text-white rounded-xl text-xs font-black flex items-center gap-1.5 transition-all"
                          >
                            <ShoppingBag className="w-3.5 h-3.5 text-[#E5C07B]" />
                            <span>Add To Cart</span>
                          </button>
                          <button
                            onClick={() => handleWhatsAppProduct(product, qty)}
                            className="px-4 py-2 bg-[#25D366] hover:bg-[#20ba59] text-black font-black rounded-xl text-xs flex items-center gap-1.5 transition-all"
                          >
                            <Zap className="w-3.5 h-3.5 fill-current" />
                            <span>Buy Wholesale</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* ============================================================
                VIEW MODE 3: B2B MASTER SPREADSHEET TABLE
               ============================================================ */}
            {viewMode === 'table' && (
              <div className="bg-white rounded-2xl border border-[#E0D9CD] shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm text-[#141414]">
                    <thead className="bg-[#05130E] text-white uppercase text-[11px] font-black tracking-wider">
                      <tr>
                        <th scope="col" className="px-4 py-3.5">Model / SKU</th>
                        <th scope="col" className="px-4 py-3.5">Brand</th>
                        <th scope="col" className="px-4 py-3.5">Carton Size</th>
                        <th scope="col" className="px-4 py-3.5">Stock</th>
                        <th scope="col" className="px-4 py-3.5">MOQ</th>
                        <th scope="col" className="px-4 py-3.5">Tier 1</th>
                        <th scope="col" className="px-4 py-3.5">Tier 2</th>
                        <th scope="col" className="px-4 py-3.5">Master Lot</th>
                        <th scope="col" className="px-4 py-3.5">Resale Margin</th>
                        <th scope="col" className="px-4 py-3.5 text-right">Procure</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#EAE4D8]">
                      {filteredProducts.map((p) => {
                        const margin = Math.round(((p.suggestedMSRP - p.tier3Price) / p.tier3Price) * 100);
                        return (
                          <tr key={p.id} className="hover:bg-[#FAF7F2] transition-colors">
                            <td className="px-4 py-3">
                              <div className="flex items-center gap-3">
                                <img
                                  src={p.image}
                                  alt={p.name}
                                  className="w-10 h-10 object-contain rounded bg-[#EFE9DD] p-1 flex-shrink-0"
                                />
                                <div>
                                  <div
                                    onClick={() => setSelectedProductForModal(p)}
                                    className="font-black text-[#080808] hover:text-[#967415] cursor-pointer"
                                  >
                                    {p.name}
                                  </div>
                                  <div className="text-[11px] text-[#666666]">{p.storage} • {p.condition}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-4 py-3 uppercase font-extrabold text-[11px] text-[#967415]">
                              {p.brand}
                            </td>
                            <td className="px-4 py-3 font-semibold text-[#444444]">
                              {p.masterCartonSize} pcs
                            </td>
                            <td className="px-4 py-3 font-bold text-emerald-800">
                              {p.stockCount} Units
                            </td>
                            <td className="px-4 py-3 font-medium text-[#444444]">
                              {p.moq} pcs
                            </td>
                            <td className="px-4 py-3 font-bold text-[#080808]">
                              {formatPrice(p.tier1Price)}
                            </td>
                            <td className="px-4 py-3 font-bold text-[#967415]">
                              {formatPrice(p.tier2Price)}
                            </td>
                            <td className="px-4 py-3 font-black text-[#05130E] bg-[#EFE9DD]/60">
                              {formatPrice(p.tier3Price)}
                            </td>
                            <td className="px-4 py-3 font-black text-emerald-700">
                              +{margin}%
                            </td>
                            <td className="px-4 py-3 text-right">
                              <div className="flex items-center justify-end gap-2">
                                <button
                                  onClick={() => addToRfq(p, p.moq || 5)}
                                  className="px-3 py-1.5 bg-[#05130E] text-white hover:bg-[#143828] rounded-lg text-xs font-black flex items-center gap-1.5 transition-all shadow-sm active:scale-95"
                                  title="Add To Cart"
                                >
                                  <ShoppingBag className="w-3.5 h-3.5 text-[#E5C07B]" />
                                  <span>Cart</span>
                                </button>
                                <button
                                  onClick={() => handleWhatsAppProduct(p, p.moq || 5)}
                                  className="px-3 py-1.5 bg-[#25D366] text-black hover:bg-[#20ba59] rounded-lg text-xs font-black flex items-center gap-1.5 transition-all shadow-sm active:scale-95"
                                  title="Buy Wholesale"
                                >
                                  <Zap className="w-3.5 h-3.5 fill-current" />
                                  <span>PO</span>
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

          </main>

        </div>

      </div>
    </section>
  );
}
