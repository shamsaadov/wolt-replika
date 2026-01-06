import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

// Brand logos styled like Wolt's partner cards
const PARTNERS_ROW_1 = [
  {
    name: "BSNL",
    textColor: "text-gray-800",
    bgColor: "bg-white",
    style: "font-serif text-sm tracking-wide",
  },
  {
    name: "Arnolds",
    textColor: "text-white",
    bgColor: "bg-amber-800",
    style: "font-script text-xl italic",
  },
  {
    name: "TACTIC",
    textColor: "text-red-600",
    bgColor: "bg-white",
    style: "font-bold text-lg tracking-tight",
  },
  {
    name: "rolls",
    textColor: "text-red-500",
    bgColor: "bg-white",
    style: "font-bold text-xl lowercase",
  },
  {
    name: "Slice Guy",
    textColor: "text-orange-600",
    bgColor: "bg-white",
    style: "font-bold text-sm",
  },
  {
    name: "picnic",
    textColor: "text-cyan-500",
    bgColor: "bg-white",
    style: "font-bold text-xl lowercase",
  },
  {
    name: "ESPRESSO HOUSE",
    textColor: "text-amber-900",
    bgColor: "bg-amber-100",
    style: "font-serif text-xs text-center",
  },
  {
    name: "Pups",
    textColor: "text-white",
    bgColor: "bg-red-600",
    style: "font-bold text-xl italic",
  },
  {
    name: "Pizza Hut",
    textColor: "text-red-600",
    bgColor: "bg-white",
    style: "font-bold text-lg",
  },
  {
    name: "PANCHO VILLA",
    textColor: "text-red-700",
    bgColor: "bg-white",
    style: "font-bold text-xs tracking-wide",
  },
];

const PARTNERS_ROW_2 = [
  {
    name: "Konnichiwa",
    textColor: "text-amber-400",
    bgColor: "bg-gray-900",
    style: "font-script text-lg italic",
  },
  {
    name: "蘭州",
    textColor: "text-orange-600",
    bgColor: "bg-white",
    style: "font-bold text-2xl",
  },
  {
    name: "CHINA BOSS",
    textColor: "text-red-600",
    bgColor: "bg-white",
    style: "font-bold text-sm",
  },
  {
    name: "Levant",
    textColor: "text-green-700",
    bgColor: "bg-white",
    style: "font-serif text-xl",
  },
  {
    name: "SPEAKEASY",
    textColor: "text-amber-800",
    bgColor: "bg-amber-100",
    style: "font-bold text-xs tracking-wide",
  },
  {
    name: "Fazer CAFÉ",
    textColor: "text-gray-700",
    bgColor: "bg-white",
    style: "font-serif text-lg",
  },
  {
    name: "biáng!",
    textColor: "text-gray-800",
    bgColor: "bg-white",
    style: "font-bold text-2xl",
  },
  {
    name: "sb+w",
    textColor: "text-white",
    bgColor: "bg-gray-800",
    style: "font-mono text-xl lowercase",
  },
  {
    name: "Seoul Good",
    textColor: "text-red-500",
    bgColor: "bg-blue-600",
    style: "font-bold text-lg",
  },
  {
    name: "SIZZLE STATION",
    textColor: "text-blue-800",
    bgColor: "bg-white",
    style: "font-bold text-xs tracking-wide",
  },
];

function BrandCard({
  brand,
}: {
  brand: { name: string; textColor: string; bgColor: string; style: string };
}) {
  return (
    <div className="flex-shrink-0 w-24 h-24 md:w-28 md:h-28 rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300">
      <div
        className={`w-full h-full ${brand.bgColor} flex items-center justify-center p-2`}
      >
        <span
          className={`${brand.textColor} ${brand.style} text-center leading-tight`}
        >
          {brand.name}
        </span>
      </div>
    </div>
  );
}

export function LogoMarquee() {
  return (
    <div className="relative py-8 overflow-hidden">
      {/* Split background - top cyan, bottom black */}
      <div className="absolute inset-0 z-0">
        <div className="h-1/2 bg-[#00b4d8]" />
        <div className="h-1/2 bg-black" />
      </div>

      <div className="relative z-10 flex flex-col gap-4">
        {/* Row 1: Moving Left */}
        <div className="relative flex overflow-hidden">
          <motion.div
            className="flex gap-4 items-center"
            animate={{ x: [0, -1500] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[
              ...PARTNERS_ROW_1,
              ...PARTNERS_ROW_1,
              ...PARTNERS_ROW_1,
              ...PARTNERS_ROW_1,
            ].map((partner, i) => (
              <BrandCard key={`row1-${i}`} brand={partner} />
            ))}
          </motion.div>
        </div>

        {/* Row 2: Moving Right */}
        <div className="relative flex overflow-hidden">
          <motion.div
            className="flex gap-4 items-center"
            initial={{ x: -1500 }}
            animate={{ x: [-1500, 0] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[
              ...PARTNERS_ROW_2,
              ...PARTNERS_ROW_2,
              ...PARTNERS_ROW_2,
              ...PARTNERS_ROW_2,
            ].map((partner, i) => (
              <BrandCard key={`row2-${i}`} brand={partner} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Popular around you text */}
      <div className="relative z-10 flex justify-center mt-8">
        <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
          <span className="text-base font-medium">
            Popular around you right now
          </span>
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
