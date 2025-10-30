// Custom Hook

import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopTVShows } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopTVShows = () => {
  // dispatching an action
  // Fetch data from TMDB API and update store
  const dispatch = useDispatch();
  const topTVShows = useSelector((store) => store.movies.topTVShows);
  // here I will make my api call for now playing movie's data
  const getTopTVShows = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addTopTVShows(json.results));
  };
  // i will basically call the above function inside my useEffect Hook
  useEffect(() => {
    !topTVShows && getTopTVShows();
  }, []);
};

export default useTopTVShows;
