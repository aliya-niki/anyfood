import { useState } from "react";
import { Restaurant } from "../restaurant/component";
import { RestaurantTabs } from "../restaurant-tabs/component";

export const Restaurants = ({ restaurants }) => {
  const [active, setActive] = useState(restaurants[0]);

  const handleTabClick = (id) => {
    if (active.id === id) {
      return;
    }

    const activeRestaurant = restaurants.find((item) => item.id === id);
    setActive(activeRestaurant);
  }

  return (
    <div>
      <RestaurantTabs 
        restaurants={restaurants} 
        onTabClick={handleTabClick}
        activeTabId={active.id} 
      />
      <Restaurant restaurant={active}/>
      <Restaurant restaurant={active}/>
      <Restaurant restaurant={active}/>
      <Restaurant restaurant={active}/>
      <Restaurant restaurant={active}/>
      <Restaurant restaurant={active}/>
    </div>
  );
};
