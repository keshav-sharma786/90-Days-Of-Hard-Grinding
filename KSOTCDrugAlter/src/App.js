// src/App.js
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
import AdminDashboard from "./components/AdminDashboard";
import ChatWithAdmin from "./components/ChatWithAdmin";
import AdminChat from "./components/AdminLiveChat";
// ✅ Add admin chat screen

import { AuthProvider } from "./AuthContext";
import { AdminProvider } from "./AdminContext";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import MedicinoBot2 from "./components/MedicinoBot2";

const App = () => (
  <div>
    <Header />
    <Outlet />
  </div>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },

      // 🧑‍💻 Public Routes
      {
        path: "/login",
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },
      {
        path: "/signUp",
        element: (
          <PublicRoute>
            <SignUp />
          </PublicRoute>
        ),
      },

      // 👨‍💼 Admin Routes
      { path: "/admin", element: <AdminLogin /> },
      { path: "/admin/dashboard", element: <AdminDashboard /> },
      { path: "/admin/chat", element: <AdminChat /> }, // ✅ Admin chat route

      // 🔒 Protected User Routes
      {
        path: "/searchMedicines",
        element: (
          <PrivateRoute>
            <SearchMedicines />
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: (
          <PrivateRoute>
            <AboutUs />
          </PrivateRoute>
        ),
      },
      {
        path: "/medicinoBot",
        element: (
          <PrivateRoute>
            <ChatBot />
          </PrivateRoute>
        ),
      },
      {
        path: "/medicinoBot2",
        element: (
          <PrivateRoute>
            <MedicinoBot2 />
          </PrivateRoute>
        ),
      },
      {
        path: "/chat",
        element: (
          <PrivateRoute>
            <ChatWithAdmin />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <AdminProvider>
      <RouterProvider router={appRouter} />
    </AdminProvider>
  </AuthProvider>
);
