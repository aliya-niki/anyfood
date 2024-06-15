import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../../redux/entities/restaurant/selectors";
import { Restaurants } from "./component";

export const RestaurantsContainer = () => {
  const restaurantsIds = useSelector(selectRestaurantIds);
  
  if (!restaurantsIds) {
    return;
  }

  return (
    <Restaurants restaurantsIds={restaurantsIds} />
  );
};
