import { Provider } from "react-redux";
import { CurrentUserContextProvider } from "../../contexts/current-user/provider";
import { ThemeContextProvider } from "../../contexts/theme/provider";
import { Layout } from "../layout/component";
import { Restaurants } from "../restaurants/component";
import { store } from "../../redux";

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <CurrentUserContextProvider>
          <Layout>
            <Restaurants />
          </Layout>
        </CurrentUserContextProvider>
      </ThemeContextProvider>
    </Provider>
  );
};
