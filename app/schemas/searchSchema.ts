import z from "zod";

export const searchSchema = z.object({
    location: z.string().min(2, "Wpisz lokalizację."),
    propertyType: z.string().min(2, "Wpisz typ oferty."),
    price: z.string().min(1, "Wpisz zakres ceny."),
});

export type SearchFormData = z.infer<typeof searchSchema>;