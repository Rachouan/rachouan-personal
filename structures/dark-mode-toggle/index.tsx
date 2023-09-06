"use client"

import Anchor from "@/components/anchor";
import useTheme from "@/hooks/use-dark-mode"
import { IconMoon, IconSun } from "@tabler/icons-react";

export default function DarkModeToggle() {

  const [theme, setTheme] = useTheme();

  const isDark = theme === "dark";

  return <Anchor className="flex justify-center items-center p-1 w-10 h-10 rounded-full bg-gray-50/10 hover:bg-gray-50 dark:bg-gray-900/10 dark:hover:bg-gray-900/20 transition" onClick={() => setTheme(isDark ? "light" : "dark")}>{isDark ? <IconSun /> : <IconMoon />}</Anchor>
}
