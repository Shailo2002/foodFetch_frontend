import { motion } from "framer-motion";
import image from "../../assets/dosa_top_edit.png";
import Navbar from "../Navbar";
import FoodTypeIcon from "../../ui/icons/VegIcon";
import { HardItemInMyCity } from "./item";


export default function TestMotion() {
  return (
    <div className="bg-gradient-to-b from-orange-200 to-white min-h-screen">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Navbar />
      </motion.div>
      <div className="flex justify-center flex-col items-center">
        <div className="w-full max-w-5xl relative">
          <h2 className="text-lg font-semibold mb-3 pt-6 px-10">
            Suggested Food Items
          </h2>

          {/* Responsive grid layout */}
          <div
            className="grid gap-6 px-4
             sm:grid-cols-2
             md:grid-cols-3
             lg:grid-cols-4
             justify-items-center"
          >
            {HardItemInMyCity.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true, amount: 0.2 }}
                className="border-2 border-[#9e4816] rounded-xl shadow-xl shadow-gray-200 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={item.image || image}
                    className="w-56 h-36 md:w-64 md:h-40 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-2 right-2 bg-white rounded-md">
                    <FoodTypeIcon
                      className={`w-6 h-6 ${
                        item.foodtype === "veg"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    />
                  </div>
                </div>
                <div className="p-2 pl-3">
                  <div className="text-md font-semibold h-5">{item.name}</div>
                  <div className="flex items-center gap-0.5 mt-1 h-5">
                    <span className="ml-1">({item.rating.count})</span>
                  </div>
                  <div className="flex justify-between items-center mt-auto p-1 pt-4">
                    <div className="text-md font-bold">₹ {item.price}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
