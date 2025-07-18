"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const navigationItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
    submenu: [
      { label: "Skilled Nursing", href: "/services/skilled-nursing" },
      { label: "Wound Care", href: "/services/wound-care" },
      { label: "Post-Surgical Care", href: "/services/post-surgical" },
      {
        label: "Medication Management",
        href: "/services/medication-management",
      },
      {
        label: "Chronic Disease Management",
        href: "/services/chronic-disease",
      },
    ],
  },
  {
    label: "Testimonials",
    href: "/testimonials",
  },
  {
    label: "Careers",
    href: "/careers",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export function MainNavigation() {
  const pathname = usePathname();

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        {navigationItems.map((item) => (
          <NavigationMenuItem key={item.href}>
            {item.submenu ? (
              <>
                <NavigationMenuTrigger
                  className={cn(
                    "h-auto px-4 py-2 text-healthcare-navy hover:text-healthcare-blue",
                    isActiveLink(item.href) && "text-healthcare-blue bg-blue-50"
                  )}
                >
                  {item.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-64 p-2">
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        className="block rounded-md p-3 text-sm font-medium text-healthcare-navy hover:bg-gray-50 hover:text-healthcare-blue"
                      >
                        All Services
                      </Link>
                    </NavigationMenuLink>
                    <div className="border-t border-gray-100 my-1"></div>
                    {item.submenu.map((subItem) => (
                      <NavigationMenuLink key={subItem.href} asChild>
                        <Link
                          href={subItem.href}
                          className="block rounded-md p-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-healthcare-blue"
                        >
                          {subItem.label}
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink asChild>
                <Link
                  href={item.href}
                  className={cn(
                    "block rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-50 hover:text-healthcare-blue",
                    isActiveLink(item.href)
                      ? "text-healthcare-blue bg-blue-50"
                      : "text-healthcare-navy"
                  )}
                >
                  {item.label}
                </Link>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
