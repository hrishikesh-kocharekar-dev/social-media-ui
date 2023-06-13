import ErrorBoundary from "../posts/ErrorBoundary";
import "./rightBar.scss";

const RightBar = () => {
  return (
    <ErrorBoundary>
      <div className="rightBar">
        <div className="container">
          <div className="item">
            <span></span>
            <div className="user">
              <div className="userInfo">
                <img src="./Pic5.jpg" alt="" />
                <span>Nate </span>
              </div>
              <div className="buttons">
                <button>follow</button>
                <button>dismiss</button>
              </div>
            </div>
            <div className="user">
              <div className="userInfo">
                <img src="./front4.jpg" alt="" />
                <span>Steve H</span>
              </div>
              <div className="buttons">
                <button>follow</button>
                <button>dismiss</button>
              </div>
            </div>
          </div>
          {/* sec 2 */}
          <div className="item">
            <span>Latest Active</span>
            <div className="user">
              <div className="userInfo">
                <p>
                  <span>Andrew B</span> Last active
                </p>
              </div>
              <span>10 min ago</span>
            </div>
            <div className="user">
              <div className="userInfo">
                <p>
                  <span>Alex costa</span>Last active
                </p>
              </div>
              <span>18 min ago</span>
            </div>
            <div className="user">
              <div className="userInfo">
                <p>
                  <span>Sandra Adams</span> Last active
                </p>
              </div>
              <span>58 min ago</span>
            </div>
            <div className="user">
              <div className="userInfo">
                <p>
                  <span> Oui Oui</span> Last active
                </p>
              </div>
              <span>25 min ago</span>
            </div>
          </div>
          <div className="item">
            {/* 3rd sec */}
            <span>Online Friends</span>

            <div className="user">
              <div className="userInfo">
                <img src="./front4.jpg" alt="" />
                <div className="online" />
                <span>Jon</span>
              </div>
            </div>
            <div className="user">
              <div className="userInfo">
                <img src="./Pic4.jpg" alt="" />
                <div className="online" />
                <span>Dave R</span>
              </div>
            </div>
            <div className="user">
              <div className="userInfo">
                <img src="Pic5.jpg" alt="" />
                <div className="online" />
                <span>Kayle Thomas</span>
              </div>
            </div>
            <div className="user">
              <div className="userInfo">
                <img src="./Pic2.jpg" alt="" />
                <div className="online" />
                <span>Suzzy R</span>
              </div>
            </div>
            <div className="user">
              <div className="userInfo">
                <img src="./Pic3.jpg" alt="" />
                <div className="online" />
                <span>Ranveer</span>
              </div>
            </div>

            <div className="user">
              <div className="userInfo">
                <img src="./P1.jpg" alt="" />
                <div className="online" />
                <span>Archit M</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default RightBar;
