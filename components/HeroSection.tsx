"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { ChevronDown } from "lucide-react";

/* ── Animated counter hook ────────────────────────────────────── */
function useCountUp(target: number, duration = 2, shouldStart: boolean = true) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;
    const controls = animate(0, target, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setCount(Math.floor(v)),
    });
    return () => controls.stop();
  }, [target, duration, shouldStart]);

  return count;
}

/* ── Stat card ────────────────────────────────────────────────── */
interface StatCardProps {
  value: number;
  suffix: string;
  label: string;
  shouldStart: boolean;
  delay?: number;
}

function StatCard({ value, suffix, label, shouldStart, delay = 0 }: StatCardProps) {
  const count = useCountUp(value, 2, shouldStart);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      className="flex flex-col items-center justify-center px-8 py-5 rounded-2xl
                 bg-white/10 backdrop-blur-md border border-white/20
                 text-white text-center min-w-[140px]"
    >
      <span className="text-3xl sm:text-4xl font-extrabold leading-none text-white">
        {count}
        <span className="text-brand-red">{suffix}</span>
      </span>
      <span className="mt-1.5 text-[13px] font-medium text-white/70 tracking-wide uppercase">
        {label}
      </span>
    </motion.div>
  );
}

/* ── Main hero ─────────────────────────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function HeroSection() {
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.4 });

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/*
       * BACKGROUND:
       * Replace the gradient below with a real background image:
       *   className="... bg-[url('/images/hero-bg.jpg')] bg-cover bg-center"
       * and keep the dark overlay div beneath it.
       */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#111111] via-[#1a1a1a] to-[#0d0d0d]" />

      {/* Subtle red accent glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(196,30,30,0.18),transparent)]" />

      {/* Dark overlay (for when a real photo is used) */}
      <div className="absolute inset-0 bg-black/50" />

      {/* ── Animated content ──────────────────────────────────── */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 w-full max-w-5xl mx-auto pt-28 pb-48"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants}>
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-[13px] font-medium px-4 py-1.5 rounded-full mb-6">
            ✦ Živinice, Bosna i Hercegovina
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight"
        >
          <span className="text-white">Vaš Pouzdani Partner</span>
          <br />
          <span className="text-brand-red">u Građevinarstvu</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="mt-6 text-[17px] sm:text-[19px] text-white/60 max-w-2xl leading-relaxed"
        >
          Od 1998. godine nudimo najkvalitetniji građevinski materijal, opremu i
          beton. Vaš projekat — naša misija.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <button
            onClick={() => handleScroll("usluge")}
            className="inline-flex items-center justify-center bg-brand-red hover:bg-[#a01818] active:bg-[#8a1414] text-white font-semibold text-[15px] px-8 py-3.5 rounded-full transition-colors duration-200 shadow-lg shadow-red-900/30 w-full sm:w-auto"
          >
            Pogledajte Usluge
          </button>
          <button
            onClick={() => handleScroll("kontakt")}
            className="inline-flex items-center justify-center border-2 border-white/60 hover:border-white text-white font-semibold text-[15px] px-8 py-3.5 rounded-full transition-colors duration-200 w-full sm:w-auto"
          >
            Kontaktirajte Nas
          </button>
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ─────────────────────────────────── */}
      <motion.div
        className="absolute bottom-[220px] left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className="text-[11px] tracking-widest uppercase font-medium">
          Skrolajte
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <ChevronDown size={22} />
        </motion.div>
      </motion.div>

      {/* ── Floating stats bar ───────────────────────────────── */}
      <div
        ref={statsRef}
        className="absolute bottom-0 left-0 right-0 z-10 px-4 pb-8"
      >
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-0
                       bg-white/8 backdrop-blur-lg border border-white/15
                       rounded-2xl sm:rounded-full px-4 py-4 sm:py-3 shadow-2xl"
          >
            <StatCard
              value={25}
              suffix="+"
              label="Godina iskustva"
              shouldStart={statsInView}
              delay={0.1}
            />
            {/* Divider (desktop) */}
            <div className="hidden sm:block w-px h-10 bg-white/15 mx-2" />
            <StatCard
              value={500}
              suffix="+"
              label="Zadovoljnih klijenata"
              shouldStart={statsInView}
              delay={0.2}
            />
            <div className="hidden sm:block w-px h-10 bg-white/15 mx-2" />
            <StatCard
              value={1000}
              suffix="+"
              label="Proizvoda u ponudi"
              shouldStart={statsInView}
              delay={0.3}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
