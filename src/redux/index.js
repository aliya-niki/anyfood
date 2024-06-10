import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./entities/user";
import { restaurantSlice } from "./entities/restaurant";
import { dishSlice } from "./entities/dish";
import { reviewSlice } from "./entities/review";

export const store = configureStore({
  reducer: combineSlices(restaurantSlice, dishSlice, reviewSlice, userSlice),
});
