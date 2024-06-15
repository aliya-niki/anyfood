import { createAsyncThunk } from "@reduxjs/toolkit";

export const getReviewsById = createAsyncThunk(
  "review/getReviewsById",
  async (id) => {
    const response = await fetch(`http://localhost:3001/api/reviews?restaurantId=${id}`);

    return response.json();
  }
);
