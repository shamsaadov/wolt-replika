import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Globe, Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/hooks/use-theme";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white dark:bg-background shadow-sm dark:shadow-none dark:border-b dark:border-border py-3"
            : "bg-transparent py-4"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container-wolt flex items-center justify-between">
          {/* Left side - Logo */}
          <Link href="/" className="relative z-10">
            <span
              className={`text-3xl font-black tracking-tight transition-colors duration-300 ${
                isScrolled ? "text-[#009de0]" : "text-white"
              }`}
            >
              wolt
            </span>
          </Link>

          {/* Right side - Navigation */}
          <div className="flex items-center gap-6">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isScrolled
                  ? "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-white/10"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle theme"
            >
              <motion.div
                initial={false}
                animate={{ rotate: resolvedTheme === "dark" ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {resolvedTheme === "dark" ? (
                  <Moon className="w-5 h-5" />
                ) : (
                  <Sun className="w-5 h-5" />
                )}
              </motion.div>
            </button>

            {/* Language selector */}
            <button
              className={`hidden sm:flex items-center gap-2 font-semibold text-sm transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-[#009de0] dark:text-gray-200 dark:hover:text-[#00b4ff]"
                  : "text-white hover:text-white/80"
              }`}
            >
              <Globe className="w-4 h-4" />
              <span>English</span>
            </button>

            {/* Nav links */}
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="#"
                className={`font-semibold text-sm transition-colors ${
                  isScrolled
                    ? "text-gray-700 hover:text-[#009de0] dark:text-gray-200 dark:hover:text-[#00b4ff]"
                    : "text-white hover:text-white/80"
                }`}
              >
                Become a partner
              </Link>
              <Link
                href="#"
                className={`font-semibold text-sm transition-colors ${
                  isScrolled
                    ? "text-gray-700 hover:text-[#009de0] dark:text-gray-200 dark:hover:text-[#00b4ff]"
                    : "text-white hover:text-white/80"
                }`}
              >
                Careers
              </Link>
            </nav>

            {/* Auth buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                className={`font-semibold text-sm px-4 py-2 rounded-lg transition-colors ${
                  isScrolled
                    ? "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-white/10"
                    : "text-white hover:bg-white/10"
                }`}
              >
                Log in
              </button>
              <button
                className={`font-semibold text-sm px-5 py-2.5 rounded-lg transition-all ${
                  isScrolled
                    ? "bg-[#009de0] text-white hover:bg-[#0088c6]"
                    : "bg-white text-[#009de0] hover:bg-gray-100 dark:bg-white dark:text-[#009de0]"
                }`}
              >
                Sign up
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-white/10"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white dark:bg-background pt-20"
          >
            <div className="container-wolt py-8 space-y-6">
              <Link
                href="#"
                className="block text-lg font-semibold text-gray-800 dark:text-gray-100 hover:text-[#009de0] dark:hover:text-[#00b4ff] py-3 border-b border-gray-100 dark:border-border"
              >
                Become a partner
              </Link>
              <Link
                href="#"
                className="block text-lg font-semibold text-gray-800 dark:text-gray-100 hover:text-[#009de0] dark:hover:text-[#00b4ff] py-3 border-b border-gray-100 dark:border-border"
              >
                Careers
              </Link>
              <div className="pt-4 space-y-3">
                <button className="w-full py-3 rounded-lg font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
                  Log in
                </button>
                <button className="w-full py-3 rounded-lg font-semibold bg-[#009de0] text-white hover:bg-[#0088c6] transition-colors">
                  Sign up
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
