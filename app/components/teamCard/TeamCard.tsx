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
            <div className="relative mx-auto h-36 w-36 overflow-hidden rounded-full sm:h-48 sm:w-48 md:h-64 md:w-64 xl:h-72 xl:w-72">
                <Image
                    src={member.image}
                    alt={member.imageAlt}
                    fill
                    sizes="(max-width:768px) 160px, 192px"
                    //zmiana pozycji pierwszego zdjęcia (inaczej ucięte czoło)
                    className={cn(
                        "object-cover object-center",
                        member.id === 1 && "object-[center_10%]"
                    )}
                />
            </div>
            <h3 className="mt-6 text-xl font-bold text-text-main">
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