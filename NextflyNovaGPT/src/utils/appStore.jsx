import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import elementalReducer from "./ElementalMovieSlice";
import mainMovieReducer from "./mainMoviesSlice";
import configReducer from "./configSlice";
import gptReducer from "./gptSlice";

const appStore = configureStore({
  reducer: {
    // Adding userSlice
    user: userReducer,
    // adding moviesSlice
    movies: moviesReducer,
    // adding elementalMovie as Main whose trailer will run behind the background
    mainMovie: elementalReducer,
    // adding main movies of the routes
    mainMovies: mainMovieReducer,
    // adding changeLanguage slice
    config: configReducer,
    // adding gptMovies that the user will search
    gpt: gptReducer,
  },
});

export default appStore;
