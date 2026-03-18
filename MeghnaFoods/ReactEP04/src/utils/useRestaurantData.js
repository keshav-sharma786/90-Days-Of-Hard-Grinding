// Creating a Custom Hook
import { RES_API } from "./constants";
import { useState, useEffect } from "react";

const useRestaurantData = () => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(RES_API);
      const json = await data.json();
      console.log(json);
      setRestaurantInfo(json);
    } catch (error) {
      console.log(error);
    }
  };

  return restaurantInfo;
};

export default useRestaurantData;
