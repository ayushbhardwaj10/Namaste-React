import "../../index.css";

const RestaurantCard = (props) => {
  const resData = props.resData;
  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#F0F0F0",
      }}
    >
      <img className="res-logo" src={resData.imgURL} alt="biryani-logo" />
      <h3>{resData.resName}</h3>
      <h4>{resData.cuisine}</h4>
      <h4>{resData.avgRating} stars</h4>
      <h4>{resData.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
