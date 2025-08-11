"use client";
import { Home, PlusCircle, Rocket, Search, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const MobileNav = () => {
  const pathname = usePathname();
  
  const navItems = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/search", icon: Search, label: "Search" },
    { href: "/create", icon: PlusCircle, label: "Create" },
    { href: "/tokens", icon: Rocket, label: "Explore" },
    { href: "/profile", icon: User, label: "Profile" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-800 md:hidden z-50">
      <nav className="flex items-center justify-around px-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center py-2 px-3 ${
                isActive ? "text-blue-500" : "text-slate-400"
              }`}
            >
              <item.icon size={24} />
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};
