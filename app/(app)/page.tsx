import ToastButton from "@/components/client/toast-button";
import AboutSection from "@/components/section/about-section";
import HeroSection from "@/components/section/alt-hero-section";
import NextSection from "@/components/section/next-section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PiNotebookDuotone } from "react-icons/pi";

export default function Page() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <NextSection />

      <div className="fixed z-10 w-full flex justify-end pointer-events-none bg-gradient-to-b from-background to-transparent">
        <div className="flex items-center gap-4 p-6 pointer-events-auto">
          <Button
            size="sm"
            variant="ghost"
            className="hover:border-border border border-transparent"
          >
            Sponsor
          </Button>

          <Button className="border" size="sm" variant="secondary" asChild>
            <Link href="/docs/introduction" aria-label="Go to documentation">
              <PiNotebookDuotone />
              Docs
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}
