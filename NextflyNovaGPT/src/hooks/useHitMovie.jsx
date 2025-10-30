// this custom hook will basically fetch the the movie details of the Hanuman South Movie

import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addHitMovie } from "../utils/mainMoviesSlice";

// this custom hook will also store the Hanuman movie details inside the Redux Store.

const useHitMovie = () => {
  // for adding the elemental movie inside the redux store, i will basically dispatch an action
  const dispatch = useDispatch();
  const getHitMovieData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/1060046",
      API_OPTIONS
    );
    //  const data = await fetch("https://api.themoviedb.org/3/movie/976573", API_OPTIONS02);
    console.log(data);
    const json = await data.json();
    console.log(json);
    dispatch(addHitMovie(json));
  };

  useEffect(() => {
    getHitMovieData();
  }, []);
};

export default useHitMovie;
