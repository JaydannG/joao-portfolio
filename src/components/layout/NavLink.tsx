"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef } from "react";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(function NavLink(
  { href, children, onClick, className = "" },
  ref,
) {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      ref={ref}
      href={href}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      className={`transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
        isActive ? "text-foreground" : "text-foreground-muted"
      } ${className}`}
    >
      {children}
    </Link>
  );
});

export default NavLink;
