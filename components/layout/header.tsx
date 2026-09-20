"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "@/components/layout/container";
import { Logo } from "@/components/layout/logo";
import { MobileNav } from "@/components/layout/mobile-nav";
import { mainNav, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils/cn";

const SCROLL_THRESHOLD = 30;

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter] duration-300",
        scrolled
          ? "bg-[rgba(7,9,13,0.78)] backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Logo />

          <nav
            aria-label="Primary"
            className="hidden items-center gap-8 md:flex"
          >
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-text-secondary transition-colors hover:text-text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href={siteConfig.contactCtaHref}
            className="hidden items-center gap-2 text-sm font-medium text-text-primary transition-opacity hover:opacity-70 md:flex"
          >
            {siteConfig.contactCtaLabel}
            <span aria-hidden>→</span>
          </Link>

          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
