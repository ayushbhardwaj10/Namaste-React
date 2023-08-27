import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resID } = useParams();

  const resInfo = useRestaurantMenu(resID);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } = resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(",")}</p>
      <p>{costForTwoMessage}</p>
      <ul>
        {itemCards.map((val) => {
          let menuData = val?.card?.info;
          return (
            <li key={menuData?.id}>
              {menuData?.name} - Rs.{menuData.price || menuData.defaultPrice}
            </li>
          );
        })}
        {/* <li>Biryani</li>
        <li>Burgers</li>
        <li>Diet coke</li> */}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
