import { useMemo, useState } from "react";
import { ThemeContext } from "./context";

export const ThemeContextProvider = ({ children }) => {
  const [ theme, setTheme ] = useState('light');

  const contextValue = useMemo(
    () => ({theme, changeTheme: () => setTheme(theme === 'dark' ? 'light' : 'dark')}), 
    [theme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
