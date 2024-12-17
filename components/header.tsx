"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, CuboidIcon as Cube } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import WalletButton from "./multi-button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Cube className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                dapp.city
              </span>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-8">
                <Link
                  href="/"
                  className="text-foreground/90 hover:text-foreground transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/basic"
                  className="text-foreground/90 hover:text-foreground transition-colors"
                >
                  Basic
                </Link>
                
              </nav>
              <ModeToggle />
              <WalletButton />
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4">
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="text-foreground/90 hover:text-foreground transition-colors px-2"
                >
                  Home
                </Link>
                <Link
                  href="/basic"
                  className="text-foreground/90 hover:text-foreground transition-colors px-2"
                >
                  Basic
                </Link>
                
                <WalletButton />
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}