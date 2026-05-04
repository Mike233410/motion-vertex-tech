import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { faker } from "@faker-js/faker";
import * as Icons from "lucide-react";

const fake = {
  person: () => ({
    name: faker.person.fullName(),
    role: faker.person.jobTitle(),
    review: faker.helpers.arrayElement([
      "BD Caller has completely transformed how I manage my VoIP services. The crystal-clear call quality and intuitive dashboard make it effortless to stay connected with clients worldwide. Absolutely essential for my business.",
      "I switched from three different providers to BD Caller, and I have never looked back. The recharge system is instant, rates are unbeatable, and the mobile app works flawlessly even on slower networks. A game-changer.",
      "As a remote team lead, reliable communication is non-negotiable. BD Caller delivers enterprise-grade VoIP with consumer-friendly pricing. Setup took minutes, and the support team is genuinely responsive. Highly recommend.",
    ]),
    avatar: () => "https://placehold.co/150x150/e2e8f0/64748b?text=User",
  }),
};

const testimonials = [
  {
    id: 1,
    name: fake.person().name,
    role: "Small Business Owner",
    review:
      "BD Caller has completely transformed how I manage my VoIP services. The crystal-clear call quality and intuitive dashboard make it effortless to stay connected with clients worldwide. Absolutely essential for my business.",
    avatar: "https://placehold.co/150x150/e2e8f0/64748b?text=User",
  },
  {
    id: 2,
    name: fake.person().name,
    role: "Freelance Consultant",
    review:
      "I switched from three different providers to BD Caller, and I have never looked back. The recharge system is instant, rates are unbeatable, and the mobile app works flawlessly even on slower networks. A game-changer.",
    avatar: "https://placehold.co/150x150/e2e8f0/64748b?text=User",
  },
  {
    id: 3,
    name: fake.person().name,
    role: "Remote Team Lead",
    review:
      "As a remote team lead, reliable communication is non-negotiable. BD Caller delivers enterprise-grade VoIP with consumer-friendly pricing. Setup took minutes, and the support team is genuinely responsive. Highly recommend.",
    avatar: "https://placehold.co/150x150/e2e8f0/64748b?text=User",
  },
];

function TestimonialCard({ testimonial, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const [glowActive, setGlowActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setGlowActive(true);
      const offTimer = setTimeout(() => setGlowActive(false), 1200);
      return () => clearTimeout(offTimer);
    }, 600 + index * 250);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.18,
        ease: "easeOut",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group flex-shrink-0 w-[340px] md:w-[380px] lg:w-[420px]"
    >
      <motion.div
        animate={{
          y: isHovered ? -8 : 0,
          boxShadow: isHovered
            ? "0 24px 64px -12px rgba(139, 92, 246, 0.15), 0 0 0 1px rgba(139, 92, 246, 0.08)"
            : "0 8px 32px -8px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(255, 255, 255, 0.4)",
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative overflow-hidden rounded-[32px] bg-white/40 backdrop-blur-xl border border-white/50 p-8 md:p-10"
      >
        <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-violet-100/30 via-transparent to-blue-100/20 pointer-events-none" />

        <div className="relative flex flex-col items-center text-center gap-6">
          <motion.div
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shadow-lg ring-2 ring-white/60">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://placehold.co/150x150/e2e8f0/64748b?text=User";
                }}
              />
            </div>
          </motion.div>

          <div className="flex flex-col items-center gap-2">
            <h4 className="text-base md:text-lg font-medium text-slate-800 tracking-tight">
              {testimonial.name}
            </h4>
            <span className="text-xs md:text-sm font-normal text-slate-400">
              {testimonial.role}
            </span>
          </div>

          <motion.p
            animate={{
              textShadow: glowActive
                ? "0 0 20px rgba(139, 92, 246, 0.2)"
                : "0 0 0px rgba(139, 92, 246, 0)",
            }}
            transition={{ duration: 0.8 }}
            className="text-sm md:text-base font-normal text-slate-500 leading-relaxed"
          >
            {testimonial.review}
          </motion.p>

          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <motion.div
                key={star}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.18 + 0.4 + star * 0.06,
                  ease: "easeOut",
                }}
              >
                <Icons.Star
                  className="w-4 h-4 fill-amber-400 text-amber-400"
                  strokeWidth={0}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll, { passive: true });
    checkScroll();
    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  const scroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = 420 + 32;
    el.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative w-full py-24 md:py-32 lg:py-40 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 via-violet-50/40 to-slate-50/80 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-violet-200/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-200/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block text-xs md:text-sm font-medium text-violet-500 tracking-widest uppercase mb-4">
            Trusted by Thousands
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-800 tracking-tight mb-5">
            What Our Users Say
          </h2>
          <p className="text-base md:text-lg text-slate-400 font-normal max-w-xl mx-auto leading-relaxed">
            Join the growing community of professionals who rely on BD Caller
            for crystal-clear VoIP and instant recharges.
          </p>
        </motion.div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 md:gap-8 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="snap-center">
                <TestimonialCard testimonial={testimonial} index={index} />
              </div>
            ))}
          </div>

          <div className="hidden md:flex items-center justify-center gap-4 mt-10">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-xl border transition-all duration-300 ${
                canScrollLeft
                  ? "bg-white/50 border-white/60 text-slate-600 hover:bg-white/70 hover:shadow-lg cursor-pointer"
                  : "bg-white/20 border-white/30 text-slate-300 cursor-not-allowed"
              }`}
              aria-label="Scroll testimonials left"
            >
              <Icons.ChevronLeft className="w-5 h-5" />
            </motion.button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-violet-300"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.1 + 0.5 }}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-xl border transition-all duration-300 ${
                canScrollRight
                  ? "bg-white/50 border-white/60 text-slate-600 hover:bg-white/70 hover:shadow-lg cursor-pointer"
                  : "bg-white/20 border-white/30 text-slate-300 cursor-not-allowed"
              }`}
              aria-label="Scroll testimonials right"
            >
              <Icons.ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
