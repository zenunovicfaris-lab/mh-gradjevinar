"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Phone } from "lucide-react";

/* ── Animation presets ──────────────────────────────────────────── */
const fadeLeft = {
  hidden:  { opacity: 0, x: -48 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: "easeOut" } },
};

const fadeRight = {
  hidden:  { opacity: 0, x: 48 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: "easeOut" } },
};

const stagger = {
  hidden:   {},
  visible:  { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden:  { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

/* ── Concrete classes table ─────────────────────────────────────── */
interface ConcreteRow {
  klasa: string;
  primjena: string;
  cvrstoca: string;
}

const CONCRETE_ROWS: ConcreteRow[] = [
  { klasa: "C16/20", primjena: "Podne ploče, staze",  cvrstoca: "16 N/mm²" },
  { klasa: "C20/25", primjena: "Temelji, zidovi",     cvrstoca: "20 N/mm²" },
  { klasa: "C25/30", primjena: "Stubovi, grede",       cvrstoca: "25 N/mm²" },
  { klasa: "C30/37", primjena: "Mostovi, industr.",    cvrstoca: "30 N/mm²" },
];

const rowVariants = {
  hidden:  { opacity: 0, x: 16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

/* ── Feature item ───────────────────────────────────────────────── */
function Feature({ text }: { text: string }) {
  return (
    <motion.div variants={fadeUp} className="flex items-start gap-3">
      <CheckCircle2
        size={19}
        className="text-brand-red flex-shrink-0 mt-0.5"
        strokeWidth={2}
      />
      <span className="text-white/80 text-[15px] leading-snug">{text}</span>
    </motion.div>
  );
}

/* ── Stat item (top of card) ────────────────────────────────────── */
function CardStat({
  value,
  label,
  border = true,
}: {
  value: string;
  label: string;
  border?: boolean;
}) {
  return (
    <div
      className={`flex flex-col items-center text-center px-5 flex-1 ${
        border ? "border-r border-brand-red/30" : ""
      }`}
    >
      <span className="text-brand-red text-3xl sm:text-4xl font-extrabold leading-none">
        {value}
      </span>
      <span className="mt-1 text-gray-400 text-[12px] uppercase tracking-wide">
        {label}
      </span>
    </div>
  );
}

/* ── Main component ─────────────────────────────────────────────── */
export default function BetonaraSection() {
  return (
    <section id="betonara" className="bg-[#111111] py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* ── LEFT: Text content ──────────────────────────── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Badge */}
            <motion.span
              variants={fadeLeft}
              className="inline-flex items-center gap-1.5 bg-brand-red/15 border border-brand-red/30 text-brand-red text-[12px] font-bold tracking-wide uppercase px-3 py-1.5 rounded-full mb-5"
            >
              ⚡ Vlastita Betonara
            </motion.span>

            {/* Heading */}
            <motion.h2
              variants={fadeLeft}
              className="text-4xl sm:text-5xl font-extrabold leading-[1.1] tracking-tight"
            >
              <span className="text-white">Visokokvalitetan beton</span>
              <br />
              <span className="text-brand-red">za svaki projekat</span>
            </motion.h2>

            {/* Body */}
            <motion.p variants={fadeLeft} className="mt-6 text-[16px] text-gray-400 leading-relaxed">
              Naša betonara u Živinicama proizvodi beton i armirani beton po
              najvišim standardima kvaliteta. Opremljeni modernom tehnologijom,
              osiguravamo precizne mješavine za temelje, ploče, stubove i sve
              ostale konstrukcije.
            </motion.p>

            <motion.p variants={fadeLeft} className="mt-4 text-[16px] text-gray-400 leading-relaxed">
              Sarađujemo s privatnim investitorima, građevinskim firmama i javnim
              institucijama. Brza isporuka i fleksibilni uslovi saradnje.
            </motion.p>

            {/* Features */}
            <motion.div variants={stagger} className="mt-8 flex flex-col gap-4">
              <Feature text="Beton svih klasa — C16/20, C20/25, C25/30, C30/37" />
              <Feature text="Armirani beton za temelje i konstrukcije" />
              <Feature text="Cement i suhe mješavine u vrećama" />
              <Feature text="Dostava betonskom pumpom na lokaciju" />
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeLeft} className="mt-10">
              <motion.a
                href="tel:061561413"
                className="
                  relative inline-flex items-center gap-3
                  bg-brand-red hover:bg-[#a01818]
                  text-white font-semibold text-[15px]
                  px-7 py-4 rounded-full
                  transition-colors duration-200
                  shadow-lg shadow-red-900/30
                "
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(196,30,30,0)",
                    "0 0 0 8px rgba(196,30,30,0.25)",
                    "0 0 0 0 rgba(196,30,30,0)",
                  ],
                }}
                transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
              >
                <Phone size={17} strokeWidth={2} />
                Zatražite ponudu → 061 561 413
              </motion.a>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Dark card ────────────────────────────── */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="bg-[#1A1A1A] border border-gray-800 rounded-3xl p-6 sm:p-8">

              {/* Top 3 stats */}
              <div className="flex items-stretch mb-7">
                <CardStat value="3"    label="vrste betona"     border={true} />
                <CardStat value="500+" label="m³ isporučeno"    border={true} />
                <CardStat value="24h"  label="rok isporuke"     border={false} />
              </div>

              {/* Red divider */}
              <div className="h-px bg-brand-red/30 mb-7" />

              {/* Table heading */}
              <p className="text-[11px] font-bold text-brand-red tracking-[0.18em] uppercase mb-3">
                Klase betona
              </p>

              {/* Header row */}
              <div className="grid grid-cols-3 bg-brand-red/90 rounded-t-xl px-4 py-2.5 mb-px">
                {["Klasa", "Primjena", "Čvrstoća"].map((h) => (
                  <span key={h} className="text-white text-[12px] font-bold uppercase tracking-wide">
                    {h}
                  </span>
                ))}
              </div>

              {/* Data rows */}
              <motion.div
                className="rounded-b-xl overflow-hidden"
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {CONCRETE_ROWS.map((row, i) => (
                  <motion.div
                    key={row.klasa}
                    variants={rowVariants}
                    className={`grid grid-cols-3 px-4 py-3 ${
                      i % 2 === 0 ? "bg-[#1F1F1F]" : "bg-[#252525]"
                    }`}
                  >
                    <span className="text-brand-red font-bold text-[13px]">{row.klasa}</span>
                    <span className="text-gray-300 text-[13px]">{row.primjena}</span>
                    <span className="text-white font-semibold text-[13px]">{row.cvrstoca}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Note */}
              <p className="mt-4 text-gray-500 text-[12px] italic">
                * Dostupne i posebne mješavine po zahtjevu
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
