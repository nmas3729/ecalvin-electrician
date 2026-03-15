import { COMPANY } from "@/lib/constants";
import { getWhatsAppLink } from "@/lib/utils";
import { WhatsAppIcon } from "@/components/Icons";

export default function WhatsappButton() {
  return (
    <a
      href={getWhatsAppLink(COMPANY.whatsapp)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_4px_14px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform z-50"
      aria-label="Chat with us on WhatsApp"
    >
      <WhatsAppIcon className="w-6 h-6" />
    </a>
  );
}
