// dane do wstrzykiwania do komponentów hero i nav

//dane do navbara
export const navLinks = [
    { label: "Top 3 ofert", href:"#top3" },
    { label: "Zespół", href:"#team" },
    { label: "Opinie", href:"#opinie" },
    { label: "Kontakt", href:"#kontakt" },
];
// dane do hero
export const hero =
    { 
        title: "Znajdź swoje idealne miejsce", 
        description: "Domy i mieszkania dopasowane do twoich potrzeb",
        image: "/images/frames-for-your-heart-2d4lAQAlbDA-unsplash.jpg",
        imageAlt: "Nowoczesny dom z basenem"
    };

//dane do formularza w hero
export const searchFields = [
    { name: "location", type: "text", placeholder: "Lokalizacja" },
    { name: "propertyType", type: "text", placeholder: "Kupię/Wynajmę" },
    { name: "price", type: "text", placeholder: "Przedział cenowy" },
] as const