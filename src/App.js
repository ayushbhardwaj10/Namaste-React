import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import "../index.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About.js";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu.js";
import UserContext from "./utils/UserContext.js";
const Grocery = lazy(() => import("./components/Grocery.js"));

// Parent Component where all the components are rendered
const AppLayout = () => {
  const [userName, setUserName] = useState();

  // sample authitencation code
  useEffect(() => {
    // some response from Authentical API returns the name of the user.
    const responseName = "Ayush";
    setUserName(responseName);
  }, []);

  return (
    <UserContext.Provider
      value={{
        loggedInUser: userName,
        updateUserName: (name) => {
          setUserName(name);
        },
      }}
    >
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />, // means App.js component. It's function name is "AppLayout". Look above.
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resID",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
