import Image from "next/image"
import { hero, searchFields } from "../data/homeData"

export default function Hero() {
    return (
        <section className="relative min-h-[960px] overflow-hidden">
            <Image
                src={hero.image}
                alt={hero.imageAlt}
                fill
                priority
                className="object-cover"
            />
            <div className="absolute inset-0 bg-black/25"/>
            <div className="relative z-10 flex min-h-[960px] max-w-6xl flex-col px-40 pt-40">
                <div className="max-w-xl text-white">
                    <h1 className="text-5xl font-bold leading-tight">
                        {hero.title}
                    </h1>
                    <p className="mt-3 text-xl">
                        {hero.description}
                    </p>
                </div>
                <form className="mt-8 w-full p-8 max-w-md rounded bg-white shadow-lg">
                    <h2 className="mb-4 text-3xl font-bold text-neutral-900">
                        Wyszukaj nieruchomość
                    </h2>
                    <div className="space-y-3">
                        {searchFields.map((field) => (
                            <input
                                key={field.name}
                                name={field.name}
                                type={field.type}
                                placeholder={field.placeholder}
                                className="w-full rounded border border-neutral-300 px-3 py-2 text-sm text-neutral-900 outline-none"
                            />
                        ))}
                    </div>
                    <button
                        type="submit"
                        className="mt-4 w-full rounded bg-orange-500 py-2 text-sm font-semibold text-white"
                    >
                        Wyszukaj
                    </button>
                </form>
            </div>
        </section>
    )
}