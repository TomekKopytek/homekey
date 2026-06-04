export const contactSection = {
  title: "Nie widzisz oferty odpowiadającej Twoim oczekiwaniom?",
  description:
    "Skontaktuj się z nami, na pewno znajdziemy coś odpowiedniego!",
  buttonLabel: "Wyślij",
};

export const contactFields = [
  {
    name: "name",
    type: "text",
    placeholder: "Twoje imię",
  },
  {
    name: "email",
    type: "email",
    placeholder: "Twój email",
  },
  {
    name: "phone",
    type: "tel",
    placeholder: "Twój numer telefonu",
  },
] as const;