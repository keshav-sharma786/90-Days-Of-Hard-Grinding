import IndianMovies from "../Routes/IndianMovies";
import TVShows from "../Routes/TVShows";
import Browse from "./Browse";
import Login from "./Login";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import GptSearch from "./GptSearch";
import VideoPlay from "./VideoPlay";
// import { useEffect } from "react";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "../utils/firebase";
// import { useDispatch } from "react-redux";
// import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    // path for the TV Shows
    {
      path: "/tvShow",
      element: <TVShows />,
    },
    // path for Indian Movies
    {
      path: "/indianMovies",
      element: <IndianMovies />,
    },
    // path for GPT Search
    {
      path: "/gptSearch",
      element: <GptSearch />,
    },
    // path for youtube video play if the user clicks on any of the moviecard
    {
      path: "/videoPlay/:movieId",
      element: <VideoPlay />,
    },
  ]);

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       const { uid, email, displayName, photoURL } = user;
  //       // here i will update my redux store
  //       dispatch(
  //         addUser({
  //           uid: uid,
  //           email: email,
  //           displayName: displayName,
  //           photoURL: photoURL,
  //         })
  //       );
  //       navigate("/browse");
  //     } else {
  //       // User is signed out
  //       // ...
  //       dispatch(removeUser());
  //       navigate("/");
  //     }
  //   });
  // }, []);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
