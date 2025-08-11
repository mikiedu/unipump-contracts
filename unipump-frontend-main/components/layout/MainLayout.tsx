"use client";

import { ReactNode } from "react";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <LeftSidebar />
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
      <RightSidebar />
    </div>
  );
}
