import image1 from "../../assets/burger_edit.png";
import image2 from "../../assets/pizza_edit.png";
import image3 from "../../assets/dessert_edit.png";
import { useEffect, useState } from "react";
import { slides } from "../../data/slides";

export default function TestMotion() {
  const [prev, setPrev] = useState(0);
  const currentSlide = slides[prev];


  return (
    <div className="relative h-screen overflow-hidden z-0 bg-amber-50">
      <div
        className={`absolute right-40 top-0 h-[1600px] w-[1600px] ${currentSlide?.bg} rounded-full translate-x-1/2 -translate-y-16/24 z-1`}
      ></div>

      <div className="relative z-10 flex flex-col h-full">
        <nav className="flex justify-between items-center p-6">
          <div>FoodFetch</div>
          <div className="space-x-6  pr-32">
            <span>Breakfast</span>
            <span>Lunch</span>
            <span>Dinner</span>
          </div>
          <div>cart</div>
        </nav>

        <div className="flex justify-between items-center flex-1 px-12 pb-10  pt-20 gap-8">
          <div className="w-1/3">
            <p
              className={`text-5xl font-bold ${currentSlide?.priceColor} mb-4`}
            >
              {currentSlide?.price}
            </p>
            <h2 className="text-4xl font-semibold mb-4">
              {currentSlide?.title}
            </h2>

            <p className="text-gray-600 mb-6">{currentSlide?.description}</p>
            <button
              className={`${currentSlide?.btn} text-white px-8 py-3 rounded-full shadow-md hover:shadow-xl transition-all duration-300`}
            >
              ORDER NOW
            </button>
          </div>

          <div className="flex flex-col justify-center w-full ">
            <div className="flex justify-center items-gap-8 ">
              <img
                src={currentSlide?.orbitImgs[1]}
                className="w-28 h-28 object-cover object-center rounded-full"
              />
            </div>
            <div className="flex justify-center items-center gap-60">
              <img
                src={currentSlide?.orbitImgs[0]}
                className="w-28 h-28 object-cover object-center rounded-full"
              />
              <img
                src={currentSlide?.orbitImgs[2]}
                className="w-28 h-28 object-cover object-center rounded-full"
              />
            </div>

            <div className="flex justify-center items-center w-full ">
              <img
                src={currentSlide?.centerImg}
                className="w-60 h-60 object-cover object-center rounded-full"
              />
            </div>
            <div className="flex justify-center gap-48">
              <button
                className="bg-orange-500 text-white px-6 py-2 rounded-full shadow hover:bg-orange-600 transition"
                onClick={() => setPrev((prev) => (prev + 1) % slides.length)}
              >
                left
              </button>
              <button
                className="bg-orange-500 text-white px-6 py-2 rounded-full shadow hover:bg-orange-600 transition"
                onClick={() =>
                  setPrev((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
                }
              >
                right
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
