import "./share.scss";
import Image from "../../assets/img.png";
import Map from "../../assets/map.png";
import Friend from "../../assets/friend.png";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import ErrorBoundary from "../posts/ErrorBoundary";

const Share = () => {
  useContext(AuthContext);
  return (
    <ErrorBoundary>
      <div className="share">
        <div className="container">
          <div className="top">
            <img src="./Pic2.jpg" alt="" />
            <input type="text" placeholder={`What's on your mind Kate?`} />
          </div>
          <hr />
          <div className="bottom">
            <div className="left">
              <input type="file" id="file" style={{ display: "none" }} />
              <label htmlFor="file">
                <div className="item">
                  <img src={Image} alt="" />
                  <span>Add Image</span>
                </div>
              </label>
              <div className="item">
                <img src={Map} alt="" />
                <span>Location</span>
              </div>
              <div className="item">
                <img src={Friend} alt="" />
                <span>Tag Friends</span>
              </div>
            </div>
            <div className="right">
              <button>Share</button>
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Share;
