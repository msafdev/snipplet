"use client";

import { Transition, Variants, motion } from "motion/react";
import { useMediaQuery } from "usehooks-ts";
import { useMemo } from "react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PiStarFill } from "react-icons/pi";

const spring = {
  type: "spring",
  stiffness: 100,
  damping: 10,
  mass: 0.8,
};

const containerVariant = {
  rest: {
    rotate: -2,
    skewX: 2,
    scale: 1,
    transition: spring,
  },
  hover: {
    rotate: 0,
    skewX: 0,
    scale: 1.05,
    transition: spring,
  },
  "hover-mobile": {
    rotate: 0,
    skewX: 0,
    scale: 1,
    transition: spring,
  },
} as Variants;

const maskVariant = {
  rest: {
    x: -12,
    y: 12,
    scale: 1,
    transition: spring,
  },
  hover: {
    x: 0,
    y: 16,
    scale: 0.95,
    transition: spring,
  },
  "hover-mobile": {
    x: 0,
    y: 16,
    scale: 0.95,
    transition: spring,
  },
} as Variants;

const starVariants: Variants = {
  rest: { opacity: 0, scale: 0.5, rotate: 0 },
  hover: {
    opacity: 1,
    scale: 1,
    transition: {
      opacity: { ...spring, delay: 0.2 },
      scale: { ...spring, delay: 0.2 },
    } as Transition,
  },
  "hover-mobile": {
    opacity: 1,
    scale: 1,
    transition: {
      opacity: { ...spring, delay: 0.2 },
      scale: { ...spring, delay: 0.2 },
    } as Transition,
  },
};

const Memo = () => {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const state = isMobile ? "hover-mobile" : "hover";

  const sparkles = useMemo(() => {
    return Array.from({ length: 12 }).map((_, i) => {
      const angle = (i / 12) * 2 * Math.PI;
      const radius = isMobile ? 180 : 240;
      const centerX = isMobile ? 150 : 200;
      const centerY = isMobile ? 180 : 200;

      const seed1 = Math.sin(i * 0.5) * 10000;
      const seed2 = Math.cos(i * 0.7) * 10000;
      const seed3 = Math.sin(i * 1.3) * 10000;
      const seed4 = Math.cos(i * 1.7) * 10000;

      const randomRadius = radius + (seed1 - Math.floor(seed1) - 0.5) * 60;
      const randomAngle = angle + (seed2 - Math.floor(seed2) - 0.5) * 0.8;

      const x = centerX + Math.cos(randomAngle) * randomRadius;
      const y = centerY + Math.sin(randomAngle) * randomRadius;

      return {
        id: i,
        top: y,
        left: x,
        size: `${(seed3 - Math.floor(seed3)) * 0.6 + 0.3}rem`,
        opacity: (seed4 - Math.floor(seed4)) * 0.4 + 0.6,
      };
    });
  }, [isMobile]);

  return (
    <motion.div
      className="relative w-full max-w-xs md:max-w-sm cursor-default"
      initial="rest"
      animate={isMobile ? state : "rest"}
      whileHover={isMobile ? undefined : state}
      variants={containerVariant}
    >
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute text-foreground drop-shadow"
          style={{
            top: `${sparkle.top.toFixed(3)}px`,
            left: `${sparkle.left.toFixed(3)}px`,
            fontSize: sparkle.size,
            opacity: sparkle.opacity,
          }}
          variants={starVariants}
        >
          <PiStarFill />
        </motion.div>
      ))}

      {/* Shadow Layer */}
      <motion.div
        className="absolute inset-0 -z-10 overflow-hidden rounded-[4px]"
        variants={maskVariant}
      >
        <Image
          src="/grain.webp"
          alt="grain texture"
          fill
          className="object-cover opacity-10 dark:opacity-10 dark:invert"
          priority={false}
          quality={60}
          loading="lazy"
          unoptimized
        />
      </motion.div>

      {/* Memo Card */}
      <div className="space-y-6 rounded-[4px] border bg-card p-6 text-card-foreground shadow-none md:space-y-8 md:p-8">
        <div className="space-y-4 md:space-y-6">
          <h3 className="text-base sm:text-lg font-semibold font-display">
            Snipplet
          </h3>
          <p className="text-xs sm:text-sm font-medium leading-relaxed text-muted-foreground">
            This is a space where I explore ideas around interface design,
            animation, and layout structure. It serves as a living notebook
            where visual concepts take shape through code.
          </p>
          <p className="text-xs sm:text-sm font-medium leading-relaxed text-muted-foreground">
            Many elements are experimental and intentionally imperfect. The goal
            here is to prioritize iteration, clarity, and learning through
            practice rather than chasing perfect presentation.
          </p>
        </div>

        <div className="flex items-center justify-center gap-x-3 w-full">
          <Avatar className="size-7 sm:size-8 rounded">
            <AvatarImage
              src="https://github.com/msafdev.png"
              alt="Salman's avatar image."
              loading="lazy"
            />
            <AvatarFallback className="size-7 sm:size-8 rounded">
              M
            </AvatarFallback>
          </Avatar>
          <p className="text-muted-foreground text-sm">
            Built by <span className="text-foreground">Salman Alfarisi</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Memo;
