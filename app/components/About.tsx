"use client";
import  { useState } from 'react'
import { Butterfly, Petal, Sparkle, Sunflower } from './decorations';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';


import memSunflowers from "@/app/assets/narmu.png";
import memDolphin from "@/app/assets/memory-dolphin.jpg";
import memParis from "@/app/assets/memory-paris.jpg";
import memCamera from "@/app/assets/memory-camera.jpg";
import memField from "@/app/assets/memory-field.jpg";

const memories = [
  { src: memSunflowers, caption: "sunflowers, always", rot: -6 },
  { src: memDolphin, caption: "ocean of dreams", rot: 4 },
  { src: memParis, caption: "paris, one day", rot: -3 },
  { src: memCamera, caption: "captured moments", rot: 6 },
  { src: memField, caption: "golden hour heart", rot: -4 },
];

const aboutLines = [
  { e: "🌻", t: "I love flowers, sunshine, and peaceful little gardens." },
  {
    e: "💭",
    t: "Eunoia means beautiful thinking — I carry that in my heart every day.",
  },
  { e: "🤍", t: "Kindness is the prettiest thing a person can wear." },
  {
    e: "🐬",
    t: "Part of my soul belongs to the ocean, dancing freely like a dolphin.",
  },

  {
    e: "✨",
    t: "Paris lives in my dreams, waiting beneath its glowing lights.",
  },
  {
    e: "📚",
    t: "I love learning new things and collecting achievements along the way.",
  },
  { e: "📸", t: "Photography helps me turn tiny moments into memories." },
  {
    e: "🌸",
    t: "One day, I&apos;ll travel the world with wonder in my eyes and flowers in my hair.",
  },
];

const About = () => {

  const [idx, setIdx] = useState(0);
  const next = () => setIdx((i) => (i + 1) % memories.length);
  const prev = () => setIdx((i) => (i - 1 + memories.length) % memories.length);

  return (
    <section
      id="about"
      className="relative overflow-hidden py-28 md:py-36"
      style={{
        background:
          "linear-gradient(180deg, #fff3d6 0%, #fff8ef 30%, #f4fbe9 100%)",
      }}
    >
      {/* falling petals */}
      {Array.from({ length: 12 }).map((_, i) => (
        <Petal
          key={i}
          left={`${(i * 83) % 100}%`}
          delay={i * 1.4}
          duration={12 + (i % 5)}
          color={i % 3 === 0 ? "#f6c445" : i % 3 === 1 ? "#f4a3b8" : "#c9a8e8"}
        />
      ))}

      {/* decorative butterflies */}
      <Butterfly
        className="left-0 top-[10%]"
        size={30}
        duration={30}
        color="#f6c445"
      />
      <Butterfly
        className="left-0 top-[60%]"
        size={24}
        duration={36}
        delay={5}
        color="#c9a8e8"
        path="M0,0 C100,-40 200,30 300,-20 C400,-60 500,20 600,-10"
      />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:gap-20">
        {/* Photo stack */}
        <div className="relative mx-auto flex h-[480px] w-full max-w-[420px] items-center justify-center">
          {/* sparkles */}
          <Sparkle className="left-2 top-6" />
          <Sparkle className="right-4 top-12" delay={1} />
          <Sparkle className="left-10 bottom-10" delay={2} />
          <Sunflower className="-left-10 -bottom-4" size={70} />
          <Sunflower className="-right-6 -bottom-8" size={90} />

          <div className="relative h-[420px] w-[320px]">
            <AnimatePresence initial={false}>
              {memories.map((m, i) => {
                const offset = (i - idx + memories.length) % memories.length;
                if (offset > 3) return null;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{
                      opacity: 1,
                      scale: 1 - offset * 0.04,
                      y: offset * 10,
                      x: offset * 6,
                      rotate: offset === 0 ? m.rot : m.rot + offset * 2,
                      zIndex: 10 - offset,
                    }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 120, damping: 18 }}
                    className="absolute inset-0"
                    style={{
                      filter: offset > 0 ? `blur(${offset * 0.5}px)` : "none",
                    }}
                  >
                    <div className="glass h-full w-full rounded-2xl p-4 pb-14">
                      <img
                        src={typeof m.src === 'string' ? m.src : m.src.src}
                        alt={m.caption}
                        width={768}
                        height={768}
                        loading="lazy"
                        className="h-full w-full rounded-xl object-cover"
                      />
                      <p className="font-script absolute inset-x-0 bottom-3 text-center text-xl text-foreground/70">
                        {m.caption}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* controls */}
          <div className="absolute -bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous memory"
              className="glass grid h-11 w-11 place-items-center rounded-full text-foreground/70 transition hover:scale-110 hover:text-sunset"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-1.5">
              {memories.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  aria-label={`Memory ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === idx ? "w-6 bg-sunset" : "w-1.5 bg-foreground/20"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next memory"
              className="glass grid h-11 w-11 place-items-center rounded-full text-foreground/70 transition hover:scale-110 hover:text-sunset"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Text side */}
        <div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-script text-2xl text-sunset"
          >
            a little
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display mt-2 text-5xl font-medium md:text-6xl"
          >
            About Me <span>🌸</span>
          </motion.h2>

          <ul className="mt-10 space-y-5">
            {aboutLines.map((l, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.07, duration: 0.6 }}
                className="flex items-start gap-3 text-base leading-relaxed text-foreground/80 md:text-lg"
              >
                <span className="text-2xl leading-none" aria-hidden>
                  {l.e}
                </span>
                <span dangerouslySetInnerHTML={{ __html: l.t }} />
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
);
}

export default About