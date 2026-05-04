import { useState, useEffect, Suspense, lazy } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Icons from "lucide-react";

const Header = lazy(() => import("../components/Header"));
const HeroSection = lazy(() => import("../components/HeroSection"));
const FeaturesGrid = lazy(() => import("../components/FeaturesGrid"));
const HowItWorks = lazy(() => import("../components/HowItWorks"));
const OperatorsShowcase = lazy(() => import("../components/OperatorsShowcase"));
const PricingCallRates = lazy(() => import("../components/PricingCallRates"));
const Testimonials = lazy(() => import("../components/Testimonials"));
const DownloadCtasection = lazy(() => import("../components/DownloadCtasection"));
const Footer = lazy(() => import("../components/Footer"));

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center min-h-[40vh]">
      <motion.div
        className="w-10 h-10 rounded-full border-2 border-violet-200 border-t-violet-500"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

function Toast({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 2500);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 60, scale: 0.95 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100]"
    >
      <div className="flex items-center gap-3 rounded-2xl border border-white/40 bg-white/70 px-6 py-4 shadow-[0_16px_48px_rgba(139,92,246,0.12)] backdrop-blur-xl">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-100">
          <Icons.Check className="h-4 w-4 text-violet-600" strokeWidth={2.5} />
        </div>
        <span className="text-sm font-medium text-slate-700">{message}</span>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const [toast, setToast] = useState(null);

  const showToast = (message) => {
    setToast(message);
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDownloadClick = () => {
    showToast("Redirecting to download page...");
    setTimeout(() => {
      const el = document.getElementById("download");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 600);
  };

  const handleGetStartedClick = () => {
    showToast("Welcome! Starting your free trial...");
  };

  const handleAppStoreClick = () => {
    showToast("Opening App Store...");
  };

  const handleGooglePlayClick = () => {
    showToast("Opening Google Play...");
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-slate-50">
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_20%_0%,_rgba(139,92,246,0.08)_0%,_transparent_50%)]" />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_80%_0%,_rgba(168,85,247,0.06)_0%,_transparent_50%)]" />
        <div className="absolute bottom-0 left-1/4 w-[800px] h-[800px] rounded-full bg-violet-100/20 blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full bg-blue-100/15 blur-[100px]" />
      </div>

      <Suspense fallback={<LoadingFallback />}>
        <Header
          onLogoClick={handleLogoClick}
          onCTA1Click={handleDownloadClick}
          onCTA2Click={handleGetStartedClick}
        />
      </Suspense>

      <main className="relative z-10">
        <Suspense fallback={<LoadingFallback />}>
          <HeroSection
            onDownloadClick={handleDownloadClick}
            onGetStartedClick={handleGetStartedClick}
          />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <FeaturesGrid />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <HowItWorks />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <OperatorsShowcase />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <PricingCallRates />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <Testimonials />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <DownloadCtasection
            onAppStoreClick={handleAppStoreClick}
            onGooglePlayClick={handleGooglePlayClick}
          />
        </Suspense>
      </main>

      <Suspense fallback={<LoadingFallback />}>
        <Footer />
      </Suspense>

      <AnimatePresence>
        {toast && <Toast message={toast} onClose={() => setToast(null)} />}
      </AnimatePresence>
    </div>
  );
}
