import type { NavLink } from "@/types";

export const primaryNav: NavLink[] = [
  { label: "What We Do", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "AI Lab", href: "/labs" },
  { label: "Company", href: "/company" },
  { label: "Careers", href: "/careers" },
];

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Company",
    links: [
      { label: "What We Do", href: "/services" },
      { label: "Work", href: "/work" },
      { label: "AI Lab", href: "/labs" },
      { label: "About", href: "/company" },
    ],
  },
  {
    title: "Careers",
    links: [
      { label: "Open Roles", href: "/careers" },
      { label: "How We Work", href: "/company" },
    ],
  },
  {
    title: "Get in Touch",
    links: [{ label: "Contact", href: "/contact" }],
  },
];
