"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Truck } from "lucide-react";

/* ── Shared animation presets ────────────────────────────────── */
const fadeLeft = {
  hidden: { opacity: 0, x: -48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

/* ── Feature item ─────────────────────────────────────────────── */
interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function Feature({ icon, title, description }: FeatureProps) {
  return (
    <motion.div variants={fadeUp} className="flex items-start gap-4">
      <div className="flex-shrink-0 w-11 h-11 bg-brand-red/10 rounded-xl flex items-center justify-center text-brand-red">
        {icon}
      </div>
      <div>
        <p className="font-semibold text-brand-dark text-[15px]">{title}</p>
        <p className="mt-0.5 text-gray-500 text-[14px] leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

/* ── Inline logo (reused from Navbar) ────────────────────────── */
function CardLogo() {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="M.H.-Građevinar logo"
    >
      <circle cx="22" cy="22" r="22" fill="#C41E1E" />
      <path
        d="M31 14.5C28.5 11.8 25.4 10.2 22 10.2C15.5 10.2 10.2 15.5 10.2 22C10.2 28.5 15.5 33.8 22 33.8C25.4 33.8 28.5 32.2 30.7 29.7"
        stroke="white"
        strokeWidth="2.8"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M24 22H31V29.7"
        stroke="white"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <text
        x="50%"
        y="52%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="white"
        fontSize="9"
        fontWeight="700"
        fontFamily="Arial, sans-serif"
        letterSpacing="0.5"
      >
        MH
      </text>
    </svg>
  );
}

/* ── Mini stat ────────────────────────────────────────────────── */
function MiniStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center text-center p-3 rounded-xl bg-white/5 border border-white/10">
      <span className="text-[17px] font-extrabold text-white leading-tight">{value}</span>
      <span className="text-[11px] text-white/50 mt-0.5 uppercase tracking-wide">{label}</span>
    </div>
  );
}

/* ── Main component ───────────────────────────────────────────── */
export default function AboutSection() {
  return (
    <section id="o-nama" className="bg-white py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── LEFT: Text content ──────────────────────────── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            {/* Label */}
            <motion.span
              variants={fadeLeft}
              className="inline-block text-brand-red text-[11px] font-bold tracking-[0.2em] uppercase mb-4"
            >
              O Nama
            </motion.span>

            {/* Heading */}
            <motion.h2
              variants={fadeLeft}
              className="text-4xl sm:text-5xl font-extrabold leading-[1.1] tracking-tight text-brand-dark"
            >
              Više od 25 godina
              <br />
              <span className="text-brand-red">gradimo povjerenje</span>
            </motion.h2>

            {/* Body text */}
            <motion.p
              variants={fadeLeft}
              className="mt-6 text-[16px] text-gray-500 leading-relaxed"
            >
              M.H.-Građevinar d.o.o. osnovana je 1998. godine u Živinicama. Kroz
              decenije rada izgradili smo reputaciju pouzdanog partnera za sve
              građevinske potrebe — od pojedinačnih kupaca do velikih izvođača
              radova.
            </motion.p>

            <motion.p
              variants={fadeLeft}
              className="mt-4 text-[16px] text-gray-500 leading-relaxed"
            >
              Naša moderna prodavnica nudi ogroman izbor građevinskog materijala,
              alata i opreme vodećih svjetskih brendova. Pored prodavnice,
              raspolažemo i sopstvenom betonarom koja osigurava visokokvalitetan
              beton za vaše projekte.
            </motion.p>

            {/* Feature items */}
            <motion.div
              variants={stagger}
              className="mt-10 flex flex-col gap-6"
            >
              <Feature
                icon={<Shield size={20} />}
                title="Kvalitet Garantovan"
                description="Isključivo provjereni brendovi i materijali"
              />
              <Feature
                icon={<Clock size={20} />}
                title="Od 1998. Godine"
                description="Decenijama pouzdan partner u regiji"
              />
              <Feature
                icon={<Truck size={20} />}
                title="Brza Isporuka"
                description="Dostava materijala na vašu lokaciju"
              />
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Dark card ────────────────────────────── */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <div
              className="
                relative bg-[#111111] rounded-[2rem] p-8 sm:p-10 overflow-hidden
                bg-diagonal-stripes
              "
            >
              {/* Subtle red ambient glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

              {/* Logo centered at top */}
              <div className="flex justify-center mb-8">
                <CardLogo />
              </div>

              {/* Large number */}
              <div className="text-center mb-6">
                <p
                  className="text-brand-red font-extrabold leading-none"
                  style={{ fontSize: "clamp(5rem, 12vw, 8rem)" }}
                >
                  25+
                </p>
                <p className="text-white/60 text-[16px] font-medium -mt-2 tracking-wide">
                  godina iskustva
                </p>
              </div>

              {/* Red divider */}
              <div className="w-16 h-[3px] bg-brand-red rounded-full mx-auto mb-8" />

              {/* Mini stats grid */}
              <div className="grid grid-cols-2 gap-3">
                <MiniStat value="500+" label="Klijenata" />
                <MiniStat value="1000+" label="Proizvoda" />
                <MiniStat value="1998" label="Osnovana" />
                <MiniStat value="BiH" label="Lider" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
