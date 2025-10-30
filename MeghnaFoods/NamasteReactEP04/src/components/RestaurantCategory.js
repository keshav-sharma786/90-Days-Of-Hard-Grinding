import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = (props) => {
  // console.log(props);
  const { data, dummy, index } = props;
  // console.log(data);
  // I do'not want RestaurantCategory to have it's own state, so i will basically take away that power from the RestaurantCategory
  const [showItems, setShowItems] = useState(false);
  let countHandleClick = 0;
  const handleClick = () => {
    // expanding and collapsing of accordian
    setShowItems(!showItems);
  };
  return (
    <div className="text-white text-center max-md:w-[300vw] mt-10 max-md:mt-32 max-md:text-center">
      {/* Accordian Header */}
      <div className="w-6/12 mx-auto my-4 shadow-lg p-4 rounded-lg max-md:w-[250vw] max-md:ml-40 max-md:mb-52">
        <div
          className="flex justify-between cursor-pointer h-20 border-b-8 border-b-white"
          onClick={handleClick}
        >
          <span className="font-bold text-lg max-md:text-4xl">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="max-md:text-4xl">⬇️</span>
        </div>
        {/* Accordian Body */}
        {showItems && <ItemList items={data.itemCards} dummy={dummy} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
