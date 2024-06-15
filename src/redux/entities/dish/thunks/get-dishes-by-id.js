import { createAsyncThunk } from "@reduxjs/toolkit";

export const getDishesById = createAsyncThunk(
  "dish/getDishesById",
  async (id) => {
    const response = await fetch(`http://localhost:3001/api/dishes?restaurantId=${id}`);

    return response.json();
  }
);
