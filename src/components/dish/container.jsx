import { useSelector } from "react-redux";
import { Dish } from "../dish/component";
import { selectDishById } from "../../redux/entities/dish/selectors";

export const DishContainer = ({ dishId }) => {
  const dish = useSelector((state) => selectDishById(state, dishId));

  if (!dish) {
    return;
  }

  return (
    <Dish dish={dish} />
  );
};
