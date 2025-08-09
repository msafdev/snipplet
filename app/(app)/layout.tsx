import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative min-h-svh bg-background text-foreground overflow-hidden flex flex-col items-center gap-y-12 sm:gap-y-24 md:gap-y-32 px-4 sm:px-8">
      {children}
      <Footer />
      <Toaster position="top-center" />
    </main>
  );
}
