import { createSlice } from "@reduxjs/toolkit";
import { normalizedUsers } from "../../../mocks/normalized-mock";


export const userSlice = createSlice({
  name: 'user',
  initialState: {
    entities: normalizedUsers.reduce((acc, user) => {
      acc[user.id] = user;
      return acc;
    }, {}),
    ids: normalizedUsers.map(({id}) => id),
  },  
});
