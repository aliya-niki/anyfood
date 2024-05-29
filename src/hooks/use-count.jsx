import { useCallback, useState } from "react";

export const useCount = ({ initialValue = 0 } = {}) => {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => {
    return setCount((previousCount) => previousCount + 1);
  }, []);

  const decrement = useCallback(() => {
    return setCount((previousCount) => previousCount - 1);
  }, []);

  return { count, increment, decrement };
};
