import "../../index.css";

const RestaurantCard = (props) => {
  const resData = props.resData.info;
  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#F0F0F0",
      }}
    >
      <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + resData.cloudinaryImageId} alt="biryani-logo" />
      <h3>{resData?.name}</h3>
      <h4>{resData?.cuisines.slice(0, 3).join(",")}</h4>
      <h4>{resData?.avgRating} stars</h4>
      <h4>{resData?.sla?.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
