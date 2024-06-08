import { CurrentUserContextProvider } from "../../contexts/current-user/provider";
import { ThemeContextProvider } from "../../contexts/theme/provider";
import { restaurants } from "../../mocks/mock";
import { Layout } from "../layout/component";
import { Restaurants } from "../restaurants/component";

export const App = () => {
  return (
    <ThemeContextProvider>
      <CurrentUserContextProvider>
        <Layout>
          { Boolean(restaurants.length) && <Restaurants restaurants={restaurants} />}
        </Layout>
      </CurrentUserContextProvider>
    </ThemeContextProvider>
  );
};
