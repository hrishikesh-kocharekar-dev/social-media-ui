import "./navbar.scss";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";
import ErrorBoundary from "../posts/ErrorBoundary";

const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  useContext(AuthContext);

  return (
    <ErrorBoundary>
      <div className="navbar">
        <div className="left">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span>Sociopedia</span>
          </Link>
          <HomeOutlinedIcon />
          {darkMode ? (
            <WbSunnyOutlinedIcon onClick={toggle} />
          ) : (
            <DarkModeOutlinedIcon onClick={toggle} />
          )}
          <GridViewOutlinedIcon />
          <div className="search">
            <SearchOutlinedIcon />
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="right">

          <div className="user">
            <img src="./Pic2.jpg" alt="" />
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Navbar;
