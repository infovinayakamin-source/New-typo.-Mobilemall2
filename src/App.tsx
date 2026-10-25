import { Component, ErrorInfo, ReactNode, useState } from 'react';
import { BusinessProvider } from './context/BusinessContext';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import BrandLogoMotionSection from './components/BrandLogoMotionSection';
import DailyRateBroadcastBanner from './components/DailyRateBroadcastBanner';
import BrandBar from './components/BrandBar';
import ContrastSection from './components/ContrastSection';
import ServicesSection from './components/ServicesSection';
import CatalogueSection from './components/CatalogueSection';
import WholesaleCalculator from './components/WholesaleCalculator';
import ReviewsSection from './components/ReviewsSection';
import OrderingProcess from './components/OrderingProcess';
import NewsSection from './components/NewsSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import CompanyMapHubSection from './components/CompanyMapHubSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ProductDetailModal from './components/ProductDetailModal';
import StockSheetModal from './components/StockSheetModal';
import RetailerRegistrationModal from './components/RetailerRegistrationModal';
import ConfigSettingsModal from './components/ConfigSettingsModal';
import RFQBasketDrawer from './components/RFQBasketDrawer';
import ExchangeModal from './components/ExchangeModal';

function MainLayout() {
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-[#05130E] text-[#F7F7F5] flex flex-col font-sans selection:bg-[#E5C07B] selection:text-[#05130E]">
      {/* Navigation Header */}
      <Navbar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      {/* Main Page Flow - 100% Focused on Wholesale Distribution */}
      <main className="flex-1">
        {/* 1. Hero Section (Wordmark, Skyline Silhouette, 4 Wholesale Pillars, 3 Action CTAs, Featured Lots) */}
        <HeroSection />

        {/* 2. Pure Mobile Companies Logos Motion (Separate Standalone Section) */}
        <BrandLogoMotionSection />

        {/* 3. Daily Rate Card WhatsApp Broadcast Banner (09:30 AM Daily Morning Release) */}
        <DailyRateBroadcastBanner />

        {/* 4. Brand OEM Lines Strip */}
        <BrandBar
          selectedBrand={selectedBrand}
          onSelectBrand={setSelectedBrand}
        />

        {/* 4. Contrast Ivory Wholesale Blueprint Section (Retailer Quote, 4 Metrics, 4 Stacked Bars) */}
        <ContrastSection />

        {/* 5. What We Offer (Giant SERVICES Watermark) */}
        <ServicesSection />

        {/* 6. Daily Wholesale Inventory & Master Carton Pricing (Dual View & Multi-tier Pricing) */}
        <CatalogueSection
          selectedBrand={selectedBrand}
          onSelectBrand={setSelectedBrand}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

        {/* 7. Carton & Lot Margin Estimator (Giant CALCULATOR Watermark) */}
        <WholesaleCalculator />

        {/* 8. Retailer Trust Index (Giant REVIEWS Watermark) */}
        <ReviewsSection />

        {/* 9. Your Wholesale Enquiry in 3 Simple Steps */}
        <OrderingProcess />

        {/* 10. News & Market Intake Insights (Giant NEWS Watermark + Connect With Us Banner) */}
        <NewsSection />

        {/* 11. Frequently Asked Questions (Giant FAQ Watermark & B2B Wholesale Inquiries) */}
        <FAQSection />

        {/* 12. Direct Wholesale Desk Form (Giant CONTACT Watermark) */}
        <ContactSection />

        {/* 12. Physical Headquarters, Interactive Map & Company Work Intelligence Hub */}
        <CompanyMapHubSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Connect */}
      <FloatingWhatsApp />

      {/* Modals & Slide-over Drawers */}
      <ProductDetailModal />
      <StockSheetModal />
      <RetailerRegistrationModal />
      <ConfigSettingsModal />
      <RFQBasketDrawer />
      <ExchangeModal />
    </div>
  );
}

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('App runtime error caught by boundary:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#05130E] text-[#F7F7F5] flex items-center justify-center p-6 text-center">
          <div className="max-w-md bg-[#071A13] border border-[#E5C07B]/40 rounded-2xl p-8 space-y-4 shadow-2xl">
            <h2 className="text-2xl font-black text-white">Mobile Mall Wholesale</h2>
            <p className="text-sm text-[#A3B8AD]">
              An unexpected error occurred while rendering the page. Click below to reload.
            </p>
            <button
              onClick={() => {
                try {
                  localStorage.removeItem('mobile_mall_config');
                } catch (e) {
                  console.error(e);
                }
                window.location.reload();
              }}
              className="px-6 py-2.5 bg-[#E5C07B] text-[#05130E] font-bold rounded-xl text-sm hover:bg-[#d4ae6a] transition-all"
            >
              Reload Website
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default function App() {
  return (
    <ErrorBoundary>
      <BusinessProvider>
        <MainLayout />
      </BusinessProvider>
    </ErrorBoundary>
  );
}
