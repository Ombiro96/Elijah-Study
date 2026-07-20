"use client";

import { motion } from "framer-motion";

export function KingdomSplit() {
  return (
    <div className="rounded-xl border border-border/70 bg-card/40 p-6">
      <div className="flex flex-col items-center gap-3">
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-lg border border-gold-500/40 bg-gold-100/50 px-6 py-3 text-center dark:bg-gold-700/10"
        >
          <p className="font-heading font-semibold">United Kingdom</p>
          <p className="text-xs text-muted-foreground">Saul → David → Solomon</p>
        </motion.div>
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="h-6 w-px origin-top bg-border"
        />
        <div className="grid w-full gap-6 sm:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            className="rounded-lg border border-gold-500/40 bg-gold-100/40 p-4 text-center dark:bg-gold-700/10"
          >
            <p className="font-heading text-lg font-semibold">Israel</p>
            <p className="text-xs text-muted-foreground">Northern Kingdom, 10 tribes</p>
            <p className="mt-2 text-xs">King: Jeroboam I</p>
            <p className="text-xs">Capitals: Shechem → Tirzah → Samaria</p>
            <p className="mt-2 text-xs">Worship centers: Bethel &amp; Dan (golden calves)</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            className="rounded-lg border border-[#3f5c53]/40 bg-[#3f5c53]/10 p-4 text-center"
          >
            <p className="font-heading text-lg font-semibold">Judah</p>
            <p className="text-xs text-muted-foreground">Southern Kingdom, 2 tribes</p>
            <p className="mt-2 text-xs">King: Rehoboam</p>
            <p className="text-xs">Capital: Jerusalem</p>
            <p className="mt-2 text-xs">Worship center: The Temple, with the Levites</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
