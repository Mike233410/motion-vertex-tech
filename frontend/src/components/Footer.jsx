import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

function Footer() {
  const footerLinks = [
    { label: 'Features', route: '#features' },
    { label: 'How It Works', route: '#how-it-works' },
    { label: 'Pricing', route: '#pricing' },
    { label: 'Download', route: '#download' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <footer className="relative w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-lilac-50/30 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(139,92,246,0.06),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(99,102,241,0.05),_transparent_50%)]" />

      <motion.div
        className="relative max-w-screen-xl mx-auto px-6 md:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
      >
        <div className="py-6 md:py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-6">
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-violet-500/10 flex items-center justify-center">
                <Icons.Phone className="w-4 h-4 text-violet-500" />
              </div>
              <span className="text-base font-semibold tracking-tight text-slate-800">
                BD Caller Studio
              </span>
            </motion.div>

            <motion.nav
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
              aria-label="Footer navigation"
            >
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.route}
                  className="text-sm text-slate-500 hover:text-violet-500 transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-violet-500 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </motion.nav>

            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center md:items-end gap-2"
            >
              <a
                href="mailto:hello@bdcaller.studio"
                className="flex items-center gap-2 text-sm text-slate-500 hover:text-violet-500 transition-colors duration-200 group"
              >
                <Icons.Mail className="w-3.5 h-3.5 text-slate-400 group-hover:text-violet-500 transition-colors" />
                <span>hello@bdcaller.studio</span>
              </a>
              <a
                href="tel:+8801234567890"
                className="flex items-center gap-2 text-sm text-slate-500 hover:text-violet-500 transition-colors duration-200 group"
              >
                <Icons.Phone className="w-3.5 h-3.5 text-slate-400 group-hover:text-violet-500 transition-colors" />
                <span>+880 1234 567 890</span>
              </a>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-6 md:mt-8 pt-5 border-t border-slate-200/60"
          >
            <p className="text-center text-xs text-slate-400 tracking-wide">
              &copy; {new Date().getFullYear()} BD Caller Studio. All rights reserved.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;
