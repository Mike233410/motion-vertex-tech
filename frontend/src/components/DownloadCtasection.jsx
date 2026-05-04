import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

function DownloadCtasection({ onAppStoreClick, onGooglePlayClick }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
    tap: {
      scale: 0.96,
      transition: {
        duration: 0.1,
      },
    },
    hover: {
      scale: 1.03,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <section
      id="download"
      className="relative w-full overflow-hidden"
      aria-label="Download BD Caller Studio App"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-fuchsia-50 to-cyan-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(139,92,246,0.08)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(99,102,241,0.06)_0%,_transparent_50%)]" />

      <div className="relative mx-auto max-w-screen-xl px-6 py-24 md:px-8 md:py-32 lg:py-40">
        <motion.div
          className="relative mx-auto max-w-3xl overflow-hidden rounded-[32px] border border-white/40 bg-white/20 px-8 py-16 backdrop-blur-xl md:px-16 md:py-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-white/30 via-transparent to-violet-100/20" />
          <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-violet-200/20 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-cyan-200/15 blur-3xl" />

          <div className="relative flex flex-col items-center text-center">
            <motion.div
              variants={itemVariants}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200/50 bg-violet-50/60 px-5 py-2 backdrop-blur-sm"
            >
              <Icons.Smartphone className="h-4 w-4 text-violet-500" />
              <span className="text-sm font-medium tracking-wide text-violet-600">
                Available on iOS & Android
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="mb-6 text-3xl font-bold leading-tight tracking-tight text-slate-900 md:text-4xl lg:text-5xl"
            >
              Start Calling Smarter
              <span className="block text-violet-600">Today</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mb-12 max-w-lg text-base leading-relaxed text-slate-600 md:text-lg"
            >
              Download BD Caller Studio and experience crystal-clear VoIP calls,
              instant recharges, and seamless connectivity — all in one elegant app.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex w-full max-w-md flex-col gap-4 md:flex-row md:justify-center"
            >
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={onAppStoreClick}
                className="group inline-flex items-center justify-center gap-3 rounded-3xl border border-slate-300/60 bg-white/40 px-8 py-4 text-left shadow-sm backdrop-blur-md transition-colors hover:border-violet-300/60 hover:bg-white/60"
                aria-label="Download on the App Store"
              >
                <Icons.Apple className="h-7 w-7 text-slate-800 transition-colors group-hover:text-violet-600" />
                <div className="flex flex-col">
                  <span className="text-xs font-medium leading-none text-slate-500">
                    Download on the
                  </span>
                  <span className="text-base font-semibold leading-tight text-slate-800 transition-colors group-hover:text-violet-700">
                    App Store
                  </span>
                </div>
              </motion.button>

              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={onGooglePlayClick}
                className="group inline-flex items-center justify-center gap-3 rounded-3xl border border-slate-300/60 bg-white/40 px-8 py-4 text-left shadow-sm backdrop-blur-md transition-colors hover:border-violet-300/60 hover:bg-white/60"
                aria-label="Get it on Google Play"
              >
                <Icons.Play className="h-7 w-7 text-slate-800 transition-colors group-hover:text-violet-600" />
                <div className="flex flex-col">
                  <span className="text-xs font-medium leading-none text-slate-500">
                    Get it on
                  </span>
                  <span className="text-base font-semibold leading-tight text-slate-800 transition-colors group-hover:text-violet-700">
                    Google Play
                  </span>
                </div>
              </motion.button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-10 flex items-center gap-2 text-sm text-slate-500"
            >
              <Icons.Headphones className="h-4 w-4 text-violet-400" />
              <span>
                Need help? Reach us at{' '}
                <a
                  href="mailto:support@bdcaller.studio"
                  className="font-medium text-violet-600 transition-colors hover:text-violet-700 hover:underline"
                >
                  support@bdcaller.studio
                </a>
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default DownloadCtasection;
