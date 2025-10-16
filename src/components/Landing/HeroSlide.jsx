import React from "react";
import { motion } from "framer-motion";
import DishOrbit from "./DishOrbit";

export default function HeroSlide({ slide }) {
  return (
    <div
      className={`flex items-center justify-between min-h-[80vh] px-16 py-12 ${slide.bg}`}
    >
      {/* left text */}
      <div className="w-1/3">
        <motion.div
          layoutId={`price-${slide.id}`}
          className="text-4xl font-bold"
        >
          <span className={`${slide.priceColor} text-4xl`}>{slide.price}</span>
        </motion.div>

        <motion.h1
          layoutId={`title-${slide.id}`}
          className="mt-6 text-5xl font-extrabold leading-tight text-gray-800"
        >
          {slide.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          {slide.description}
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.02 }}
          className={`mt-8 px-6 py-3 rounded-full ${slide.priceColor.replace(
            "text-",
            "bg-"
          )} text-white shadow-xl`}
        >
          ORDER NOW
        </motion.button>
      </div>

      {/* right composition */}
      <div className="w-2/3 relative flex justify-center items-center">
        {/* big circular background (use layoutId for smooth color/shape morph) */}
        <motion.div
          layoutId="bgCircle"
          className="absolute rounded-full w-[90%] h-[90%] -right-32 top-0"
          style={{ boxShadow: "inset 0 0 0 9999px rgba(255,255,255,0.0)" }}
        >
          {/* We use inline styles or classes to set bg color per-slide; layoutId gives smooth morph */}
        </motion.div>

        {/* orbiting small dishes */}
        <DishOrbit images={slide.orbitImgs} />

        {/* center big dish: use layoutId 'centerImg' to morph between slides */}
        <motion.img
          src={slide.centerImg}
          layoutId="centerImg"
          alt={slide.title}
          className="w-[360px] h-[360px] rounded-full object-cover shadow-2xl"
          initial={{ scale: 0.9, rotate: -6, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          exit={{ scale: 0.9, rotate: 6, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
