/* eslint-disable react/jsx-key */
import { useState } from "react";
import { Restaurant } from "../restaurant/component";

export const Restaurants = ({ restaurants }) => {
  const [active, setActive] = useState(restaurants[0]);

  const handleTabClick = (evt) => {
    const id = evt.target.dataset.index;

    if (active.id === id) {
      return;
    }

    const activeRestaurant = restaurants.find((item) => item.id === id);
    setActive(activeRestaurant);
  }

  const tabs = restaurants.map((item) => (
    <button type="button" onClick={handleTabClick} data-index={item.id}>{item.name}</button>
  ));

  return (
    <div>
      {tabs}
      <Restaurant restaurant={active}/>
    </div>
  );
};
