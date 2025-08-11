"use client";
import { LeftSidebar } from "@/components/layout/LeftSidebar";
import { MobileNav } from "@/components/layout/MobileNav";
import { RightSidebar } from "@/components/layout/RightSidebar";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-black flex">
      {/* Desktop Sidebar - Hidden on mobile */}
      <div className="hidden md:block fixed left-0 top-0 h-screen border-r border-slate-800" style={{ width: '244px' }}>
        <LeftSidebar />
      </div>
      
      {/* Main Content */}
      <main className={cn(
        "flex-1",
        "md:pl-[244px]", // Space for sidebar
        "pb-16 md:pb-0", // Space for mobile nav
        "w-full max-w-[630px] mx-auto", // Instagram-like content width
        "bg-black"
      )}>
        <div className="px-0 md:px-4 pt-4">
          {children}
        </div>
      </main>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <MobileNav />
      </div>
    </div>
  );
};
