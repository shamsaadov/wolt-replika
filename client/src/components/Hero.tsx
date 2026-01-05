import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";

export function Hero() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <section className="relative h-[600px] lg:h-[700px] overflow-hidden flex items-center justify-center">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/30 z-10" />
        {/* Using a high quality Unsplash image for the hero background */}
        {/* food delivery city bike */}
        <img
          src="https://pixabay.com/get/g080be1a9cd3e7b263ab623389ba050aceae31b42c496065e56ff3307f55f32eaa0d3e7b3beaa1b1156a0a582647d819deef7a7ba23c77cc33a4e6815b911eb94_1280.jpg"
          alt="Wolt Hero"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="container-wolt relative z-20 w-full">
        <div className="max-w-2xl mx-auto text-center lg:text-left lg:mx-0">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-7xl lg:text-[5.5rem] font-black text-white leading-[0.9] tracking-tight mb-8 drop-shadow-lg"
          >
            Everything.
            <br />
            Delivered.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className={`bg-white p-2 rounded-2xl shadow-2xl transition-all duration-300 flex flex-col sm:flex-row items-center gap-2 ${
              isFocused ? "ring-4 ring-blue-500/30 scale-[1.01]" : ""
            }`}
          >
            <div className="flex-1 w-full flex items-center px-4 h-14 relative">
              <MapPin className="w-6 h-6 text-primary mr-3 shrink-0" />
              <div className="flex flex-col w-full text-left">
                <label 
                  htmlFor="address-input" 
                  className={`text-[10px] font-bold text-gray-500 uppercase tracking-wider transition-all duration-200 ${
                    isFocused ? "opacity-100" : "opacity-0 h-0 overflow-hidden"
                  }`}
                >
                  Delivery address
                </label>
                <input
                  id="address-input"
                  type="text"
                  placeholder="Enter delivery address"
                  className="w-full h-full bg-transparent border-none outline-none text-foreground font-semibold placeholder:text-gray-400 text-lg"
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                />
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 h-12 bg-primary text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-500/20 hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
            >
              Search
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-white/90 font-medium text-lg drop-shadow-md"
          >
            <span className="text-primary-foreground font-bold bg-green-500/90 px-2 py-0.5 rounded mr-2">New!</span>
             Wait less. Track more. Eat happy.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
