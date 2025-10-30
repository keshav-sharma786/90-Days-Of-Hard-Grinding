import { createSlice } from "@reduxjs/toolkit";

const ElementalMovieSlice = createSlice({
  name: "Elemental",
  initialState: {
    elementalMovie: null,
  },
  reducers: {
    addElementalMovie: (state, action) => {
      state.elementalMovie = action.payload;
    },
  },
});

export const { addElementalMovie } = ElementalMovieSlice.actions;

export default ElementalMovieSlice.reducer;
