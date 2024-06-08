import { Button } from "../button/component";

export const Tab = ({ name, onTabClick, isActive }) => {
  return (
    <Button
      onClick={() => onTabClick()} 
      disabled={isActive}
    >
      {name}
    </Button>
  );
};
