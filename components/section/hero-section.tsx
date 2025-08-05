"use client";

import Dither from "@/components/motion/dither";
import { useIsMounted } from "@/hooks/use-mounted";

const HeroSection = () => {
  const isMounted = useIsMounted();

  if (!isMounted) return null;

  return (
    <div className="absolute inset-0 z-0">
      <Dither
        waveColor={[0.271, 0.131, 0.117]}
        disableAnimation={false}
        enableMouseInteraction={true}
        mouseRadius={0.4}
        colorNum={6}
        waveAmplitude={0.4}
        waveFrequency={2.5}
        waveSpeed={0.03}
        pixelSize={3}
      />
    </div>
  );
};

export default HeroSection;
