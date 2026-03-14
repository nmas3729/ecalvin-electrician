import "./globals.css";
import { Inter } from "next/font/google";
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
    "ECALVIN ETRICIAN",
  ],
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
