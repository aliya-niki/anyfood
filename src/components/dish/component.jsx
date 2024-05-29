import { useCount } from "../../hooks/use-count";
import { Counter } from "../counter/component";

export const Dish = ({ dish }) => {
  const { count, increment, decrement } = useCount();
  
  return (
    <p>
      {dish.name} 
      <Counter value={count} increment={increment} decrement={decrement} />
    </p>
  );
};
