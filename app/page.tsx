import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import BrandsSection from "@/components/BrandsSection";
import GallerySection from "@/components/GallerySection";

/* ── Placeholder section ─────────────────────────────────────── */
function PlaceholderSection({
  id,
  title,
  bg = "bg-white",
}: {
  id: string;
  title: string;
  bg?: string;
}) {
  return (
    <section
      id={id}
      className={`${bg} min-h-[60vh] flex flex-col items-center justify-center px-4`}
    >
      <div className="max-w-2xl text-center">
        <div className="inline-block bg-brand-red/10 text-brand-red text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
          Sekcija u izradi
        </div>
        <h2 className="text-4xl font-extrabold text-brand-dark">{title}</h2>
        <p className="mt-4 text-gray-400 text-[15px]">
          Ovaj sadržaj će biti dodan uskoro.
        </p>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        {/* ── Hero ─────────────────────────────────────────── */}
        <HeroSection />

        {/* ── O nama ──────────────────────────────────────── */}
        <AboutSection />

        {/* ── Usluge ──────────────────────────────────────── */}
        <ServicesSection />

        {/* ── Brendovi ────────────────────────────────────── */}
        <BrandsSection />

        {/* ── Galerija ────────────────────────────────────── */}
        <GallerySection />

        {/* ── Betonara ────────────────────────────────────── */}
        <PlaceholderSection
          id="betonara"
          title="Betonara"
          bg="bg-brand-dark"
        />

        {/* ── Kontakt ─────────────────────────────────────── */}
        <PlaceholderSection
          id="kontakt"
          title="Kontakt"
          bg="bg-white"
        />
      </main>

      <footer className="bg-brand-dark text-white/40 text-center text-[13px] py-6">
        © {new Date().getFullYear()} M.H.-Građevinar d.o.o. Živinice — Sva prava zadržana.
      </footer>
    </>
  );
}
