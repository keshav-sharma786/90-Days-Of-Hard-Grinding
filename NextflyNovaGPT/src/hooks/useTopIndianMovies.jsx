// Custom Hook

import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopIndianMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopIndianMovies = () => {
  // dispatching an action
  // Fetch data from TMDB API and update store
  const dispatch = useDispatch();
  const topIndianMovies = useSelector(store => store.movies.topIndianMovies);
  // here I will make my api call for now playing movie's data
  const getTopIndianMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?sort_by=vote_average.desc&vote_count.gte=100&with_origin_country=IN&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addTopIndianMovies(json.results));
  };
  // i will basically call the above function inside my useEffect Hook
  useEffect(() => {
   !topIndianMovies && getTopIndianMovies();
  }, []);
};

export default useTopIndianMovies;
