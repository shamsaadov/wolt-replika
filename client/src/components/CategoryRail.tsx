import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { type Category } from "@shared/schema";

interface CategoryRailProps {
  title: string;
  categories: Category[];
}

export function CategoryRail({ title, categories }: CategoryRailProps) {
  if (!categories || categories.length === 0) return null;

  return (
    <div className="py-4">
      <motion.div 
        className="flex items-center justify-between mb-8 px-1"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-black text-foreground tracking-tight">{title}</h2>
        <button className="flex items-center font-black text-primary hover:bg-blue-50 px-6 py-3 rounded-2xl transition-all hover:scale-105 active:scale-95 group">
          See all
          <ChevronRight className="w-6 h-6 ml-1 transition-transform group-hover:translate-x-1" />
        </button>
      </motion.div>

      <div className="overflow-x-auto hide-scrollbar pb-6 -mx-4 px-4 sm:mx-0 sm:px-0">
        <motion.div 
          className="flex gap-6 w-max"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              variants={{
                hidden: { opacity: 0, scale: 0.8, y: 20 },
                show: { opacity: 1, scale: 1, y: 0 }
              }}
              whileHover={{ 
                scale: 1.08, 
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.92 }}
              className="relative w-36 h-36 md:w-48 md:h-48 rounded-[2rem] overflow-hidden cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,157,224,0.15)] transition-all duration-500"
            >
              <img
                src={category.imageUrl}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-center justify-center">
                <span className="text-white font-black text-xl text-center px-4 drop-shadow-2xl tracking-tight">
                  {category.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
