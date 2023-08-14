import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import "../../index.css";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  let filterTopRatedRestaurants = () => {
    let filteredTopRestaurants = listOfRestaurants.filter((res) => {
      return res.avgRating > 4;
    });
    console.log(<Body />);
    setListOfRestaurants(filteredTopRestaurants);
  };

  return (
    <div className="body">
      <div className="filter ">
        <button className="filter-btn" onClick={filterTopRatedRestaurants}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container ">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} /> // passing Key is very important for optimization. Explained in notes :)
        ))}
        {/* round brackets used, since we want to return JSX for each object in resList. */}
      </div>
    </div>
  );
};
export default Body;
