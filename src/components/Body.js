import { useState, useEffect } from "react";
import "../../index.css";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  let fetchData = async () => {
    let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
    let jsonData = await data.json();
    setListOfRestaurants(jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
    setFilteredRestaurant(jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
  };
  let filterTopRatedRestaurants = () => {
    let filteredTopRestaurants = listOfRestaurants.filter((res) => {
      return res.avgRating > 4;
    });
    console.log(<Body />);
    filteredRestaurant(filteredTopRestaurants);
  };
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
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
        <button className="filter-btn" onClick={filterTopRatedRestaurants}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container ">
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
