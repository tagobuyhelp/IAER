"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import * as LucideIcons from "lucide-react";
import { Menu, X, ChevronDown, ChevronRight, Search } from "lucide-react";
import { navigationData } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const Icon = ({ name, className }) => {
  const IconComponent = LucideIcons[name];
  return IconComponent ? <IconComponent className={className} /> : null;
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const timeoutRef = useRef(null);
  const pathname = usePathname();

  if (pathname?.startsWith("/lp") || pathname === "/best-bba-college-in-kolkata" || pathname === "/best-bca-college-in-kolkata") return null;

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleDropdownEnter = (title) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(title);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 100);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#143674] transition-all duration-300">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center shrink-0 mr-auto lg:mr-0">
            <img src="/images/logos/iaer-new-logo-dark-bg-supported.png" alt="IAER Logo" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 mx-4 h-full">
            {navigationData.map((item) => (
              <div
                key={item.title}
                className="relative h-full flex items-center"
                onMouseEnter={() => handleDropdownEnter(item.title)}
                onMouseLeave={handleDropdownLeave}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center px-2 py-2 text-sm font-bold tracking-wide rounded-full transition-all duration-200",
                    openDropdown === item.title
                      ? "text-accent bg-white/10"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  )}
                >
                  {item.icon && <Icon name={item.icon} className="w-4 h-4 mr-2 opacity-70" />}
                  {item.title}
                  {item.items && <ChevronDown className={cn("ml-1 h-3.5 w-3.5 transition-transform duration-200", openDropdown === item.title ? "rotate-180" : "")} />}
                </Link>
              </div>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 lg:gap-4">


            {/* Apply Now Button - Visible on Desktop */}
            <Link
              href="https://admission.iaer.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white uppercase tracking-wider transition-all duration-200 bg-accent hover:bg-accent/90 rounded-full shadow-[0_0_20px_-5px_rgba(247,148,30,0.45)] hover:shadow-[0_0_25px_-5px_rgba(247,148,30,0.55)] hover:-translate-y-0.5"
            >
              Apply Now
            </Link>

            {/* Mobile Menu Toggle - Right Side */}
            <div className="lg:hidden">
              <button
                className="p-2 text-white hover:bg-white/10 rounded-md transition-colors"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mega Menu Container */}
        <div
          className={cn(
            "absolute top-full left-0 w-full bg-[#143674]/95 backdrop-blur-xl border-t border-white/5 border-b border-white/10 shadow-2xl transition-all duration-300 ease-in-out overflow-hidden text-white",
            openDropdown ? "max-h-[80vh] opacity-100 visible" : "max-h-0 opacity-0 invisible"
          )}
          onMouseEnter={() => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
          }}
          onMouseLeave={handleDropdownLeave}
        >
          {navigationData.map((item) => (
            item.title === openDropdown && item.items && (
              <div key={item.title} className="container mx-auto px-4 py-8 ">
                <div className="grid grid-cols-12 gap-8">
                  {/* Sidebar / Info */}
                  <div className="col-span-3 border-r border-white/10 pr-8">
                    <div className="flex items-center gap-3 mb-4 text-accent">
                      <div className="p-2 bg-accent/10 rounded-lg">
                        <Icon name={item.icon} className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    </div>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {item.description}
                    </p>
                    <Link
                      href={item.href}
                      className="inline-flex items-center text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
                    >
                      Visit {item.title} Page <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>

                    <img src={item.image} alt={item.title} className="w-full h-48 rounded-md mt-8" />
                  </div>

                  {/* Content Grid */}
                  <div className="col-span-9 pl-4">
                    {/* Check if we have sub-categories (nested items) */}
                    {item.items.some(sub => sub.subItems) ? (
                      <div className="grid grid-cols-3 gap-8">
                        {item.items.map((subItem) => (
                          <div key={subItem.title} className="space-y-4">
                            <Link href={subItem.href} className="flex items-center gap-2 font-bold text-white hover:text-accent transition-colors">
                              {subItem.icon && <Icon name={subItem.icon} className="w-5 h-5 text-accent" />}
                              {subItem.title}
                            </Link>
                            {subItem.subItems && (
                              <ul className="space-y-2">
                                {subItem.subItems.map((deepItem) => (
                                  <li key={deepItem.title}>
                                    <Link
                                      href={deepItem.href}
                                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 p-1.5 rounded-md transition-all"
                                    >
                                      {deepItem.icon && <Icon name={deepItem.icon} className="w-4 h-4 text-gray-500" />}
                                      {deepItem.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      /* Flat List */
                      <div className="grid grid-cols-3 gap-6">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            className="group flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
                          >
                            <div className="mt-1 p-1.5 bg-white/10 rounded-md group-hover:bg-accent group-hover:text-white transition-all text-accent">
                              <Icon name={subItem.icon} className="w-5 h-5" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-200 group-hover:text-white transition-colors">
                                {subItem.title}
                              </h4>
                              {subItem.description && (
                                <p className="text-xs text-gray-500 mt-1 line-clamp-2 group-hover:text-gray-400">
                                  {subItem.description}
                                </p>
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      </header>

      {/* Mobile Navigation Drawer - Outside Header to avoid z-index/clipping issues */}
      <div
        className={cn(
          "fixed inset-0 bg-black/80 z-[60] backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={cn(
          "fixed inset-y-0 left-0 z-[70] w-[85%] max-w-[300px] bg-[#0a0601] border-r border-white/10 shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-3 border-b border-white/10">
          <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center">
            <img src="/images/logos/iaer-new-logo-dark-bg-supported.png" alt="IAER Logo" className="h-10 w-auto" />
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-white hover:bg-white/10 rounded-md transition-colors"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-3 space-y-4">
          {navigationData.map((item) => (
            <div key={item.title} className="border-b border-white/10 pb-3 last:border-0">
              <div className="flex items-center gap-2 mb-2">
                {item.icon && <Icon name={item.icon} className="w-5 h-5 text-accent" />}
                <Link
                  href={item.href}
                  className="font-bold text-base text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              </div>

              {item.items && (
                <div className="pl-3 space-y-3">
                  {item.items.map((subItem) => (
                    <div key={subItem.title}>
                      <Link
                        href={subItem.href}
                        className="flex items-center gap-2 font-medium text-sm text-gray-300 py-1"
                        onClick={() => !subItem.subItems && setIsOpen(false)}
                      >
                        {subItem.icon && <Icon name={subItem.icon} className="w-4 h-4 text-gray-500" />}
                        {subItem.title}
                      </Link>
                      {subItem.subItems && (
                        <div className="pl-6 mt-2 grid grid-cols-1 gap-2">
                          {subItem.subItems.map((deepItem) => (
                            <Link
                              key={deepItem.title}
                              href={deepItem.href}
                              className="flex items-center gap-2 text-xs text-gray-500 py-1"
                              onClick={() => setIsOpen(false)}
                            >
                              {deepItem.icon && <Icon name={deepItem.icon} className="w-3 h-3 text-gray-600" />}
                              {deepItem.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="p-3 border-t border-white/10">
          <Link
            href="https://admission.iaer.ac.in/"
            target="_blank"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center w-full px-5 py-2.5 text-xs font-bold text-white uppercase tracking-wider transition-all duration-200 bg-accent hover:bg-accent/90 rounded-lg shadow-lg"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </>
  );
}
