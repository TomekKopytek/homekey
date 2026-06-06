"use client";

import Image from "next/image";
import { hero, searchFields } from "@/app/data/homeData";
import { searchSchema, type SearchFormData } from "../schemas/searchSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function Hero() {
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm<SearchFormData>({resolver:zodResolver(searchSchema),});
  function onSubmit(data: SearchFormData) {
    console.log("Search form:", data)
    reset();
  }
  return (
    <section className="relative min-h-[760px] overflow-hidden md:min-h-[720px] lg:min-h-[760px]">
      <Image
        src={hero.image}
        alt={hero.imageAlt}
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 mx-auto flex min-h-[760px] w-full max-w-[1400px] flex-col justify-center px-6 py-10 md:min-h-[720px] md:px-10 lg:min-h-[760px] lg:px-20">
        <div className="max-w-[560px] text-white">
          <h1 className="text-5xl font-bold leading-tight tracking-wide md:text-6xl lg:text-6xl">
            {hero.title}
          </h1>

          <p className="mt-6 max-w-[520px] text-2xl font-medium leading-relaxed md:text-2xl lg:text-2xl">
            {hero.description}
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-10 w-full rounded-2xl bg-white px-8 py-9 shadow-lg md:max-w-[520px] lg:max-w-[520px]">
          <h2 className="mb-8 text-3xl font-bold text-neutral-900 md:text-3xl">
            Wyszukaj nieruchomość
          </h2>

          <div className="space-y-5">
            {searchFields.map((field) => (
                <div key={field.name}>
                    <input
                        {...register(field.name)}
                        type={field.type}
                        placeholder={field.placeholder}
                        className="h-14 w-full rounded-xl border border-neutral-300 px-5 text-lg text-neutral-900 shadow-md outline-none placeholder:text-neutral-400 focus:border-orange-500"
                    />
                    <p className="mt-1 h-2 text-sm text-red-500">
                        {errors[field.name]?.message ?? ""}
                    </p>
                </div>
            ))}
          </div>

          <button
            type="submit"
            className="mt-6 h-14 w-full rounded-xl bg-orange-500 text-lg font-bold text-white shadow-md transition hover:bg-orange-600"
          >
            Wyszukaj
          </button>
        </form>
      </div>
    </section>
  );
}