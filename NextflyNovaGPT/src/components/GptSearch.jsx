import Header from "./Header";
import banner3 from "../assets/banner3.jpg";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10 w-screen">
        <img src={banner3} className="h-screen object-cover w-screen" alt="NextFlyNova" />
      </div>
      <Header />
      <div>
        {/* <Header /> */}
        
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
