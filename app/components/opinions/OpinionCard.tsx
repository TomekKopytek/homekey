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
    <article className="min-w-[360px] rounded-xl bg-neutral-200 p-4">
      <div className="flex items-center gap-6">
        <div className="relative h-24 w-24 overflow-hidden rounded-full shadow-md">
          <Image
            src={opinion.image}
            alt={opinion.imageAlt}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h3 className="text-md font-bold text-neutral-950">
            {opinion.name}<br/>{opinion.surname}
          </h3>

          <p className="text-sm text-neutral-600 mt-2">
            {opinion.role}
          </p>
        </div>
      </div>

      <div className="mt-6 min-h-[100px] rounded bg-neutral-300 p-3 shadow-md">
        <p className="text-md text-neutral-700">
          {opinion.comment}
        </p>
      </div>
    </article>
  );
}