import Image from "next/image";

export default function Cascate() {
  return (
    <div className="grid md:grid-cols-7 gap-4 mt-14 animate__animated animate__fadeInDown animate__slower">
      <div>
        <Image
          className="h-auto max-w-full rounded-lg"
          src="/images/joker.jpg"
          alt="Poster do Joker"
          width={270}
          height={270}
        />
      </div>
      <div>
        <Image
          className="h-auto max-w-full rounded-lg"
          src="/images/lamb.jpg"
          alt="Poster de Lamb"
          width={270}
          height={270}
        />
      </div>
      <div>
        <Image
          className="h-auto max-w-full rounded-lg"
          src="/images/wood.jpg"
          alt="Poster de Wood"
          width={270}
          height={270}
        />
      </div>
      <div>
        <Image
          className="h-auto max-w-full rounded-lg"
          src="/images/som.jpg"
          alt="Poster de The Son"
          width={270}
          height={270}
        />
      </div>
      <div>
        <Image
          className="h-auto max-w-full rounded-lg"
          src="/images/star.jpeg"
          alt="Poster de Star Wars"
          width={270}
          height={270}
        />
      </div>
      <div>
        <Image
          className="h-auto max-w-full rounded-lg"
          src="/images/spider.jpg"
          alt="Poster de Spider-man"
          width={270}
          height={270}
        />
      </div>
      <div>
        <Image
          className="h-auto max-w-full rounded-lg"
          src="/images/midsommar.jpg"
          alt="Poster de Midssomar"
          width={270}
          height={270}
        />
      </div>
    </div>
  );
}
