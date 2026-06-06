"use client"

import { contactFields, contactSection } from "@/app/data/contactData";
import { contactSchema, type ContactFormData } from "@/app/schemas/contactSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function ContactSection() {
  const {register, handleSubmit,reset, formState: {errors, isSubmitSuccessful},} = useForm<ContactFormData>({resolver: zodResolver(contactSchema)})
  function onSubmit(data: ContactFormData) {
    console.log("Contact form:", data);
    reset();
  }
  return (
    <section id="kontakt" className="bg-white pb-16">
      <div className="mx-auto grid grid-cols-1 gap-10 px-6 md:px-12 lg:grid-cols-2 lg:gap-6 lg:px-20">
        <div className="max-w-[600px] lg:justify-self-end">
          <h2 className="text-4xl font-bold leading-tight text-text-main md:text-5xl xl:text-6xl">
            {contactSection.title}
          </h2>

          <p className="mt-6 text-2xl font-bold leading-tight text-text-muted md:text-3xl xl:text-4xl">
            {contactSection.description}
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full xl:max-w-[600px] lg:max-w-none lg:justify-self-start">
          <div className="space-y-4">
            {contactFields.map((field) => (
              <div key={field.name}>
                <input
                  {...register(field.name)}
                  type={field.type}
                  placeholder={field.placeholder}
                  className="h-11 w-full rounded-form border border-neutral-300 px-5 text-base text-text-main shadow-form outline-none placeholder:text-text-muted focus:border-brand-hover"
                />
                {errors[field.name] && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors[field.name]?.message}
                  </p>
                )}
              </div>
            ))}
            <div>
              <textarea
                {...register("message")}
                placeholder="Wiadomość do nas"
                className="min-h-[190px] w-full resize-none rounded-form border border-neutral-300 px-5 py-4 text-base text-text-main shadow-form outline-none placeholder:text-text-muted focus:border-brand-hover"
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="h-14 w-full rounded-button bg-brand text-base font-bold text-white transition hover:bg-brand-hover"
            >
              {contactSection.buttonLabel}
            </button>
            {isSubmitSuccessful && (
              <p className="text-center text-sm font-semibold text-green-600">
                Formularz został przesłany!
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}