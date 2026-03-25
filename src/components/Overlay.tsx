"use client";

import { motion, MotionValue, useMotionValueEvent, useTransform } from "framer-motion";
import { useState } from "react";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  const [sec1Opacity, setSec1Opacity] = useState(1);
  const [sec1Y, setSec1Y] = useState(0);
  const [sec2Opacity, setSec2Opacity] = useState(0);
  const [sec2Y, setSec2Y] = useState(60);

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    // --- Section 1: fade out between 0.10 and 0.20, never come back ---
    if (p <= 0.10) {
      setSec1Opacity(1);
      setSec1Y(0);
    } else if (p <= 0.20) {
      const t = (p - 0.10) / 0.10; // 0 → 1
      setSec1Opacity(1 - t);
      setSec1Y(-80 * t);
    } else {
      // permanently gone
      setSec1Opacity(0);
      setSec1Y(-80);
    }

    // --- Section 2: fade in 0.30→0.40, hold, fade out 0.70→0.80 ---
    if (p < 0.30) {
      setSec2Opacity(0);
      setSec2Y(60);
    } else if (p <= 0.40) {
      const t = (p - 0.30) / 0.10;
      setSec2Opacity(t);
      setSec2Y(60 - 60 * t);
    } else if (p <= 0.70) {
      setSec2Opacity(1);
      setSec2Y(0);
    } else if (p <= 0.80) {
      const t = (p - 0.70) / 0.10;
      setSec2Opacity(1 - t);
      setSec2Y(-60 * t);
    } else {
      setSec2Opacity(0);
      setSec2Y(-60);
    }
  });

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-10">
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* Section 1 — Intro */}
        <motion.div
          style={{ opacity: sec1Opacity, y: sec1Y }}
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center text-white px-6"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter">
            Manali Goswami.
          </h1>
          <p className="text-xl md:text-2xl mt-4 text-[#e0e0e0] font-light max-w-sm mx-auto">
            Customer Success Manager.
          </p>
        </motion.div>

        {/* Section 2 — Bio */}
        <motion.div
          style={{ opacity: sec2Opacity, y: sec2Y }}
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-left text-white px-8 md:px-24 lg:px-48"
        >
          <p className="text-base md:text-lg lg:text-xl font-light leading-relaxed text-neutral-200 max-w-3xl">
            Munich-based Customer Success Manager with a B.Tech in Computer Science and 5 years of experience in B2C and B2B environments and client relations. Proven expertise in driving Net Revenue Retention (NRR) by delivering tailored product recommendations and aligning platform features with client business goals. Proficient in Salesforce, Google Sheets, and JIRA, with a proactive approach to monitoring performance metrics and ensuring continuous value delivery for a portfolio of 400+ clients. Fluent in English and a dedicated B1 German learner.
          </p>
        </motion.div>

      </div>
    </div>
  );
}
