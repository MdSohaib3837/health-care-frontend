"use client";

import React, { useState } from "react";
import Link from "next/link";
import { NavigationMenu } from "../ui/navigation-menu";

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className = "" }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`bg-white shadow-lg border-b-2 border-healthcare-blue ${className}`}
    >
      {/* Top Info Bar */}
      <div className="bg-healthcare-blue text-white py-2">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex items-center space-x-4 mb-2 sm:mb-0">
              <div className="flex items-center space-x-1">
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>(800) 553-2892</span>
              </div>
              <div className="flex items-center space-x-1">
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>referrals@allnurseshomehealth.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Serving Austin, TX & Surrounding Counties</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Branding */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              {/* Logo placeholder - you'll replace this with actual logo */}
              <div className="w-16 h-16 bg-gradient-to-br from-healthcare-blue via-healthcare-teal to-healthcare-green rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <div className="text-white font-bold text-lg">ANH</div>
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl lg:text-3xl font-heading font-bold text-healthcare-navy leading-tight">
                All Nurses Home Health
              </h1>
              <p className="text-healthcare-teal font-medium text-sm italic">
                &quot;Led by Nurses. Trusted by Families&quot;
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <NavigationMenu />
          </div>

          {/* CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            {/* Desktop CTA Button */}
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center px-6 py-3 bg-healthcare-blue text-white font-semibold rounded-lg hover:bg-healthcare-navy transition-colors shadow-md hover:shadow-lg"
            >
              <svg
                className="h-4 w-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Get Started
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-md text-healthcare-blue hover:bg-gray-100 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="container-custom py-4">
            <nav className="space-y-4">
              <Link
                href="/"
                className="block py-2 text-healthcare-navy hover:text-healthcare-blue font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block py-2 text-healthcare-navy hover:text-healthcare-blue font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="block py-2 text-healthcare-navy hover:text-healthcare-blue font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/services/skilled-nursing"
                className="block py-2 pl-4 text-gray-600 hover:text-healthcare-blue transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                → Skilled Nursing
              </Link>
              <Link
                href="/services/wound-care"
                className="block py-2 pl-4 text-gray-600 hover:text-healthcare-blue transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                → Wound Care
              </Link>
              <Link
                href="/services/post-surgical"
                className="block py-2 pl-4 text-gray-600 hover:text-healthcare-blue transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                → Post-Surgical Care
              </Link>
              <Link
                href="/testimonials"
                className="block py-2 text-healthcare-navy hover:text-healthcare-blue font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                href="/careers"
                className="block py-2 text-healthcare-navy hover:text-healthcare-blue font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Careers
              </Link>
              <Link
                href="/contact"
                className="block py-2 text-healthcare-navy hover:text-healthcare-blue font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>

              {/* Mobile CTA Button */}
              <div className="pt-4 border-t border-gray-200">
                <Link
                  href="/contact"
                  className="block w-full text-center py-3 bg-healthcare-blue text-white font-semibold rounded-lg hover:bg-healthcare-navy transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <svg
                    className="inline h-4 w-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Get Started
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};
