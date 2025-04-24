"use client"

import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export default function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="sticky top-0 z-10 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-8 h-8 rounded-full"></div>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">CryptoTracker</h1>
        </div>
        <Button variant="outline" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </header>
  )
}
