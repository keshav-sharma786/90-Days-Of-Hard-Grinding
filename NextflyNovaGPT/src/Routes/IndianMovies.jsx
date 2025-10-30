import Header from "../components/Header";
import MainContainer from "../components/MainContainer";
import SecondaryContainer from "../components/SecondaryContainer";
import useTopTVShows from "../hooks/useTopTVShows";
import useTopIndianMovies from "../hooks/useTopIndianMovies";
import Browse from "../components/Browse";


const IndianMovies = () => {
  
  // console.log(pathname);
  useTopTVShows();
  useTopIndianMovies();
  return (
    <div>
      <Browse />
    </div>
  );
};

export default IndianMovies;
