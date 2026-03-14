import Link from "next/link";
import { COMPANY, NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import {
  PhoneIcon,
  EmailIcon,
  LocationIcon,
  FacebookIcon,
  TikTokIcon,
  TwitterIcon,
} from "@/components/Icons";

export default function Footer() {
  const quickLinks = NAV_LINKS.slice(0, 4); // Home, About, Services, Contact

  return (
    <footer className="bg-black text-white mt-20">
      <div className="max-w-6xl mx-auto p-10 grid md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-yellow-400 text-xl font-bold mb-3">
            {COMPANY.name}
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Reliable electrical and solar services for residential, commercial
            and industrial clients across South Africa.
          </p>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            <a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 hover:bg-yellow-400 text-gray-300 hover:text-black rounded-full flex items-center justify-center transition-colors"
              aria-label="Follow ECALVIN ETRICIAN on Facebook"
            >
              <FacebookIcon className="w-5 h-5" />
            </a>
            <a
              href={SOCIAL_LINKS.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 hover:bg-yellow-400 text-gray-300 hover:text-black rounded-full flex items-center justify-center transition-colors"
              aria-label="Follow ECALVIN ETRICIAN on TikTok"
            >
              <TikTokIcon className="w-5 h-5" />
            </a>
            <a
              href={SOCIAL_LINKS.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 hover:bg-yellow-400 text-gray-300 hover:text-black rounded-full flex items-center justify-center transition-colors"
              aria-label="Follow ECALVIN ETRICIAN on X (Twitter)"
            >
              <TwitterIcon className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-yellow-400 font-bold mb-3">Quick Links</h2>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-yellow-400 font-bold mb-3">Contact</h2>

          <div className="space-y-3 text-gray-300">
            <div className="flex items-start gap-2">
              <LocationIcon className="w-5 h-5 mt-1 shrink-0 text-yellow-400" />
              <address className="not-italic">
                {COMPANY.address.street}
                <br />
                {COMPANY.address.suburb}
                <br />
                {COMPANY.address.city}
                <br />
                {COMPANY.address.postalCode}
                <br />
                {COMPANY.address.country}
              </address>
            </div>

            <div className="flex items-center gap-2">
              <PhoneIcon className="w-5 h-5 text-yellow-400" />
              <a
                href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                className="hover:text-yellow-400 transition-colors"
              >
                {COMPANY.phone}
              </a>
            </div>

            <div className="flex items-center gap-2">
              <EmailIcon className="w-5 h-5 text-yellow-400" />
              <a
                href={`mailto:${COMPANY.email}`}
                className="hover:text-yellow-400 transition-colors break-all"
              >
                {COMPANY.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center border-t border-gray-700 py-4 flex flex-col gap-1 text-sm">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
        </p>
        <p className="text-gray-500">Powered by NMAS WebCraft</p>
      </div>
    </footer>
  );
}
