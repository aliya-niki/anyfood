import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getDishesById } from "./thunks/get-dishes-by-id";

const entityAdapter = createEntityAdapter();

export const dishSlice = createSlice({
  name: 'dish',
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) => builder.addCase(getDishesById.fulfilled, (state, {payload}) => {
    entityAdapter.setMany(state, payload);
  }),
});
