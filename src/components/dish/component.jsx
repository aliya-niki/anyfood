import { useContext } from "react";
import { useCount } from "../../hooks/use-count";
import { Counter } from "../counter/component";
import { CurrentUserContext } from "../../contexts/current-user/context";
import { useSelector } from "react-redux";

export const Dish = ({ dishId }) => {
  const { count, increment, decrement } = useCount();
  const { currentUser } = useContext(CurrentUserContext);
  const dish = useSelector((state) => state.dish.entities[dishId]);

  if (!dish) {
    return;
  }

  const { name } = dish;
  
  return (
    <p>
      {name}
      { Boolean(currentUser) && <Counter value={count} increment={increment} decrement={decrement} />}
    </p>
  );
};
