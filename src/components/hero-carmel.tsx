"use client";

import { motion } from "framer-motion";

/**
 * A stylized, illustrative rendering of Mount Carmel at golden hour —
 * layered mountain silhouettes, a warm gradient sky, and a glowing sun —
 * built as inline SVG so the hero never depends on an external image host.
 */
export function HeroCarmel() {
  return (
    <div className="relative h-[52vh] min-h-[380px] w-full overflow-hidden sm:h-[58vh]">
      <svg
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMax slice"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-parchment-100)" />
            <stop offset="45%" stopColor="var(--color-gold-200)" />
            <stop offset="100%" stopColor="var(--color-gold-400)" />
          </linearGradient>
          <linearGradient id="ridgeFar" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-stone-300)" />
            <stop offset="100%" stopColor="var(--color-stone-400)" />
          </linearGradient>
          <linearGradient id="ridgeMid" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-stone-500)" />
            <stop offset="100%" stopColor="var(--color-stone-600)" />
          </linearGradient>
          <radialGradient id="sun" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--color-parchment-50)" stopOpacity="0.95" />
            <stop offset="60%" stopColor="var(--color-gold-300)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--color-gold-300)" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect x="0" y="0" width="1200" height="600" fill="url(#sky)" />

        <motion.circle
          cx="860"
          cy="220"
          r="160"
          fill="url(#sun)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
        />
        <circle cx="860" cy="220" r="46" fill="var(--color-parchment-50)" opacity="0.9" />

        {/* far ridge */}
        <motion.path
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          d="M0,420 L120,360 L260,400 L380,330 L520,390 L650,320 L800,380 L950,340 L1080,390 L1200,360 L1200,600 L0,600 Z"
          fill="url(#ridgeFar)"
          opacity="0.55"
        />

        {/* Carmel range, mid */}
        <motion.path
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          d="M0,520 L90,470 L200,500 L320,430 L430,470 L560,390 L700,460 L830,410 L960,480 L1080,440 L1200,470 L1200,600 L0,600 Z"
          fill="url(#ridgeMid)"
        />

        {/* foreground silhouette with subtle altar/tree marks */}
        <motion.path
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          d="M0,560 L140,505 L260,545 L400,470 L540,530 L660,480 L820,540 L960,495 L1100,535 L1200,510 L1200,600 L0,600 Z"
          fill="var(--color-stone-800)"
        />
      </svg>

      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
    </div>
  );
}
