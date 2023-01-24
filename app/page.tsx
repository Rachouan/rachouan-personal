import Anchor from "@/components/anchor";
import Section from "@/components/section";
import Balancer from "react-wrap-balancer";

export default function Home() {
  return (
    <Section className="flex justify-center items-center h-4/5">
      <div className="container flex flex-col gap-y-6 justify-center items-center text-center">
        <h1 className="text-4xl sm:text-6xl font-semibold">
          <Balancer>
            A designer, developer, and illustrator from Belgium.
          </Balancer>
        </h1>
        <p className="text-2xl text-gray-700">
          Former freelancer, Currently building a Bitcoin Bank{" "}
          <Anchor href="https://coinbits.app" target="_blank">
            @coinbits
          </Anchor>
        </p>
      </div>
    </Section>
  );
}
