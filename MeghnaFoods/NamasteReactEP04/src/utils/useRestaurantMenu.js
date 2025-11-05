// Custom Hook
// This is basically the good way of writing the code.
import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  // it's job is to return the restaurant's information based on the restaurant's id
  console.log(resId);
  const [resInfo, setResInfo] = useState(null);

  // fetch data

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    // console.log(data);
    // const json = await data.json();
    const json = await data.json();
    console.log(json);
    setResInfo(json);
  };

  return resInfo;
};

export default useRestaurantMenu;

