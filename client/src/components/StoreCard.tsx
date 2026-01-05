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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="group cursor-pointer w-full"
    >
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-3 shadow-sm group-hover:shadow-xl transition-all duration-300">
        {/* Gradient overlay for better text readability if we had overlay text */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
        
        <img
          src={store.imageUrl}
          alt={store.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        <div className="absolute bottom-3 left-3 z-20">
            <div className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 text-xs font-bold text-foreground">
              <Clock className="w-3.5 h-3.5 text-primary" />
              {store.deliveryTime}
            </div>
        </div>
        
        <div className="absolute top-3 right-3 z-20">
            <button className="bg-white/90 p-2 rounded-full hover:scale-110 transition-transform active:scale-95 shadow-md">
                <div className="w-5 h-5 flex items-center justify-center">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 hover:text-red-500 hover:fill-red-500 transition-colors"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                </div>
            </button>
        </div>
      </div>

      <div className="px-1">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-extrabold text-xl text-foreground truncate pr-2 group-hover:text-primary transition-colors">
            {store.name}
          </h3>
          <div className="flex items-center bg-gray-100 px-2 py-0.5 rounded-lg shrink-0">
            <span className="text-xs font-bold text-gray-700">8.9</span>
          </div>
        </div>
        
        <p className="text-gray-500 text-sm font-medium mb-2 truncate">
          {store.description}
        </p>

        <div className="flex items-center gap-4 text-sm font-semibold text-gray-500">
          <div className="flex items-center gap-1.5 text-primary">
            <Bike className="w-4 h-4" />
            <span>{store.deliveryPrice}</span>
          </div>
          
          <div className="flex items-center gap-1.5">
            <span className="bg-blue-100 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                Wolt+
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
