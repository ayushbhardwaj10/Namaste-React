import { useState, useEffect } from "react";
import "../../index.css";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    console.log("body.js useEffect() called");
    fetchData();
  }, []);

  let fetchData = async () => {
    let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
    let jsonData = await data.json();
    setListOfRestaurants(jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []); // keep chaging it's index to 4 to 5 or check where data is coming. it keeps changing
    setFilteredRestaurant(jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []); // keep chaging it's index 4 to 5 or check where data is coming. it keeps changing
  };
  let filterTopRatedRestaurants = () => {
    let filteredTopRestaurants = listOfRestaurants.filter((res) => {
      return res.avgRating > 4;
    });
    console.log(<Body />);
    filteredRestaurant(filteredTopRestaurants);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1>Look like you are offline, please check your internet connection</h1>;

  return (
    <div className="body">
      <div className="filter flex items-center">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="search-box border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="p-2 bg-green-100 m-10 rounded-lg"
            onClick={() => {
              // Filter the restaurant and update the UI
              // get the searchText
              const updatedlistOfRestaurants = listOfRestaurants.filter((res) => {
                return res?.info?.name.toLowerCase().includes(searchText.toLowerCase());
              });
              setFilteredRestaurant(updatedlistOfRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button className="filter-btn px-4 py-2 bg-gray-100 rounded-lg" onClick={filterTopRatedRestaurants}>
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap justify-center">
        {filteredRestaurant.length > 0 ? ( // conditional rendering, intially out listofRestaurants data is empty
          filteredRestaurant.map((restaurant) => (
            <Link key={restaurant?.info?.id} to={"/restaurants/" + restaurant?.info?.id}>
              <RestaurantCard resData={restaurant} />
            </Link>
          )) // passing Key is very important for optimization. Explained in notes :)
        ) : (
          <Shimmer />
        )}
        {/* round brackets used, since we want to return JSX for each object in resList. */}
      </div>
    </div>
  );
};
export default Body;
