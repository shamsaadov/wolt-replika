import { motion } from "framer-motion";
import { 
  SiMcdonalds, 
  SiStarbucks, 
  SiSubway, 
  SiBurgerking, 
  SiKfc, 
  SiCocacola, 
  SiPepsi, 
  SiNestle, 
  SiUnilever,
  SiDominos,
} from "react-icons/si";

const PARTNERS = [
  { name: "McDonald's", Icon: SiMcdonalds },
  { name: "Starbucks", Icon: SiStarbucks },
  { name: "Subway", Icon: SiSubway },
  { name: "Burger King", Icon: SiBurgerking },
  { name: "KFC", Icon: SiKfc },
  { name: "Coca-Cola", Icon: SiCocacola },
  { name: "Pepsi", Icon: SiPepsi },
  { name: "Nestlé", Icon: SiNestle },
  { name: "Unilever", Icon: SiUnilever },
  { name: "Domino's", Icon: SiDominos },
];

export function LogoMarquee() {
  return (
    <div className="py-24 overflow-hidden bg-gray-50/30 border-y border-gray-100/50">
      <div className="container-wolt mb-16 text-center">
        <h2 className="text-xs font-black text-gray-400 tracking-[0.3em] uppercase">Trusted by 100,000+ partners</h2>
      </div>
      
      <div className="flex flex-col gap-12">
        {/* Row 1: Moving Left */}
        <div className="relative flex overflow-hidden">
          <motion.div 
            className="flex gap-16 items-center whitespace-nowrap px-8"
            animate={{ x: [0, -1920] }}
            transition={{ 
              duration: 40, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {[...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, i) => (
              <div key={`row1-${i}`} className="flex items-center gap-6 text-gray-300 grayscale hover:grayscale-0 transition-all duration-700 hover:text-primary cursor-pointer px-4">
                <partner.Icon className="w-14 h-14" />
                <span className="text-3xl font-black tracking-tighter opacity-50 hover:opacity-100 transition-opacity">{partner.name}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Moving Right */}
        <div className="relative flex overflow-hidden">
          <motion.div 
            className="flex gap-16 items-center whitespace-nowrap px-8"
            initial={{ x: -1920 }}
            animate={{ x: [ -1920, 0] }}
            transition={{ 
              duration: 45, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {[...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, i) => (
              <div key={`row2-${i}`} className="flex items-center gap-6 text-gray-300 grayscale hover:grayscale-0 transition-all duration-700 hover:text-primary cursor-pointer px-4">
                <partner.Icon className="w-14 h-14" />
                <span className="text-3xl font-black tracking-tighter opacity-50 hover:opacity-100 transition-opacity">{partner.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
