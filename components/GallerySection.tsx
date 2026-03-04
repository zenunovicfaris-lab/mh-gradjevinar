"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Camera, MapPin, Phone } from "lucide-react";
import { useState } from "react";

interface GalleryItem {
  id: number;
  label: string;
  src: string;
  rowSpan: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  { id: 1, label: "Izlog alata — TOTAL & INGCO", src: "/images/shop-1.jpg", rowSpan: "row-span-2" },
  { id: 2, label: "Građevinski materijal",        src: "/images/shop-2.jpg", rowSpan: "row-span-1" },
  { id: 3, label: "Hemija i ljepila",             src: "/images/shop-3.jpg", rowSpan: "row-span-1" },
  { id: 4, label: "Pogled na prodavnicu",         src: "/images/shop-4.jpg", rowSpan: "row-span-2" },
  { id: 5, label: "Alati i oprema",               src: "/images/shop-5.jpg", rowSpan: "row-span-1" },
  { id: 6, label: "M.H.-Građevinar exterijer",    src: "/images/building.jpg", rowSpan: "row-span-1" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden:  { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: "easeOut" } },
};

function GalleryCard({ item }: { item: GalleryItem }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={itemVariants}
      className={`relative rounded-2xl overflow-hidden bg-[#1F1F1F] ${item.rowSpan} min-h-[160px] group`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Real image */}
      <motion.div
        className="absolute inset-0"
        animate={{ scale: hovered ? 1.05 : 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Image
          src={item.src}
          alt={item.label}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 33vw"
        />
      </motion.div>

      {/* Dark overlay on hover */}
      <motion.div
        className="absolute inset-0 bg-black/50 z-10"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Label slides up from bottom */}
      <motion.div
        className="absolute inset-x-0 bottom-0 bg-[#C41E1E] flex items-end justify-start px-5 py-4 z-20"
        animate={{ height: hovered ? "52px" : "0px" }}
        transition={{ duration: 0.28, ease: "easeOut" }}
      >
        <span className="text-white font-semibold text-[13px] whitespace-nowrap overflow-hidden">
          {item.label}
        </span>
      </motion.div>
    </motion.div>
  );
}

export default function GallerySection() {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="galerija" className="bg-[#F5F5F5] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 text-[#C41E1E] text-[11px] font-bold tracking-[0.2em] uppercase mb-3">
            <Camera size={13} strokeWidth={2.5} />
            Galerija
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#111111] leading-[1.1] tracking-tight">
            Pogledajte naš showroom
          </h2>
          <p className="mt-4 text-[17px] text-gray-500 max-w-xl mx-auto">
            Moderna prodavnica s ogromnim izborom materijala, alata i opreme
          </p>
        </motion.div>

        {/* Masonry grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 grid-rows-[repeat(3,160px)] md:grid-rows-[repeat(2,220px)] gap-3 md:gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {GALLERY_ITEMS.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </motion.div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-8 bg-[#C41E1E] rounded-2xl px-7 py-7 sm:py-8 flex flex-col sm:flex-row items-center justify-between gap-5"
        >
          <div className="flex items-center gap-3">
            <MapPin size={22} className="text-white/70 flex-shrink-0" strokeWidth={1.75} />
            <p className="text-white text-xl font-bold text-center sm:text-left leading-snug">
              Posjetite nas u Živinicama
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => handleScroll("kontakt")}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-[#C41E1E] font-semibold text-[14px] px-6 py-3 rounded-full hover:bg-white/90 transition-colors duration-200 whitespace-nowrap"
            >
              Kako do nas →
            </button>
            <a
              href="tel:061561413"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-white/70 hover:border-white text-white font-semibold text-[14px] px-6 py-3 rounded-full transition-colors duration-200 whitespace-nowrap"
            >
              <Phone size={15} strokeWidth={2} />
              Pozovite: 061 561 413
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
