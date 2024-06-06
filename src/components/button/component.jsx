import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme/context";

export const Button = ({children, ...attributes}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <button 
      className={`btn btn--${theme}`}
      type='button'
      {...attributes}
    >
      {children}
    </button>
  );
};
