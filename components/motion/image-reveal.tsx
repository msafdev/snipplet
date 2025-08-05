"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

type ImageRevealProps = {
  image: string;
};

export default function ImageReveal({ image }: ImageRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  const [width, setWidth] = useState(1);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        const newWidth = containerRef.current.offsetWidth;
        setWidth(newWidth);
        x.set(newWidth / 2);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [x]);

  const clipPath = useTransform(x, (value) => {
    const clipped = 100 - (value / width) * 100;
    return `inset(0 ${clipped}% 0 0)`;
  });

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-sm aspect-video overflow-hidden rounded select-none"
    >
      <img
        src={image}
        alt="Grayscale image"
        className="absolute inset-0 w-full h-full object-cover grayscale"
        draggable={false}
        loading="lazy"
      />
      <motion.img
        src={image}
        alt="Revealed color image"
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
        loading="lazy"
        style={{ clipPath }}
      />
      <motion.div
        className="absolute top-0 h-full w-0.5 bg-secondary pointer-events-none"
        style={{ x }}
      />
      <motion.div
        className="absolute top-1/2 left-px -translate-x-1/2 grid place-items-center -translate-y-1/2 w-3 h-7 rounded-xs bg-secondary cursor-ew-resize shadow-lg z-10"
        drag="x"
        dragConstraints={containerRef}
        dragElastic={0}
        dragMomentum={false}
        style={{ x }}
      />
    </div>
  );
}
