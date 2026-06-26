"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full h-20 bg-black text-white z-50">
        <div className="max-w-7xl mx-auto h-full px-6 lg:px-10 flex items-center justify-between">
          <Link href="/" className="text-4xl font-serif font-bold">
            Ecology
          </Link>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            {open ? <FiX size={35} /> : <FiMenu size={35} />}
          </button>
        </div>
      </header>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/60 z-40 transition-all duration-500 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 w-72 h-screen bg-[#111] text-white shadow-2xl z-50 transform transition-transform duration-500 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between h-20 px-6 border-b border-gray-800">
          <h2 className="text-3xl font-serif font-bold">
            Ecology
          </h2>

          <button
            onClick={() => setOpen(false)}
            aria-label="Close Menu"
            className="hover:text-gray-300 transition-colors"
          >
            <FiX size={28} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col mt-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="px-8 py-5 text-lg border-b border-gray-800 hover:bg-green-700 transition-all duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-8 left-8 text-sm text-gray-400">
          © 2026 Ecology
        </div>
      </aside>
    </>
  );
}