import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectRestaurantDishesIds } from "../../redux/entities/restaurant/selectors";
import { getDishesById } from "../../redux/entities/dish/thunks/get-dishes-by-id";
import { Menu } from "./component";

export const MenuContainer = ({ id }) => {
  const dispatch = useDispatch();
  const dishesIds = useSelector((state) => selectRestaurantDishesIds(state, id));

  useEffect(() => {
    dispatch(getDishesById(id));
  }, [dispatch, id]);

  if (!dishesIds) {
    return;
  }

  return (
    <Menu dishesIds={dishesIds} />
  )
};
