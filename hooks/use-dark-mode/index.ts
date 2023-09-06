"use client"
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

type Theme = "dark" | "light"

interface ThemeStore {
  theme: Theme,
  setTheme: (theme: Theme) => void
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: "light",
      setTheme: (theme: Theme) => set({ theme }),
    }),
    {
      name: 'rachouan-theme',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
)

export default function useTheme() {
  const { theme, setTheme } = useThemeStore((state) => state);
  return [theme, setTheme] as const;
}
