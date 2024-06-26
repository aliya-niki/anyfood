import { useState } from "react";
import { RestaurantTabsContainer } from "../restaurant-tabs/container";
import { RestaurantContainer } from "../restaurant/container";

export const Restaurants = ({ restaurantsIds }) => {
  const [activeId, setActiveId] = useState(restaurantsIds[0]);

  const handleTabClick = (id) => {
    if (activeId === id) {
      return;
    }

    const activeRestaurantId = restaurantsIds.find((item) => item === id);
    setActiveId(activeRestaurantId);
  }

  return (
    <div>
      <RestaurantTabsContainer
        onTabClick={handleTabClick}
        activeTabId={activeId} 
      />
      <RestaurantContainer restaurantId={activeId}/>
    </div>
  );
};
