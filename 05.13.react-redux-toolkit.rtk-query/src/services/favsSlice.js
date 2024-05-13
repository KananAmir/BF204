import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "favorite",
  initialState: {
    favs: [],
  },
  reducers: {
    toggle(state, action) {
      console.log(action);
      const found = state.favs.find((q) => q.id === action.payload.id);
      if (found) {
        state.favs = state.favs.filter((q) => q.id !== action.payload.id);
      } else {
        state.favs = [...state.favs, action.payload];

        console.log(action.payload);
      }
    },
  },
});

export const { toggle } = counterSlice.actions;
export default counterSlice.reducer;
