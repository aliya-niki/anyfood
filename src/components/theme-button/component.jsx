import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme";
import { Button } from "../button/component";

export const ThemeButton = () => {
  const {theme, setTheme} = useContext(ThemeContext);

  return (
    <Button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      Переключи тему
    </Button>
  );
};
