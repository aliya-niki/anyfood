import { useDispatch, useSelector } from "react-redux";
import { selectRestaurantIds } from "../../redux/entities/restaurant/selectors";
import { Restaurants } from "./component";
import { useEffect } from "react";
import { getRestaurants } from "../../redux/entities/restaurant/thunks/get-restaurants";

export const RestaurantsContainer = () => {
  const restaurantsIds = useSelector(selectRestaurantIds);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch]);

  if (!restaurantsIds) {
    return;
  }

  return (
    <Restaurants restaurantsIds={restaurantsIds} />
  );
};
