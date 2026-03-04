"use client";

import { motion } from "framer-motion";
import { Star, ShieldCheck, Users } from "lucide-react";

/* ── Brand data ────────────────────────────────────────────────── */
const ROW_ONE = [
  { name: "TOTAL",      tagline: "Profesionalni alati" },
  { name: "INGCO",      tagline: "Inovativna oprema" },
  { name: "TKK",        tagline: "Hemija za gradnju" },
  { name: "Wkręt-met",  tagline: "Montažni sistemi" },
  { name: "Tekasil",    tagline: "Silikonski kitovi" },
  { name: "Tekapur",    tagline: "PU pjene i ljepila" },
  { name: "AR+TECH",    tagline: "Tehnički materijali" },
  { name: "GEKO",       tagline: "Generatori i alati" },
];

const ROW_TWO = [
  { name: "Tekafiks",   tagline: "Montažna ljepila" },
  { name: "Tekaflex",   tagline: "Fleksibilni kitovi" },
  { name: "Tekadom",    tagline: "Kućna hemija" },
  { name: "Tekasol",    tagline: "Zaštitni premazi" },
  { name: "PROFIL",     tagline: "Aluminijski profili" },
  { name: "KLIMA",      tagline: "Klimatizacija" },
  { name: "Weber",      tagline: "Malteri i ljepila" },
  { name: "Mapei",      tagline: "Kompletna hemija" },
];

/* ── Ticker card ───────────────────────────────────────────────── */
function BrandCard({ name, tagline }: { name: string; tagline: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, borderColor: "#C41E1E" }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="
        flex-shrink-0 flex flex-col items-center justify-center
        bg-[#1F1F1F] border border-gray-800 rounded-xl
        px-8 py-5 mx-2.5 min-w-[160px]
        cursor-default select-none
      "
      style={{ borderColor: "rgb(31,41,55)" }} /* initial border — overridden by whileHover */
    >
      <span className="text-xl font-bold text-white tracking-wide whitespace-nowrap">
        {name}
      </span>
      <span className="mt-1 text-[12px] text-gray-500 whitespace-nowrap">
        {tagline}
      </span>
    </motion.div>
  );
}

/* ── Ticker row ─────────────────────────────────────────────────── */
function TickerRow({
  brands,
  reverse = false,
}: {
  brands: typeof ROW_ONE;
  reverse?: boolean;
}) {
  // Duplicate for seamless loop
  const doubled = [...brands, ...brands];

  return (
    <div className="relative overflow-hidden w-full">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#111111] to-transparent z-10 pointer-events-none" />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#111111] to-transparent z-10 pointer-events-none" />

      <div
        className={`flex items-center py-2 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
        style={{ width: "max-content" }}
      >
        {doubled.map((brand, i) => (
          <BrandCard key={`${brand.name}-${i}`} {...brand} />
        ))}
      </div>
    </div>
  );
}

/* ── Trust strip card ───────────────────────────────────────────── */
interface TrustCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const trustCardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function TrustCard({ icon: Icon, title, description }: TrustCardProps) {
  return (
    <motion.div
      variants={trustCardVariants}
      className="flex flex-col items-center text-center bg-[#1A1A1A] rounded-2xl px-6 py-8 border border-gray-800"
    >
      <div className="w-12 h-12 bg-brand-red/15 rounded-xl flex items-center justify-center text-brand-red mb-5">
        <Icon size={22} strokeWidth={1.75} />
      </div>
      <h3 className="text-white font-bold text-[16px]">{title}</h3>
      <p className="mt-2 text-gray-400 text-[14px] leading-relaxed">{description}</p>
    </motion.div>
  );
}

/* ── Main component ─────────────────────────────────────────────── */
export default function BrandsSection() {
  return (
    <section id="brendovi" className="bg-[#111111] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Heading ────────────────────────────────────────── */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="flex items-center justify-center gap-3 text-brand-red text-[11px] font-bold tracking-[0.2em] uppercase mb-4">
            <span className="inline-block w-8 h-px bg-brand-red" />
            Naši Brendovi
            <span className="inline-block w-8 h-px bg-brand-red" />
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-[1.1] tracking-tight">
            Zastupamo vodeće svjetske brendove
          </h2>

          <p className="mt-4 text-[17px] text-gray-400 max-w-xl mx-auto">
            Isključivo originalni proizvodi s garancijom kvaliteta
          </p>
        </motion.div>
      </div>

      {/* ── Tickers (full-bleed, outside container) ───────── */}
      <div className="flex flex-col gap-4 mb-16">
        <TickerRow brands={ROW_ONE} reverse={false} />
        <TickerRow brands={ROW_TWO} reverse={true} />
      </div>

      {/* ── Trust strip ──────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <TrustCard
            icon={Star}
            title="Originalni Proizvodi"
            description="Samo certificirani i originalni brendovi"
          />
          <TrustCard
            icon={ShieldCheck}
            title="Garancija Kvaliteta"
            description="Svaki proizvod dolazi s punom garancijom"
          />
          <TrustCard
            icon={Users}
            title="Stručno Osoblje"
            description="Naš tim vam pomaže pri odabiru"
          />
        </motion.div>
      </div>
    </section>
  );
}
