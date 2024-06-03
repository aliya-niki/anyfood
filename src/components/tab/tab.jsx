import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme";

export const Tab = ({ name, onTabClick, isActive }) => {
  const {theme} = useContext(ThemeContext);

  return (
    <button 
      type="button" 
      onClick={() => onTabClick()} 
      disabled={isActive}
      className={`btn btn--${theme}`}
    >
      {name}
    </button>
  );
};
