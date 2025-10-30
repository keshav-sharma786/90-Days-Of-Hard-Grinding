// Custom Hook

import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrendingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTrendingMovies = () => {
  // dispatching an action
  // Fetch data from TMDB API and update store
  const dispatch = useDispatch();
  // here I will make my api call for now playing movie's data
  const trendingMovies = useSelector((store) => store.movies.trendingMovies);
  const getTrendingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addTrendingMovies(json.results));
  };
  // i will basically call the above function inside my useEffect Hook
  useEffect(() => {
    !trendingMovies && getTrendingMovies();
  }, []);
};

export default useTrendingMovies;
