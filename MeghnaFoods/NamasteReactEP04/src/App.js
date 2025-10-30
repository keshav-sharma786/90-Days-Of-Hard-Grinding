import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import { lazy, Suspense, useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Home from "./components/Home";
import { useState, useEffect } from "react";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

// import Grocery from "./components/Grocery";
// import RestaurantMenu from "./components/RestaurantMenu";

// this stylecard is a javascript object
// now how to write javascript in JSX, using curly braces
// const styleCard = {
//   backgroundColor: "#3f1911"
// }

const Trial = (props) => {
  console.log(props);
  return <h1 style={{ color: "white" }}>{props.name}</h1>;
};

const Tutorial = () => {
  return <Trial name="Keshav" age="22" />;
};

// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// On Demand Loading
// Dynamic Import
const Grocery = lazy(() => {
  return import("./components/Grocery");
});

const AppLayout = () => {
  // authentication code written
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = {
      name: "User",
    };
    setUserName(data.name);
  }, []);
  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app">
        {/* Header Component */}
        <Header />
        {/* if path = "/" */}
        {/* <Body /> */}
        {/* only Body component will be loaded inside the Outlet, about and contact component will not be loaded inside the Outlet */}
        {/* if path = "/about" */}
        {/* <About /> */}
        {/* Only About Component will be loaded inside the Outlet, Body and Contact component will not get loaded inside the Outlet */}
        {/* if path = "/contact" */}
        {/* <Contact /> */}
        {/* Only Contact Component will be loaded inside the Outlet, Body and About component will not loaded inside the outlet*/}
        <Outlet />
      </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/body",
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
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1 style={{ color: "white" }}>Loading ....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      // Dynamic Route
      // Dynamic Routing
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
