import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeController = () => {
  const [theme, setTheme] = useState<"codelight" | "glassloop">("codelight");
  useEffect(() => {
    const saved = localStorage.getItem("theme") as "codelight" | "glassloop";
    if (saved) setTheme(saved);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <div>
      <label className="swap swap-rotate">
        <input
          type="checkbox"
          checked={theme === "glassloop"}
          onChange={() =>
            setTheme(theme === "codelight" ? "glassloop" : "codelight")
          }
          value={"codelight"}
        />
        <Sun className="swap-off h-6 w-6" />
        <Moon className="swap-on h-6 w-6" />
      </label>
    </div>
  );
};

export default ThemeController;
