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
        <article className="rounded-2xl bg-white p-6 shadow-lg">
            <div className="relative h-56 overflow-hidden rounded-2xl">
                <Image
                    src={offer.image}
                    alt={offer.imageAlt}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                    <h3 className="text-3xl font-medium leading-none text-neutral-900">
                        {offer.title}
                    </h3>
                    <p className="mt-1 text-xl text-neutral-900">
                        {offer.location}
                    </p>
                </div>
                <p className="shrink-0 text-xl font-medium text-neutral-900">
                    {offer.price}
                </p>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-4">
                <span className="rounded-2xl bg-orange-500 px-4 py-3 text-center font-bold text-white">
                    {offer.rooms} pokoi
                </span>
                <span className="rounded-2xl bg-orange-500 px-4 py-3 text-center font-bold text-white">
                    {offer.bedrooms} sypialni
                </span>
                <span className="rounded-2xl bg-orange-500 px-4 py-3 text-center font-bold text-white">
                    {offer.surface}m<sup>2</sup>
                </span>
            </div>
            <button
                type="button"
                className="mt-6 w-full rounded-2xl bg-orange-500 px-4 py-4 font-bold text-white transition hover:bg-orange-600"
            >
                Zamów ofertę szczegółową
            </button>
        </article>
    )
}