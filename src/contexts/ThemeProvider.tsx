import { createContext, useState } from "react";

export interface ThemeContextInterface {
  theme: 'light' | 'dark';
  changeTheme: () => void
}

export const ThemeContext = createContext<ThemeContextInterface>(null!);

export function ThemeProvider ({ children }: { children:JSX.Element }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  
  function changeTheme () {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      { children }
    </ThemeContext.Provider>
  )
}
