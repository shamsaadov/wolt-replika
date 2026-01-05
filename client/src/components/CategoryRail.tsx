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
    <div className="py-8">
      <div className="flex items-center justify-between mb-6 px-1">
        <h2 className="text-3xl font-extrabold text-foreground tracking-tight">{title}</h2>
        <button className="flex items-center font-bold text-primary hover:bg-blue-50 px-4 py-2 rounded-full transition-colors">
          See all
          <ChevronRight className="w-5 h-5 ml-1" />
        </button>
      </div>

      <div className="overflow-x-auto hide-scrollbar pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
        <div className="flex gap-4 w-max">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={category.imageUrl}
                alt={category.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-white font-bold text-lg text-center px-2 drop-shadow-md">
                  {category.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
