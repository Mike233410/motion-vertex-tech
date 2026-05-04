import { motion } from "framer-motion";
import * as Icons from "lucide-react";

const plans = [
  {
    id: "isp-voip",
    title: "ISP VoIP",
    rate: "৳0.35",
    note: "Per minute to any local operator",
    features: ["Unlimited concurrent calls", "99.9% uptime SLA", "Real-time CDR"],
    gradient: "from-rose-100/40 via-amber-50/20 to-transparent",
    border: "border-rose-200/40",
    icon: "Wifi",
  },
  {
    id: "standard",
    title: "Standard",
    rate: "৳0.55",
    note: "Per minute to any local operator",
    features: ["HD voice quality", "Web dashboard", "Email support"],
    gradient: "from-sky-100/40 via-indigo-50/20 to-transparent",
    border: "border-sky-200/40",
    icon: "Phone",
  },
  {
    id: "premium",
    title: "Premium",
    rate: "৳0.25",
    note: "Per minute with annual commitment",
    features: ["Priority routing", "Dedicated account manager", "24/7 phone support"],
    gradient: "from-violet-100/40 via-fuchsia-50/20 to-transparent",
    border: "border-violet-200/40",
    icon: "Crown",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function PricingCallRates() {
  return (
    <section className="relative w-full overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gradient-to-br from-purple-200/30 to-blue-200/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] translate-x-1/2 rounded-full bg-gradient-to-tl from-mint-200/20 to-lilac-200/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-screen-xl px-6 md:px-10">
        <motion.div
          className="mb-16 text-center md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="mb-4 inline-block rounded-full bg-white/60 px-4 py-1.5 text-sm font-medium tracking-wide text-purple-600 backdrop-blur-sm">
            Transparent Pricing
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
            Call Rates That Make Sense
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-500 md:text-lg">
            No hidden fees. No surprises. Just crystal-clear rates for every call you make.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {plans.map((plan) => {
            const IconComponent = Icons[plan.icon] || Icons.HelpCircle;
            return (
              <motion.div
                key={plan.id}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="group relative"
              >
                <motion.div
                  className={`relative overflow-hidden rounded-3xl border bg-white/40 p-8 backdrop-blur-lg transition-colors duration-500 md:p-10 ${plan.border}`}
                  whileHover={{
                    backgroundColor: "rgba(255, 255, 255, 0.65)",
                    boxShadow: "0 24px 64px -12px rgba(139, 92, 246, 0.12)",
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                  />

                  <motion.div
                    className="absolute inset-0 rounded-3xl border-2 border-transparent"
                    animate={{
                      borderColor: [
                        "rgba(139, 92, 246, 0)",
                        "rgba(139, 92, 246, 0.15)",
                        "rgba(139, 92, 246, 0)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  <div className="relative z-10">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/60 shadow-sm backdrop-blur-sm">
                      <IconComponent className="h-5 w-5 text-purple-600" strokeWidth={1.8} />
                    </div>

                    <h3 className="text-lg font-semibold text-purple-600">
                      {plan.title}
                    </h3>

                    <div className="mt-4 flex items-baseline gap-1">
                      <span className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                        {plan.rate}
                      </span>
                      <span className="text-sm font-medium text-slate-400">/min</span>
                    </div>

                    <p className="mt-2 text-sm text-slate-500">
                      {plan.note}
                    </p>

                    <div className="mt-8 space-y-3">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-100/60">
                            <Icons.Check className="h-3 w-3 text-purple-600" strokeWidth={2.5} />
                          </div>
                          <span className="text-sm text-slate-600">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <motion.button
                      className="mt-8 w-full rounded-2xl bg-purple-600 py-4 text-sm font-semibold text-white shadow-sm transition-colors duration-300 hover:bg-purple-700"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                    >
                      Get Started
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default PricingCallRates;
