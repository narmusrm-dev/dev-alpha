import { motion } from "motion/react";

export function Butterfly({
  className = "",
  delay = 0,
  duration = 14,
  size = 36,
  color = "var(--lavender)",
  path = "M0,0 C40,-60 120,-40 160,-90 C200,-140 280,-100 320,-50",
}: {
  className?: string;
  delay?: number;
  duration?: number;
  size?: number;
  color?: string;
  path?: string;
}) {
  return (
    <motion.svg
      className={`pointer-events-none absolute ${className}`}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      style={{ offsetPath: `path('${path}')`, offsetRotate: "auto" }}
      animate={{ offsetDistance: ["0%", "100%"] }}
      transition={{ duration, delay, repeat: Infinity, ease: "linear" }}
      aria-hidden
    >
      <motion.g
        animate={{ scaleY: [1, 0.45, 1] }}
        transition={{ duration: 0.45, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "32px 32px" }}
      >
        <path
          d="M32 32 C18 14, 4 18, 6 32 C4 46, 18 50, 32 32 Z"
          fill={color}
          opacity="0.9"
        />
        <path
          d="M32 32 C46 14, 60 18, 58 32 C60 46, 46 50, 32 32 Z"
          fill={color}
          opacity="0.9"
        />
        <ellipse cx="32" cy="32" rx="1.6" ry="10" fill="#3a2a1a" />
      </motion.g>
    </motion.svg>
  );
}

export function Sunflower({
  className = "",
  size = 90,
  sway = true,
}: {
  className?: string;
  size?: number;
  sway?: boolean;
}) {
  return (
    <div
      className={`pointer-events-none absolute ${className} ${sway ? "animate-sway" : ""}`}
      style={{ width: size, height: size * 1.6 }}
      aria-hidden
    >
      <svg viewBox="0 0 100 160" width="100%" height="100%">
        <path d="M50 160 L50 70" stroke="#7a9a5a" strokeWidth="4" strokeLinecap="round" />
        <path d="M50 110 q-18 -8 -28 4" stroke="#7a9a5a" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M50 130 q18 -8 28 4" stroke="#7a9a5a" strokeWidth="3" fill="none" strokeLinecap="round" />
        <ellipse cx="30" cy="112" rx="14" ry="6" fill="#a8c686" transform="rotate(-25 30 112)" />
        <ellipse cx="72" cy="132" rx="14" ry="6" fill="#a8c686" transform="rotate(25 72 132)" />
        <g transform="translate(50 50)">
          {Array.from({ length: 14 }).map((_, i) => {
            const a = (i / 14) * 360;
            return (
              <ellipse
                key={i}
                cx="0"
                cy="-26"
                rx="9"
                ry="20"
                fill="url(#petal)"
                transform={`rotate(${a})`}
              />
            );
          })}
          <circle r="16" fill="#5a3a1a" />
          <circle r="13" fill="#3a2410" />
        </g>
        <defs>
          <radialGradient id="petal" cx="50%" cy="100%" r="100%">
            <stop offset="0%" stopColor="#fde29a" />
            <stop offset="60%" stopColor="#f6c445" />
            <stop offset="100%" stopColor="#e89b1f" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

export function Cloud({
  className = "",
  duration = 60,
  delay = 0,
  scale = 1,
  opacity = 0.85,
}: {
  className?: string;
  duration?: number;
  delay?: number;
  scale?: number;
  opacity?: number;
}) {
  return (
    <motion.div
      className={`pointer-events-none absolute ${className}`}
      style={{ opacity }}
      initial={{ x: "-20%" }}
      animate={{ x: "120vw" }}
      transition={{ duration, delay, repeat: Infinity, ease: "linear" }}
      aria-hidden
    >
      <svg width={180 * scale} height={90 * scale} viewBox="0 0 180 90">
        <g fill="white">
          <ellipse cx="50" cy="60" rx="38" ry="24" />
          <ellipse cx="90" cy="48" rx="44" ry="30" />
          <ellipse cx="130" cy="60" rx="36" ry="22" />
          <ellipse cx="70" cy="40" rx="28" ry="18" />
        </g>
      </svg>
    </motion.div>
  );
}

export function Sparkle({ className = "", delay = 0 }: { className?: string; delay?: number }) {
  return (
    <span
      className={`pointer-events-none absolute h-1.5 w-1.5 rounded-full bg-white animate-sparkle ${className}`}
      style={{ animationDelay: `${delay}s`, boxShadow: "0 0 12px 2px rgba(255,240,180,0.9)" }}
      aria-hidden
    />
  );
}

export function Petal({ left, delay, duration, color = "#f6c445" }: { left: string; delay: number; duration: number; color?: string }) {
  return (
    <span
      className="pointer-events-none absolute top-0 h-3 w-2 rounded-full opacity-70"
      style={{
        left,
        background: color,
        animation: `petal-fall ${duration}s linear ${delay}s infinite`,
      }}
      aria-hidden
    />
  );
}
