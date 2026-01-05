import { useStores, useCreateStore } from "@/hooks/use-stores";
import { useCategories } from "@/hooks/use-categories";
import { Hero } from "@/components/Hero";
import { Header } from "@/components/Header";
import { StoreCard } from "@/components/StoreCard";
import { CategoryRail } from "@/components/CategoryRail";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Loader2, Plus } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

// Dummy data for initial hydration visualization if API is empty
const DEMO_STORES = [
  { id: 991, name: "McDonald's", imageUrl: "https://images.unsplash.com/photo-1552590635-27c2c2128abf?auto=format&fit=crop&w=800&q=80", description: "Burgers • American • Fast Food", deliveryPrice: "$1.99", deliveryTime: "15-25 min", category: "Restaurants" },
  { id: 992, name: "Sushi Zen", imageUrl: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80", description: "Sushi • Japanese • Asian", deliveryPrice: "$3.49", deliveryTime: "30-45 min", category: "Restaurants" },
  { id: 993, name: "Pizza Hut", imageUrl: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=800&q=80", description: "Pizza • Italian • Wings", deliveryPrice: "$2.49", deliveryTime: "25-35 min", category: "Restaurants" },
  { id: 994, name: "Starbucks", imageUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80", description: "Coffee • Breakfast • Bakery", deliveryPrice: "$0.99", deliveryTime: "10-20 min", category: "Groceries" },
  { id: 995, name: "Wolt Market", imageUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80", description: "Groceries • Fresh • Essentials", deliveryPrice: "Free", deliveryTime: "20-30 min", category: "Stores" },
  { id: 996, name: "Subway", imageUrl: "https://images.unsplash.com/photo-1513639776629-9269d0d661e2?auto=format&fit=crop&w=800&q=80", description: "Sandwiches • Healthy • Salads", deliveryPrice: "$1.49", deliveryTime: "15-25 min", category: "Restaurants" },
];

const DEMO_CATEGORIES = [
  { id: 1, name: "Burgers", imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80" },
  { id: 2, name: "Sushi", imageUrl: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=400&q=80" },
  { id: 3, name: "Pizza", imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80" },
  { id: 4, name: "Asian", imageUrl: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=400&q=80" },
  { id: 5, name: "Vegan", imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80" },
  { id: 6, name: "Dessert", imageUrl: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=400&q=80" },
];

export default function Home() {
  const { data: stores, isLoading } = useStores();
  const { data: categories } = useCategories();
  const createStoreMutation = useCreateStore();
  const [isOpen, setIsOpen] = useState(false);

  // Form state
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

  // Use demo data if DB is empty to make the UI look good immediately
  const displayStores = (stores && stores.length > 0) ? stores : DEMO_STORES;
  const displayCategories = (categories && categories.length > 0) ? categories : DEMO_CATEGORIES;

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <Hero />

      <main className="container-wolt -mt-10 sm:-mt-20 relative z-30 pb-20">
        
        {/* Discovery Sections */}
        <div className="bg-transparent space-y-16">
          
          {/* Categories */}
          <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100/50">
             <CategoryRail title="Categories" categories={displayCategories} />
          </section>

          {/* Restaurants Grid */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                Restaurants near you
              </h2>
              
              <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                  <Button className="rounded-full bg-blue-100 text-primary hover:bg-blue-200 font-bold">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Store
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Add New Store</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Store Name</Label>
                      <Input 
                        id="name" 
                        value={formData.name} 
                        onChange={e => setFormData({...formData, name: e.target.value})}
                        required
                        placeholder="e.g. Burger King"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Input 
                        id="description" 
                        value={formData.description} 
                        onChange={e => setFormData({...formData, description: e.target.value})}
                        required
                        placeholder="e.g. Burgers • Fast Food"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="image">Image URL</Label>
                      <Input 
                        id="image" 
                        value={formData.imageUrl} 
                        onChange={e => setFormData({...formData, imageUrl: e.target.value})}
                        required
                      />
                    </div>
                    <div className="flex justify-end pt-4">
                      <Button type="submit" disabled={createStoreMutation.isPending}>
                        {createStoreMutation.isPending ? "Creating..." : "Create Store"}
                      </Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
              {displayStores.map((store, index) => (
                <StoreCard key={store.id} store={store} index={index} />
              ))}
            </div>
          </section>

          {/* Promo Section */}
          <section className="bg-blue-50 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
             <div className="relative z-10 flex-1 space-y-6 text-center md:text-left">
                <h3 className="text-3xl sm:text-4xl font-black text-primary">Join our team!</h3>
                <p className="text-gray-600 font-medium text-lg max-w-md mx-auto md:mx-0">
                  Become a courier partner and earn money on your own schedule. Flexible hours, great pay.
                </p>
                <button className="bg-primary text-white px-8 py-3 rounded-xl font-bold text-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-200">
                  Apply now
                </button>
             </div>
             {/* courier delivery man */}
             <img 
               src="https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?q=80&w=2015&auto=format&fit=crop" 
               alt="Courier"
               className="w-full md:w-1/2 rounded-2xl shadow-xl rotate-2 hover:rotate-0 transition-transform duration-500"
             />
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
