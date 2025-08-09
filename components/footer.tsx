import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PiArrowElbowDownLeftBold } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col pb-12 md:24 items-center justify-center">
      <form className="w-full max-w-lg space-y-4">
        <h3 className="font-display text-lg sm:text-xl text-foreground">
          Join us
        </h3>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          Subscribe to get updates, experiments, and free components — no spam,
          just useful <span className="italic">stuff</span>.
        </p>
        <div className="relative">
          <Input
            type="email"
            placeholder="you@example.com"
            className="h-10 flex-1 pe-24 text-sm"
          />
          <Button
            type="submit"
            className="absolute top-1/2 -translate-y-1/2 right-1 rounded-s-none rounded-e"
            size="sm"
            variant="ghost"
          >
            Enter
            <PiArrowElbowDownLeftBold className="size-3" />
          </Button>
        </div>
      </form>
    </footer>
  );
};

export default Footer;
