import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getReviewsById } from "./thunks/get-reviews-by-id";

const entityAdapter = createEntityAdapter();

export const reviewSlice = createSlice({
  name: 'review',
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) => builder.addCase(getReviewsById.fulfilled, (state, {payload}) => {
    entityAdapter.setMany(state, payload);
  }),
});
