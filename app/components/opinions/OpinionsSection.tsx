import { opinions, opinionsSection } from "@/app/data/opinionsData";
import OpinionCard from "./OpinionCard";

export default function OpinionsSection() {
  return (
    <section id="opinie" className="bg-white py-16">
      <div className="mx-auto px-12">
        <h2 className="text-center text-4xl font-bold text-neutral-950">
          {opinionsSection.title}
        </h2>

        <div className="mt-10 flex gap-6 overflow-x-auto pb-4">
          {opinions.map((opinion) => (
            <OpinionCard key={opinion.id} opinion={opinion} />
          ))}
        </div>
      </div>
    </section>
  );
}