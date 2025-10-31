// This is how you import a named export.
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const Biryani = new URL("../assets/biryani.jpg", import.meta.url);
  // optional chaining feature in javascript
  const {
    cloudinaryImageId,
    info,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
    name,
    sla,
    id,
  } = resData?.info;
  console.log(id);
  // here i have got my info object.

  return (
    <div
      className="m-3 p-4 w-[340px] h-[500px] rounded-3xl max-md:h-[1400px] max-md:w-[1000px] max-md:rounded-[30px] max-md:mb-20"
      style={{
        background: "linear-gradient(180deg, #fff0 -31.53%, #f5474750 303.75%)",
        boxShadow: "0 0 10px whitesmoke",
      }}
    >
      <img
        className="rounded-lg h-60 w-80 max-md:w-[1100px] max-md:h-[750px]"
        src={id === 456789 ? Biryani : CDN_URL + cloudinaryImageId}
        alt="Restaurant"
      />
      <div className="card-info-container">
        <h3 className="font-bold py-2 text-lg text-[#f65f5f] font-serif max-md:font-bold max-md:text-7xl max-md:mt-6">
          {name}
        </h3>
        <h4 className="text-white font-bold font-serif text-lg max-md:font-bold max-md:text-6xl max-md:mt-6">
          {cuisines.join(", ")}
        </h4>
        <h4 className="text-white font-bold text-lg max-md:text-6xl max-md:mt-6">
          {avgRating}
        </h4>
        <h4 className="text-white font-bold text-lg max-md:text-6xl max-md:mt-6">
          {costForTwo}
        </h4>
        <h4 className="text-white font-bold text-lg max-md:text-6xl max-md:mt-6">
          {sla.deliveryTime} minutes
        </h4>
      </div>
    </div>
  );
};

// Higher order component.
// it takes input as the RestaurantCard.
// and the output will be the RestaurantCard promoted.
// little bit complex try to dry run it once again
export const withPromotedLabel = (RestaurantCard) => {
  // console.log(RestaurantCard);
  return (props) => {
    return (
      // this component is basically an enhanced version of this Restaurant Card
      <div>
        <label className="text-white absolute bg-red-950 ml-3 p-2 w-24 rounded-lg">
          Promoted
        </label>
        {/* {console.log(props)} */}
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
