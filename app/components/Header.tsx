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
                        width={150}
                        height={150}
                    />
                <nav>
                    {/* Wyświetlanie wszystkich elementów z navLinks przez funkcję map() */}
                    <ul className="flex items-center gap-10 hover:">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link 
                                    href={link.href} 
                                    className="text-medium font-medium text-black transition hover:text-orange-500"
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