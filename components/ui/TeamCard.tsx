import Image from "next/image";
import { cn } from "@/lib/utils";
import type { TeamMember } from "@/types";

interface TeamCardProps {
  member: TeamMember;
  className?: string;
}

export default function TeamCard({ member, className }: TeamCardProps) {
  return (
    <div className={cn("flex flex-col items-center text-center", className)}>
      <div className="relative w-48 h-48 mb-4">
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="rounded-full object-cover border-4 border-yellow-400"
            sizes="192px"
          />
        ) : (
          <div className="w-full h-full rounded-full bg-gray-800 border-4 border-yellow-400 flex items-center justify-center">
            <span className="text-gray-400 text-sm">{member.name}</span>
          </div>
        )}
      </div>
      <h3 className="font-semibold text-lg">{member.name}</h3>
      <p className="text-sm text-gray-500">{member.title}</p>
    </div>
  );
}
