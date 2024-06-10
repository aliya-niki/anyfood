import { useState } from "react";
import { Restaurant } from "../restaurant/component";
import { RestaurantTabs } from "../restaurant-tabs/component";
import { useSelector } from "react-redux";

export const Restaurants = () => {
  const restaurantsIds = useSelector((state) => state.restaurant.ids);
  const [activeId, setActiveId] = useState(restaurantsIds[0]);

  const handleTabClick = (id) => {
    if (activeId === id) {
      return;
    }

    const activeRestaurantId = restaurantsIds.find((item) => item === id);
    setActiveId(activeRestaurantId);
  }

  if (!restaurantsIds.length) {
    return;
  }

  return (
    <div>
      <RestaurantTabs
        onTabClick={handleTabClick}
        activeTabId={activeId} 
      />
      <Restaurant restaurantId={activeId}/>
    </div>
  );
};
