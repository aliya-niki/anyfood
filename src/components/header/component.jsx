import { ScrollProgressBar } from "../scroll-progress-bar/component";
import { ThemeButton } from "../theme-button/component";
import { UserContainer } from "../user/container";

export const Header = ({ children }) => {
  return (
    <header>
      <ScrollProgressBar />
      <a href="#">Главная</a>
      <ThemeButton />
      <UserContainer />
      {children}
    </header>
  );
};
