import React, { useMemo } from "react";
import { motion } from "framer-motion";

function polarToCartesian(cx, cy, radius, angleDeg) {
  const angle = (angleDeg - 90) * (Math.PI / 180.0);
  return {
    x: cx + radius * Math.cos(angle),
    y: cy + radius * Math.sin(angle),
  };
}

export default function DishOrbit({ images = [] }) {
  const positions = useMemo(() => {
    // create positions along an arc from -60deg to 60deg (for example)
    const count = images.length;
    const arcStart = -120; // degrees
    const arcEnd = 120;
    const step = (arcEnd - arcStart) / Math.max(1, count - 1);
    return images.map((img, i) => {
      const angle = arcStart + step * i;
      const pos = polarToCartesian(0, 0, 220, angle); // radius tuned
      return { img, angle, x: pos.x, y: pos.y };
    });
  }, [images]);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* subtle orbit rotation animation on container */}
      <motion.div
        animate={{ rotate: [0, 8, 0, -8, 0] }} // subtle wobble
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {positions.map((p, idx) => (
          <motion.img
            key={idx}
            src={p.img}
            alt={`small-${idx}`}
            className="absolute w-20 h-20 rounded-full object-cover shadow-lg"
            style={{
              left: `calc(50% + ${p.x}px)`,
              top: `calc(30% + ${p.y}px)`,
            }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.15 + idx * 0.05 }}
            whileHover={{ scale: 1.06 }}
          />
        ))}
      </motion.div>
    </div>
  );
}
