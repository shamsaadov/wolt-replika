import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Search, Menu, User, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
      setIsSearchVisible(window.scrollY > 400); // Show search in header after hero scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] py-3 border-b border-gray-100" 
          : "bg-transparent py-6"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container-wolt flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link href="/" className="relative z-10 group">
            <span className={`text-4xl font-black tracking-tighter transition-all duration-500 group-hover:scale-105 inline-block ${isScrolled ? "text-primary" : "text-white"}`}>
              Wolt
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {["Restaurants", "Stores", "Groceries"].map((item) => (
              <button 
                key={item}
                className={`font-black text-sm uppercase tracking-[0.2em] transition-all hover:scale-110 active:scale-90 ${
                  isScrolled ? "text-gray-500 hover:text-primary" : "text-white/70 hover:text-white"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <AnimatePresence>
            {isSearchVisible && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 5, scale: 0.95 }}
                className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2.5 w-[300px] lg:w-[400px]"
              >
                <Search className="w-5 h-5 text-gray-500 mr-3" />
                <input
                  type="text"
                  placeholder="Search in Wolt..."
                  className="bg-transparent border-none outline-none text-sm w-full placeholder:text-gray-500 font-medium"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-4">
          <button className={`hidden sm:block font-black text-sm uppercase tracking-widest transition-all hover:scale-105 active:scale-95 ${isScrolled ? "text-gray-700 hover:text-primary" : "text-white hover:text-white/80"}`}>
            Log in
          </button>
          
          <button className={`px-8 py-3 rounded-2xl font-black text-sm uppercase tracking-widest transition-all duration-300 shadow-xl hover:scale-105 active:scale-95 ${
            isScrolled 
              ? "bg-primary text-white shadow-primary/20 hover:bg-blue-600" 
              : "bg-white text-primary hover:bg-gray-50"
          }`}>
            Sign up
          </button>
          
          <button className={`p-3 rounded-2xl transition-all hover:scale-110 active:scale-90 relative ${
            isScrolled ? "bg-gray-100 text-gray-700 hover:bg-gray-200" : "bg-white/10 text-white hover:bg-white/20"
          }`}>
             <ShoppingBag className="w-6 h-6" />
             <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white text-[10px] font-black rounded-full flex items-center justify-center border-2 border-white">
              0
            </span>
          </button>

          <div className="lg:hidden">
             <Menu className={`w-7 h-7 cursor-pointer transition-transform hover:scale-110 active:scale-90 ${isScrolled ? "text-gray-800" : "text-white"}`} />
          </div>
        </div>
      </div>
    </motion.header>
  );
}
