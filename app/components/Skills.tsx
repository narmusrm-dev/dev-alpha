"use client";
import { useScroll, useTransform } from 'motion/react';
import { useRef } from 'react'
import { Butterfly, Cloud } from './decorations';

import {motion} from "framer-motion";



const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "MS Word",
  "MS Excel",
  "PowerPoint",
  "GitHub",
  "Asset management",
  "Jira ticketing",
  "Google workspace",
  "Networking basics",
];

function SkillCloud({
  label,
  delay,
  index,
}: {
  label: string;
  delay: number;
  index: number;
}) {
  return (
 <motion.div
  initial={{ opacity: 0, y: 30, scale: 0.9 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  viewport={{ once: true, margin: "-50px" }}
  transition={{
    delay,
    duration: 0.7,
    ease: [0.22, 1, 0.36, 1],
  }}
  whileHover={{ scale: 1.08, y: -6 }}
  className="group relative animate-float-soft will-change-transform"
  style={{ animationDelay: `${delay}s` }}
>
     <div className="relative">
  {/* cloud shape */}
  <svg
    viewBox="0 0 200 110"
    preserveAspectRatio="xMidYMid meet"
    className="block h-auto w-full drop-shadow-[0_12px_30px_rgba(120,160,210,0.25)]"
  >
    <g
      fill="#ffffff"
      // stroke="#edf5ff"
      // strokeWidth="1.5"
    >
      <ellipse cx="55" cy="75" rx="42" ry="28" />
      <ellipse cx="105" cy="58" rx="50" ry="36" />
      <ellipse cx="155" cy="75" rx="40" ry="26" />
      <ellipse cx="80" cy="48" rx="30" ry="22" />
      <ellipse cx="135" cy="48" rx="28" ry="20" />
    </g>
  </svg>

  <span className="font-display absolute inset-0 grid place-items-center pt-2 text-lg font-medium text-foreground/80 ">
    {label}
  </span>

  {/* sparkles on hover */}
  <span
    className="pointer-events-none absolute -top-1 right-6 h-2 w-2 rounded-full bg-yellow-200 opacity-0 transition group-hover:opacity-100 group-hover:animate-sparkle"
    style={{ boxShadow: "0 0 12px gold" }}
  />
  <span
    className="pointer-events-none absolute bottom-3 left-6 h-1.5 w-1.5 rounded-full bg-yellow-100 opacity-0 transition group-hover:opacity-100 group-hover:animate-sparkle"
    style={{
      boxShadow: "0 0 10px gold",
      animationDelay: "0.4s",
    }}
  />
</div>
    </motion.div>
  );
}

const Skills = () => {

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yFront = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const yBack = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section
      ref={ref}
      id="skills"
      className="relative overflow-hidden py-28 md:py-36"
      style={{
        background:
          "linear-gradient(180deg, #f4fbe9 0%, #dceeff 35%, #b8dcff 100%)",
      }}
    >
      {/* sun glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full opacity-70 blur-3xl"
        style={{
          background: "radial-gradient(circle, #fff3c4 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-5xl font-medium md:text-6xl"
        >
          My Skills <span>☁️</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-4 text-foreground/70 md:text-lg"
        >
          The tools and skills that help me create, learn, and grow.
        </motion.p>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
          {skills.map((skill, i) => (
            <SkillCloud key={skill} label={skill} index={i} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
);
}

export default Skills