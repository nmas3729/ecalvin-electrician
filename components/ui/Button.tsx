import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "dark" | "outline";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  external?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-yellow-400 text-black hover:bg-yellow-300 border-2 border-yellow-400",
  secondary:
    "bg-white text-black hover:bg-gray-100 border-2 border-white",
  dark: "bg-black text-white hover:bg-gray-800 border-2 border-black",
  outline:
    "bg-transparent text-white hover:bg-white hover:text-black border-2 border-white",
};

export default function Button({
  children,
  variant = "primary",
  href,
  external = false,
  className,
  onClick,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded font-bold transition-colors";

  const combinedStyles = cn(baseStyles, variants[variant], className);

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedStyles}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
}
