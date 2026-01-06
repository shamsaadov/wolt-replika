import { Hero } from "@/components/Hero";
import { Header } from "@/components/Header";
import { LogoMarquee } from "@/components/LogoMarquee";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Star,
  Headphones,
  Zap,
  ShoppingBag,
  Building2,
  Bike,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Header />

      {/* Hero section with LogoMarquee at the boundary */}
      <Hero />
      <LogoMarquee />

      {/* Main content on black background */}
      <main className="relative z-30 bg-black">
        {/* Courier & Merchant Cards */}
        <section className="py-16">
          <div className="container-wolt">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Become a courier partner */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative rounded-3xl overflow-hidden group cursor-pointer"
              >
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80"
                  alt="Courier"
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    Become a courier partner
                  </h3>
                  <div className="flex items-center gap-2 text-white/80">
                    <span className="font-medium">Learn more</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>

              {/* Reach new customers */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="relative rounded-3xl overflow-hidden group cursor-pointer"
              >
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80"
                  alt="Restaurant"
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    Reach new customers
                  </h3>
                  <div className="flex items-center gap-2 text-white/80">
                    <span className="font-medium">Learn more</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Life tastes better with Wolt */}
        <section className="py-20">
          <div className="container-wolt">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                  Life tastes better with Wolt
                </h2>
                <p className="text-xl text-gray-400 leading-relaxed">
                  Wolt makes it incredibly easy to discover and get what you
                  want. Delivered to you — quickly, reliably and affordably.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#009de0]/20 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-[#009de0]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">
                        Fast delivery
                      </h4>
                      <p className="text-gray-400">
                        We deliver food and more within 30 minutes on average
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#009de0]/20 flex items-center justify-center flex-shrink-0">
                      <Headphones className="w-6 h-6 text-[#009de0]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">
                        Real support from real people
                      </h4>
                      <p className="text-gray-400">
                        Our support team is here to help you 24/7
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=800&q=80"
                  alt="Wolt courier"
                  className="w-full rounded-3xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Wolt+ Promo */}
        <section className="py-16">
          <div className="container-wolt">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-[#009de0] to-[#00c2ff] rounded-3xl p-10 sm:p-16 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
              <div className="relative z-10 max-w-2xl">
                <div className="inline-block bg-white/20 backdrop-blur px-4 py-1.5 rounded-full text-white font-semibold text-sm mb-6">
                  Wolt+
                </div>
                <h3 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                  0 € delivery fees with Wolt+
                </h3>
                <p className="text-xl text-white/90 mb-8">
                  Get unlimited free delivery from your favorite restaurants and
                  stores. Try it free for 14 days.
                </p>
                <button className="bg-white text-[#009de0] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors flex items-center gap-2">
                  Try Wolt+ free
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Wolt Market */}
        <section className="py-16">
          <div className="container-wolt">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] rounded-3xl overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-10 sm:p-16 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 bg-[#00c2a8]/20 text-[#00c2a8] px-4 py-1.5 rounded-full font-semibold text-sm mb-6 w-fit">
                    <ShoppingBag className="w-4 h-4" />
                    Wolt Market
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-4">
                    Fresh groceries, delivered
                  </h3>
                  <p className="text-lg text-gray-400 mb-8">
                    Get your everyday essentials delivered to your door in as
                    little as 30 minutes.
                  </p>
                  <button className="bg-[#00c2a8] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#00a892] transition-colors flex items-center gap-2 w-fit">
                    Shop now
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
                <div className="relative h-80 lg:h-auto">
                  <img
                    src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80"
                    alt="Groceries"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Wolt for Work */}
        <section className="py-16">
          <div className="container-wolt">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] rounded-3xl overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-80 lg:h-auto order-2 lg:order-1">
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                    alt="Office"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-10 sm:p-16 flex flex-col justify-center order-1 lg:order-2">
                  <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-400 px-4 py-1.5 rounded-full font-semibold text-sm mb-6 w-fit">
                    <Building2 className="w-4 h-4" />
                    Wolt for Work
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-4">
                    Delivering happiness to your workplace
                  </h3>
                  <p className="text-lg text-gray-400 mb-8">
                    Easy meal benefits and expensing for your employees. Keep
                    your team happy and productive.
                  </p>
                  <button className="bg-purple-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-600 transition-colors flex items-center gap-2 w-fit">
                    Get started
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Award winning app */}
        <section className="py-20">
          <div className="container-wolt">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Award-winning mobile app
              </h2>
              <p className="text-xl text-gray-400 mb-12">
                Get the best Wolt experience by downloading our mobile app
              </p>
              <div className="flex flex-wrap justify-center gap-8 mb-12">
                <div className="bg-[#1a1a1a] rounded-2xl p-6 min-w-[180px]">
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-2xl font-bold text-white mb-1">4.8</p>
                  <p className="text-gray-500 text-sm">App Store</p>
                </div>
                <div className="bg-[#1a1a1a] rounded-2xl p-6 min-w-[180px]">
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-2xl font-bold text-white mb-1">4.7</p>
                  <p className="text-gray-500 text-sm">Google Play</p>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-white text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors flex items-center gap-3">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  App Store
                </button>
                <button className="bg-white text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors flex items-center gap-3">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  Google Play
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* For restaurants and couriers */}
        <section className="py-16">
          <div className="container-wolt">
            <div className="grid md:grid-cols-2 gap-6">
              {/* For restaurants */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#1a1a1a] rounded-3xl p-10 group cursor-pointer hover:bg-[#222] transition-colors"
              >
                <div className="w-14 h-14 rounded-full bg-orange-500/20 flex items-center justify-center mb-6">
                  <ShoppingBag className="w-7 h-7 text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  For restaurants and stores
                </h3>
                <p className="text-gray-400 mb-6">
                  Partner with us and reach more customers than ever
                </p>
                <div className="flex items-center gap-2 text-[#009de0] font-semibold">
                  <span>Become a partner</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>

              {/* For couriers */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-[#1a1a1a] rounded-3xl p-10 group cursor-pointer hover:bg-[#222] transition-colors"
              >
                <div className="w-14 h-14 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                  <Bike className="w-7 h-7 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  For couriers
                </h3>
                <p className="text-gray-400 mb-6">
                  Deliver with Wolt and earn on your own schedule
                </p>
                <div className="flex items-center gap-2 text-[#009de0] font-semibold">
                  <span>Start delivering</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Explore cities */}
        <section className="py-20 pb-32">
          <div className="container-wolt">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold text-white mb-12">
                Explore Wolt cities
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Helsinki",
                  "Espoo",
                  "Tampere",
                  "Turku",
                  "Oulu",
                  "Jyväskylä",
                  "Lahti",
                  "Kuopio",
                  "Vantaa",
                  "Rovaniemi",
                  "Joensuu",
                  "Vaasa",
                ].map((city) => (
                  <button
                    key={city}
                    className="bg-[#1a1a1a] hover:bg-[#222] text-white px-6 py-3 rounded-full font-medium transition-colors"
                  >
                    {city}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
