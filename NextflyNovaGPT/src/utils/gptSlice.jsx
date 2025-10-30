import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gptMovies",
  initialState: {
    movieResults: null,
    movieNames: null,
  },
  reducers: {
    addGptMovie: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});

export const { addGptMovie } = gptSlice.actions;

export default gptSlice.reducer;
