"use client";

import React from "react";
import Link from "next/link";

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  return (
    <footer className={`bg-healthcare-navy text-white ${className}`}>
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-heading font-bold">
                All Nurses Home Health
              </h3>
              <p className="text-healthcare-teal font-medium italic">
                &quot;Led by Nurses. Trusted by Families&quot;
              </p>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Nurse-owned and operated home healthcare company bringing clinical
              precision and compassion into every home we serve in Austin, TX
              and surrounding counties.
            </p>

            <div className="flex items-center space-x-2">
              <svg
                className="h-5 w-5 text-healthcare-teal"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm text-gray-300">Licensed & Insured</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-heading font-semibold">Quick Links</h4>
            <nav className="space-y-3">
              <Link
                href="/about"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Our Services
              </Link>
              <Link
                href="/testimonials"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Patient Testimonials
              </Link>
              <Link
                href="/careers"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Join Our Team
              </Link>
              <Link
                href="/contact"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-heading font-semibold">Our Services</h4>
            <nav className="space-y-3">
              <Link
                href="/services/skilled-nursing"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Skilled Nursing
              </Link>
              <Link
                href="/services/wound-care"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Wound Care Management
              </Link>
              <Link
                href="/services/post-surgical"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Post-Surgical Recovery
              </Link>
              <Link
                href="/services/medication-management"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Medication Management
              </Link>
              <Link
                href="/services/chronic-disease"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Chronic Disease Management
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-heading font-semibold">
              Contact Information
            </h4>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <svg
                  className="h-5 w-5 text-healthcare-teal mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <div>
                  <p className="font-medium">Phone</p>
                  <a
                    href="tel:8005532892"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    (800) 553-2892
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <svg
                  className="h-5 w-5 text-healthcare-teal mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <div>
                  <p className="font-medium">Email</p>
                  <a
                    href="mailto:referrals@allnurseshomehealth.com"
                    className="text-gray-300 hover:text-white transition-colors break-all"
                  >
                    referrals@allnurseshomehealth.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <svg
                  className="h-5 w-5 text-healthcare-teal mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <p className="font-medium">Service Area</p>
                  <p className="text-gray-300">
                    Austin, TX & Surrounding Counties:
                    <br />
                    Travis, Bastrop, Caldwell, Williamson,
                    <br />
                    Hays, Burnet, and Blanco
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <svg
                  className="h-5 w-5 text-healthcare-teal mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <p className="font-medium">Hours</p>
                  <p className="text-gray-300">
                    24/7 Emergency Support
                    <br />
                    Office: Mon-Fri 8AM-5PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Insurance Notice */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="bg-gradient-to-r from-healthcare-blue/20 to-healthcare-teal/20 rounded-lg p-6">
            <h4 className="text-lg font-semibold mb-3 flex items-center">
              <svg
                className="h-5 w-5 mr-2 text-healthcare-teal"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Insurance & Payment
            </h4>
            <p className="text-gray-300 mb-3">
              We accept most commercial insurance plans and private pay options.
            </p>
            <p className="text-sm text-gray-400">
              *Please note: We do not accept Medicare or Medicaid at this time*
            </p>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Social Media */}
            <div className="flex items-center space-x-6">
              <span className="text-gray-300">Follow Us:</span>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-healthcare-teal transition-colors"
                  aria-label="Facebook"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-healthcare-teal transition-colors"
                  aria-label="Twitter"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-healthcare-teal transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-healthcare-teal transition-colors"
                  aria-label="Instagram"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center md:text-right">
              <div className="flex items-center space-x-2 mb-2">
                <svg
                  className="h-5 w-5 text-red-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-lg font-semibold">
                  Now Accepting New Referrals!
                </span>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-2 bg-healthcare-teal text-white font-semibold rounded-lg hover:bg-healthcare-green transition-colors"
              >
                <svg
                  className="h-4 w-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-900 py-4">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 text-sm text-gray-400">
            <div>
              © {new Date().getFullYear()} All Nurses Home Health PLLC. All
              rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <Link
                href="/privacy-policy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/nondiscrimination"
                className="hover:text-white transition-colors"
              >
                Nondiscrimination Notice
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
