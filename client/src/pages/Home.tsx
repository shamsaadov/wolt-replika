import { useStores, useCreateStore } from "@/hooks/use-stores";
import { useCategories } from "@/hooks/use-categories";
import { Hero } from "@/components/Hero";
import { Header } from "@/components/Header";
import { StoreCard } from "@/components/StoreCard";
import { CategoryRail } from "@/components/CategoryRail";
import { Footer } from "@/components/Footer";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Loader2, Plus } from "lucide-react";
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

// ... existing DEMO data ...

export default function Home() {
  const { data: stores, isLoading } = useStores();
  const { data: categories } = useCategories();
  const createStoreMutation = useCreateStore();
  const [isOpen, setIsOpen] = useState(false);

  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const smoothBackgroundY = useSpring(backgroundY, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const root = document.documentElement;
    const unsubscribe = smoothBackgroundY.on("change", (v) => {
      root.style.setProperty("--scroll-y", `${v}px`);
    });
    return () => unsubscribe();
  }, [smoothBackgroundY]);

  // Form state ...
  const [formData, setFormData] = useState({
    name: "",
    imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    description: "",
    deliveryPrice: "$1.99",
    deliveryTime: "20-30 min",
    category: "Restaurants"
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

  const displayStores = (stores && stores.length > 0) ? stores : DEMO_STORES;
  const displayCategories = (categories && categories.length > 0) ? categories : DEMO_CATEGORIES;

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Header />
      <Hero />

      <main className="container-wolt -mt-10 sm:-mt-20 relative z-30 pb-20">
        
        <motion.div 
          className="bg-transparent space-y-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          
          <section className="bg-white rounded-[2.5rem] p-6 sm:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100/50">
             <CategoryRail title="Categories" categories={displayCategories} />
          </section>

          <section>
            <motion.div 
              className="flex items-center justify-between mb-10"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl font-black text-foreground tracking-tight">
                Restaurants near you
              </h2>
              
              <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                  <Button className="rounded-full bg-blue-50 text-primary hover:bg-blue-100 font-bold px-6 py-6 h-auto text-lg transition-all hover:scale-105 active:scale-95">
                    <Plus className="w-5 h-5 mr-2" />
                    Add Store
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] rounded-[2rem]">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-black">Add New Store</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-6 mt-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-bold uppercase tracking-wider text-gray-500">Store Name</Label>
                      <Input 
                        id="name" 
                        className="h-14 rounded-xl bg-gray-50 border-none focus-visible:ring-2 focus-visible:ring-primary/20"
                        value={formData.name} 
                        onChange={e => setFormData({...formData, name: e.target.value})}
                        required
                        placeholder="e.g. Burger King"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description" className="text-sm font-bold uppercase tracking-wider text-gray-500">Description</Label>
                      <Input 
                        id="description" 
                        className="h-14 rounded-xl bg-gray-50 border-none focus-visible:ring-2 focus-visible:ring-primary/20"
                        value={formData.description} 
                        onChange={e => setFormData({...formData, description: e.target.value})}
                        required
                        placeholder="e.g. Burgers • Fast Food"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="image" className="text-sm font-bold uppercase tracking-wider text-gray-500">Image URL</Label>
                      <Input 
                        id="image" 
                        className="h-14 rounded-xl bg-gray-50 border-none focus-visible:ring-2 focus-visible:ring-primary/20"
                        value={formData.imageUrl} 
                        onChange={e => setFormData({...formData, imageUrl: e.target.value})}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full h-14 rounded-xl text-lg font-black shadow-lg shadow-primary/20" disabled={createStoreMutation.isPending}>
                      {createStoreMutation.isPending ? "Creating..." : "Create Store"}
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
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
              {displayStores.map((store, index) => (
                <StoreCard key={store.id} store={store} index={index} />
              ))}
            </motion.div>
          </section>

          <section className="bg-gradient-to-br from-blue-50 to-white rounded-[3rem] p-8 sm:p-16 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-blue-100/50">
             <div className="relative z-10 flex-1 space-y-8 text-center md:text-left">
                <motion.h3 
                  className="text-4xl sm:text-5xl font-black text-primary leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  Join our team!
                </motion.h3>
                <motion.p 
                  className="text-gray-600 font-medium text-xl max-w-md mx-auto md:mx-0 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  Become a courier partner and earn money on your own schedule. Flexible hours, great pay.
                </motion.p>
                <motion.button 
                  className="bg-primary text-white px-10 py-4 rounded-2xl font-black text-xl hover:bg-blue-600 transition-all shadow-xl shadow-primary/25 hover:scale-105 active:scale-95"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  Apply now
                </motion.button>
             </div>
             <motion.img 
               src="https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?q=80&w=2015&auto=format&fit=crop" 
               alt="Courier"
               className="w-full md:w-1/2 rounded-[2rem] shadow-2xl transition-all duration-700"
               initial={{ rotate: 5, scale: 0.9, opacity: 0 }}
               whileInView={{ rotate: 2, scale: 1, opacity: 1 }}
               viewport={{ once: true }}
               whileHover={{ rotate: 0, scale: 1.02 }}
             />
          </section>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
}
