// Custom Hook

import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopSouthMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopSouthMovies = () => {
  // dispatching an action
  // Fetch data from TMDB API and update store
  const dispatch = useDispatch();
  // here I will make my api call for now playing movie's data
  const topSouthMovies = useSelector(store => store.movies.topSouthMovies);
  const getTopSouthMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?with_origin_country=IN&sort_by=popularity.desc",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addTopSouthMovies(json.results));
  };
  // i will basically call the above function inside my useEffect Hook
  useEffect(() => {
   !topSouthMovies && getTopSouthMovies();
  }, []);
};

export default useTopSouthMovies;
