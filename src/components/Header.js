import "../../index.css";
import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  let [btnName, setbtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const data = useContext(UserContext);
  // console.log(data.loggedInUser);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg mb-2 px-2">
      <div className="logo-container">
        <img className="logo w-36 h-24" src={LOGO_URL} />
      </div>
      <div className="nav-items flex items-center">
        <ul className="flex p-4">
          {onlineStatus === true ? <li className="onlineText">online</li> : <li className="offlineText">offline</li>}

          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4">Cart</li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>

          <button
            className="login px-4"
            onClick={() => {
              btnName == "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li>{data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
