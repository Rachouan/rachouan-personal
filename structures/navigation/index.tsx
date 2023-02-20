"use client";

import useDarkMode from "@/hooks/use-dark-mode";
import Link from "next/link";
import Button from "../../components/button";
import Container from "../../components/container";
import { IconMoon, IconSun } from "../../components/icons";
import Logo from "../../components/logo";

export function Navigation() {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-gray-50/[.8] dark:bg-gray-900/80 backdrop-blur-md transition">
      <Container>
        <div className="flex justify-between items-center h-20 border-b border-gray-100 dark:border-gray-600">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="w-10 h-10 fill-gray-900 dark:fill-white" />
            <h1 className="font-rachouan font-semibold text-2xl hidden md:inline">
              Rachouan
            </h1>
          </Link>

          <ul className="flex items-center gap-4">
            <button onClick={() => setTheme(colorTheme)}>
              {colorTheme === "light" ? (
                <IconSun className="w-4 h-4" />
              ) : (
                <IconMoon className="w-4 h-4" />
              )}
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
