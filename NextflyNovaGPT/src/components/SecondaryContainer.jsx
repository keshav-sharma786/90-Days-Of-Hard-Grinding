import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
// import { Carousel } from "@material-tailwind/react";

const SecondaryContainer = ({ pathname }) => {
  const movies = useSelector((store) => store.movies);
  // if (!movies) {
  //   return;
  // }
  return (
    movies.nowPlayingMovies && (
      <div className="z-20 bg-[#121212] w-screen">
        {/*
       MovieList - Popular
          - MovieCards * n
       MovieList - NowPLaying
       MovieList - Trending
       MovieList - Horror 
       */}
        {pathname === "/browse" && (
          <div className="relative mt-0 md:-mt-40">
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />

            <MovieList
              title={"Top Trending Movies"}
              movies={movies.trendingMovies}
            />
            <MovieList title={"Popular"} movies={movies.popularMovies} />
            <MovieList
              title={"Top Rated Movies"}
              movies={movies.topRatedMovies}
            />
            <MovieList
              title={"Upcoming Movies"}
              movies={movies.upcomingMovies}
            />
          </div>
        )}
        {pathname === "/tvShow" && (
          <>
            <MovieList title={"Top TV Shows"} movies={movies.topTVShows} />
            <MovieList
              title={"Top Indian Movies"}
              movies={movies.topIndianMovies}
            />
          </>
        )}
        {pathname === "/indianMovies" && (
          <>
            <MovieList
              title={"Popular Indian Movies"}
              movies={movies.topSouthMovies}
            />
          </>
        )}
      </div>
    )
  );
};

export default SecondaryContainer;
