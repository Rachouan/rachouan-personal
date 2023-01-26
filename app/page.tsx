import Anchor from "@/components/anchor";
import Section from "@/components/section";
import Balancer from "react-wrap-balancer";

export default function Home() {
  return (
    <Section className="flex justify-center items-center h-4/5">
      <div className="container flex flex-col gap-y-6 justify-center items-center text-center">
        <h1 className="font-rachouan font-bold text-6xl sm:text-8xl">
          <Balancer ratio={0.5}>
            A designer, developer, and illustrator from Belgium.
          </Balancer>
        </h1>
        <p className="text-2xl text-gray-700 dark:text-white/90">
          Former freelancer, Currently building a Bitcoin Bank{" "}
          <Anchor href="https://coinbits.app" target="_blank">
            @coinbits
          </Anchor>
        </p>
      </div>
    </Section>
  );
}
