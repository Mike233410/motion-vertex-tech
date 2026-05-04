import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

const features = [
  {
    icon: 'Phone',
    title: 'VoIP Calling',
    description: 'Crystal-clear HD voice calls over the internet with minimal latency and maximum reliability.'
  },
  {
    icon: 'Smartphone',
    title: 'Mobile Recharge',
    description: 'Instant top-ups for any carrier worldwide. Fast, secure, and always available 24/7.'
  },
  {
    icon: 'Wallet',
    title: 'Wallet Balance',
    description: 'Smart digital wallet with real-time balance tracking, auto-reload, and spending insights.'
  },
  {
    icon: 'History',
    title: 'Call History',
    description: 'Complete call logs with detailed analytics, duration tracking, and exportable reports.'
  },
  {
    icon: 'ShieldCheck',
    title: 'Secure Payments',
    description: 'Bank-grade encryption and PCI-DSS compliance for every transaction you make.'
  },
  {
    icon: 'LayoutDashboard',
    title: 'Admin Dashboard',
    description: 'Powerful analytics dashboard with real-time metrics, user management, and billing tools.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

function FeaturesGrid() {
  return (
    <section id="features" className="relative w-full py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/30 to-transparent pointer-events-none" />
      
      <div className="relative max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-purple-600 bg-purple-100/60 rounded-full backdrop-blur-sm">
            Core Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight mb-6">
            Everything You Need
          </h2>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            A complete suite of tools designed for modern communication and financial management.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {features.map((feature, index) => {
            const IconComponent = Icons[feature.icon] || Icons.HelpCircle;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: 'easeOut' }
                }}
                className="group relative rounded-3xl p-10 bg-white/40 backdrop-blur-xl border border-white/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),0_8px_32px_rgba(139,92,246,0.08)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_20px_48px_rgba(139,92,246,0.18),0_0_0_1px_rgba(139,92,246,0.2)] transition-shadow duration-500"
              >
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-purple-100/60 text-purple-500 shadow-sm">
                  <IconComponent size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed font-light">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default FeaturesGrid;
