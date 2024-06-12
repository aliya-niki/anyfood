import { Button } from "../button/component";

export const Tab = ({ title, onTabClick, isActive }) => {
  return (
    <Button onClick={onTabClick} disabled={isActive}>
      {title}
    </Button>
  );
};
