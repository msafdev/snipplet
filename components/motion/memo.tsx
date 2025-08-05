"use client";

import { Variants, motion } from "motion/react";
import { useMediaQuery } from "usehooks-ts";

import Image from "next/image";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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

const Memo = () => {
  const matches = useMediaQuery("(max-width: 640px)");

  return (
    <motion.div
      className="relative w-full max-w-xs md:max-w-sm cursor-default"
      initial="rest"
      animate={matches ? "hover-mobile" : "rest"}
      whileHover={matches ? "hover-mobile" : "hover"}
      variants={containerVariant}
    >
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
