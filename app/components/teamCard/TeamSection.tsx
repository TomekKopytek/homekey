import { teamSection, teamMembers } from "@/app/data/teamData";
import TeamCard from "./TeamCard";

export default function TeamSection() {
    return (
        <section id="team" className="bg-white py-24">
            <div className="mx-auto max-w-[1200px] px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-4xl font-bold text-neutral-950">
                        {teamSection.title}
                    </h2>
                    <p className="mt-5 text-lg font-medium leading-relaxed text-neutral-950">
                        {teamSection.description}
                    </p>
                </div>
                <div className="mx-auto mt-16 grid grid-cols-2 gap-x-28 gap-y-20">
                    {teamMembers.map((member)=>(
                        <TeamCard key={member.id} member={member}></TeamCard>
                    ))}
                </div>
            </div>
        </section>
    )
}