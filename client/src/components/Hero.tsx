import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[480px] lg:min-h-[520px] overflow-hidden flex items-center justify-center bg-[#009de0]">
      {/* Solid cyan background like Wolt */}
      <div className="absolute inset-0 z-0 bg-[#009de0]" />

      <div className="container-wolt relative z-20 w-full py-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-2"
          >
            Delivered sustainably.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl sm:text-2xl text-white/90 font-medium mb-10"
          >
            Food, groceries, flowers—whatever you need, we'll bring it.
          </motion.p>

          {/* Address input button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center"
          >
            <button className="group bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center gap-3 shadow-lg">
              <span>Log in for saved addresses</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
