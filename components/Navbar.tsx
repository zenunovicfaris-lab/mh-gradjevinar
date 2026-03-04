"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "O nama", href: "#o-nama" },
  { label: "Usluge", href: "#usluge" },
  { label: "Brendovi", href: "#brendovi" },
  { label: "Galerija", href: "#galerija" },
  { label: "Betonara", href: "#betonara" },
  { label: "Kontakt", href: "#kontakt" },
] as const;

const SECTION_IDS = NAV_LINKS.map((l) => l.href.replace("#", ""));

function Logo() {
  return (
    <a href="#" className="flex items-center gap-3 select-none">
      {/* SVG logo: bold red circle with white MH inside */}
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="M.H.-Građevinar logo"
      >
        {/* Red circle background */}
        <circle cx="22" cy="22" r="22" fill="#C41E1E" />
        {/* Large "G" arc — two arcs forming a C + horizontal bar */}
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
        {/* "MH" letters inside */}
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

      <span className="text-[17px] font-bold text-brand-dark leading-tight hidden sm:block">
        M.H.-Građevinar
      </span>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  /* ── Scroll detection for navbar background ───────────────── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Active section via IntersectionObserver ──────────────── */
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  /* ── Close mobile menu on resize ─────────────────────────── */
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setMobileOpen(false);
    },
    []
  );

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        animate={{
          backgroundColor: scrolled
            ? "rgba(255,255,255,1)"
            : "rgba(255,255,255,0)",
          boxShadow: scrolled
            ? "0 2px 24px rgba(0,0,0,0.10)"
            : "0 0 0 rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[70px] flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(({ label, href }) => {
              const id = href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => handleNavClick(e, href)}
                    className={`relative px-4 py-2 text-[14px] font-medium rounded-md transition-colors duration-200 ${
                      isActive
                        ? "text-brand-red"
                        : scrolled
                        ? "text-brand-dark hover:text-brand-red"
                        : "text-white hover:text-white/70"
                    }`}
                  >
                    {label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute bottom-0 left-3 right-3 h-[2px] bg-brand-red rounded-full"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* CTA button */}
          <div className="hidden lg:flex items-center">
            <a
              href="tel:061561413"
              className="inline-flex items-center gap-2 bg-brand-red hover:bg-[#a01818] text-white text-[14px] font-semibold px-5 py-2.5 rounded-full transition-colors duration-200 shadow-sm"
            >
              <span>📞</span>
              <span>061 561 413</span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className={`lg:hidden p-2 rounded-md transition-colors ${
              scrolled || mobileOpen
                ? "text-brand-dark"
                : "text-white"
            }`}
            aria-label={mobileOpen ? "Zatvori meni" : "Otvori meni"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile slide-down menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="overflow-hidden bg-white border-t border-gray-100 shadow-xl lg:hidden"
            >
              <ul className="flex flex-col px-4 py-4 gap-1">
                {NAV_LINKS.map(({ label, href }, i) => {
                  const id = href.replace("#", "");
                  const isActive = activeSection === id;
                  return (
                    <motion.li
                      key={href}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.25 }}
                    >
                      <a
                        href={href}
                        onClick={(e) => handleNavClick(e, href)}
                        className={`block px-4 py-3 rounded-lg text-[15px] font-medium transition-colors ${
                          isActive
                            ? "bg-red-50 text-brand-red"
                            : "text-brand-dark hover:bg-gray-50"
                        }`}
                      >
                        {label}
                      </a>
                    </motion.li>
                  );
                })}
                <li className="pt-2">
                  <a
                    href="tel:061561413"
                    className="flex items-center justify-center gap-2 bg-brand-red text-white text-[15px] font-semibold px-5 py-3 rounded-full w-full"
                  >
                    <span>📞</span>
                    <span>061 561 413</span>
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
