"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Footer() {
  const footerLinks = [
    { name: "FAQ", href: "/help/faq" },
    { name: "Help Center", href: "/help" },
    { name: "Account", href: "/account" },
    { name: "Media Center", href: "/media" },
    { name: "Investor Relations", href: "/investors" },
    { name: "Jobs", href: "/jobs" },
    { name: "Netflix Shop", href: "/shop" },
    { name: "Redeem Gift Cards", href: "/redeem" },
    { name: "Buy Gift Cards", href: "/gift-cards" },
    { name: "Ways to Watch", href: "/ways-to-watch" },
    { name: "Terms of Use", href: "/terms" },
    { name: "Privacy", href: "/privacy" },
    { name: "Cookie Preferences", href: "#" },
    { name: "Corporate Information", href: "/corporate-info" },
    { name: "Contact Us", href: "/contact" },
    { name: "Speed Test", href: "https://fast.com" },
    { name: "Legal Notices", href: "/legal" },
    { name: "Only on Netflix", href: "/browse/genre/839338" },
  ];

  return (
    <footer className="w-full py-12 border-t-8 border-[#333] bg-black text-[#757575]">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-6">
          <p className="text-base">Questions? Call 1-844-505-2993</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-8">
          {footerLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="hover:underline mb-3"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="inline-block relative mb-6">
          <button className="flex items-center justify-between bg-transparent text-[#757575] border border-[#757575] rounded-sm px-4 py-1 min-w-[120px]">
            <span className="mr-2">English</span>
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>

        <div>
          <p className="text-sm">Netflix Clone</p>
        </div>
      </div>
    </footer>
  );
}
