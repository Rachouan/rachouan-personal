import Link from "next/link";
import Button from "../../components/button";
import Container from "../../components/container";
import Logo from "../../components/logo";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-gray-50/10 dark:bg-gray-900/50 backdrop-blur-md transition border-b border-gray-100 dark:border-gray-600">
      <Container>
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="w-10 h-10 fill-gray-900 dark:fill-white" />
            <h1 className="font-rachouan font-semibold text-2xl hidden md:inline">
              Rachouan
            </h1>
          </Link>

          <ul className="flex items-center gap-4">
            <li>
              <Button as={"a"} href="mailto:info@achouan.com">
                {`Let's Talk`}
              </Button>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
}
