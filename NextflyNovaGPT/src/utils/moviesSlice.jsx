import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies: null,
    trendingMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    topTVShows: null,
    topIndianMovies: null,
    topSouthMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    // add trailer video
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    // add Popular Movies
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    // add Trending Movies
    addTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },
    // add Top Rated Movies
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    // add upcoming Movies
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    // add Top Rated TV Shows
    addTopTVShows: (state, action) => {
      state.topTVShows = action.payload;
    },
    // adding top rated indian movies
    addTopIndianMovies: (state, action) => {
      state.topIndianMovies = action.payload;
    },
    // adding Top rated south movies
    addTopSouthMovies: (state, action) => {
      state.topSouthMovies = action.payload;
    }
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addTrendingMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addTopTVShows,
  addTopIndianMovies,
  addTopSouthMovies,
} = moviesSlice.actions;

export default moviesSlice.reducer;
