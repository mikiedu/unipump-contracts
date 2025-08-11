"use client";
import { Home, PlusCircle, Rocket, Users, Wallet } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const LeftSidebar = () => {
  const pathname = usePathname();
  
  const menuItems = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/create", icon: PlusCircle, label: "Create Token" },
    { href: "/tokens", icon: Rocket, label: "Explore" },
    { href: "/profile", icon: Users, label: "Profile" },
    { href: "/faucet", icon: Wallet, label: "Faucet" },
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-slate-900 border-r border-slate-800 p-4 hidden md:block">
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-2 px-4 py-6">
          <span className="text-3xl">🦄</span>
          <span className="text-xl font-bold text-white">UniPump</span>
        </div>
        
        <nav className="flex-1 mt-8">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? "bg-blue-500/10 text-blue-500"
                        : "text-slate-400 hover:bg-slate-800/50 hover:text-white"
                    }`}
                  >
                    <item.icon size={20} />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mt-auto px-4 py-6">
          <div className="p-4 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/10">
            <h4 className="text-sm font-medium text-white mb-2">Create Token</h4>
            <p className="text-xs text-slate-400 mb-3">
              Launch your own meme token in minutes!
            </p>
            <Link
              href="/create"
              className="block text-center text-sm px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
