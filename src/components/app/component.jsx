import { Provider } from "react-redux";
import { CurrentUserContextProvider } from "../../contexts/current-user/provider";
import { ThemeContextProvider } from "../../contexts/theme/provider";
import { Layout } from "../layout/component";
import { store } from "../../redux";
import { RestaurantsContainer } from "../restaurants/container";

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <CurrentUserContextProvider>
          <Layout>
            <RestaurantsContainer />
          </Layout>
        </CurrentUserContextProvider>
      </ThemeContextProvider>
    </Provider>
  );
};
