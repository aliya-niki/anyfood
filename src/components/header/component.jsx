import { ScrollProgressBar } from "../scroll-progress-bar/component";

export const Header = ({children}) => {
  return (
    <header>
      <ScrollProgressBar />
      <a href="#">Главная</a>
      {children}
    </header>
  );
};
