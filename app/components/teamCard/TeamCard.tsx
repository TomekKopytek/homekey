import Image from "next/image"
import { cn } from "@/app/lib/utils";

type Social = {
    label:string;
    href:string;
    icon:string;
}

type TeamMember = {
    id: number;
    name: string;
    role: string;
    description: string;
    image: string;
    imageAlt: string;
    socials: Social[];
}

type TeamCardProps = {
    member: TeamMember;
};

export default function TeamCard({member}: TeamCardProps) {
    return (
        <article className="text-center">
            <div className="relative mx-auto h-72 w-72 overflow-hidden rounded-full">
                <Image
                    src={member.image}
                    alt={member.imageAlt}
                    fill
                    //zmiana pozycji pierwszego zdjęcia (inaczej ucięte czoło)
                    className={cn(
                        "object-cover object-center",
                        member.id === 1 && "object-[center_10%]"
                    )}
                />
            </div>
            <h3 className="mt-6 text-xl font-bold text-neutral-950">
                {member.name}
            </h3>
            <p className="mt-1 text-sm font-semibold text-neutral-800">
                {member.role}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                {member.description}
            </p>

            <div className="mt-5 flex justify-center gap-6">
                {member.socials.map((social) => (
                    <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="block transition hover:scale-110"
                    >
                    <Image
                        src={social.icon}
                        alt=""
                        width={36}
                        height={36}
                        className="h-9 w-9"
                    />
                    </a>
                ))}
            </div>
        </article>
    );
}