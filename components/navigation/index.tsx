import Link from "next/link";
import Button from "../button";
import Container from "../container";
import Logo from "../logo";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/[.8] backdrop-blur-md ">
      <Container>
        <div className="flex justify-between items-center border-b">
          <Link href="/" className="flex py-4 items-center gap-1">
            <Logo className="w-8 h-8" />
            <h1 className="font-medium text-2xl">Rachouan</h1>
          </Link>

          <ul className="flex items-center gap-4">
            <li>
              <Link href="/me">about</Link>
            </li>
            <li>
              <Button as={"a"} href="/contact">
                Reach Out
              </Button>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
}
