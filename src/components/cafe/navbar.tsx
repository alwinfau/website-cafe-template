"use client";

import {
  Cancel01Icon,
  Menu01Icon,
  Moon01Icon,
  ShoppingCart01Icon,
  Sun01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Products", href: "#menu" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center text-[1.1rem] font-black tracking-tight text-foreground"
        >
          Bold Brew
          <span className="text-cafe text-2xl leading-none ml-0.5 mt-[-2px]">
            •
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-0.5 text-[0.82rem] font-medium text-muted-foreground">
          {navLinks.map((link, i) => (
            <span key={link.href} className="flex items-center">
              {i > 0 && (
                <span className="px-1.5 text-border select-none">/</span>
              )}
              <a
                href={link.href}
                className="px-2.5 py-1.5 rounded-md hover:text-foreground hover:bg-accent transition-colors duration-150"
              >
                {link.label}
              </a>
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="hidden md:flex rounded-full border-border px-4 text-[0.8rem] font-medium h-8"
          >
            Sign In
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="rounded-full size-9"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            <HugeiconsIcon
              icon={resolvedTheme === "dark" ? Sun01Icon : Moon01Icon}
              size={16}
              strokeWidth={2}
            />
          </Button>
          <Button
            size="icon"
            className="bg-black text-white hover:bg-zinc-800 rounded-full size-9"
          >
            <HugeiconsIcon
              icon={ShoppingCart01Icon}
              size={16}
              strokeWidth={2}
            />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            <HugeiconsIcon
              icon={open ? Cancel01Icon : Menu01Icon}
              size={20}
              strokeWidth={1.8}
            />
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300",
          open ? "max-h-64 border-t border-border" : "max-h-0",
        )}
      >
        <div className="bg-background px-6 py-5 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors border-b border-border last:border-0"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button
            variant="outline"
            size="sm"
            className="mt-3 w-full rounded-full"
          >
            Sign In
          </Button>
        </div>
      </div>
    </header>
  );
}
