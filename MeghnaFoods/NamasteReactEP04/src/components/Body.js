import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { RES_API } from "../utils/constants";
// import resList from "../utils/mockData";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useRestaurantData from "../utils/useRestaurantData";
import useOnlineStatus from "../utils/useOnlineStatus";
// import UserContext from "../utils/UserContext";

// body component rerender
const Body = () => {
  // Local state variable / Super energetic powerful react variable

  // useState return an array
  // this is array destructuring
  const arr = useState([]);
  // other way of doing this
  // const [listOfRestaurants, setListOfRestaurants] = arr;
  const listOfRestaurants = arr[0];
  const setListOfRestaurants = arr[1];

  // we are here just deconstructing it on the fly.
  // const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  // creating a state only for the filtered restaurants searched by the user
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  // alternative way
  // I have put in the data of restaurant only
  // Normal javascript variable.
  // calling the useEffect Hook.
  // useEffect will basically takes the 2 arguments
  // i will create one more state variable and i will bind that state variable to my input box
  // whenever state variables update, react triggers a recociliation cycle(re-rennders the component).
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  // console.log(RestaurantCardPromoted);
  // Implementing a custom Hook for fetching the data of all the restaurantCards
  const json = useRestaurantData();

  // what will be rendered first???
  // useEffect(() => {
  // console.log("useEffect Called");
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  // const data = await fetch(
  //   "https://corsproxy.io/https://swiggy-api-4c740.web.app/swiggy-api.json"
  // );
  // const data = await fetch(RES_API);
  // converting the data to json
  // const json = await data.json();
  // console.log(json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  // getting rid of the CORS Policy
  // without the use of any extension
  // visit CorsProxy.io
  // it will basically help you to bypass this cors error.
  // console.log(
  //   json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
  //     ?.restaurants
  // );
  // Optional Chaining
  // console.log(json);
  // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0].info.name);
  // setListOfRestaurants(
  //   json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  // );
  // setListOfRestaurants(
  //   json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
  //     ?.restaurants
  // );
  // setFilteredRestaurant(
  //   json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
  //     ?.restaurants
  // );
  useEffect(() => {
    if (json) {
      const restaurants =
        json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setListOfRestaurants(restaurants);
      setFilteredRestaurant(restaurants);
    }
  }, [json]);
  // console.log(listOfRestaurants);
  // custom hook useOnlineStatus
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1 style={{ color: "white" }}>
        Looks Like you're offline!! Please check your internet connection.
      </h1>
    );
  }

  // const { setUserName, loggedInUser } = useContext(UserContext);

  // Ans => Body rendered
  // console.log("Body Rendered");

  // This is also known as the conditional Rendering.Rendering on the basis of some condition is called Conditional Rendering.
  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }
  // return <Shimmer />
  // Conditional Rendering and Ternary operator
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black w-64 max-md:w-96 max-md:h-20"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // Filter the restaurant cards and update the ui
              // searchText
              // console.log(searchText);
              // filtering out the restaurants
              // using filter method in javascript
              const filteredRestaurants = listOfRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              // now we have to update our UI with this filtered Restaurant
              setFilteredRestaurant(filteredRestaurants);
            }}
            className="px-4 py-1 w-24 bg-green-100 m-4 rounded-md max-md:w-48 max-md:h-16 max-md:font-extrabold"
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-md max-md:w-96 max-md:font-extrabold max-md:h-20 max-md:text-3xl"
            onClick={() => {
              // console.log("button clicked");
              // on clicking the button, i basically want to filter out the top rated restaurants only.
              // Basically here I have to write the filter logic here.
              // updating the state variable

              const filteredList = listOfRestaurants.filter((res) => {
                return res.info.avgRating > 4.3;
              });
              // console.log(listOfRestaurants);
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        {/* <div className="m-4 p-4 flex items-center">
          <label className="text-white">UserName</label>
          <input className="border border-white ml-4 w-60 p-1" onChange={(e) => {
            setUserName(e.target.value)
          }} value={loggedInUser}></input>
        </div> */}
      </div>
      <div className="flex justify-center flex-wrap gap-2 items-center max-md:w-[330vw]">
        {/* Restaurant Card Component */}
        {/* passing the props to a component */}
        {filteredRestaurant.map((resCard) => {
          return (
            <Link key={resCard.info.id} to={"/restaurants/" + resCard.info.id}>
              {/* if the restaurant is promoted then add a promoted label to it, we will create a card that will give us the card with the label on it */}
              {resCard.info.avgRating > 4.3 ? (
                <RestaurantCardPromoted resData={resCard} />
              ) : (
                <RestaurantCard resData={resCard} />
              )}
            </Link>
          );
        })}
        {/* <RestaurantCard resName="KFC" cuisine="Burger, Fast Food" /> */}
      </div>
    </div>
  );
};

export default Body;
// Be Curious about little small things !!!!!!
