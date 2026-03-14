import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsappButton from "../components/WhatsappButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ECALVIN ETRICIAN | Electrical Contractors in South Africa",
  description:
    "Professional electricians providing electrical installations, solar systems, maintenance and COC certificates across South Africa.",
  icons: {
    icon: "/icon.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black">

        <Navbar />

        <main>{children}</main>

        <Footer />

        <WhatsappButton />

      </body>
    </html>
  );
}