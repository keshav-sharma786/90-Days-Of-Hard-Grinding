import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Body from "./components/Body";
import Login from "./components/Login";
import Error from "./components/Error";
import SignUp from "./components/SignUp";
import SearchMedicines from "./components/SearchMedicines";
import AboutUs from "./components/AboutUs";
import ChatBot from "./components/ChatBot";
import AdminLogin from "./components/AdminLogin";
import Chat from "./components/Chat";

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/getstarted",
        element: <SearchMedicines />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/MedicinoBot",
        element: <ChatBot />,
      },
      {
        path: "/admin",
        element: <AdminLogin />,
      },
       {
        path: "/chat",
        element: <Chat />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
