import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);

  // useParams is basically a hook, which is given to us by the react-router-dom.

  const { resId } = useParams();
  console.log(resId);

  // Props Drilling Concept
  // Taking the example of dummy data
  // now i want this dummy data into my itemsList.
  const dummy = "Dummy Data";

  // Custom Hooks
  const resInfo = useRestaurantMenu(resId);
  console.log(resInfo);

  const [showIndex, setShowIndex] = useState(null);
  // making api call
  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  // const data = await fetch(
  //   `https://food-wagon-backend.onrender.com/api/menu?lat=25.61011402528211&lng=85.116419903934&restaurantId=${resId}`
  // );
  // const data = await fetch(MENU_API + resId);

  // "https://food-wagon-backend.onrender.com/api/menu?lat=25.61011402528211&lng=85.116419903934&restaurantId=328777"
  // const json = await data.json();

  // console.log(
  //   json.data.cards[1].card.card.gridElements.infoWithStyle
  //     .restaurants[0].info
  // );
  // console.log(json);
  // setResInfo(json);

  if (resInfo === null) {
    return <Shimmer />;
  }
  // console.log(resInfo?.data?.data?.cards[2]?.card?.card?.info);
  // deconstructing the clumsy data
  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info;

  // deconstructing the itemcards
  // console.log(
  //   resInfo?.data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
  //     ?.card?.card?.itemCards
  // );

  // it is basically an array of objects
  // console.log(
  //   resInfo?.data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  // );

  // i basically want all the item cards as well as the different categories

  // so for this i will basically use the Array.filter method. we are trying to filter all the cards inside it who are having the attribute @type: "itemCategory"

  // these all categories are of a particular restaurant only based on the resId

  const categories =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) => {
        return (
          c?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  // console.log(categories);

  const itemCards =
    resInfo?.data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
      ?.card?.card?.itemCards;

  // console.log(itemCards);

  // console.log(name);
  // console.log(cuisines);
  return (
    <div className="text-center">
      <h1 className="text-white font-bold my-6 max-md:text-5xl">{name}</h1>
      <p className="text-white font-bold text-lg max-md:text-4xl">
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      {/* <h3 style={{color: "white"}}>{costForTwo}</h3> */}
      {/* Let us now build the accordian from scratch */}
      {/* Categories And Accordian. */}
      {/* we will basically loop of the categories array of object and for each category we will build our accordian */}
      {categories.map((category, index) => {
        return (
          // Controlled Component
          <RestaurantCategory
            data={category?.card?.card}
            key={category?.card?.card?.title}
            // showItems={index === showIndex ? true : false}
            // setShowIndex={() => {
            //   setShowIndex(index);
            // }}
            index={index}
            dummy={dummy}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
