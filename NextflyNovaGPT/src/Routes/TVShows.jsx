import Header from "../components/Header";
import MainContainer from "../components/MainContainer";
import SecondaryContainer from "../components/SecondaryContainer";
import useTopTVShows from "../hooks/useTopTVShows";
import useTopIndianMovies from "../hooks/useTopIndianMovies";

import Browse from "../components/Browse";

const TVShows = () => {
  // const { pathname } = useLocation();
  // console.log(pathname);
  useTopTVShows();
  useTopIndianMovies();
  return (
    <div>
      {/* <Header />
      <MainContainer />
      <SecondaryContainer pathname={pathname} /> */}
      <Browse />
    </div>
  );
};

export default TVShows;
