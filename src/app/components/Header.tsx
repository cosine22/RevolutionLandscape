"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-[#FAFAF0] shadow-sm">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center pl-0">
          <Image
            src="/images/logo.png"
            alt="Revolution Landscape"
            width={200}
            height={50}
            className="h-12 w-auto"
            priority
          />
        </Link>
        <nav className="pr-4">
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/"
                className={`text-lg font-bold ${
                  pathname === "/"
                    ? "text-[#5da62d] underline underline-offset-4"
                    : "text-gray-600 hover:text-[#5da62d]"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className={`text-lg font-bold ${
                  pathname === "/services"
                    ? "text-[#5da62d] underline underline-offset-4"
                    : "text-gray-600 hover:text-[#5da62d]"
                }`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`text-lg font-bold ${
                  pathname === "/about"
                    ? "text-[#5da62d] underline underline-offset-4"
                    : "text-gray-600 hover:text-[#5da62d]"
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`text-lg font-bold ${
                  pathname === "/contact"
                    ? "text-[#5da62d] underline underline-offset-4"
                    : "text-gray-600 hover:text-[#5da62d]"
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
