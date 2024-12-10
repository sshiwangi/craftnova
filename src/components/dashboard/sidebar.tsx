"use client";
import { LayoutDashboard, PenSquare, PlusCircle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const sidebarLinks = [
  {
    label: "Overview",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    label: "Designs",
    icon: PenSquare,
    href: "/dashboard/designs",
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="bg-primary-50 border-r border-primary-100 h-full w-60 flex flex-col">
      {/* Logo */}
      <div className="p-6">
        <Image
          src="/craft-nova.svg"
          alt="CraftNova"
          width={120}
          height={32}
          className="h-8 w-auto"
        />
      </div>

      {/* Main Menu */}
      <div className="px-3 py-2">
        <p className="px-3 text-xs font-medium text-primary-700 uppercase mb-4">
          Main Menu
        </p>

        <nav className="space-y-1">
          {sidebarLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-primary-800 text-primary-50"
                    : "text-primary-700 hover:text-primary-800 hover:bg-primary-100"
                }`}
              >
                <Icon className="w-5 h-5" />
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Create New Design Button */}
      <div className="mt-auto p-4">
        <Link
          href="/dashboard/new-design"
          className="flex items-center gap-2 w-full bg-primary-800 text-primary-50 px-4 py-2 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors"
        >
          <PlusCircle className="w-4 h-4" />
          Create New Design
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
