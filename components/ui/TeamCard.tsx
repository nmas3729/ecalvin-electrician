import Image from "next/image";
import { cn } from "@/lib/utils";
import type { TeamMember } from "@/types";

interface TeamCardProps {
  member: TeamMember;
  className?: string;
}

export default function TeamCard({ member, className }: TeamCardProps) {
  return (
    <div className={cn("flex flex-col items-center text-center p-6", className)}>
      {/* Circular Avatar - 200x200px as recommended */}
      <div className="relative w-48 h-48 mb-5">
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="rounded-full object-cover border-4 border-primary shadow-lg"
            sizes="200px"
          />
        ) : (
          <div className="w-full h-full rounded-full bg-muted border-4 border-primary flex items-center justify-center shadow-lg">
            <span className="text-muted-foreground text-sm font-medium">{member.name}</span>
          </div>
        )}
      </div>
      <h3 className="font-bold text-xl text-foreground">{member.name}</h3>
      <p className="text-sm text-muted-foreground mt-1">{member.title}</p>
    </div>
  );
}
