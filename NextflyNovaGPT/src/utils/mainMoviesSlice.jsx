import { createSlice } from "@reduxjs/toolkit";

const mainMovieSlice = createSlice({
  name: "mainMovies",
  initialState: {
    HanumanMovie: null,
    HitMovie: null,
  },
  reducers: {
    addHanumanMovie: (state, action) => {
      state.HanumanMovie = action.payload;
    },
    addHitMovie: (state, action) => {
      state.HitMovie = action.payload;
    },
  },
});

export const { addHanumanMovie, addHitMovie } = mainMovieSlice.actions;

export default mainMovieSlice.reducer;
