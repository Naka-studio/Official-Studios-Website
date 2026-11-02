// LoadingDots.jsx
import { motion } from "framer-motion";
import { useMemo } from "react";

// ================================
// CONFIG — utak-atik di sini aja
// ================================
const CONFIG = {
  orbitFar: "32px",
  orbitNear: "8px",
  orbitDuration: 3,
  dotSizeMax: "5px",
  dotSizeMin: "2px",
  opacityMax: 1,
  opacityMin: 0.3,
  tiltAngle: 20,
  tiltDuration: 2,
  dotColor: "#e8724a",
};
// ================================

const PHASE_OFFSET = (2 * Math.PI) / 3;

function OrbitDot({ phase }) {
  return (
    <motion.span
      style={{
        position: "absolute",
        top: "50%",
        marginTop: `-${parseInt(CONFIG.dotSizeMax) / 2}px`,
        borderRadius: "50%",
        backgroundColor: CONFIG.dotColor,
        willChange: "transform, width, height, opacity",
      }}
      animate={{
        x: [CONFIG.orbitFar, CONFIG.orbitNear, CONFIG.orbitFar],
        width: [CONFIG.dotSizeMax, CONFIG.dotSizeMin, CONFIG.dotSizeMax],
        height: [CONFIG.dotSizeMax, CONFIG.dotSizeMin, CONFIG.dotSizeMax],
        opacity: [CONFIG.opacityMax, CONFIG.opacityMin, CONFIG.opacityMax],
      }}
      transition={{
        duration: CONFIG.orbitDuration,
        delay: (phase / (2 * Math.PI)) * CONFIG.orbitDuration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export default function LoadingDots() {
  const dots = useMemo(
    () =>
      Array.from({ length: 3 }, (_, i) => ({
        id: i,
        phase: i * PHASE_OFFSET,
      })),
    [],
  );

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100px",
        height: "100px",
        zIndex: 10000,
      }}
    >
      <motion.div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          width: "66px",
          height: "20px",
          transformOrigin: "center center",
        }}
        animate={{
          rotate: [0, CONFIG.tiltAngle, 0, -CONFIG.tiltAngle, 0],
        }}
        transition={{
          duration: CONFIG.tiltDuration,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.3, 0.5, 0.8, 1],
        }}
      >
        {dots.map((dot) => (
          <OrbitDot key={dot.id} phase={dot.phase} />
        ))}
      </motion.div>
    </div>
  );
}
