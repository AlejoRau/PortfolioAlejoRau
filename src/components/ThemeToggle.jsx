import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(
        () => localStorage.getItem("theme") === "dark"
    );

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDarkMode]);
    const toggleTheme = () => {
        setIsDarkMode((prev) => {
            const next = !prev;
            localStorage.setItem("theme", next ? "dark" : "light");
            return next;
        });
    }

    return (
      <button onClick={toggleTheme} aria-label="Cambiar tema" className={cn("fixed top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-hidden"
      )}>
        {isDarkMode ? (
            <Sun className="h-6 w-6 text-yellow-300" />
        ) : (
            <Moon className="h-6 w-6 text-blue-900" />
        )}
      </button>
    ) 
}