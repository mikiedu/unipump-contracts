"use client";
import { cn } from "@/lib/utils";
import { Home, Plus, Rocket, LineChart, Settings, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const sidebarLinks = [
  {
    label: "Home",
    icon: Home,
    href: "/",
    color: "text-slate-500"
  },
  {
    label: "Create",
    icon: Plus,
    href: "/create",
    color: "text-blue-500"
  },
  {
    label: "My Tokens",
    icon: Rocket,
    href: "/my-tokens",
    color: "text-purple-500"
  },
  {
    label: "Analytics",
    icon: LineChart,
    href: "/analytics",
    color: "text-green-500"
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
    color: "text-orange-500"
  }
];

export default function LeftSidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div 
      className={cn(
        "flex flex-col h-screen bg-slate-900 border-r border-slate-700 transition-all duration-300",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="p-3 hover:bg-slate-800 transition-colors self-end"
      >
        <Menu className="w-5 h-5 text-slate-400" />
      </button>

      {/* Navigation Items */}
      <nav className="flex-1 py-8">
        <ul className="space-y-2 px-3">
          {sidebarLinks.map((item) => {
            const isActive = pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
                    isActive 
                      ? "bg-slate-800/50 text-white" 
                      : "text-slate-400 hover:text-white hover:bg-slate-800/30"
                  )}
                >
                  <item.icon className={cn("w-5 h-5", item.color)} />
                  {!isCollapsed && (
                    <span className="text-sm font-medium">{item.label}</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Stats Section */}
      {!isCollapsed && (
        <div className="p-4 border-t border-slate-700">
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-medium text-slate-400">Total Tokens</h4>
              <p className="text-2xl font-bold text-white">123</p>
            </div>
            <div>
              <h4 className="text-xs font-medium text-slate-400">24h Volume</h4>
              <p className="text-2xl font-bold text-white">45.2 ETH</p>
            </div>
          </div>
        </div>
      )}

      {/* User Section */}
      <div className={cn(
        "p-4 border-t border-slate-700",
        isCollapsed ? "text-center" : ""
      )}>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm font-medium">
            U
          </div>
          {!isCollapsed && (
            <div className="flex-1">
              <p className="text-sm font-medium text-white">UniPump User</p>
              <p className="text-xs text-slate-400">0x1234...5678</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}