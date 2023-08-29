import Anchor from "@/components/anchor";
import Container from "@/components/container";
import Section from "@/components/section";
import Logos from "@/structures/logos";
import { Testimonials } from "@/structures/testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Section className="flex justify-center items-center">
        <Container className="flex flex-col gap-y-6 justify-center items-center text-center">
          <div className="relative w-32 h-32 md:w-48 md:h-48">
            <div className="absolute -z-10 left-0 top-4 w-full h-full bg-gradient-to-r from-pink-500 to-yellow-500 blur-xl rounded-full opacity-50"></div>
            <Image
              src="/me.jpg"
              width={300}
              height={300}
              alt="Picture of Rachouan Rejeb"
              className="rounded-full w-full h-full"
            />
          </div>
          <h1 className="font-rachouan font-bold text-4xl sm:text-8xl">
            A developer, designer and illustrator from Belgium.
          </h1>
          <p className="text-xl text-gray-700 dark:text-white/90">
            Former freelancer, Currently building a Bitcoin Bank{" "}
            <Anchor href="https://coinbits.app" target="_blank" underline>
              @coinbits
            </Anchor>
          </p>
        </Container>
      </Section>
      <Section className="rounded-t-3xl relative overflow-hidden bg-gradient-to-b from-gray-50/30 to-white dark:from-gray-800 dark:to-gray-900 flex flex-col space-y-24">
        <Logos />
        <Testimonials />
      </Section>
    </>
  );
}
