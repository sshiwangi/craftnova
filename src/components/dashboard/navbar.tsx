"use client"
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import Image from "next/image";

const getPageTitle = (pathname: string) => {
  switch (pathname) {
    case "/dashboard":
      return "Overview";
    case "/dashboard/designs":
      return "Designs";
    case "/dashboard/new-design":
      return "Create New Design";
    default:
      return "Dashboard";
  }
};

const Navbar = () => {
  const pathname = usePathname();
  const { data: session } = useSession();

  return (
    <div className="h-16 border-b border-primary-100 px-6 flex items-center justify-between bg-primary-50">
      <h1 className="text-xl font-semibold text-primary-800">
        {getPageTitle(pathname)}
      </h1>

      {session?.user?.image && (
        <div className="flex items-center gap-3">
          <span className="text-sm text-primary-700">{session.user.name}</span>
          <Image
            src={session.user.image}
            alt={session.user.name || "User"}
            width={32}
            height={32}
            className="rounded-full"
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;
