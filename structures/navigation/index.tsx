import Link from "next/link";
import Button from "../../components/button";
import Container from "../../components/container";
import Logo from "../../components/logo";
import { Socials } from "../socials";

export function Navigation() {
  return (
    <nav className="sticky top-0 left-0 z-50 w-full bg-gray-50/10 dark:bg-gray-900/50 backdrop-blur-md transition border-b border-gray-900/5 dark:border-gray-50/5">
      <div id="banner"></div>
      <Container>
        <div className="flex justify-between items-center h-14 md:h-16">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="size-10 fill-gray-900 dark:fill-white" />
            <h1 className="font-rachouan font-semibold text-2xl hidden md:inline">
              Rachouan
            </h1>
          </Link>

          <nav className="flex items-center gap-4">
            <Socials />
            <Button
              as={"a"}
              href="/book"
              variant="primary"
              className="hidden md:inline-flex"
            >
              {`Let's Talk`}
            </Button>
          </nav>
        </div>
      </Container>
    </nav>
  );
}
