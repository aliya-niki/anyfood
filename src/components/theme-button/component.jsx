import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme/context";
import { Button } from "../button/component";

export const ThemeButton = () => {
  const { changeTheme } = useContext(ThemeContext);

  return (
    <Button onClick={() => changeTheme()}>
      Переключи тему
    </Button>
  );
};
