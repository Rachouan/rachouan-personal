"use client";

import useDarkMode from "@/hooks/use-dark-mode";
import Link from "next/link";
import Button from "../button";
import Container from "../container";
import { IconMoon, IconSun } from "../icons";
import Logo from "../logo";

export function Navigation() {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-50/[.8] dark:bg-gray-900/80 backdrop-blur-md transition">
      <Container>
        <div className="flex justify-between items-center h-20 border-b dark:border-gray-600">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="w-10 h-10 fill-gray-900 dark:fill-white" />
            <h1 className="font-medium text-2xl hidden md:inline">Rachouan</h1>
          </Link>

          <ul className="flex items-center gap-4">
            <li>
              <Link href="/me">about</Link>
            </li>
            <button onClick={() => setTheme(colorTheme)}>
              {colorTheme === "light" ? <IconSun /> : <IconMoon />}
            </button>
            <li>
              <Button as={"a"} href="/contact">
                {`Let's Talk`}
              </Button>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
}
