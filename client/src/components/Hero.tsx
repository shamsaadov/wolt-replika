import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const DELIVERED_WORDS = ["Food.", "Grocery.", "Pharmacy.", "Everything."];

export function Hero() {
  const [isFocused, setIsFocused] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % DELIVERED_WORDS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[600px] lg:h-[700px] overflow-hidden flex items-center justify-center">
      {/* Dynamic Background with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "linear" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent z-10" />
        <motion.img
          src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop"
          alt="Wolt Hero"
          className="w-full h-full object-cover object-center"
          initial={{ y: 0 }}
          style={{ y: "var(--scroll-y)" }}
        />
      </motion.div>

      <div className="container-wolt relative z-20 w-full">
        <div className="max-w-2xl mx-auto text-center lg:text-left lg:mx-0">
          <div className="h-[200px] sm:h-[240px] lg:h-[280px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.h1
                key={DELIVERED_WORDS[wordIndex]}
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -40, filter: "blur(10px)" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl sm:text-7xl lg:text-[6rem] font-black text-white leading-[0.9] tracking-tight mb-4 drop-shadow-2xl"
              >
                {DELIVERED_WORDS[wordIndex]}
                <br />
                <span className="text-white/90">Delivered.</span>
              </motion.h1>
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`bg-white p-2 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all duration-500 flex flex-col sm:flex-row items-center gap-2 ${
              isFocused ? "ring-4 ring-primary/20 scale-[1.02] shadow-[0_25px_60px_rgba(0,0,0,0.3)]" : ""
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
