"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="border-b bg-white">
      <nav className="mx-auto max-w-5xl px-4 py-3 flex items-center gap-6">
        {links.map(({ href, label }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={
                active
                  ? "font-semibold text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              }
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
