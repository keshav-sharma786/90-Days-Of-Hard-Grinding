// this custom hook will basically fetch the the movie details of the Elemental Movie

import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addElementalMovie } from "../utils/ElementalMovieSlice";

// this custom hook will also store the elemental movie details inside the Redux Store

const useElementalMovie = () => {
  // for adding the elemental movie inside the redux store, i will basically dispatch an action
  const dispatch = useDispatch();
  const getElementalMovieData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/976573",
      API_OPTIONS
    );
    //  const data = await fetch("https://api.themoviedb.org/3/movie/976573", API_OPTIONS02);
    console.log(data);
    const json = await data.json();
    console.log(json);
    dispatch(addElementalMovie(json));
  };

  useEffect(() => {
    getElementalMovieData();
  }, []);
};

export default useElementalMovie;
