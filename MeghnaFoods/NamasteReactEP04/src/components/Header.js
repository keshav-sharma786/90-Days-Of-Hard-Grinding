import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const arr = useState("Login");
  const btnNameReact = arr[0];
  const setBtnNameReact = arr[1];
  // console.log("Header rendered");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  // very very important
  // if no dependency array => useEffect is called on every render
  // if dependency array is empty = [] => useEffect is called only on the initial render of the header component, and it will ba called just once.
  // if dependency array is[btnNameReact] => useEffect is called everytime btnNameReact is updated.
  // useEffect(() => {
  //   console.log("useEffect called");
  // }, [btnNameReact]);

  // Selector
  // Subscribing to the store using a selector
  const cartItems = useSelector((store) => {
    return store.cart.items;
  });
  // console.log(cartItems);
  return (
    <div className="flex text-white justify-between bg-red-950 shadow-lg max-md:font-bold text-lg max-md:w-[330vw] items-center max-md:text-2xl">
      <div className="logo-container">
        <img src={LOGO_URL} className="w-24" alt="Burger" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/body">Explore</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">Cart - ({cartItems.length} items)</Link>
          </li>
          <li
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
            className="px-4"
          >
            {btnNameReact}
            {/* <li className="px-4"></li> */}
          </li>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
