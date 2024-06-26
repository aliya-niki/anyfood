import { createSlice } from "@reduxjs/toolkit";
import { normalizedReviews } from "../../../mocks/normalized-mock";

export const reviewSlice = createSlice({
  name: 'review',
  initialState: {
    entities: normalizedReviews.reduce((acc, review) => {
      acc[review.id] = review;
      return acc;
    }, {}),
    ids: normalizedReviews.map(({ id }) => id),
  },
});
