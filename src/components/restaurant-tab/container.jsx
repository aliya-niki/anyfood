import { useSelector } from "react-redux";
import { Tab } from "../tab/component";
import { selectRestaurantById } from "../../redux/entities/restaurant/selectors";

export const RestaurantTabContainer = ({ id, onTabClick, isActive }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  if (!restaurant) {
    return;
  }

  const { name } = restaurant;
  
  return (
    <Tab title={name} onTabClick={onTabClick} isActive={isActive} />
  );
};
