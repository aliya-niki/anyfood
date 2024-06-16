import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantDishesIds } from "../../restaurant/selectors";
import { selectDishIds } from "../selectors";

export const getDishesById = createAsyncThunk(
  "dish/getDishesById",
  async ({ restaurantId }) => {
    const response = await fetch(`http://localhost:3001/api/dishes?restaurantId=${restaurantId}`);

    return response.json();
  },
  {
    condition: ({forceRefetch = false, restaurantId} = {}, { getState }) => {
      if (forceRefetch) {
        return true;
      }

      const state = getState();
      const loadedDishes = selectDishIds(state);
      const restaurantLoadedDishes = selectRestaurantDishesIds(state, restaurantId);

      return restaurantLoadedDishes.some((dishId) => !loadedDishes.includes(dishId));
    }
  },
);
