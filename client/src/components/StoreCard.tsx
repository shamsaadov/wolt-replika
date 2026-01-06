import { motion } from "framer-motion";
import { Clock, Bike, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { type Store } from "@shared/schema";
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

interface StoreRailProps {
  title: string;
  stores: Store[];
}

export function StoreRail({ title, stores }: StoreRailProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback((api: any) => {
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className="py-8 group/rail relative">
      <div className="flex items-center justify-between mb-10 px-1">
        <h2 className="text-4xl sm:text-5xl font-black text-foreground tracking-tighter leading-none">{title}</h2>
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2">
             <Button
               variant="outline"
               size="icon"
               className={`rounded-2xl h-12 w-12 border-2 transition-all ${!canScrollPrev ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-100 scale-100'}`}
               onClick={scrollPrev}
             >
               <ChevronLeft className="w-6 h-6" />
             </Button>
             <Button
               variant="outline"
               size="icon"
               className={`rounded-2xl h-12 w-12 border-2 transition-all ${!canScrollNext ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-100 scale-100'}`}
               onClick={scrollNext}
             >
               <ChevronRight className="w-6 h-6" />
             </Button>
          </div>
        </div>
      </div>

      <div className="embla overflow-hidden -mx-4 px-4 sm:mx-0 sm:px-0" ref={emblaRef}>
        <div className="embla__container flex gap-8">
          {stores.map((store, index) => (
            <div key={store.id} className="embla__slide flex-[0_0_auto] w-[300px] sm:w-[380px]">
              <StoreCard store={store} index={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function StoreCard({ store, index }: { store: Store; index: number }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
        show: { 
          opacity: 1, 
          y: 0, 
          filter: "blur(0px)",
          transition: {
            duration: 1,
            ease: [0.16, 1, 0.3, 1]
          }
        }
      }}
      whileHover={{ y: -15, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
      className="group cursor-pointer w-full"
    >
      <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden mb-6 shadow-[0_15px_45px_rgb(0,0,0,0.06)] group-hover:shadow-[0_30px_70px_rgba(0,157,224,0.25)] transition-all duration-700">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
        
        <motion.img
          src={store.imageUrl}
          alt={store.name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-115"
        />
        
        <div className="absolute bottom-6 left-6 z-20">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="bg-white/95 backdrop-blur-xl px-5 py-2.5 rounded-[1.25rem] shadow-2xl flex items-center gap-3 text-sm font-black text-foreground"
            >
              <Clock className="w-5 h-5 text-primary" />
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
