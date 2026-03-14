import Image from "next/image";
import { cn } from "@/lib/utils";
import { COMPANY, TEAM_IMAGES } from "@/lib/constants";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import TeamCard from "@/components/ui/TeamCard";

interface TeamSectionProps {
  className?: string;
}

export default function TeamSection({ className }: TeamSectionProps) {
  const teamMembers = [
    {
      name: COMPANY.director.name,
      title: COMPANY.director.title,
      image: TEAM_IMAGES.director,
    },
  ];

  return (
    <section className={cn("py-16", className)}>
      <Container>
        <SectionHeading
          title="Our Team"
          subtitle="Meet the professionals behind our quality service"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-start">
          {/* Director Card */}
          {teamMembers.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}

          {/* Team Photo */}
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-200 sm:col-span-2">
            <Image
              src={TEAM_IMAGES.workers}
              alt={`${COMPANY.name} technicians on site`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 66vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
