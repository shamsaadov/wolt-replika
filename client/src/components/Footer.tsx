import { Link } from "wouter";

export function Footer() {
  const links = {
    "Let's do this together": ["For couriers", "For restaurants", "For stores", "For companies", "Wolt Drive", "Wolt at Work"],
    "Company": ["About us", "Jobs", "Sustainability", "Security", "Investors"],
    "Useful links": ["Support", "Media", "Contact", "Promo codes", "Developers"],
    "Follow us": ["Blog", "Engineering Blog", "Instagram", "Facebook", "Twitter", "LinkedIn"]
  };

  return (
    <footer className="bg-gray-50 pt-24 pb-12 border-t border-gray-100 mt-20">
      <div className="container-wolt">
        <div className="flex flex-col md:flex-row justify-between mb-16 gap-12">
          <div className="mb-8 md:mb-0">
             <h2 className="text-5xl font-black tracking-tighter text-foreground mb-6">Wolt</h2>
             <div className="flex gap-4">
                 <img src="https://images.ctfassets.net/23u853certza/7d519d1205315d023247f55180479708/5b21d556c5184517904010.svg" alt="App Store" className="h-10 cursor-pointer hover:opacity-80 transition-opacity" />
                 <img src="https://images.ctfassets.net/23u853certza/5e41261d719543881477759613145892/5b21d556c5184517904011.svg" alt="Google Play" className="h-10 cursor-pointer hover:opacity-80 transition-opacity" />
             </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-10">
            {Object.entries(links).map(([category, items]) => (
              <div key={category}>
                <h3 className="font-extrabold text-lg mb-4 text-foreground">{category}</h3>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item}>
                      <Link href="#" className="text-gray-600 hover:text-primary transition-colors font-medium text-sm">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200 text-sm font-medium text-gray-500">
          <div className="flex gap-6 mb-4 md:mb-0">
            <span>© Wolt 2024</span>
            <Link href="#" className="hover:text-primary">Accessibility</Link>
            <Link href="#" className="hover:text-primary">User Terms of Service</Link>
            <Link href="#" className="hover:text-primary">Privacy Statement</Link>
          </div>
          <div className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-green-500"></div>
             <span>Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
