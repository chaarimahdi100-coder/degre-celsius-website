"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { Menu, X, Sun, Moon, Globe } from "lucide-react";
import { useTheme } from "next-themes";

import { COMPANY_INFO, NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-lg bg-brand-orange text-white flex items-center justify-center font-bold text-xl transition-transform group-hover:scale-105">
            °C
          </div>
          <span className={`font-heading font-bold text-xl tracking-tight transition-colors ${isScrolled ? "text-foreground" : "text-white"}`}>
            {COMPANY_INFO.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-brand-orange ${
                pathname === link.href
                  ? "text-brand-orange"
                  : isScrolled
                  ? "text-foreground/80"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={isScrolled ? "text-foreground" : "text-white hover:bg-white/20"}
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Changer le thème</span>
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className={isScrolled ? "text-foreground" : "text-white hover:bg-white/20"}
          >
            <Globe className="h-5 w-5" />
            <span className="sr-only">Changer la langue</span>
          </Button>

          <Link 
            href="/quote" 
            className={cn(
              buttonVariants({ variant: "default" }),
              "bg-brand-orange hover:bg-brand-orange/90 text-white border-0 !rounded-lg h-9 px-4 inline-flex items-center justify-center text-sm font-medium"
            )}
          >
            Demander un Devis
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={isScrolled ? "text-foreground" : "text-white"}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>

          <Sheet>
            <SheetTrigger className={cn(buttonVariants({ variant: "ghost", size: "icon" }), isScrolled ? "text-foreground" : "text-white")}>
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] flex flex-col">
              <SheetTitle className="text-left font-bold text-xl">Menu</SheetTitle>
              <div className="flex flex-col gap-6 mt-8">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-lg font-medium transition-colors hover:text-brand-orange ${
                      pathname === link.href ? "text-brand-orange" : "text-foreground"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="mt-auto flex flex-col gap-4 pb-6">
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Globe className="h-4 w-4" />
                  Langue: Français
                </Button>
                <Link 
                  href="/quote" 
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "w-full bg-brand-orange hover:bg-brand-orange/90 text-white text-center py-2 rounded-lg"
                  )}
                >
                  Demander un Devis
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
