import { topOffers, topOffersSection } from "@/app/data/topOffertsData";
import TopOfferCard from "./topOfferCard";


export default function TopOffersSection() {
    return (
        <section id="top" className="py-20">
            <div className="mx-auto px-12">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-4xl font-bold leading-tight text-neutral-900">
                        {topOffersSection.title}
                    </h2>
                    <p className="mt-4 text-lg font-semibold text-neutral-900">
                        {topOffersSection.subtitle}
                    </p>
                </div>
                <div className="mt-12 grid gap-8 md:grid-cols-3">
                    {topOffers.map((offer) => (
                        <TopOfferCard key={offer.id} offer={offer}/>
                    ))}
                </div>
            </div>

        </section>
    )
}