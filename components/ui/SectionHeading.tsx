import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(centered && "text-center", "mb-10", className)}>
      <h2 className="text-3xl font-bold text-balance">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-lg text-gray-600 text-pretty">{subtitle}</p>
      )}
    </div>
  );
}
