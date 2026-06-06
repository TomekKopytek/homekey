import { teamSection, teamMembers } from "@/app/data/teamData";
import TeamCard from "./TeamCard";

export default function TeamSection() {
    return (
        <section id="team" className="bg-white py-4">
            <div className="mx-auto max-w-[1200px] px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-4xl font-bold text-text-main">
                        {teamSection.title}
                    </h2>
                    <p className="mt-5 text-lg font-medium leading-relaxed text-text-main">
                        {teamSection.description}
                    </p>
                </div>
                <div className="mx-auto mt-12 grid max-w-[900px] grid-cols-1 gap-y-14 md:grid-cols-2 md:gap-x-20">
                    {teamMembers.map((member)=>(
                        <TeamCard key={member.id} member={member}></TeamCard>
                    ))}
                </div>
            </div>
        </section>
    )
}