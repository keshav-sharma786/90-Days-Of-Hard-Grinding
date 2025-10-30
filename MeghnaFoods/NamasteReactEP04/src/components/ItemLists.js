import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemLists = (props) => {
  const { items } = props;
  const Swiggy = new URL("../assets/swiggy.png", import.meta.url);

  const dispatch = useDispatch();

  const handleAddItems = (item) => {
    dispatch(addItem(item));
  };

  return (
    // Removed max-w entirely to let it stretch.
    // Increased horizontal padding 'px-4' for smaller screens, 'md:px-8' for medium and up
    <div className="container mx-auto px-4 md:px-8 max-md:w-[800px]"> 
      {items.map((item) => {
        return (
          <div
            key={item.card.info.id}
            // Ensure flex-col for small, flex-row for medium.
            // Increased vertical margin 'my-6' for more spacing between items
            className="p-4 my-6 border-white border-b-4 md:border-b-8 text-left flex flex-col md:flex-row justify-between items-start md:items-center bg-white bg-opacity-10 rounded-lg shadow-xl" // Increased shadow
          >
            {/* Left section: Name, Price, Description */}
            {/* w-full for mobile, and w-3/4 on medium, w-4/5 on large to give more space */}
            <div className="w-full md:w-3/4 lg:w-4/5 order-2 md:order-1 pr-0 md:pr-6"> {/* Increased right padding */}
              <div className="text-white py-2">
                {/* Made fonts even larger and bolder for maximum impact */}
                <span className="font-serif font-extrabold text-xl sm:text-2xl md:text-3xl leading-tight max-md:font-extrabold max-md:text-5xl"> 
                  {item.card.info.name}
                </span>
                <span className="text-white font-extrabold text-xl sm:text-2xl md:text-3xl ml-2 max-md:text-5xl"> 
                  {" "}
                  - ₹
                  {(item.card.info.price ?? item.card.info.defaultPrice) / 100}
                </span>
              </div>
              {/* Adjusted description text size and line height */}
              <p className="text-base sm:text-lg text-gray-300 mt-3 mb-6 md:mb-0 leading-normal max-md:font-bold max-md:text-4xl"> {/* Increased margins */}
                {item.card.info.description}
              </p>
            </div>

            {/* Right section: Image + Button */}
            {/* w-full for mobile, w-1/4 on medium, w-1/5 on large for remaining space */}
            <div className="w-full md:w-1/4 lg:w-1/5 pt-3 pb-6 md:p-4 flex flex-col items-center justify-center order-1 md:order-2 self-center md:self-auto"> {/* Adjusted padding */}
              <img
                src={
                  item.card.info.imageId
                    ? CDN_URL + item.card.info.imageId
                    : Swiggy
                }
                // Increased default image size, and for sm/md screens even more
                className="rounded-xl w-[2000px]" 
                style={{ boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.6)" }} // Even stronger shadow
                alt={item.card.info.name}
              />

              {/* <button
                // Increased button width and font size for prominent display
                className="p-3 px-8 w-40 bg-[#f65f5f] shadow-lg rounded-md text-white mt-6 hover:bg-[#e04a4a] transition-colors duration-200 font-extrabold text-lg sm:text-xl border border-transparent hover:border-white" 
                onClick={() => handleAddItems(item)}
              >
                Add +
              </button> */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemLists;