import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsappButton from "@/components/WhatsappButton";
import SocialButtons from "@/components/SocialButtons";
import { COMPANY } from "@/lib/constants";
import type { Metadata, Viewport } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${COMPANY.name} | Electrical Contractors in South Africa`,
  description:
    "Professional electricians providing electrical installations, solar systems, maintenance and COC certificates across South Africa.",
  icons: {
    icon: "/icon.jpg",
  },
  keywords: [
    "electrician",
    "electrical contractor",
    "solar installation",
    "South Africa",
    "COC certificate",
    "ECALVIN ELECTRICIAN",
  ],
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 5.0,
  userScalable: true,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-M0PM1Z0WX7"
        strategy="afterInteractive"
      />
      <Script id="gtag" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-M0PM1Z0WX7');`}
      </Script>
      <body className={`${inter.className} bg-white text-black`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <SocialButtons />
        <WhatsappButton />
      </body>
    </html>
  );
}
