import React from "react";
import { motion } from "framer-motion";



export function SunflowerCard({
  icon,
  label,
  value,
  href,
  delay,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  delay: number;
}) {
  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.7 }}
      whileHover="hover"
      className="group relative block"
    >
      <div className="relative mx-auto h-56 w-56">
        {/* petals */}
        <motion.div
          variants={{ hover: { rotate: 25, scale: 1.08 } }}
          transition={{ type: "spring", stiffness: 100 }}
          className="absolute inset-0"
        >
          <svg viewBox="0 0 200 200" className="h-full w-full drop-shadow-2xl">
            <defs>
              <radialGradient id={`pet-${label}`} cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#fde29a" />
                <stop offset="70%" stopColor="#f6c445" />
                <stop offset="100%" stopColor="#d9871a" />
              </radialGradient>
            </defs>
            <g transform="translate(100 100)">
              {Array.from({ length: 18 }).map((_, i) => (
                <ellipse
                  key={i}
                  cx="0"
                  cy="-60"
                  rx="14"
                  ry="42"
                  fill={`url(#pet-${label})`}
                  transform={`rotate(${(i / 18) * 360})`}
                />
              ))}
            </g>
          </svg>
        </motion.div>
        {/* center */}
        <div className="absolute inset-0 grid place-items-center">
          <div
            className="grid h-24 w-24 place-items-center rounded-full text-white shadow-inner"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, #6a3f1a, #3a2410)",
            }}
          >
            <motion.div
              variants={{ hover: { scale: 1.15, rotate: -10 } }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {icon}
            </motion.div>
          </div>
        </div>
      </div>
      <div className="mt-2 text-center">
        <p className="font-display text-2xl text-white drop-shadow">{label}</p>
        <p className="font-script text-lg text-white/90 drop-shadow">{value}</p>
      </div>
    </motion.a>
  );
}