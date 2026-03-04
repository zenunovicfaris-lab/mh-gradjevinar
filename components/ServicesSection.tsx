"use client";

import { motion } from "framer-motion";
import { Package, Wrench, Layers, Building2, Phone } from "lucide-react";

/* ── Data ─────────────────────────────────────────────────────── */
const SERVICES = [
  {
    icon: Package,
    title: "Građevinski Materijal",
    description:
      "Cement, cigla, pijesak, šljunak, armirano gvožđe, ploče i sve ostalo za gradnju od temelja do krova.",
  },
  {
    icon: Wrench,
    title: "Alati i Oprema",
    description:
      "Električni i ručni alati vodećih brendova TOTAL i INGCO. Sve za profesionalne majstore i hobiste.",
  },
  {
    icon: Layers,
    title: "Ljepila, Silikoni i Hemija",
    description:
      "Kompletna ponuda TKK, Wkręt-met i ostalih brendova. Montažna ljepila, silikoni, PU pjene i više.",
  },
  {
    icon: Building2,
    title: "Betonara",
    description:
      "Vlastita betonara sa visokokvalitetnim betonom i cementom za sve vrste građevinskih projekata u regiji.",
  },
] as const;

/* ── Animation variants ───────────────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

/* ── Service card ─────────────────────────────────────────────── */
interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -8,
        transition: { duration: 0.25, ease: "easeOut" },
      }}
      className="
        group relative bg-white rounded-2xl p-7 flex flex-col gap-4
        border border-transparent
        shadow-sm hover:shadow-xl
        transition-shadow duration-300
        overflow-hidden
        cursor-default
      "
    >
      {/* Red top border — slides in on hover */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-brand-red transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-t-2xl" />

      {/* Icon */}
      <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center text-brand-red flex-shrink-0">
        <Icon size={22} strokeWidth={1.75} />
      </div>

      {/* Text */}
      <div className="flex flex-col gap-2 flex-1">
        <h3 className="text-[17px] font-bold text-brand-dark leading-snug">
          {title}
        </h3>
        <p className="text-[14px] text-gray-500 leading-relaxed flex-1">
          {description}
        </p>
      </div>

      {/* Link */}
      <a
        href="#kontakt"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="inline-flex items-center text-brand-red text-[13px] font-semibold hover:gap-2 gap-1 transition-all duration-200 mt-auto"
      >
        Saznaj više
        <span className="text-[15px]">→</span>
      </a>
    </motion.div>
  );
}

/* ── Main component ───────────────────────────────────────────── */
export default function ServicesSection() {
  return (
    <section id="usluge" className="bg-brand-light py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section heading ───────────────────────────────── */}
        <motion.div
          className="text-center mb-14"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.span
            variants={headingVariants}
            className="inline-block text-brand-red text-[11px] font-bold tracking-[0.2em] uppercase mb-3"
          >
            Naše Usluge
          </motion.span>

          <motion.h2
            variants={headingVariants}
            className="text-4xl sm:text-5xl font-extrabold text-brand-dark leading-[1.1] tracking-tight"
          >
            Sve što vam treba za gradnju
          </motion.h2>

          <motion.p
            variants={headingVariants}
            className="mt-4 text-[17px] text-gray-500 max-w-xl mx-auto"
          >
            Od alata do betona — kompletan asortiman na jednom mjestu.
          </motion.p>
        </motion.div>

        {/* ── Cards grid ────────────────────────────────────── */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {SERVICES.map(({ icon, title, description }) => (
            <ServiceCard
              key={title}
              icon={icon}
              title={title}
              description={description}
            />
          ))}
        </motion.div>

        {/* ── CTA banner ────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-10 bg-brand-red rounded-2xl px-8 py-8 sm:py-10 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <p className="text-white text-xl sm:text-2xl font-bold text-center sm:text-left leading-snug">
            Trebate pomoć pri odabiru materijala?
          </p>

          <a
            href="tel:061561413"
            className="
              flex-shrink-0 inline-flex items-center gap-3
              border-2 border-white text-white font-semibold text-[15px]
              px-7 py-3.5 rounded-full
              hover:bg-white hover:text-brand-red
              transition-colors duration-200
              whitespace-nowrap
            "
          >
            {/* Pulsing phone icon */}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="inline-flex"
            >
              <Phone size={18} strokeWidth={2} />
            </motion.span>
            Pozovite nas: 061 561 413
          </a>
        </motion.div>

      </div>
    </section>
  );
}
