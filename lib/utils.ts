import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind CSS classes with clsx
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format phone number for display
 */
export function formatPhone(phone: string): string {
  return phone.replace(/(\+27)(\d{2})(\d{3})(\d{4})/, "$1 $2 $3 $4");
}

/**
 * Generate WhatsApp link
 */
export function getWhatsAppLink(
  phone: string,
  message: string = "Hello ECALVIN ELECTRICIAN, I would like a quote."
): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
}
