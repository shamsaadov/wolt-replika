import { useStores, useCreateStore } from "@/hooks/use-stores";
import { useCategories } from "@/hooks/use-categories";
import { Hero } from "@/components/Hero";
import { Header } from "@/components/Header";
import { StoreRail } from "@/components/StoreCard";
import { CategoryRail } from "@/components/CategoryRail";
import { LogoMarquee } from "@/components/LogoMarquee";
import { Footer } from "@/components/Footer";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Loader2, Plus, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const DEMO_STORES = [
  {
    id: 991,
    name: "McDonald's",
    imageUrl:
      "https://images.unsplash.com/photo-1552590635-27c2c2128abf?auto=format&fit=crop&w=800&q=80",
    description: "Burgers • American • Fast Food",
    deliveryPrice: "$1.99",
    deliveryTime: "15-25 min",
    category: "Restaurants",
  },
  {
    id: 992,
    name: "Sushi Zen",
    imageUrl:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80",
    description: "Sushi • Japanese • Asian",
    deliveryPrice: "$3.49",
    deliveryTime: "30-45 min",
    category: "Restaurants",
  },
  {
    id: 993,
    name: "Pizza Hut",
    imageUrl:
      "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=800&q=80",
    description: "Pizza • Italian • Wings",
    deliveryPrice: "$2.49",
    deliveryTime: "25-35 min",
    category: "Restaurants",
  },
  {
    id: 994,
    name: "Starbucks",
    imageUrl:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
    description: "Coffee • Breakfast • Bakery",
    deliveryPrice: "$0.99",
    deliveryTime: "10-20 min",
    category: "Groceries",
  },
  {
    id: 995,
    name: "Wolt Market",
    imageUrl:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
    description: "Groceries • Fresh • Essentials",
    deliveryPrice: "Free",
    deliveryTime: "20-30 min",
    category: "Stores",
  },
  {
    id: 996,
    name: "Subway",
    imageUrl:
      "https://images.unsplash.com/photo-1513639776629-9269d0d661e2?auto=format&fit=crop&w=800&q=80",
    description: "Sandwiches • Healthy • Salads",
    deliveryPrice: "$1.49",
    deliveryTime: "15-25 min",
    category: "Restaurants",
  },
];

const DEMO_CATEGORIES = [
  {
    id: 1,
    name: "Burgers",
    imageUrl:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    name: "Sushi",
    imageUrl:
      "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    name: "Pizza",
    imageUrl:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 4,
    name: "Asian",
    imageUrl:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 5,
    name: "Vegan",
    imageUrl:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 6,
    name: "Dessert",
    imageUrl:
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=400&q=80",
  },
];

const WOLT_APP_PROMO = {
  title: "Hungry? Get the app.",
  description:
    "The fastest way to get your favorites delivered. Experience Wolt on your phone.",
  imageUrl:
    "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=2070&auto=format&fit=crop",
};

export default function Home() {
  const { data: stores, isLoading } = useStores();
  const { data: categories } = useCategories();
  const createStoreMutation = useCreateStore();
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const smoothBackgroundY = useSpring(backgroundY, {
    stiffness: 100,
    damping: 30,
  });

  useEffect(() => {
    const root = document.documentElement;
    const unsubscribe = smoothBackgroundY.on("change", (v: number) => {
      root.style.setProperty("--scroll-y", `${v}px`);
    });
    return () => unsubscribe();
  }, [smoothBackgroundY]);

  const [formData, setFormData] = useState({
    name: "",
    imageUrl:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    description: "",
    deliveryPrice: "$1.99",
    deliveryTime: "20-30 min",
    category: "Restaurants",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createStoreMutation.mutateAsync(formData);
    setIsOpen(false);
    setFormData({ ...formData, name: "", description: "" });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <Loader2 className="w-12 h-12 text-primary animate-spin" />
      </div>
    );
  }

  const displayStores = stores && stores.length > 0 ? stores : DEMO_STORES;
  const displayCategories =
    categories && categories.length > 0 ? categories : DEMO_CATEGORIES;

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Header />

      {/* Hero section with LogoMarquee at the boundary */}
      <Hero />
      <LogoMarquee />

      <main className="relative z-30 pb-20 pt-10 bg-black">
        <div className="container-wolt space-y-32">
          {/* App Download Promo */}
          <section className="bg-primary rounded-[3.5rem] p-10 sm:p-20 flex flex-col md:flex-row items-center gap-16 relative overflow-hidden shadow-[0_40px_100px_rgba(0,157,224,0.3)]">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="relative z-10 flex-1 space-y-10 text-center md:text-left">
              <motion.h3
                className="text-5xl sm:text-7xl font-black text-white leading-tight tracking-tighter"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                {WOLT_APP_PROMO.title}
              </motion.h3>
              <motion.p
                className="text-white/90 font-bold text-2xl max-w-xl mx-auto md:mx-0 leading-relaxed"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                {WOLT_APP_PROMO.description}
              </motion.p>
              <div className="flex flex-wrap justify-center md:justify-start gap-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary px-10 py-5 rounded-2xl font-black text-xl shadow-2xl hover:bg-gray-50 transition-colors"
                >
                  App Store
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-black text-white px-10 py-5 rounded-2xl font-black text-xl shadow-2xl hover:bg-gray-900 transition-colors"
                >
                  Google Play
                </motion.button>
              </div>
            </div>
            <motion.div
              className="relative flex-1"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                src={WOLT_APP_PROMO.imageUrl}
                alt="App"
                className="w-full rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.3)] rotate-3 hover:rotate-0 transition-transform duration-700"
              />
            </motion.div>
          </section>

          <section>
            <CategoryRail
              title="Shops & Retail"
              categories={displayCategories.slice(0, 4)}
            />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
