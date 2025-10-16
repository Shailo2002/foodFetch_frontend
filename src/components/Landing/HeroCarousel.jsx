import React, { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HeroSlide from "./HeroSlide";
import { slides } from "../../data/slides";


const AUTOPLAY_MS = 3000;
const TRANSITION_MS = 400;

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);
  const isPaused = useRef(false);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [index]);

  function startAutoplay() {
    stopAutoplay();
    intervalRef.current = setInterval(() => {
      if (!isPaused.current) {
        setIndex((i) => (i + 1) % slides.length);
      }
    }, AUTOPLAY_MS);
  }
  function stopAutoplay() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  return (
    <div
      className="w-full relative overflow-hidden"
      onMouseEnter={() => {
        isPaused.current = true;
      }}
      onMouseLeave={() => {
        isPaused.current = false;
      }}
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={slides[index].id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: TRANSITION_MS / 1000, ease: "easeInOut" }}
        >
          <HeroSlide slide={slides[index]} />
        </motion.div>
      </AnimatePresence>

      {/* optional controls */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 space-y-2">
        <button
          onClick={() =>
            setIndex((i) => (i - 1 + slides.length) % slides.length)
          }
        >
          Prev
        </button>
        <button onClick={() => setIndex((i) => (i + 1) % slides.length)}>
          Next
        </button>
      </div>
    </div>
  );
}
