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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-wolt flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="relative z-10 group">
            <span className={`text-4xl font-black tracking-tighter transition-colors duration-300 ${isScrolled ? "text-foreground" : "text-white"}`}>
              Wolt
            </span>
          </Link>

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

        <div className="flex items-center gap-3 sm:gap-6">
          <button className={`hidden sm:block font-bold text-sm hover:opacity-80 transition-opacity ${isScrolled ? "text-foreground" : "text-white"}`}>
            Log in
          </button>
          
          <button className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-200 shadow-lg ${
            isScrolled 
              ? "bg-blue-100 text-primary hover:bg-blue-200" 
              : "bg-white text-foreground hover:bg-gray-100"
          }`}>
            Sign up
          </button>
          
          <div className="md:hidden">
             <Menu className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
          </div>
        </div>
      </div>
    </motion.header>
  );
}
