import Image from "next/image";

type TopOffer = {
    id: number;
    title: string;
    location: string;
    image: string;
    imageAlt: string;
    rooms: string;
    bedrooms: string;
    surface: string;
    price: string;
};

type topOfferCardProps = {
    offer: TopOffer;
};

export default function TopOfferCard({offer}: topOfferCardProps) {
    return (
        <article className="min-w-[280px] snap-center rounded-2xl bg-white p-4 shadow-xl sm:min-w-[340px] md:min-w-[380px] xl:min-w-0 xl:p-6">
            <div className="relative h-36 overflow-hidden rounded-2xl sm:h-40 md:h-56">
                <Image
                    src={offer.image}
                    alt={offer.imageAlt}
                    fill
                    sizes="(max-width: 640px) 85vw, (max-width:1280px) 380px, 33vw"
                    className="object-cover"
                />
            </div>
            <div className="mt-3 flex items-start justify-between gap-3">
                <div>
                    <h3 className="text-xl font-medium leading-tight text-text-main md:text-3xl">
                        {offer.title}
                    </h3>
                    <p className="mt-1 text-base text-neutral-600 md:text-xl">
                        {offer.location}
                    </p>
                </div>
                <p className="shrink-0 whitespace-nowrap text-base font-medium text-text-main md:text-xl">
                    {offer.price}
                </p>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 md:gap-4">
                <span className="rounded-xl bg-brand px-2 py-2 text-center text-xs font-bold text-white md:rounded-2xl md:px-3 md:py-3 md:text-base">
                    {offer.rooms} pokoi
                </span>
                <span className="rounded-xl bg-brand px-2 py-2 text-center text-xs font-bold text-white md:rounded-2xl md:px-3 md:py-3 md:text-base">
                    {offer.bedrooms} sypialni
                </span>
                <span className="rounded-xl bg-brand px-2 py-2 text-center text-xs font-bold text-white md:rounded-2xl md:px-3 md:py-3 md:text-base">
                    {offer.surface}m<sup>2</sup>
                </span>
            </div>
            <button
                type="button"
                className="mt-5 w-full rounded-xl bg-brand hover:bg-brand-hover px-3 py-3 text-sm font-bold text-white transition md:rounded-2xl md:px-4 md:py-4 md:text-base"
            >
                Zamów ofertę szczegółową
            </button>
        </article>
    )
}