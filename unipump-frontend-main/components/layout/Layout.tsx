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
    <div className="min-h-screen bg-slate-950">
      {/* Desktop Sidebars - Hidden on mobile */}
      <div className="hidden md:block">
        <LeftSidebar />
        <RightSidebar />
      </div>
      
      {/* Main Content */}
      <main className={cn(
        "pt-4",
        "px-4 md:px-0", // Add padding on mobile
        "pb-24 md:pb-20", // More bottom padding on mobile for nav
        "md:ml-64 md:mr-80", // Sidebar margins on desktop only
      )}>
        <div className="max-w-3xl mx-auto">
          {children}
        </div>
      </main>

      {/* Mobile Navigation */}
      <MobileNav />
    </div>
  );
};
