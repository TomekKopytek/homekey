import { contactFields, contactSection } from "@/app/data/contactData";

export default function ContactSection() {
  return (
    <section id="kontakt" className="bg-white py-20">
      <div className="mx-auto grid px-40 grid-cols-2">
        <div className="max-w-[600px]">
          <h2 className="text-5xl font-bold leading-tight text-neutral-950">
            {contactSection.title}
          </h2>

          <p className="mt-6 text-4xl font-bold leading-tight text-neutral-400">
            {contactSection.description}
          </p>
        </div>

        <form className="w-full max-w-[600px] justify-self-end">
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