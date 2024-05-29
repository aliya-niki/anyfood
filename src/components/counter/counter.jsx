export const Counter = ({ value, increment, decrement, min = 0, max = 5 }) => {
  return (
    <>
      <button type="button" onClick={decrement} disabled={value===min}> - </button>
      <span> {value} </span>
      <button type="button" onClick={increment} disabled={value===max}> + </button>
    </>
  );
};
