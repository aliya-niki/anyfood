/* eslint-disable react/jsx-key */
import { RestaurantTabContainer } from "../restaurant-tab/container";

export const RestaurantTabs = ({ restaurantsIds, onTabClick, activeTabId }) => {
  return (
    <div>
      {restaurantsIds?.map((id) => {
        return (
          <RestaurantTabContainer 
            id={id} 
            onTabClick={() => onTabClick(id)} 
            isActive={activeTabId === id}
          />
        );
      })}
    </div>
  );
};
