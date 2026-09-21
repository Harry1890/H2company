"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { primaryNav } from "@/data/navigation";
import { PrimaryButton } from "@/components/ui/primary-button";

export function MobileNav() {
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);
  const [open, setOpen] = useState(false);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="flex size-11 items-center justify-center rounded-btn text-text"
      >
        {open ? <X className="size-6" aria-hidden /> : <Menu className="size-6" aria-hidden />}
      </button>

      {open ? (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-19 bottom-0 z-40 flex flex-col bg-bg px-5 py-8"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {primaryNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border-b border-border py-4 text-h4 font-medium text-text"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-8">
            <PrimaryButton href="/contact" className="w-full">
              Talk to us
            </PrimaryButton>
          </div>
        </div>
      ) : null}
    </div>
  );
}
