import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

const steps = [
  {
    number: 1,
    title: 'Register',
    description: 'Create your account in seconds with just your phone number. No paperwork, no hassle.',
    icon: 'UserPlus',
  },
  {
    number: 2,
    title: 'Top Up Wallet',
    description: 'Add funds securely via bKash, Nagad, or bank transfer. Instant balance reflection.',
    icon: 'Wallet',
  },
  {
    number: 3,
    title: 'Call & Recharge',
    description: 'Start making VoIP calls and recharge any number worldwide at the best rates.',
    icon: 'Phone',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

const lineVariants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
    },
  },
};

const glowPulse = {
  animate: {
    boxShadow: [
      '0 0 8px rgba(139,92,246,0.2), 0 0 16px rgba(139,92,246,0.1)',
      '0 0 20px rgba(139,92,246,0.4), 0 0 40px rgba(139,92,246,0.2)',
      '0 0 8px rgba(139,92,246,0.2), 0 0 16px rgba(139,92,246,0.1)',
    ],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

function StepIcon({ name }) {
  const IconComponent = Icons?.[name] || Icons.HelpCircle;
  return <IconComponent className="w-6 h-6" />;
}

function ConnectorLine({ index }) {
  return (
    <motion.div
      className="hidden md:flex items-center justify-center w-16 lg:w-24 flex-shrink-0"
      variants={lineVariants}
      style={{ originX: 0 }}
    >
      <motion.div
        className="h-px w-full bg-gradient-to-r from-violet-300 via-violet-400 to-violet-300 relative"
        animate={{
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: index * 0.6,
          ease: 'easeInOut',
        }}
      >
        <motion.div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-violet-400"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.6,
            ease: 'easeInOut',
          }}
        />
      </motion.div>
    </motion.div>
  );
}

function MobileConnector({ index }) {
  return (
    <motion.div
      className="flex md:hidden items-center justify-center h-12"
      initial={{ opacity: 0, scaleY: 0 }}
      whileInView={{ opacity: 1, scaleY: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 + index * 0.3 }}
      style={{ originY: 0 }}
    >
      <motion.div
        className="w-px h-full bg-gradient-to-b from-violet-300 via-violet-400 to-violet-300 relative"
        animate={{
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: index * 0.6,
          ease: 'easeInOut',
        }}
      >
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-violet-400"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.6,
            ease: 'easeInOut',
          }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative w-full py-24 md:py-32 lg:py-40 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-violet-50/30 to-blue-50/20" />
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-violet-100/40 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-blue-100/30 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-100/20 blur-3xl" />

      <div className="relative max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          className="text-center mb-16 md:mb-20 lg:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <motion.span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase bg-violet-100 text-violet-600 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Simple Process
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 mb-5">
            How It Works
          </h2>
          <p className="text-base md:text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
            Get started in three effortless steps. No complexity, no waiting.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row items-center justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {steps.map((step, index) => (
            <div key={step.number} className="flex flex-col md:flex-row items-center">
              {index > 0 && <MobileConnector index={index - 1} />}
              {index > 0 && <ConnectorLine index={index - 1} />}

              <motion.div
                className="relative w-full max-w-sm md:max-w-xs lg:max-w-sm"
                variants={cardVariants}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.3, ease: 'easeOut' },
                }}
              >
                <motion.div
                  className="relative rounded-[32px] p-8 md:p-10 bg-white/60 backdrop-blur-xl border border-white/50 shadow-lg shadow-slate-200/40"
                  animate={glowPulse.animate}
                  whileHover={{
                    boxShadow: '0 0 30px rgba(139,92,246,0.15), 0 8px 32px rgba(0,0,0,0.08)',
                    borderColor: 'rgba(139,92,246,0.2)',
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-white/40 via-transparent to-violet-50/20 pointer-events-none" />

                  <div className="relative flex flex-col items-center text-center">
                    <motion.div
                      className="mb-6"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        type: 'spring',
                        stiffness: 260,
                        damping: 20,
                        delay: 0.2 + index * 0.2,
                      }}
                    >
                      <div className="relative">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-violet-400 to-purple-500 flex items-center justify-center shadow-lg shadow-violet-200">
                          <span className="text-white text-lg font-bold">
                            {step.number}
                          </span>
                        </div>
                        <motion.div
                          className="absolute inset-0 rounded-full bg-violet-400"
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.3, 0, 0.3],
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            delay: index * 0.5,
                            ease: 'easeInOut',
                          }}
                        />
                      </div>
                    </motion.div>

                    <div className="mb-4 p-3 rounded-2xl bg-violet-50/80 text-violet-500">
                      <StepIcon name={step.icon} />
                    </div>

                    <h3 className="text-lg font-semibold text-slate-900 mb-3">
                      {step.title}
                    </h3>

                    <p className="text-sm text-slate-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 md:mt-20 lg:mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.button
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-violet-500 to-purple-600 text-white text-sm font-medium shadow-lg shadow-violet-200/50 backdrop-blur-sm"
            whileHover={{
              scale: 1.03,
              boxShadow: '0 0 30px rgba(139,92,246,0.3), 0 8px 32px rgba(0,0,0,0.1)',
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            Get Started Now
            <Icons.ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
