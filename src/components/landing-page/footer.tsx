"use client";
import Link from "next/link";
import Image from "next/image";
import { Linkedin, Twitter } from "lucide-react";

interface FooterLink {
  title: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: "Product",
    links: [
      { title: "Templates", href: "/templates" },
      { title: "Features", href: "/features" },
      { title: "Premium", href: "/premium" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "About Us", href: "/about" },
      { title: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Quick links",
    links: [
      { title: "Themes", href: "/themes" },
      { title: "Tutorials", href: "/tutorials" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b mt-20 from-primary-50 to-primary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Logo Section */}
          <div className="md:col-span-3">
            <Link href="/" className="flex items-center">
              <Image
                src="/craft-nova.svg"
                alt="CraftNova Logo"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Navigation Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="md:col-span-2">
              <h3 className="text-primary-800 font-medium mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="text-primary-700 hover:text-primary-800 text-sm"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Section */}
          <div className="md:col-span-3 md:justify-self-end">
            <h3 className="text-primary-800 font-medium mb-4">Contact us</h3>
            <div className="flex space-x-4">
              <Link
                href="https://linkedin.com"
                className="text-primary-700 hover:text-primary-800"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://twitter.com"
                className="text-primary-700 hover:text-primary-800"
              >
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-100 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-700 text-sm">
              © Copyright 2024 CraftNova, Inc. All Rights Reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-primary-700 hover:text-primary-800 text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-primary-700 hover:text-primary-800 text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Large Background Text */}
        <div className="relative mt-16 flex justify-center overflow-hidden">
          <div className="relative">
            <h1
              className="text-[200px] font-bold absolute inset-0 text-transparent"
              style={{
                WebkitTextStroke: "1px #A59D8A",
              }}
            >
              CanvasNova
            </h1>
            <h1 className="text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-primary-50 to-primary-100 select-none">
              CanvasNova
            </h1>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
