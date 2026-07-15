"use client";
import React from 'react'
import { Butterfly } from './decorations';
import { motion } from 'framer-motion';
import SunsetField from "@/app/assets/sunset-field.jpg";
import { SunflowerCard } from './SunflowerCard';
import { Mail, Link, FileDown } from 'lucide-react';

const Contact = () => {
  return (

    <section id="contact" className="relative overflow-hidden py-28 md:py-36">
      {/* sunset field background */}
      <div className="absolute inset-0">
        <img
          src={SunsetField.src}
          alt=""
          width={1920}
          height={1080}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,200,120,0.55) 0%, rgba(255,160,90,0.35) 50%, rgba(120,60,40,0.5) 100%)",
          }}
        />
      </div>

      {/* butterflies */}
      <Butterfly
        className="left-0 top-[20%] z-10"
        size={28}
        duration={28}
        color="#fff3c4"
      />
      <Butterfly
        className="left-0 top-[70%] z-10"
        size={24}
        duration={34}
        delay={6}
        color="#f4a3b8"
        path="M0,0 C100,40 200,-30 300,30 C400,80 500,-20 600,20"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-5xl font-medium text-white drop-shadow-lg md:text-6xl"
        >
          Let&apos;s Connect <span>🌻</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="font-script mt-3 text-2xl text-white/90 drop-shadow"
        >
          I&apos;d love to hear from you.
        </motion.p>

        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
          <SunflowerCard
            icon={<Mail className="h-6 w-6" />}
            label="Email"
            value="narmusrm@gmail.com"
            href="mailto:narmusrm@gmail.com"
            delay={0}
          />
          <SunflowerCard
            icon={<Link className="h-6 w-6" />}
            label="LinkedIn"
            value="@narmu-eunoia"
            href="https://www.linkedin.com/in/narmu-srm-8044ab375/"
            delay={0.15}
          />
          <SunflowerCard
            icon={<FileDown className="h-6 w-6" />}
            label="Resume"
            value="Download Resume"
            href="src/assets/Narmatha-Resume.pdf"
            delay={0.3}
          />
        </div>

        {/* Contact form */}
        
      </div>
    </section>
  );
}


export default Contact