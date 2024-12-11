import Navbar from "@/components/dashboard/navbar";
import Sidebar from "@/components/dashboard/sidebar";
import { ReactNode } from "react";


export default function DashboardLayout({ children }: { children: ReactNode }) {
    
  return (
    <div className="h-screen flex bg-primary-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
