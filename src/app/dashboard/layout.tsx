"use client";
import Navbar from "@/components/dashboard/navbar";
import { PromptModal } from "@/components/dashboard/prompt-modal";
import Sidebar from "@/components/dashboard/sidebar";
import { ReactNode, useState } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [isPromptModalOpen, setIsPromptModalOpen] = useState(false);

  return (
    <div className="h-screen flex bg-primary-50">
      <Sidebar setIsPromptModalOpen={setIsPromptModalOpen} />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 p-6 overflow-auto">
          {children}
          <PromptModal
            isOpen={isPromptModalOpen}
            onClose={() => setIsPromptModalOpen(false)}
          />
        </main>
      </div>
    </div>
  );
}
