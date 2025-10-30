import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath, movieId }) => {
  if (!posterPath) return null;
  return (
    <div className="w-36 md:w-48 pr-4 flex gap-3">
      <Link to={`/videoPlay/${movieId}`}>
        {/* {title === "Top Trending Movies" && (
        <div className="text-3xl">1</div>
      )} */}
        <img
          alt="Movie Card"
          // src={posterPath ? IMG_CDN_URL + posterPath : netflix_alt}
          src={IMG_CDN_URL + posterPath}
          className="transform transition-transform duration-400 ease-in-out hover:scale-110"
        />
        {/* inserting link tag here */}
        {/* <Link to="/videoPlay"></Link> */}
      </Link>
    </div>
  );
};

export default MovieCard;
