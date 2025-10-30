// Creating a Custom Hook
import { RES_API } from "./constants";
import { useState, useEffect } from "react";

const useRestaurantData = () => {
    const [restaurantInfo, setRestaurantInfo] = useState(null);
    
    useEffect(() => {
       fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(RES_API);
        const json = await data.json();
        // console.log(json);
        setRestaurantInfo(json);
    }

    return restaurantInfo;
}

export default useRestaurantData;
