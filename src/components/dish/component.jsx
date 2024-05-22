import { useState } from "react";

export const Dish = ({ dish }) => {
  const [count, setCount] = useState(0);

  const plusHandler = () => {
    if (count >= 5) {
      return;
    }
    setCount(count + 1);
  };

  const minusHandler = () => {
    if (count <= 0) {
      return;
    }
    setCount(count - 1);
  };

  return (
    <p>
      {dish.name}
      <button type="button" onClick={minusHandler}>-</button>
      <span>{count}</span>
      <button type="button" onClick={plusHandler}>+</button>
    </p>
  );
};
