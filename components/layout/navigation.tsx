"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationMenuProps {
  className?: string;
}

export const NavigationMenu: React.FC<NavigationMenuProps> = ({
  className = "",
}) => {
  const pathname = usePathname();

  const navigationItems = [
    {
      label: "Home",
      href: "/",
      icon: (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      ),
    },
    {
      label: "About Us",
      href: "/about",
      icon: (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      label: "Services",
      href: "/services",
      icon: (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clipRule="evenodd"
          />
        </svg>
      ),
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
      icon: (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      label: "Careers",
      href: "/careers",
      icon: (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
          <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
        </svg>
      ),
    },
    {
      label: "Contact",
      href: "/contact",
      icon: (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      ),
    },
  ];

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className={`${className}`}>
      <ul className="flex items-center space-x-8">
        {navigationItems.map((item) => (
          <li key={item.href} className="relative group">
            {item.submenu ? (
              // Dropdown menu for Services
              <div className="relative">
                <button
                  className={`flex items-center space-x-1 py-2 px-3 rounded-md font-medium transition-colors ${
                    isActiveLink(item.href)
                      ? "text-healthcare-blue bg-blue-50"
                      : "text-healthcare-navy hover:text-healthcare-blue hover:bg-gray-50"
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  <svg
                    className="h-3 w-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 mt-1 w-64 bg-white shadow-lg rounded-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <Link
                      href={item.href}
                      className="block px-4 py-2 text-healthcare-navy hover:text-healthcare-blue hover:bg-gray-50 font-medium transition-colors"
                    >
                      All Services
                    </Link>
                    <div className="border-t border-gray-100 my-1"></div>
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className="block px-4 py-2 text-gray-700 hover:text-healthcare-blue hover:bg-gray-50 transition-colors"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              // Regular navigation item
              <Link
                href={item.href}
                className={`flex items-center space-x-1 py-2 px-3 rounded-md font-medium transition-colors ${
                  isActiveLink(item.href)
                    ? "text-healthcare-blue bg-blue-50"
                    : "text-healthcare-navy hover:text-healthcare-blue hover:bg-gray-50"
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

// Alternative mobile navigation component for better mobile experience
export const MobileNavigationMenu: React.FC<{ onItemClick?: () => void }> = ({
  onItemClick,
}) => {
  const pathname = usePathname();

  const navigationItems = [
    {
      label: "Home",
      href: "/",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      ),
    },
    {
      label: "About Us",
      href: "/about",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      label: "Services",
      href: "/services",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      label: "Testimonials",
      href: "/testimonials",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      label: "Careers",
      href: "/careers",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
          <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
        </svg>
      ),
    },
    {
      label: "Contact",
      href: "/contact",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      ),
    },
  ];

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="space-y-1">
      {navigationItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onItemClick}
          className={`flex items-center space-x-3 py-3 px-4 rounded-lg font-medium transition-colors ${
            isActiveLink(item.href)
              ? "text-healthcare-blue bg-blue-50 border-l-4 border-healthcare-blue"
              : "text-healthcare-navy hover:text-healthcare-blue hover:bg-gray-50"
          }`}
        >
          {item.icon}
          <span>{item.label}</span>
        </Link>
      ))}
    </nav>
  );
};
