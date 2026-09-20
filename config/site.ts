export type NavItem = {
  label: string;
  href: string;
};

export const mainNav: NavItem[] = [
  { label: "Capabilities", href: "/capabilities" },
  { label: "Work", href: "/work" },
  { label: "Projects", href: "/projects" },
  { label: "Company", href: "/company" },
  { label: "Careers", href: "/careers" },
];

export const footerNav = {
  practice: [
    { label: "AI Engineering", href: "/capabilities" },
    { label: "Machine Learning", href: "/capabilities" },
    { label: "Special Projects", href: "/projects" },
  ] satisfies NavItem[],
  company: [
    { label: "Company", href: "/company" },
    { label: "Work", href: "/work" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ] satisfies NavItem[],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ] satisfies NavItem[],
};

export const siteConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  contactCtaLabel: "Talk to us",
  contactCtaHref: "/contact",
};
