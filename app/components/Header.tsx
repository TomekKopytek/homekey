import Link from "next/link";
import Image from "next/image";
import { navLinks } from "../data/homeData";

export default function Header() {
    return (
        <header className="absolute left-0 top-0 z-50 w-full bg-white">
            <div className="mx-auto flex max-w-8xl items-center justify-between px-40">
                    <Image
                        src="/images/logohomekeyrealty.png"
                        alt="logo homekey realty"
                        width={120}
                        height={120}
                    />
                <nav>
                    <ul className="flex items-center gap-10">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link 
                                    href={link.href} 
                                    className="text-medium font-medium text-black transition"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}