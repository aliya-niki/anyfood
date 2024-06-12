import { useContext } from "react";
import { useCount } from "../../hooks/use-count";
import { Counter } from "../counter/component";
import { CurrentUserContext } from "../../contexts/current-user/context";

export const Dish = ({ dish }) => {
  const { count, increment, decrement } = useCount();
  const { currentUser } = useContext(CurrentUserContext);
  const { name } = dish;
  
  return (
    <p>
      {name}
      { Boolean(currentUser) && <Counter value={count} increment={increment} decrement={decrement} />}
    </p>
  );
};
