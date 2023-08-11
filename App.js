import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

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
      <h4>{resData.avgRating}</h4>
      <h4>{resData.deliveryTime} minutes</h4>
    </div>
  );
};
resList = [
  {
    id: 101,
    resName: "Meghana Foods",
    cuisine: "Biryani, North India, Asia",
    avgRating: "4.2",
    deliveryTime: "38",
    imgURL: "https://b.zmtcdn.com/data/pictures/chains/1/50691/0435a03f4d2017a0a64d90b279c2fa63.jpg",
  },
  {
    id: 102,
    resName: "KFC",
    cuisine: "Chicken,Junk Food,Burger",
    avgRating: "4.5",
    deliveryTime: "20",
    imgURL: "https://s3-media0.fl.yelpcdn.com/bphoto/yd4NSzoBySgnf__6kRNzRg/o.jpg",
  },
  {
    id: 103,
    resName: "Dominoes Pizza",
    cuisine: "Pizza, Junk Food,Burger",
    avgRating: "5",
    deliveryTime: "30",
    imgURL: "https://s3-media0.fl.yelpcdn.com/bphoto/ks_iWjMCEnUZpXA6tMcoug/o.jpg",
  },
];
s1 = "hi";
s2 = "ayush";
const Body = () => {
  return (
    <div className="body">
      <div className="Search ">Search</div>
      <div className="res-container ">
        {resList.map(
          (
            restaurant //  round brackets used, since we want to return JSX for each object in resList.
          ) => (
            <RestaurantCard key={restaurant.id} resData={restaurant} /> // passing Key is very important for optimization. Explained in notes :)
          )
        )}
      </div>
    </div>
  );
};
// Parent Component where all the components are rendered
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
