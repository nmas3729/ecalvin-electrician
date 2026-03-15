import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "dark" | "outline";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  external?: boolean;
  className?: string;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-yellow-400 text-black hover:bg-yellow-300 border-2 border-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed",
  secondary:
    "bg-white text-black hover:bg-gray-100 border-2 border-white disabled:opacity-50 disabled:cursor-not-allowed",
  dark: "bg-black text-white hover:bg-gray-800 border-2 border-black disabled:opacity-50 disabled:cursor-not-allowed",
  outline:
    "bg-transparent text-white hover:bg-white hover:text-black border-2 border-white disabled:opacity-50 disabled:cursor-not-allowed",
};

export default function Button({
  children,
  variant = "primary",
  href,
  external = false,
  className,
  type = "button",
  ...props
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
    <button type={type} className={combinedStyles} {...props}>
      {children}
    </button>
  );
}
