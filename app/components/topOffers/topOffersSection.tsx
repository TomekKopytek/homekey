import { topOffers, topOffersSection } from "@/app/data/topOffertsData";
import TopOfferCard from "./topOfferCard";


export default function TopOffersSection() {
    return (
        <section id="top" className="w-full bg-white py-16 md:py-20">
            <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-20">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-4xl font-bold leading-tight text-neutral-900 md:text-5xl">
                        {topOffersSection.title}
                    </h2>
                    <p className="mt-4 text-lg font-semibold text-neutral-900 md:text-xl">
                        {topOffersSection.subtitle}
                    </p>
                </div>
                <div className="-mx-6 mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-8 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12 xl:mx-0 xl:grid xl:grid-cols-3 xl:gap-8 xl:overflow-visible xl:px-0">
                    {topOffers.map((offer) => (
                        <TopOfferCard key={offer.id} offer={offer}/>
                    ))}
                </div>
            </div>

        </section>
    )
}