import { useState } from "react";

export const Dish = ({ dish }) => {
  const [count, setCount] = useState(0);

  const plusHandler = () => {
    setCount(count + 1);
  };

  const minusHandler = () => {
    setCount(count - 1);
  };

  return (
    <p>
      {dish.name} 
      <button type="button" onClick={minusHandler} disabled={count===0}> - </button>
      <span> {count} </span>
      <button type="button" onClick={plusHandler} disabled={count===5}> + </button>
    </p>
  );
};
