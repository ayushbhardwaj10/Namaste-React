import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resID } = useParams();

  const resInfo = useRestaurantMenu(resID);

  const [showIndex, setShowIndex] = useState(0);

  // console.log("ShowIndex :" + showIndex);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } = resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories = resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="text-center">
      <h1 className="font-bold m-10 text-2xl">{name}</h1>
      <p className="font-bold text-lg">{cuisines.join(",")}</p>
      {categories.map((category, index) => (
        // controlled component
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => (index == showIndex ? setShowIndex(null) : setShowIndex(index))}
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
