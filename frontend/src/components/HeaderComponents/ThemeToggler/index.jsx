import { useState } from "react";

export const ThemeToggler = () => {
  const [theme, setTheme] = useState("light");

  return (
    <div>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Toggle theme</button>
    </div>
  );
};
