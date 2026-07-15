"use client";
import React from 'react'
import { Butterfly, Sunflower } from './decorations';

const Footer = () => {
  return (
    <footer
      className="relative overflow-hidden py-12"
      style={{
        background:
          "linear-gradient(180deg, #5a2e1f 0%, #8a3f25 40%, #c97a3a 100%)",
      }}
    >
      <Butterfly
        className="left-0 top-1/2 z-10"
        size={22}
        duration={22}
        color="#ffe6a3"
        path="M0,0 C120,-30 240,20 360,-20 C480,-60 600,10 720,-20"
      />
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-3 px-6 text-center">
        <div className="relative h-20 w-14">
          <Sunflower className="left-0 top-0" size={56} />
        </div>
        <p className="font-script text-2xl text-amber-50">
          Made with kindness, flowers, and beautiful thinking.
        </p>
        <p className="font-display text-xl text-amber-100">
          Narmu Eunoia <span>🌻</span>
        </p>
        <p className="mt-2 text-xs text-amber-100/70">
          © {new Date().getFullYear()} Eunoia · always choose beautiful thinking
        </p>
      </div>
    </footer>
  );
}

export default Footer