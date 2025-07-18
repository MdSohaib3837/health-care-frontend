import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Utility function for formatting phone numbers
export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, "");
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phone;
}

// Utility function for email validation
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Utility function for generating page metadata
export function generatePageMetadata(
  title: string,
  description: string,
  path: string = ""
) {
  return {
    title,
    description,
    openGraph: {
      title: `${title} | All Nurses Home Health`,
      description,
      url: `https://allnurseshomehealth.com${path}`,
    },
    twitter: {
      title: `${title} | All Nurses Home Health`,
      description,
    },
    alternates: {
      canonical: path || "/",
    },
  };
}

// Utility function for truncating text
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + "...";
}

// Utility function for scroll to element
export function scrollToElement(elementId: string, offset: number = 100): void {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}
