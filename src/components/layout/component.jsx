import { useState } from "react";
import { Footer } from "../footer/component"
import { Header } from "../header/component"
import { ThemeButton } from "../theme-button/component";
import { ThemeContext } from "../../contexts/theme";
import { User } from "../user/component";
import { CurrentUserContext } from "../../contexts/current-user";

export const Layout = ({children}) => {
  const [theme, setTheme] = useState('light');
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <CurrentUserContext.Provider value={{currentUser, setCurrentUser}}>
        <div>
          <Header>
            <ThemeButton />
            <User />
          </Header>
          <main>
            {children}
          </main>
          <Footer />
        </div>
      </CurrentUserContext.Provider>
    </ThemeContext.Provider>
  );
};
