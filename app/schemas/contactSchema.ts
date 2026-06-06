import z from "zod";

export const contactSchema = z.object({
    name: z.string().min(2, "Imię musi mieć minimum 2 znaki."),

    email: z.string().email("Podaj poprawny adres e-mail."),

    phone: z
    .string()
    .min(9, "Numer telefonu musi mieć minimum 9 cyfr")
    .regex(/^[0-9\s()+-]+$/,"Numer telefonu może zawierać tylko cyfry, spacje, + i -."),
    message: z.string().min(10, "Wiadomość musi mieć minimum 10 znaków.")
});

export type ContactFormData = z.infer<typeof contactSchema>;
