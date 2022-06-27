import { createContext, useState } from "react";

interface ThemeContextInterface {
  theme: "light" | "dark";
  changeTheme: (theme: "light" | "dark") => void;
}

export const ThemeContext = createContext<ThemeContextInterface>(null!);

export const ThemeProvider = ({ children }: { children: JSX.Element }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const changeTheme = (theme: "light" | "dark") => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
