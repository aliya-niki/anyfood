import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/current-user";
import { useCount } from "../../hooks/use-count";
import { Counter } from "../counter/component";

export const Dish = ({ dish }) => {
  const { count, increment, decrement } = useCount();
  const {currentUser} = useContext(CurrentUserContext);
  
  return (
    <p>
      {dish.name}
      { Boolean(currentUser) && <Counter value={count} increment={increment} decrement={decrement} />}
    </p>
  );
};
