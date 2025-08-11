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
    <div className="h-full flex flex-col">
      {/* Logo */}
      <Link href="/" className="px-3 py-6 flex items-center gap-2">
        <span className="text-2xl">🦄</span>
        <h1 className="text-xl font-bold text-white">UniPump</h1>
      </Link>

      {/* Main Navigation */}
      <nav className="flex-1 mt-2">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-4 px-3 py-3 hover:bg-slate-800/50 rounded-lg transition-colors group ${
                    isActive
                      ? "font-bold"
                      : "text-slate-300"
                  }`}
                >
                  <item.icon size={24} className={isActive ? "text-white" : "text-slate-300 group-hover:text-white"} />
                  <span className="group-hover:text-white">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Create Token Button */}
      <div className="px-3 py-4">
        <Link
          href="/create"
          className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
        >
          <PlusCircle size={20} />
          <span className="font-medium">Create Token</span>
        </Link>
      </div>
    </div>
  );
};
