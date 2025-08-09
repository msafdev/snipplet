import AppSidebar from "@/components/sidebar";
import { Toaster } from "@/components/ui/sonner";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function DocLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar />
      <SidebarInset>
        <section className="flex-1 h-svh overflow-y-auto py-8 md:py-12 lg:py-24 relative">
          {children}
        </section>
      </SidebarInset>
      <Toaster position="bottom-right" />
    </SidebarProvider>
  );
}
