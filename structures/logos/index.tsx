"use client";

import Image from "next/image";

const logos = [
  {
    alt: "bestself-co",
    image: "bestself.svg",
  },
  {
    alt: "bark-buildings",
    image: "bark-buildings.svg",
  },
  {
    alt: "coinbits",
    image: "coinbits.svg",
  },
];

export default function Logos() {
  return (
    <section className="py-12 flex-nowrap overflow-hidden flex gap-x-6 justify-center items-center text-center">
      {logos.map(({ image, alt }, i) => (
        <Image
          src={`/logos/${image}`}
          width={168}
          height={168}
          alt={alt}
          key={`logo-${i}`}
          className="fill-gray-900 dark:fill-white w-32"
        />
      ))}
    </section>
  );
}
