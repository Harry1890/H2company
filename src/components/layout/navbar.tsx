"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNav } from "@/data/navigation";
import { Container } from "@/components/ui/container";
import { PrimaryButton } from "@/components/ui/primary-button";
import { Logo } from "./logo";
import { MobileNav } from "./mobile-nav";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 h-19 transition-colors duration-300",
        scrolled ? "border-b border-border bg-bg/80 backdrop-blur-md" : "border-b border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-full items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {primaryNav.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "group relative py-1 text-small font-medium text-text-muted transition-colors hover:text-text",
                  active && "text-text",
                )}
              >
                {link.label}
                <span
                  aria-hidden
                  className={cn(
                    "absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-text transition-transform duration-300 group-hover:scale-x-100",
                    active && "scale-x-100 bg-accent",
                  )}
                />
              </Link>
            );
          })}
        </nav>
        <div className="hidden lg:block">
          <PrimaryButton href="/contact" className="h-11 px-5">
            Talk to us
          </PrimaryButton>
        </div>
        <MobileNav />
      </Container>
    </header>
  );
}
