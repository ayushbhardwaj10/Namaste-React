import "../../index.css";

const RestaurantCard = (props) => {
  const resData = props.resData.info;
  return (
    <div className="res-card m-4 p-2 w-[300px] rounded-lg bg-gray-50 hover:bg-gray-200 cursor-pointer">
      <img
        className="res-logo rounded-lg h-40 w-full"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/" + resData.cloudinaryImageId}
        alt="biryani-logo"
      />
      <h3 className="font-bold py-4 text-lg">{resData?.name}</h3>
      <h4>{resData?.cuisines.slice(0, 3).join(",")}</h4>
      <h4>{resData?.avgRating} stars</h4>
      <h4>{resData?.sla?.slaString}</h4>
    </div>
  );
};

// Higher order component
// input - Restaurant Card. Output - Restaurant Card with promoted label.

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
        <RestaurantCard resData={props.resData} />
      </div>
    );
  };
};

export default RestaurantCard;
