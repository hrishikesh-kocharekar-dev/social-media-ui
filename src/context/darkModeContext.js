import { createContext, useEffect, useState } from "react";
import ErrorBoundary from "../components/posts/ErrorBoundary";

export const DarkModeContext = createContext();

export const DarkModeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  // not active
  const toggle = () => {
    <ErrorBoundary>setDarkMode(!darkMode);</ErrorBoundary>;
  };

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <ErrorBoundary>
      <DarkModeContext.Provider value={{ darkMode, toggle }}>
        {children}
      </DarkModeContext.Provider>
    </ErrorBoundary>
  );
};
