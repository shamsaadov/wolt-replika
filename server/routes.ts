import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.get(api.stores.list.path, async (req, res) => {
    const stores = await storage.getStores();
    res.json(stores);
  });

  app.post(api.stores.create.path, async (req, res) => {
    const input = api.stores.create.input.parse(req.body);
    const store = await storage.createStore(input);
    res.status(201).json(store);
  });

  app.get(api.categories.list.path, async (req, res) => {
    const categories = await storage.getCategories();
    res.json(categories);
  });

  // Seed data function
  const seedData = async () => {
    const existingStores = await storage.getStores();
    if (existingStores.length === 0) {
      const stores = [
        { 
          name: "McDonald's", 
          imageUrl: "https://imageproxy.wolt.com/mes-image/8695de58-c638-437d-a314-ad0ee5bc530f/2fa31f49-7a63-455e-999d-6b470d22903a", 
          description: "Burgers • $$", 
          deliveryPrice: "0 kr", 
          deliveryTime: "20-30 min", 
          category: "Burgers" 
        },
        { 
          name: "Burger King", 
          imageUrl: "https://imageproxy.wolt.com/mes-image/9166ea96-c224-4056-b8f2-89e0c64068ee/0e9ee05b-3b48-4f8b-ab58-69e8101cbc67", 
          description: "Burgers • $$", 
          deliveryPrice: "0 kr", 
          deliveryTime: "25-35 min", 
          category: "Burgers" 
        },
        { 
          name: "Subway", 
          imageUrl: "https://imageproxy.wolt.com/mes-image/80db8281-e28e-4f45-bbe3-1cf926768127/189b17a2-a508-4b6e-a2be-eb109c0849a6", 
          description: "Sandwiches • $$", 
          deliveryPrice: "0 kr", 
          deliveryTime: "15-25 min", 
          category: "Sandwiches" 
        },
        { 
          name: "Kotipizza", 
          imageUrl: "https://imageproxy.wolt.com/mes-image/8f0515c8-03d1-4772-92d9-b4ec538a67d8/d0df719f-6d67-4a8e-84f9-5d357aa07cfc", 
          description: "Pizza • $$", 
          deliveryPrice: "0 kr", 
          deliveryTime: "25-35 min", 
          category: "Pizza" 
        },
        { 
          name: "Hesburger", 
          imageUrl: "https://imageproxy.wolt.com/mes-image/b17fee68-3597-4b1a-9856-5fe81b5fd4cc/af68d56e-9ab3-4729-96a8-2f2237a91565", 
          description: "Burgers • $$", 
          deliveryPrice: "0 kr", 
          deliveryTime: "20-30 min", 
          category: "Burgers" 
        },
        { 
          name: "Wolt Market", 
          imageUrl: "https://imageproxy.wolt.com/mes-image/0d10fde6-bf22-4876-baf3-849f41d368e0/86d2c8d3-9999-4961-b3c6-0a7f561875e2", 
          description: "Grocery • $$", 
          deliveryPrice: "0 kr", 
          deliveryTime: "20-40 min", 
          category: "Grocery" 
        }
      ];

      for (const store of stores) {
        await storage.createStore(store);
      }
    }
  };
  
  // Run seed
  seedData();

  return httpServer;
}
