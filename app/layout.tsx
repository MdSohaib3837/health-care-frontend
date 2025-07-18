import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

// Import the healthcare-focused fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "All Nurses Home Health - Led by Nurses. Trusted by Families",
    template: "%s | All Nurses Home Health",
  },
  description:
    "Nurse-owned and operated home healthcare company serving Austin, TX and surrounding counties. Expert wound care, post-surgical recovery, and skilled nursing services delivered with compassion and clinical precision.",
  keywords: [
    "home healthcare",
    "skilled nursing",
    "wound care",
    "Austin Texas",
    "post-surgical care",
    "medication management",
    "nurse-owned",
    "home health services",
  ],
  authors: [{ name: "All Nurses Home Health" }],
  creator: "All Nurses Home Health",
  publisher: "All Nurses Home Health",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://allnurseshomehealth.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "All Nurses Home Health - Led by Nurses. Trusted by Families",
    description:
      "Expert home healthcare services in Austin, TX. Nurse-owned company providing skilled nursing, wound care, and post-surgical recovery with compassion and clinical precision.",
    url: "https://allnurseshomehealth.com",
    siteName: "All Nurses Home Health",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "All Nurses Home Health - Professional healthcare at home",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "All Nurses Home Health - Led by Nurses. Trusted by Families",
    description:
      "Expert home healthcare services in Austin, TX. Nurse-owned company providing skilled nursing, wound care, and compassionate care.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased bg-white text-gray-900">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
