import Anchor from "@/components/anchor";
import Section from "@/components/section";
import Logos from "@/structures/logos";
import { Testimonials } from "@/structures/testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Section className="flex justify-center items-center h-4/5">
        <div className="container flex flex-col gap-y-6 justify-center items-center text-center">
          <div className="relative w-40 md:w-60">
            <div className="absolute -z-10 left-0 top-4 w-full h-full bg-gradient-to-r from-pink-500 to-yellow-500 blur-xl rounded-full opacity-50"></div>
            <Image
              src="/me.jpg"
              width={300}
              height={300}
              alt="Picture of Rachouan Rejeb"
              className="rounded-full w-full"
            />
          </div>
          <h1 className="font-rachouan font-bold text-6xl sm:text-8xl">
            A designer, developer and illustrator from Belgium.
          </h1>
          <p className="text-2xl text-gray-700 dark:text-white/90">
            Former freelancer, Currently building a Bitcoin Bank{" "}
            <Anchor href="https://coinbits.app" target="_blank">
              @coinbits
            </Anchor>
          </p>
        </div>
      </Section>
      <Section className="bg-white rounded-sm">
        <Testimonials />
      </Section>
    </>
  );
}
