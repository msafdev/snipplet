"use client";

import Link from "next/link";
import { docs } from "#velite";
import { Sidebar, SidebarContent, useSidebar } from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const AppSidebar = () => {
  const pathname = usePathname();
  const { isMobile, setOpenMobile } = useSidebar();

  // Always objects, so we can customize the display name separately from the type ID
  const typeOrder = [
    { id: "start", name: "Getting Started" },
    { id: "component", name: "Components" },
    { id: "animation", name: "Animations" },
    { id: "block", name: "Blocks" },
  ] as const;

  return (
    <Sidebar>
      <SidebarContent>
        <nav className="flex flex-col gap-6 py-8 px-6">
          {typeOrder.map(({ id, name }) => {
            const typedDocs = docs.filter((doc) => doc.type === id);
            if (typedDocs.length === 0) return null;

            return (
              <div key={id}>
                <h3 className="text-sm font-display text-foreground/80 mb-2">
                  {name}
                </h3>
                <ul className="space-y-0.5">
                  {typedDocs.map((doc) => {
                    const href = `/docs/${doc.slug}`;
                    const isActive = pathname === href;

                    return (
                      <li key={doc.slug}>
                        <Link
                          href={href}
                          className={cn(
                            "block rounded-md py-0.5 text-sm transition-colors",
                            isActive
                              ? "text-foreground"
                              : "text-muted-foreground hover:text-foreground hover:underline"
                          )}
                          onClick={() => isMobile && setOpenMobile(false)}
                        >
                          {doc.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </nav>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
