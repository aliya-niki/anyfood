import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme";

export const ThemeButton = () => {
  const {theme, setTheme} = useContext(ThemeContext);

  return (
    <button 
      className={`btn btn--${theme}`} 
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      Переключи тему
    </button>
  );
};
