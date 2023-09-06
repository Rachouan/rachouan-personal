"use client";

import Container from "@/components/container";
import "keen-slider/keen-slider.min.css";
import { Title } from "@/components/title";
import Image from "next/image";
import { useState } from "react";

const testimonials: TestimonialProps[] = [
  {
    name: "Nicole Kang",
    title: "Art Director at Haute Hijab",
    logo: "haute-hijab.svg",
    image: "nicole-kang.jpg",
    description:
      "Rachouan’s work consistently exceeds expectations. His work ethic, attention to detail, and ability to cater to a client's request are highlighted in the final product he presents. Even when working remotely, time zones away, his professionalism and dedication to his work ensures that your deadlines will be met.",
  },
  {
    name: "Cathryn Lavery",
    title: "CEO and Co-Founder of BestSelf Co.",
    logo: "bestself.svg",
    image: "cathryn-lavery.jpg",
    description:
      "Rachouan is the Best! He is a truly gifted designer; whether he’s working on graphics, development or even motion graphics, he has the Midas touch that turns everything he touches turns to gold. Not only is he talented, but is patient, reliable and has a great work ethic making him a pleasure to work with.",
  },
  {
    name: "Nick Kneuper",
    logo: "ecomly.svg",
    title: "Managing Partner at Ecom.ly",
    image: "nick-kneuper.jpg",
    description:
      "Since 2017, Rachouan has been my go-to guy for anything design and branding. His work always exceeds my expectations, and the proof is in the pudding. For example, Our old website looked cookie-cutter. This website is a game changer for attracting me high quality leads and building a long-term brand in my space.",
  },
  {
    name: "Danit Zivan",
    logo: "bark-buildings.svg",
    title: "Co-Founder at Bark Buildings",
    image: "danit-zivan.jpg",
    description:
      "We are so grateful to have found Rachouan and worked with him on our rebrand and complete website overhaul. Rachouan was very patient with us and took the time to explain every step of the process to us - we were really thankful for his ability to balance our vision for our brand with his creative eye and bring our brand and our new website to the next level. It was a pleasure to work with you Rachouan, thank you!",
  },
];

export function Testimonials() {
  const [{ name, description, title }, setTestimonial] =
    useState<TestimonialProps>(testimonials[2]);
  return (
    <Container size="lg">
      <div className="relative">
        <blockquote className="relative z-10 flex flex-col space-y-8  p-6 sm:p-12 md:p-20 rounded-md bg-white dark:bg-gray-900 text-center items-center overflow-hidden">
          <p className="text-lg opacity-50 text-center">Some kind words</p>
          <p className="text-xl md:text-2xl font-rachouan font-light">
            {description}
          </p>
          <div className="flex gap-4">
            {testimonials.map((testimonial, i) => {
              const active: boolean = testimonial.name === name;
              return (
                <button
                  key={`profile-image-${i}`}
                  className={`w-12 h-12 bg-gray-50 rounded-full transition-all hover:opacity-100 overflow-hidden ${active
                    ? "opacity-100 -translate-y-1 shadow-xl"
                    : "opacity-50"
                    }`}
                  onClick={() => setTestimonial(testimonial)}
                >
                  <Image
                    src={`/clients/${testimonial.image}`}
                    width={140}
                    height={140}
                    alt={`image-${testimonial.image}`}
                    className="fill-gray-900 dark:fill-white w-full h-full"
                  />
                </button>
              );
            })}
          </div>
          <div>
            <Title size="base" order={3}>
              {name}
            </Title>
            <p className="opacity-70">{title}</p>
          </div>
        </blockquote>
        <div className="absolute w-full left-0 -top-10 h-full bg-gradient-to-r from-denim-700 via-pink-500 to-yellow-500 blur-xl opacity-20 -z-10"></div>
      </div>
    </Container>
  );
}

interface TestimonialProps {
  name: string;
  title: string;
  description: string;
  logo: string;
  image: string;
}

export function Testimonial({
  name,
  title,
  description,
  logo,
}: TestimonialProps) {
  return (
    <blockquote className="flex flex-col space-y-4 keen-slider__slide px-6 text-center items-center">
      <Image
        src={`/logos/${logo}`}
        width={168}
        height={168}
        alt={`logo-${logo}`}
        className="fill-gray-900 dark:fill-white h-32"
      />
      <p className="text-3xl font-rachouan font-light">{description}</p>
      <div>
        <Title size="base">{name}</Title>
        <h3 className="opacity-70">{title}</h3>
      </div>
    </blockquote>
  );
}
