"use client";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { User, LogOut } from "lucide-react";
import { useUserStore } from "@/store/useUserStore";

const Navbar = () => {
  const pathname = usePathname();
  const user = useUserStore((state) => state.user);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getPageTitle = (pathname: string) => {
    switch (pathname) {
      case "/dashboard":
        return "Overview";
      case "/dashboard/designs":
        return "Designs";
      case "/dashboard/new-design":
        return "Create New Design";
      case "/dashboard/profile":
        return "Profile";
      default:
        return "Dashboard";
    }
  };

  return (
    <div className="h-16 border-b border-gray-300 px-6 flex items-center justify-between bg-primary-50">
      <h1 className="text-xl font-semibold text-primary-800">
        {getPageTitle(pathname)}
      </h1>

      {user && (
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-3 hover:bg-primary-100 p-2 rounded-lg transition-colors"
          >
            <div className="flex flex-col items-end">
              <span className="text-sm font-medium text-primary-800">
                {user.name}
              </span>
              {/* <span className="text-xs text-primary-700">
                {user.accountStatus}
              </span> */}
            </div>
            {/* <Image
              src={user.imageUrl || ""}
              alt={user.name || "User"}
              width={24}
              height={24}
              className="rounded-full"
            /> */}
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-primary-100 py-1 z-50">
              <div className="px-4 py-2 border-b border-primary-100">
                <p className="text-sm font-medium text-primary-800">
                  {user.email}
                </p>
                {/* <p className="text-xs text-primary-700">
                  Member since {new Date(user.createdAt).toLocaleDateString()}
                </p> */}
              </div>
              <Link
                href="/dashboard/profile"
                className="flex items-center gap-2 px-4 py-2 text-sm text-primary-800 hover:bg-primary-50 transition-colors"
                onClick={() => setIsDropdownOpen(false)}
              >
                <User className="w-4 h-4" />
                View Profile
              </Link>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Sign out
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
