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
    <div className="py-6">
      <motion.div 
        className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12 px-1"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-black text-foreground tracking-tighter leading-none">{title}</h2>
        <button className="w-max flex items-center font-black text-primary hover:bg-blue-50 px-8 py-4 rounded-[1.5rem] transition-all hover:scale-105 active:scale-95 group shadow-sm hover:shadow-xl hover:shadow-primary/10">
          Explore all
          <ChevronRight className="w-7 h-7 ml-2 transition-transform group-hover:translate-x-2" />
        </button>
      </motion.div>

      <div className="overflow-x-auto hide-scrollbar pb-10 -mx-4 px-4 sm:mx-0 sm:px-0">
        <motion.div 
          className="flex gap-8 w-max"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={{
                hidden: { opacity: 0, scale: 0.8, y: 40, filter: "blur(10px)" },
                show: { 
                  opacity: 1, 
                  scale: 1, 
                  y: 0, 
                  filter: "blur(0px)",
                  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
                }
              }}
              whileHover={{ 
                scale: 1.1, 
                y: -15,
                transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
              }}
              whileTap={{ scale: 0.9 }}
              className="relative w-44 h-44 md:w-56 md:h-56 rounded-[3rem] overflow-hidden cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:shadow-[0_40px_80px_rgba(0,157,224,0.3)] transition-all duration-700"
            >
              <img
                src={category.imageUrl}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-120"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-center pb-8">
                <span className="text-white font-black text-2xl text-center px-6 drop-shadow-2xl tracking-tighter leading-none">
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
