import { useState, useEffect, useContext } from "react";
import "../../index.css";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const { updateUserName } = useContext(UserContext);
  updateUserName("Rahul");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  useEffect(() => {
    fetchData();
  }, []);

  let fetchData = async () => {
    let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
    let jsonData = await data.json();
    setListOfRestaurants(
      jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
        jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    ); // keep chaging it's index to 4 to 5 or check where data is coming. it keeps changing. If [5] is null, it'll take from [4]
    setFilteredRestaurant(
      jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
        jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    ); // keep chaging it's index 4 to 5 or check where data is coming. it keeps changing. If [5] is null, it'll take from [4]
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
      <div className="res-container flex flex-wrap content-start">
        {filteredRestaurant.length > 0 ? ( // conditional rendering, intially out listofRestaurants data is empty
          filteredRestaurant.map((restaurant) => (
            <Link key={restaurant?.info?.id} to={"/restaurants/" + restaurant?.info?.id}>
              {/* If the Restaurant is promoted, then add promoted label on it.*/}
              {restaurant?.info?.promoted ? <RestaurantCardPromoted resData={restaurant} /> : <RestaurantCard resData={restaurant} />}
            </Link>
          ))
        ) : (
          <Shimmer />
        )}
      </div>
    </div>
  );
};
export default Body;
