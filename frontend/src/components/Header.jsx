import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Icons from "lucide-react";

const navLinks = [
  { label: "Features", route: "#features" },
  { label: "How It Works", route: "#how-it-works" },
  { label: "Pricing", route: "#pricing" },
  { label: "Download", route: "#download" },
];

export default function Header({ onLogoClick, onCTA1Click, onCTA2Click }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-screen-xl px-6 md:px-10">
        <nav className="mt-4 flex items-center justify-between rounded-[28px] border border-white/20 bg-white/60 px-6 py-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),0_8px_32px_rgba(139,92,246,0.08)] backdrop-blur-lg md:px-8">
          <button
            onClick={onLogoClick}
            className="flex items-center gap-2.5 transition-transform duration-300 hover:scale-[1.02]"
            aria-label="BD Caller Home"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 text-white shadow-lg shadow-violet-200">
              <Icons.Phone size={18} strokeWidth={2.5} />
            </span>
            <span className="text-xl font-bold tracking-tight text-slate-800 md:text-2xl">
              BD Caller
            </span>
          </button>

          <div className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.route}
                href={link.route}
                className="relative text-[1.05rem] font-medium text-slate-600 transition-colors duration-300 hover:text-violet-600"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-violet-500 transition-all duration-300 hover:w-full" />
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <motion.button
              onClick={onCTA1Click}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full border border-slate-200/60 bg-white/80 px-6 py-2.5 text-sm font-semibold text-slate-700 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-violet-200 hover:bg-white hover:text-violet-600 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_4px_20px_rgba(139,92,246,0.12)]"
            >
              Download
            </motion.button>
            <motion.button
              onClick={onCTA2Click}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full bg-gradient-to-r from-violet-500 to-purple-600 px-6 py-2.5 text-sm font-semibold text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_4px_16px_rgba(139,92,246,0.25)] transition-all duration-300 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_6px_28px_rgba(139,92,246,0.4)]"
            >
              Get Started Free
            </motion.button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-600 transition-colors hover:bg-white/60 hover:text-violet-600 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <Icons.X size={22} /> : <Icons.Menu size={22} />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mx-4 mt-2 overflow-hidden rounded-[24px] border border-white/30 bg-white/75 shadow-[0_16px_48px_rgba(139,92,246,0.1)] backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 p-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.route}
                  href={link.route}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.2 }}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-slate-600 transition-colors hover:bg-violet-50 hover:text-violet-600"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="mt-3 flex flex-col gap-2.5 border-t border-slate-100 pt-4">
                <motion.button
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.2 }}
                  onClick={() => {
                    setMobileOpen(false);
                    onCTA1Click?.();
                  }}
                  className="w-full rounded-full border border-slate-200/60 bg-white/80 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:border-violet-200 hover:text-violet-600"
                >
                  Download
                </motion.button>
                <motion.button
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.2 }}
                  onClick={() => {
                    setMobileOpen(false);
                    onCTA2Click?.();
                  }}
                  className="w-full rounded-full bg-gradient-to-r from-violet-500 to-purple-600 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-200 transition-all hover:shadow-xl hover:shadow-violet-300"
                >
                  Get Started Free
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
