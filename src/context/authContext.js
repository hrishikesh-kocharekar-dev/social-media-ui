import { createContext, useEffect, useState } from "react";
import ErrorBoundary from "../components/posts/ErrorBoundary";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = () => {
    //TO DO
    setCurrentUser({
      id: 1,
      name: "John Doe",
      profilePic:
        "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
    });
  };

  useEffect(() => {
    <ErrorBoundary>
      localStorage.setItem("user", JSON.stringify(currentUser));
    </ErrorBoundary>;
  }, [currentUser]);

  return (
    <ErrorBoundary>
      <AuthContext.Provider value={{ currentUser, login }}>
        {children}
      </AuthContext.Provider>
    </ErrorBoundary>
  );
};
