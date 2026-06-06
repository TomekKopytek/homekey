import { contactFields, contactSection } from "@/app/data/contactData";

export default function ContactSection() {
  return (
    <section id="kontakt" className="bg-white pb-16">
      <div className="mx-auto grid grid-cols-1 gap-10 px-6 md:px-12 lg:grid-cols-2 lg:gap-6 lg:px-20">
        <div className="xl:max-w-[600px] lg:max-w-none lg:justify-self-end">
          <h2 className="text-4xl font-bold leading-tight text-neutral-950 md:text-5xl xl:text-6xl">
            {contactSection.title}
          </h2>

          <p className="mt-6 text-2xl font-bold leading-tight text-neutral-400 md:text-3xl xl:text-4xl">
            {contactSection.description}
          </p>
        </div>

        <form className="w-full xl:max-w-[600px] lg:max-w-none lg:justify-self-start">
          <div className="space-y-4">
            {contactFields.map((field) => (
              <input
                key={field.name}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                className="h-11 w-full rounded-lg border border-neutral-300 px-5 text-base text-neutral-900 shadow-sm outline-none placeholder:text-neutral-400 focus:border-orange-500"
              />
            ))}

            <textarea
              name="message"
              placeholder="Wiadomość do nas"
              className="min-h-[190px] w-full resize-none rounded-lg border border-neutral-300 px-5 py-4 text-base text-neutral-900 shadow-sm outline-none placeholder:text-neutral-400 focus:border-orange-500"
            />

            <button
              type="submit"
              className="h-14 w-full rounded-lg bg-orange-500 text-base font-bold text-white transition hover:bg-orange-600"
            >
              {contactSection.buttonLabel}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}