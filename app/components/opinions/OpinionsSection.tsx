import { opinions, opinionsSection } from "@/app/data/opinionsData";
import OpinionCard from "./OpinionCard";

export default function OpinionsSection() {
  return (
    <section id="opinie" className="w-full overflow-hidden bg-white pt-12 md:py-16">
      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-20">
        <h2 className="text-center text-4xl font-bold leading-tight text-text-main md:text-5xl">
          {opinionsSection.title}
        </h2>

        <div className="-mx-6 mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-6 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12 xl:mx-0 xl:px-0">
          {opinions.map((opinion) => (
            <OpinionCard key={opinion.id} opinion={opinion} />
          ))}
        </div>
      </div>
    </section>
  );
}