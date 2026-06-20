"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@heroui/react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    {
      label: "Browse Jobs",
      href: "/jobs",
    },
    {
      label: "Companies",
      href: "/companies",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#16151D]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center px-6">
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold">
          <span className="text-sky-500">hire</span>
          <span className="text-orange-500">loop</span>
        </Link>

        {/* Right Side */}
        <div className="ml-auto hidden items-center gap-10 lg:flex">
          {/* Navigation */}
          <ul className="flex items-center gap-10">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Divider */}
          <div className="h-8 w-px bg-white/15"></div>

          {/* Auth */}
          <Link
            href="/login"
            className="font-medium text-violet-400 transition hover:text-violet-300"
          >
            Sign In
          </Link>

          <Button
            as={Link}
            href="/register"
            radius="lg"
            className="bg-linear-to-r from-violet-600 to-purple-500 px-7 text-white"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Button */}
        <button
          className="ml-auto lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <svg
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-white/10 bg-[#16151D] lg:hidden">
          <ul className="space-y-1 px-6 py-5">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-3 py-3 text-gray-300 hover:bg-white/5 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            <div className="my-3 border-t border-white/10"></div>

            <li>
              <Link
                href="/auth/signin"
                className="block rounded-lg px-3 py-3 text-violet-400"
              >
                Sign In
              </Link>
            </li>

            <li className="pt-2">
              <Button
                as={Link}
                href="/register"
                fullWidth
                className="bg-linear-to-r from-violet-600 to-purple-500 text-white"
              >
                Get Started
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
