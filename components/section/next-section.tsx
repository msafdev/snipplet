import Image from "next/image";
import { PiArrowRightBold, PiStarFill } from "react-icons/pi";
import { CommandButton } from "@/components/client/command-button";
import ImageReveal from "../motion/image-reveal";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const NextSection = () => {
  return (
    <section className="relative flex flex-col gap-4 max-w-lg w-full">
      <h2 className="font-display text-lg sm:text-xl text-foreground">
        What's Included
      </h2>
      <ul className="text-sm sm:text-base text-muted-foreground leading-relaxed space-y-2">
        <li className="flex items-start gap-4">
          <PiArrowRightBold className="mt-1 shrink-0" />
          <p>
            In-depth modules on <Badge variant="outline">React</Badge>{" "}
            patterns & architecture
          </p>
        </li>
        <li className="flex items-start gap-4">
          <PiArrowRightBold className="mt-1 shrink-0" />
          <p>
            Modern styling with{" "}
            <Badge variant="outline">Tailwind</Badge> and <Badge variant="outline">Shadcn</Badge>
          </p>
        </li>
        <li className="relative my-4 sm:my-6 sm:scale-105">
          <Image
            src="/assets/tailwind-css.webp"
            alt="Tailwind CSS Custom Easings"
            width={800}
            height={450}
            loading="lazy"
            className="rounded"
          />

          <div className="absolute bottom-0 w-full bg-gradient-to-b from-transparent to-background h-2/3 to-90% z-20" />
        </li>
        <li className="flex items-start gap-4">
          <PiArrowRightBold className="mt-1 shrink-0" />
          <p>
            Advanced animation techniques with{" "}
            <Badge variant="outline">Motion</Badge>
          </p>
        </li>
        <li className="flex items-center gap-4 flex-wrap justify-center my-4 sm:my-6">
          <CommandButton>⌘ F</CommandButton>
          <CommandButton>Ctrl</CommandButton>
          <CommandButton>F</CommandButton>
        </li>
        <li className="flex items-start gap-4">
          <PiArrowRightBold className="mt-1 shrink-0" />
          <p>
            Everything is <span className="text-foreground text-sm">open-sourced</span>,
            nothing hidden
          </p>
        </li>
        <li className="flex flex-col gap-4 sm:gap-6 items-center my-4 sm:my-6">
          <ImageReveal image="/assets/allyssa-olaivar.jpg" />

          <Button className="border" variant="secondary">
            <PiStarFill className="text-yellow-500"/>
            Star the repo
          </Button>
        </li>
      </ul>
    </section>
  );
};

export default NextSection;
