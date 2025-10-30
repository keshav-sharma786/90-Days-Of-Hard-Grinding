// Custom Hook

import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  // dispatching an action
  // Fetch data from TMDB API and update store
  const dispatch = useDispatch();
   
    const popularMovies = useSelector(
    (store) => store.movies.popularMovies
  );

  // here I will make my api call for now playing movie's data
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addPopularMovies(json.results));
  };
  // i will basically call the above function inside my useEffect Hook
  useEffect(() => {
    !popularMovies &&  getPopularMovies();
  }, []);
};

export default usePopularMovies;
