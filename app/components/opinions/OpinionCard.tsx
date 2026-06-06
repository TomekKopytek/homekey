import Image from "next/image";

type Opinion = {
  id: number;
  name: string;
  surname: string;
  role: string;
  image: string;
  imageAlt: string;
  comment: string;
};

type OpinionCardProps = {
  opinion: Opinion;
};

export default function OpinionCard({ opinion }: OpinionCardProps) {
  return (
    <article className="min-w-[250px] md:min-w-[360px] rounded-card bg-neutral-200 p-4">
      <div className="flex items-center gap-6">
        <div className="relative h-24 w-24 overflow-hidden rounded-full shadow-card">
          <Image
            src={opinion.image}
            alt={opinion.imageAlt}
            fill
            sizes="(max-width: 768px) 56px, 80px"
            className="object-cover"
          />
        </div>

        <div>
          <h3 className="text-md font-bold text-text-main">
            {opinion.name}<br/>{opinion.surname}
          </h3>

          <p className="text-sm text-neutral-600 mt-2">
            {opinion.role}
          </p>
        </div>
      </div>

      <div className="mt-6 min-h-[100px] rounded-card bg-neutral-300 p-3 shadow-sm">
        <p className="text-md text-neutral-700">
          {opinion.comment}
        </p>
      </div>
    </article>
  );
}