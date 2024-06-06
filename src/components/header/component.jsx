import { ScrollProgressBar } from "../scroll-progress-bar/component";
import { User } from "../user/component";
import { ThemeButton } from "../theme-button/component";

export const Header = ({ children }) => {
  return (
    <header>
      <ScrollProgressBar />
      <a href="#">Главная</a>
      <ThemeButton />
      <User />
      {children}
    </header>
  );
};
