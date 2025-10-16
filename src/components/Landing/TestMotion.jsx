import { useState } from "react";
import { slides } from "../../data/slides";
import { TiArrowDownThick } from "react-icons/ti";

export default function TestMotion() {
  const [prev, setPrev] = useState(0);
  const currentSlide = slides[prev];

  return (
    <div className="relative h-screen overflow-hidden z-0 bg-amber-50 font-sans">
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

        {/* Main hero section */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center flex-1 px-6 md:px-12 pb-10 pt-10 gap-8">
          {/* Left text section */}
          <div className="w-full md:w-1/3 text-center md:text-left mb-8 md:mb-0">
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
              className={`${currentSlide?.btn} text-sm md:text-base font-semibold tracking-wide text-white px-6 md:px-8 py-2 md:py-3 rounded-full shadow-md hover:shadow-xl hover:${currentSlide?.btnHover} transition-all duration-300`}
            >
              ORDER NOW
            </button>
          </div>

          {/* Right image section */}
          <div className="flex flex-col justify-center items-center w-full relative">
            {/* Top small dish */}
            <div className="flex justify-center items-center mb-4">
              <img
                src={currentSlide?.orbitImgs[1]}
                className="w-20 md:w-28 h-20 md:h-28 object-cover rounded-full"
                alt="Orbit Dish Top"
              />
            </div>

            {/* Side small dishes */}
            <div className="flex justify-center gap-28 md:gap-60 items-center -mt-4">
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
            </div>

            {/* Center main dish */}
            <div className="flex justify-center items-center mt-6 md:mt-10">
              <img
                src={currentSlide?.centerImg}
                className="w-40 md:w-60 h-40 md:h-60 rounded-full object-cover"
                alt="Center Dish"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-28 md:gap-72 mt-4 md:-mt-2">
              <button
                className={`${currentSlide?.btn} text-white px-2 py-2 md:2 md:py-2 text-sm md:text-base rounded-full hover:shadow-xl shadow hover:${currentSlide?.btnHover} transition font-semibold`}
                onClick={() => setPrev((prev) => (prev + 1) % slides.length)}
              >
                <TiArrowDownThick />
              </button>
              <button
                className={`${currentSlide?.btn} text-white px-2 py-2 md:2 md:py-2 text-sm md:text-base rounded-full hover:shadow-xl shadow hover:${currentSlide?.btnHover} transition font-semibold`}
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
