"use client";

import Anchor from "@/components/anchor";
import Container from "@/components/container";
import Image from "next/image";

const logos = [
  {
    alt: "dogstudio",
    image: "dogstudio.svg",
    href: "https://dogstudio.co",
  },
  {
    alt: "coinbits",
    image: "coinbits.svg",
    href: "https://coinbits.app",
  },
  {
    alt: "winamp",
    image: "winamp.svg",
    href: "https://winamp.com",
  },
  {
    alt: "bark-buildings",
    image: "bark-buildings.svg",
    href: "https://barkbuildings.com",
  },
  {
    alt: "haute-hijab",
    image: "haute-hijab.svg",
    href: "https://hautehijab.com",
  },
  {
    alt: "ecomly",
    image: "ecomly.svg",
    href: "https://www.ecom.ly",
  },
];

export default function Logos() {
  return (
    <Container className="max-w-screen-md px-12">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-16 md:gap-y-20 gap-x-24">
        {logos.map(({ image, alt, href }, i) => (
          <Anchor
            key={`logo-${i}`}
            href={href}
            target="_blank"
            className="opacity-40 hover:opacity-100"
          >
            <Image
              src={`/logos/${image}`}
              width={208}
              height={48}
              alt={alt}
              className="fill-gray-900 dark:fill-white max-h-8 md:max-h-12 w-full object-contain"
            />
          </Anchor>
        ))}
      </div>
    </Container>
  );
}
