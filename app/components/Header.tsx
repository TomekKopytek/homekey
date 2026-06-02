import Link from "next/link";
import Image from "next/image";
import { navLinks } from "../data/homeData";

export default function Header() {
    return (
        <header className="absolute left-0 top-0 z-50 w-full bg-white">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                    {/* Dodać ścieżkę do loga */}
                    <Link href="/" className="text-xl font-bold text-neutral-700">
                    Homekey
                    </Link>
                <nav>
                    <ul className="flex items-center gap-8">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link 
                                    href={link.href} 
                                    className="text-sm font-medium text-neutral-700 transition hover:text-neutral-900"
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