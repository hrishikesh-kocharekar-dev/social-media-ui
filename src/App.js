import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import RightBar from "./components/rightBar/RightBar";
import Profile from "./pages/profile/Profile";
import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/leftBar/LeftBar";
import Home from "./pages/home/Home";
import "./style.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";

import ErrorBoundary from "./components/posts/ErrorBoundary";

function App() {
  const { currentUser } = useContext(AuthContext);
  const { darkMode } = useContext(DarkModeContext);

  const Layout = () => {
    return (
      <ErrorBoundary>
        <div className={`theme-${darkMode ? "dark" : "light"}`}>
          <Navbar />
          <div style={{ display: "flex" }}>
            <LeftBar />
            <div style={{ flex: 6 }}>
              <Outlet />
            </div>
            <RightBar />
          </div>
        </div>
      </ErrorBoundary>
    );
  };

  <ErrorBoundary />;

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      <ErrorBoundary>
        return <Navigate to="/home" />;
      </ErrorBoundary>;
    }

    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "home",
          element: <Profile />,
        },
      ],
    },
  ]);

  return (
    <ErrorBoundary>
      <div>
        <RouterProvider router={router} />
      </div>
    </ErrorBoundary>
  );
}

export default App;
