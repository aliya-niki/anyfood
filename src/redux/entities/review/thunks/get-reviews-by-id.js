import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantReviewsIds } from "../../restaurant/selectors";
import { selectReviewIds } from "../selectors";

export const getReviewsById = createAsyncThunk(
  "review/getReviewsById",
  async ({ restaurantId }) => {
    const response = await fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`);

    return response.json();
  },
  {
    condition: ({forceRefetch = false, restaurantId} = {}, { getState }) => {
      if (forceRefetch) {
        return true;
      }

      const state = getState();
      const loadedReviews = selectReviewIds(state);
      const restaurantLoadedReviews = selectRestaurantReviewsIds(state, restaurantId);

      return restaurantLoadedReviews.some((reviewId) => !loadedReviews.includes(reviewId));
    }
  },
);
