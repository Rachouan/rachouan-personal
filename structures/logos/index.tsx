"use client";

import Logo from "@/components/logo";
import anime from "animejs/lib/anime.es.js";
import { useEffect } from "react";

export default function Logos() {
  useEffect(() => {}, []);
  return (
    <section className="py-12 flex-nowrap overflow-hidden flex gap-x-6 justify-center items-center text-center">
      {[...Array(20)].map((_, i) => (
        <Logo
          key={i}
          className="fill-gray-900 opacity-30 dark:fill-white hover:opacity-90 w-24 h-24"
        />
      ))}
    </section>
  );
}
