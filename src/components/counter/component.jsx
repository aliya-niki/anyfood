import { Button } from "../button/component";

export const Counter = ({ value, increment, decrement, min = 0, max = 5 }) => {
  return (
    <>
      <Button onClick={decrement} disabled={value===min}> - </Button>
      <span> {value} </span>
      <Button onClick={increment} disabled={value===max}> + </Button>
    </>
  );
};
