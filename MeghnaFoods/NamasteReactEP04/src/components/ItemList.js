import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = (props) => {
  const { items } = props;
  const Swiggy = new URL("../assets/swiggy.png", import.meta.url);

  const dispatch = useDispatch();

  const handleAddItems = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => {
        return (
          <div
            key={item.card.info.id}
            className="p-2 m-2 border-white border-b-8 text-left flex flex-col md:flex-row justify-between"
          >
            {/* Left section: Name, Price, Description */}
            <div className="w-full md:w-9/12">
              <div className="text-white py-2">
                <span className="font-serif font-extrabold text-lg max-md:text-5xl">
                  {" "}
                  {/* Changed to font-extrabold */}
                  {item.card.info.name}
                </span>
                <span className="text-white font-extrabold text-lg md:text-xl max-md:text-5xl">
                  {" "}
                  {/* Changed to font-extrabold */} - ₹
                  {(item.card.info.price ?? item.card.info.defaultPrice) / 100}
                </span>
              </div>
              <p className="text-xs md:text-sm text-gray-300 max-md:text-2xl max-md:leading-snug">
                {item.card.info.description}
              </p>
            </div>

            {/* Right section: Image + Button */}
            <div className="w-full md:w-3/12 p-4 flex flex-col items-center mt-4 md:mt-0">
              <img
                src={
                  item.card.info.imageId
                    ? CDN_URL + item.card.info.imageId
                    : Swiggy
                }
                className="rounded-xl w-40 h-40 md:w-48 md:h-48 object-cover shadow-lg" // Increased image size
                style={{ boxShadow: "0px 0px 10px white" }}
                alt={item.card.info.name}
              />

              <button
                className="p-2 w-20 bg-[#f65f5f] shadow-lg rounded-md text-white mt-2 hover:bg-[#e04a4a] transition-colors duration-200 max-md:text-4xl max-md:w-32"
                onClick={() => handleAddItems(item)}
              >
                Add +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
