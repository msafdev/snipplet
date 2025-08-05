import AboutSection from "@/components/section/about-section";
import HeroSection from "@/components/section/alt-hero-section";
import NextSection from "@/components/section/next-section";

export default function Page() {
  return (
    <div className="relative min-h-svh bg-background text-foreground overflow-hidden flex flex-col items-center gap-y-12 sm:gap-y-24 md:gap-y-32 px-4 sm:px-8 lg:px-12">
      <HeroSection />
      <AboutSection />
      <NextSection />
    </div>
  );
}
