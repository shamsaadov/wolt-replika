import { motion } from "framer-motion";
import { Clock, Star, Bike } from "lucide-react";
import { type Store } from "@shared/schema";

interface StoreCardProps {
  store: Store;
  index: number;
}

export function StoreCard({ store, index }: StoreCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        show: { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
          }
        }
      }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="group cursor-pointer w-full"
    >
      <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] group-hover:shadow-[0_20px_50px_rgba(0,157,224,0.15)] transition-all duration-500">
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
        
        <motion.img
          src={store.imageUrl}
          alt={store.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        <div className="absolute bottom-4 left-4 z-20">
            <motion.div 
              initial={{ x: -10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl flex items-center gap-2 text-sm font-black text-foreground"
            >
              <Clock className="w-4 h-4 text-primary" />
              {store.deliveryTime}
            </motion.div>
        </div>
        
        <div className="absolute top-4 right-4 z-20">
            <button className="bg-white/95 backdrop-blur-md p-3 rounded-2xl hover:scale-110 transition-all active:scale-90 shadow-xl group/fav">
                <div className="w-6 h-6 flex items-center justify-center">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-hover/fav:text-red-500 group-hover/fav:fill-red-500 transition-all duration-300"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                </div>
            </button>
        </div>
      </div>

      <div className="px-2">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-black text-2xl text-foreground truncate pr-4 group-hover:text-primary transition-colors duration-300">
            {store.name}
          </h3>
          <div className="flex items-center bg-gray-100/80 px-3 py-1 rounded-xl shrink-0">
            <span className="text-sm font-black text-gray-800 tracking-tight">8.9</span>
          </div>
        </div>
        
        <p className="text-gray-500 text-base font-bold mb-3 truncate">
          {store.description}
        </p>

        <div className="flex items-center gap-4 text-base font-black">
          <div className="flex items-center gap-2 text-primary">
            <Bike className="w-5 h-5" />
            <span>{store.deliveryPrice}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="bg-blue-50 text-primary text-[11px] font-black px-3 py-1 rounded-lg uppercase tracking-widest border border-blue-100">
                Wolt+
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
