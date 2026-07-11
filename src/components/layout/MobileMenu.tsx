"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";

type MobileMenuProps = {
  navLinks: readonly { label: string; href: string }[];
};

export default function MobileMenu({ navLinks }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [previousPathname, setPreviousPathname] = useState(pathname);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const wasOpen = useRef(false);

  // Close the menu whenever the route changes. Adjusting state during
  // render (rather than in an effect) avoids an extra cascading render.
  if (previousPathname !== pathname) {
    setPreviousPathname(pathname);
    if (open) {
      setOpen(false);
    }
  }

  useEffect(() => {
    if (open) {
      firstLinkRef.current?.focus();
    } else if (wasOpen.current) {
      toggleButtonRef.current?.focus();
    }
    wasOpen.current = open;
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        ref={toggleButtonRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setOpen((value) => !value)}
        className="relative flex h-10 w-10 items-center justify-center rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <span
          className={`absolute h-px w-6 bg-foreground transition-transform ${
            open ? "translate-y-0 rotate-45" : "-translate-y-1.5"
          }`}
        />
        <span className={`absolute h-px w-6 bg-foreground transition-opacity ${open ? "opacity-0" : "opacity-100"}`} />
        <span
          className={`absolute h-px w-6 bg-foreground transition-transform ${
            open ? "translate-y-0 -rotate-45" : "translate-y-1.5"
          }`}
        />
      </button>

      {open && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full border-b border-border-subtle bg-background px-4 py-6 sm:px-6"
        >
          <nav aria-label="Mobile" className="flex flex-col gap-5 text-lg">
            {navLinks.map((link, index) => (
              <NavLink
                key={link.href}
                href={link.href}
                ref={index === 0 ? firstLinkRef : undefined}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
