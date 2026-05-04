import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 }
  }
};

function AnimatedButton({ children, variant, onClick, icon: Icon }) {
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setRipples((prev) => [...prev, { id, x, y }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 600);
    if (onClick) onClick();
  };

  const baseClasses = 'relative overflow-hidden flex items-center justify-center gap-3 font-semibold text-base transition-all duration-300 rounded-full px-8 py-4 cursor-pointer select-none';
  const variantClasses = variant === 'primary'
    ? 'bg-[#8b5cf6] text-white shadow-lg shadow-[#8b5cf6]/25 hover:shadow-xl hover:shadow-[#8b5cf6]/30 hover:-translate-y-0.5 active:scale-95'
    : 'bg-white/60 backdrop-blur-md text-[#1e1b4b] border border-white/50 shadow-md hover:bg-white/80 hover:shadow-lg hover:-translate-y-0.5 active:scale-95';

  return (
    <motion.button
      className={`${baseClasses} ${variantClasses} w-full sm:w-auto`}
      onClick={handleClick}
      whileTap={{ scale: 0.97 }}
    >
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          className="absolute rounded-full bg-white/30 pointer-events-none"
          style={{ left: ripple.x, top: ripple.y }}
          initial={{ width: 0, height: 0, x: 0, y: 0, opacity: 0.6 }}
          animate={{ width: 300, height: 300, x: -150, y: -150, opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      ))}
      {Icon && <Icon size={20} strokeWidth={2} />}
      {children}
    </motion.button>
  );
}

function PhoneMockup() {
  const [callState, setCallState] = useState('idle');

  useEffect(() => {
    const interval = setInterval(() => {
      setCallState((prev) => {
        if (prev === 'idle') return 'ringing';
        if (prev === 'ringing') return 'connected';
        return 'idle';
      });
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="relative z-20"
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div className="relative w-72 h-[560px] mx-auto">
        <div className="absolute inset-0 rounded-[40px] bg-white/40 backdrop-blur-xl border border-white/50 shadow-2xl shadow-[#8b5cf6]/10" />
        <div className="absolute inset-2 rounded-[36px] bg-white/60 backdrop-blur-md overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black/80 rounded-b-2xl z-10" />
          <div className="h-full flex flex-col pt-12 px-5 pb-6">
            <div className="flex items-center justify-between mb-8">
              <span className="text-xs font-medium text-[#64748b]">9:41</span>
              <div className="flex items-center gap-1">
                <Icons.Signal size={14} className="text-[#64748b]" />
                <Icons.Wifi size={14} className="text-[#64748b]" />
                <Icons.Battery size={14} className="text-[#64748b]" />
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center">
              <AnimatePresence mode="wait">
                {callState === 'idle' && (
                  <motion.div
                    key="idle"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="text-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-[#ede9fe] flex items-center justify-center mx-auto mb-4">
                      <Icons.Phone size={32} className="text-[#8b5cf6]" />
                    </div>
                    <p className="text-lg font-semibold text-[#1e1b4b]">BD Caller</p>
                    <p className="text-sm text-[#64748b] mt-1">Ready to call</p>
                  </motion.div>
                )}
                {callState === 'ringing' && (
                  <motion.div
                    key="ringing"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="text-center"
                  >
                    <motion.div
                      className="w-20 h-20 rounded-full bg-[#ede9fe] flex items-center justify-center mx-auto mb-4"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <Icons.PhoneIncoming size={32} className="text-[#8b5cf6]" />
                    </motion.div>
                    <p className="text-lg font-semibold text-[#1e1b4b]">Incoming Call</p>
                    <p className="text-sm text-[#64748b] mt-1">+880 1XXX-XXXXXX</p>
                  </motion.div>
                )}
                {callState === 'connected' && (
                  <motion.div
                    key="connected"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="text-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-[#dcfce7] flex items-center justify-center mx-auto mb-4">
                      <Icons.PhoneCall size={32} className="text-[#22c55e]" />
                    </div>
                    <p className="text-lg font-semibold text-[#1e1b4b]">On Call</p>
                    <p className="text-sm text-[#64748b] mt-1">00:00:12</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="flex items-center justify-center gap-6">
              <motion.button
                className="w-14 h-14 rounded-full bg-[#ef4444] flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icons.PhoneOff size={24} className="text-white" />
              </motion.button>
              <motion.button
                className="w-14 h-14 rounded-full bg-[#22c55e] flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icons.Phone size={24} className="text-white" />
              </motion.button>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-1 bg-black/10 rounded-full blur-sm" />
      </div>
    </motion.div>
  );
}

function FloatingParticles() {
  const particles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 8 + 4,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 8 + 6,
    delay: Math.random() * 4
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-[#8b5cf6]/15"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      ))}
    </div>
  );
}

export default function HeroSection({ onDownloadClick, onGetStartedClick }) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_#ede9fe_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_#f3f4f6_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(139,92,246,0.04)_0%,_transparent_70%)]" />

      <FloatingParticles />

      <div className="relative z-10 max-w-screen-xl mx-auto px-8 md:px-16 py-16 md:py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20">
          <motion.div
            className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <div className="inline-flex items-center gap-2.5 bg-white/50 backdrop-blur-md border border-white/60 rounded-full px-5 py-2.5 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
                <span className="text-sm font-medium text-[#1e1b4b]">BD Caller Studio</span>
              </div>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1e1b4b] leading-tight tracking-tight mb-6"
            >
              Crystal Clear VoIP Calls &{' '}
              <span className="text-[#8b5cf6]">Instant Recharge</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-[#64748b] leading-relaxed mb-10 max-w-md"
            >
              Experience the future of communication with BD Caller. HD voice quality, seamless ISP integration, and one-tap mobile recharge—all in one elegant platform.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <AnimatedButton variant="primary" onClick={onDownloadClick} icon={Icons.Download}>
                Download App
              </AnimatedButton>
              <AnimatedButton variant="secondary" onClick={onGetStartedClick} icon={Icons.ArrowRight}>
                Get Started Free
              </AnimatedButton>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-8 mt-12"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-[#ede9fe] border-2 border-white flex items-center justify-center"
                    >
                      <Icons.User size={14} className="text-[#8b5cf6]" />
                    </div>
                  ))}
                </div>
                <span className="text-sm text-[#64748b]">2M+ Users</span>
              </div>
              <div className="flex items-center gap-1.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Icons.Star key={i} size={16} className="text-[#f59e0b] fill-[#f59e0b]" />
                ))}
                <span className="text-sm text-[#64748b] ml-1">4.9 Rating</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-1 flex items-center justify-center relative"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 rounded-full bg-[#ede9fe]/60 blur-3xl" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 rounded-full bg-[#8b5cf6]/8 blur-2xl" />
            </div>
            <div className="relative bg-white/30 backdrop-blur-xl rounded-[48px] p-8 border border-white/40 shadow-2xl shadow-[#8b5cf6]/5">
              <PhoneMockup />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
