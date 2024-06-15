import { useDispatch } from "react-redux";
import { CurrentUserContextProvider } from "../../contexts/current-user/provider";
import { ThemeContextProvider } from "../../contexts/theme/provider";
import { Layout } from "../layout/component";
import { RestaurantsContainer } from "../restaurants/container";
import { useEffect } from "react";
import { getRestaurants } from "../../redux/entities/restaurant/thunks/get-restaurants";

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch]);

  return (
    <ThemeContextProvider>
      <CurrentUserContextProvider>
        <Layout>
          <RestaurantsContainer />
        </Layout>
      </CurrentUserContextProvider>
    </ThemeContextProvider>
  );
};
