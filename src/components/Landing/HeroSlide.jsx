import { useState } from "react";
import { slides } from "../../data/slides";
import { TiArrowDownThick } from "react-icons/ti";
import { motion, AnimatePresence } from "framer-motion";

// Variants
const textVariant = {
  initial: { opacity: 0, x: -20 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  exit: { opacity: 0, x: 20, transition: { duration: 0.4 } },
};

const imgVariant = {
  initial: { opacity: 0, scale: 0.8, y: 20 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
  exit: { opacity: 0, scale: 0.9, y: -20, transition: { duration: 0.4 } },
};

const orbitVariant = {
  initial: { opacity: 0, rotate: 0, scale: 0.9 },
  animate: {
    opacity: 1,
    rotate: 360,
    scale: 1,
    transition: { duration: 1.2, ease: "easeInOut" },
  },
  exit: { opacity: 0, rotate: 0, transition: { duration: 0.4 } },
};

export default function TestMotion() {
  const [prev, setPrev] = useState(0);
  const currentSlide = slides[prev];

  return (
    <div className="relative h-screen overflow-hidden z-0 bg-amber-50 font-sans">
      {/* Background Circle */}
      <div
        className={`hidden sm:block absolute right-40 top-0 h-[1600px] w-[1600px] ${currentSlide?.bg} rounded-full translate-x-1/2 -translate-y-16/24 z-1`}
      ></div>

      <div className="relative z-10 flex flex-col h-full">
        {/* Navbar */}
        <nav className="flex justify-between items-center p-4 md:p-6 text-sm md:text-base font-medium">
          <div className="text-xl md:text-2xl font-bold tracking-wide">
            FoodFetch
          </div>

          <div className="hidden md:flex space-x-10">
            <span className="hover:text-orange-500 cursor-pointer">
              Breakfast
            </span>
            <span className="hover:text-orange-500 cursor-pointer">Lunch</span>
            <span className="hover:text-orange-500 cursor-pointer">Dinner</span>
          </div>

          <div className="font-semibold cursor-pointer">Cart</div>
        </nav>

        {/* Main Section */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center flex-1 px-6 md:px-12 pb-10 pt-10 gap-8">
          {/* LEFT TEXT SECTION */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${currentSlide?.id}`}
              variants={textVariant}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full md:w-1/3 text-center md:text-left mb-8 md:mb-0"
            >
              <p
                className={`text-3xl sm:text-4xl md:text-5xl font-bold ${currentSlide?.priceColor} mb-3 leading-tight`}
              >
                {currentSlide?.price}
              </p>
              <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold mb-3 leading-snug text-gray-900">
                {currentSlide?.title}
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-6 leading-relaxed">
                {currentSlide?.description}
              </p>

              <button
                className={`${currentSlide?.btn} text-sm md:text-base font-semibold tracking-wide text-white px-6 md:px-8 py-2 md:py-3 rounded-full shadow-md hover:shadow-xl transition-all duration-300`}
              >
                ORDER NOW
              </button>
            </motion.div>
          </AnimatePresence>

          {/* RIGHT IMAGE SECTION */}
          <div className="flex flex-col justify-center items-center w-full relative">
            {/* Top orbit image */}
            <AnimatePresence mode="wait">
              <motion.img
                key={`orbit-top-${currentSlide?.id}`}
                variants={imgVariant}
                initial="initial"
                animate="animate"
                exit="exit"
                src={currentSlide?.orbitImgs[1]}
                className="w-20 md:w-28 h-20 md:h-28 object-cover rounded-full mb-4"
                alt="Orbit Dish Top"
              />
            </AnimatePresence>

            {/* Orbit Row */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`orbit-${currentSlide?.id}`}
                variants={orbitVariant}
                initial="initial"
                animate="animate"
                exit="exit"
                className="flex justify-center gap-28 md:gap-60 items-center -mt-4"
              >
                <img
                  src={currentSlide?.orbitImgs[0]}
                  className="w-20 md:w-28 h-20 md:h-28 rounded-full"
                  alt="Orbit Dish Left"
                />
                <img
                  src={currentSlide?.orbitImgs[2]}
                  className="w-20 md:w-28 h-20 md:h-28 rounded-full"
                  alt="Orbit Dish Right"
                />
              </motion.div>
            </AnimatePresence>

            {/* Center main image */}
            <AnimatePresence mode="wait">
              <motion.img
                key={`center-${currentSlide?.id}`}
                variants={imgVariant}
                initial="initial"
                animate="animate"
                exit="exit"
                src={currentSlide?.centerImg}
                className="w-40 md:w-60 h-40 md:h-60 rounded-full object-cover mt-6 md:mt-10"
                alt="Center Dish"
              />
            </AnimatePresence>

            {/* Buttons */}
            <div className="flex justify-center gap-48 md:gap-72 mt-0 md:-mt-2">
              <button
                className={`${currentSlide?.btn} text-white px-2 py-2 text-sm md:text-base rounded-full hover:shadow-xl shadow transition font-semibold`}
                onClick={() => setPrev((prev) => (prev + 1) % slides.length)}
              >
                <TiArrowDownThick />
              </button>
              <button
                className={`${currentSlide?.btn} text-white px-2 py-2 text-sm md:text-base rounded-full hover:shadow-xl shadow transition font-semibold`}
                onClick={() =>
                  setPrev((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
                }
              >
                <TiArrowDownThick />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
