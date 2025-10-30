import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  // fethcing trailer video && updating the store with the trailer video data

  const dispatch = useDispatch();
  // fetch trailer Video
  console.log(movieId);
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );

    const json = await data.json();
    console.log(json.results);

    const filterData = json.results.filter((video) => {
      return video.type === "Trailer";
    });

    const trailer = filterData.length ? filterData[0] : json.results[0];
    // this trailer here will basically contain the youtube video key.
    console.log(trailer);
    // now let us also add this trailer into our redux store
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMovieVideos();
  }, [movieId, dispatch]);
};

export default useMovieTrailer;
