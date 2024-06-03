import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme";

export const Counter = ({ value, increment, decrement, min = 0, max = 5 }) => {
  const {theme} = useContext(ThemeContext);

  return (
    <>
      <button className={`btn btn--${theme}`} type="button" onClick={decrement} disabled={value===min}> - </button>
      <span> {value} </span>
      <button className={`btn btn--${theme}`} type="button" onClick={increment} disabled={value===max}> + </button>
    </>
  );
};
