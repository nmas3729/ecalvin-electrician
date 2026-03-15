"use client";

import { SOCIAL_LINKS } from "@/lib/constants";
import { FacebookIcon, TikTokIcon, TwitterIcon } from "@/components/Icons";

export default function SocialButtons() {
  return (
    <div className="fixed bottom-24 right-6 hidden md:flex flex-col gap-3 z-40">
      <a
        href={SOCIAL_LINKS.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-[#1877F2] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Follow ECALVIN ETRICIAN on Facebook"
      >
        <FacebookIcon className="w-6 h-6" />
      </a>
      <a
        href={SOCIAL_LINKS.tiktok}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Follow ECALVIN ETRICIAN on TikTok"
      >
        <TikTokIcon className="w-6 h-6" />
      </a>
      <a
        href={SOCIAL_LINKS.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Follow ECALVIN ETRICIAN on X (Twitter)"
      >
        <TwitterIcon className="w-6 h-6" />
      </a>
    </div>
  );
}
