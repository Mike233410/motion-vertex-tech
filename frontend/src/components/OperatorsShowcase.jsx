import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

const operators = [
  {
    id: 'grameenphone',
    name: 'Grameenphone',
    color: '#00a651',
    logo: 'https://images.pexels.com/photos/34712565/pexels-photo-34712565.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    id: 'robi',
    name: 'Robi',
    color: '#d62828',
    logo: 'https://images.pexels.com/photos/15652230/pexels-photo-15652230.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    id: 'banglalink',
    name: 'Banglalink',
    color: '#f37021',
    logo: 'https://images.pexels.com/photos/36639433/pexels-photo-36639433.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    id: 'teletalk',
    name: 'Teletalk',
    color: '#0066b3',
    logo: 'https://images.pexels.com/photos/34712565/pexels-photo-34712565.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    id: 'airtel',
    name: 'Airtel',
    color: '#e40000',
    logo: 'https://images.pexels.com/photos/16898348/pexels-photo-16898348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

function OperatorsShowcase() {
  return (
    <section className="w-full py-20 md:py-28 px-6 md:px-10">
      <div className="max-w-screen-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-14 md:mb-18"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 backdrop-blur-md border border-white/50 text-sm font-medium text-slate-600 mb-6">
            <Icons.Signal className="w-4 h-4 text-violet-500" />
            Supported Networks
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-800 mb-4">
            All Major Bangladeshi Operators
          </h2>
          <p className="text-base md:text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
            Recharge any number across every network with instant delivery and zero hidden fees.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="flex flex-wrap justify-center gap-4"
        >
          {operators.map((operator) => (
            <motion.div
              key={operator.id}
              variants={cardVariants}
              whileHover={{
                scale: 1.06,
                y: -4,
                transition: { duration: 0.25, ease: 'easeOut' },
              }}
              className="group relative flex flex-col items-center justify-center w-[calc(50%-8px)] sm:w-[calc(33.333%-11px)] md:w-[calc(20%-13px)] min-w-[140px] max-w-[200px] aspect-square rounded-[28px] bg-white/30 backdrop-blur-xl border border-white/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),0_8px_32px_rgba(139,92,246,0.08)] cursor-pointer overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[28px]"
                style={{
                  boxShadow: `inset 0 0 0 2px ${operator.color}30, 0 12px 40px ${operator.color}15`,
                }}
              />

              <div className="relative z-10 flex flex-col items-center gap-3 px-4">
                <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-2xl bg-white/50 backdrop-blur-sm border border-white/40 shadow-sm overflow-hidden">
                  <img
                    src={operator.logo}
                    alt={`${operator.name} logo`}
                    className="w-12 h-12 md:w-14 md:h-14 object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div
                    className="hidden absolute inset-0 items-center justify-center text-white font-bold text-lg"
                    style={{ backgroundColor: operator.color }}
                  >
                    {operator.name.charAt(0)}
                  </div>
                </div>
                <span className="text-sm md:text-base font-medium text-slate-700 text-center leading-tight">
                  {operator.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default OperatorsShowcase;
