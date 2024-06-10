/* eslint-disable react/jsx-key */
import { useSelector } from "react-redux";
import { Tab } from "../tab/component";

export const RestaurantTabs = ({ onTabClick, activeTabId }) => {
  const restaurants = useSelector((state) => Object.values(state.restaurant.entities));

  return (
    <div>
      {restaurants?.map(({name, id}) => {
        return (
          <Tab 
            name={name} 
            onTabClick={() => onTabClick(id)} 
            isActive={activeTabId === id}
          />
        );
      })}
    </div>
  );
};
