"use client";
import  { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Butterfly, Cloud, Sunflower } from "./decorations";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const sunY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const flowersY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #e8eef5 0%, #f3e9d8 55%, #fff3d6 100%)",
      }}
    >
      {/* Warm sunlight from corner */}
      <motion.div
        style={{ y: sunY }}
        className="pointer-events-none absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full"
        aria-hidden
      >
        <div
          className="h-full w-full rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(255,229,150,0.95) 0%, rgba(246,196,69,0.55) 35%, rgba(246,196,69,0) 70%)",
          }}
        />
      </motion.div>

      {/* Sun rays */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-[600px] w-[600px] opacity-60">
        <div
          className="h-full w-full"
          style={{
            background:
              "conic-gradient(from 200deg at 70% 30%, transparent 0deg, rgba(255,240,180,0.3) 8deg, transparent 16deg, transparent 40deg, rgba(255,240,180,0.25) 48deg, transparent 56deg)",
            maskImage:
              "radial-gradient(circle at 70% 30%, black 40%, transparent 70%)",
          }}
        />
      </div>

      {/* Clouds */}
      <Cloud className="top-[12%]" duration={80} delay={0} scale={1.1} />
      <Cloud
        className="top-[22%]"
        duration={120}
        delay={10}
        scale={0.7}
        opacity={0.7}
      />
      <Cloud
        className="top-[38%]"
        duration={100}
        delay={30}
        scale={1.3}
        opacity={0.65}
      />

      {/* Pollen particles */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-amber-200"
            style={{
              left: `${(i * 53) % 100}%`,
              top: `${(i * 37) % 90}%`,
              boxShadow: "0 0 8px rgba(255,220,120,0.9)",
            }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 1, 0.2] }}
            transition={{
              duration: 4 + (i % 4),
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* Butterflies */}
      <Butterfly
        className="left-0 top-[20%]"
        size={32}
        duration={22}
        color="#c9a8e8"
      />
      <Butterfly
        className="left-0 top-[50%]"
        size={26}
        duration={28}
        delay={3}
        color="#f6c445"
        path="M0,0 C60,40 140,-20 220,30 C300,80 380,0 460,40"
      />
      <Butterfly
        className="left-0 top-[70%]"
        size={28}
        duration={26}
        delay={6}
        color="#f4a3b8"
        path="M0,0 C80,-50 160,20 240,-30 C320,-80 400,10 480,-20"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-script text-2xl text-sunset md:text-3xl"
        >
          welcome to my little garden
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="font-display mt-3 text-5xl font-medium leading-[1.05] text-foreground md:text-7xl lg:text-8xl"
        >
          Hi, I&apos;m{" "}
          <span className="text-gradient-sun italic">Narmu Eunoia</span>{" "}
          <motion.span
            initial={{ rotate: -20, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
            className="inline-block"
          >
            🌻
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-foreground/80 md:text-lg"
        >
          A passionate flower lover who believes in the beauty of good things.{" "}
          <br />
          <span className="font-display italic text-sunset eunoia">
            Eunoia
          </span>{" "}
          means <em>beautiful thinking</em> — and that&apos;s how I choose to
          see the world.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#about"
            className="glass-warm rounded-full px-7 py-3 text-sm font-medium text-foreground transition-all hover:scale-105 hover:shadow-lg"
          >
            walk into the garden →
          </a>
          <a
            href="#contact"
            className="rounded-full border border-foreground/15 bg-white/40 px-7 py-3 text-sm font-medium text-foreground/80 backdrop-blur-sm transition-all hover:bg-white/70"
          >
            say hello
          </a>
        </motion.div>
      </div>

      {/* Sunflowers along the bottom */}
      <motion.div
        style={{ y: flowersY }}
        className="pointer-events-none absolute inset-x-0 bottom-0 h-64"
      >
        <Sunflower className="-bottom-6 left-[2%]" size={110} />
        <Sunflower className="-bottom-10 left-[14%]" size={80} />
        <Sunflower className="-bottom-4 left-[24%]" size={130} />
        <Sunflower className="-bottom-12 left-[38%]" size={70} />
        <Sunflower className="-bottom-8 right-[36%]" size={120} />
        <Sunflower className="-bottom-2 right-[22%]" size={90} />
        <Sunflower className="-bottom-10 right-[10%]" size={140} />
        <Sunflower className="-bottom-6 right-[2%]" size={95} />
        {/* grass gradient */}
        <div
          className="absolute inset-x-0 bottom-0 h-24"
          style={{
            background:
              "linear-gradient(180deg, transparent, color-mix(in oklab, var(--sage) 50%, transparent))",
          }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
