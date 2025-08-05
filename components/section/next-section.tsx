import Image from "next/image";
import { PiArrowRightBold, PiGithubLogoBold } from "react-icons/pi";
import { CommandButton } from "@/components/examples/command-button";
import ImageReveal from "../motion/image-reveal";
import { Button } from "../ui/button";

const NextSection = () => {
  return (
    <section className="relative flex flex-col gap-4 max-w-lg w-full">
      <h2 className="font-display text-lg sm:text-xl text-foreground">
        What's Included
      </h2>
      <ul className="text-sm sm:text-base text-muted-foreground leading-relaxed space-y-2">
        <li className="flex items-start gap-4">
          <PiArrowRightBold className="mt-1" />
          <p>
            In-depth modules on <span className="text-foreground">React</span>{" "}
            patterns & architecture
          </p>
        </li>
        <li className="flex items-start gap-4">
          <PiArrowRightBold className="mt-1" />
          <p>
            Advanced styling with{" "}
            <span className="text-foreground">Tailwind</span> and custom design
            systems
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
          <PiArrowRightBold className="mt-1" />
          <p>
            Advanced animation techniques with{" "}
            <span className="text-foreground">Motion</span>
          </p>
        </li>
        <li className="flex items-center gap-4 flex-wrap justify-center my-4 sm:my-6">
          <CommandButton>⌘ F</CommandButton>
          <CommandButton>Ctrl</CommandButton>
          <CommandButton>F</CommandButton>
        </li>
        <li className="flex items-start gap-4">
          <PiArrowRightBold className="mt-1" />
          <p>
            Everything is <span className="text-foreground">open-sourced</span>,
            nothing hidden
          </p>
        </li>
        <li className="flex flex-col gap-4 sm:gap-6 items-center my-4 sm:my-6">
          <ImageReveal image="/assets/allyssa-olaivar.jpg" />

          <Button className="border" variant="secondary">
            <PiGithubLogoBold />
            Give a star
          </Button>
        </li>
      </ul>
    </section>
  );
};

export default NextSection;
