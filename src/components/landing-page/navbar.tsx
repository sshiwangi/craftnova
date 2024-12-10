"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface NavItem {
  text: string;
  href: string;
}

const NavItems: NavItem[] = [
  {
    text: "Features",
    href: "/features",
  },
  {
    text: "How it works",
    href: "/how-it-works",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex items-center w-full justify-center">
      <div className="w-[60%]">
        <div className="bg-primary-100 rounded-lg px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="/craft-nova.svg"
                  alt="Craft Nova Logo"
                  width={120}
                  height={32}
                  className="h-8 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-6">
              {NavItems.map((item) => (
                <Link
                  key={item.text}
                  href={item.href}
                  className="text-primary-700 hover:text-primary-800 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.text}
                </Link>
              ))}
            </div>
            <div className="hidden md:flex md:items-center md:space-x-6">
              {/* Auth Buttons */}
              <Link
                href="/signin"
                className="text-primary-800 hover:text-primary-700 px-3 py-2 text-sm font-medium transition-colors"
              >
                Sign in
              </Link>

              <Link
                href="/create"
                className="bg-primary-800 text-primary-50 hover:bg-opacity-90 px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Create a design
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-primary-700 hover:text-primary-800 hover:bg-primary-50 focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                {!isMenuOpen ? (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden mx-2">
          <div className="bg-primary-50 rounded-3xl mt-1 px-2 pt-2 pb-3 space-y-1">
            {NavItems.map((item) => (
              <Link
                key={item.text}
                href={item.href}
                className="text-primary-700 hover:text-primary-800 block px-3 py-2 text-base font-medium"
              >
                {item.text}
              </Link>
            ))}
            <Link
              href="/signin"
              className="text-primary-800 hover:text-primary-700 block px-3 py-2 text-base font-medium"
            >
              Sign in
            </Link>
            <Link
              href="/create"
              className="bg-primary-800 text-primary-50 hover:bg-opacity-90 block px-4 py-2 rounded-full text-base font-medium text-center mx-3"
            >
              Create a design
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
