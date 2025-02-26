"use client";

import { useState, useEffect } from "react";
import Button from "./Button";
import NavLinks from "./NavLinks";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest("nav")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="py-5 bg-background text-text">
      <nav className="flex items-center px-5 text-lg">
        <h1 className="text-3xl font-title font-bold">TWR</h1>

        <NavLinks className="hidden md:flex flex-grow justify-center" />

        <div className="hidden md:block">
          <Button>Start Reading</Button>
        </div>

        <button
          className="md:hidden ml-auto"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {isOpen && (
        <NavLinks
          className="md:hidden flex flex-col items-center mt-3 py-3 space-y-3 bg-background border-t"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
}
