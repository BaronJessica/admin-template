"use client";
import { createContext, useContext, useState } from "react";

type Theme = "dark" | "";

interface AppContextProps {
  theme?: Theme;
  toggleTheme?: () => void;
}
const AppContext = createContext<AppContextProps>({});

export const AppProvider = ({ children }: any) => {
  const [theme, setTheme] = useState<Theme>("dark");

  function toggleTheme() {
    setTheme(theme === "" ? "dark" : "");
  }

  return (
    <AppContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
export const useGlobalContext = () => useContext(AppContext);
