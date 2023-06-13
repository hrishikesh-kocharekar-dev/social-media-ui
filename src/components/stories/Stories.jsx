import { useContext } from "react";
import "./stories.scss";
import { AuthContext } from "../../context/authContext";
import ErrorBoundary from "../posts/ErrorBoundary";

const Stories = () => {
 useContext(AuthContext);

  const stories = [
    {
      id: 1,
      name: "Josh G",
      img: "./activity.jpg",
    },
    {
      id: 2,
      name: "Kevin P",
      img: "./view.jpg",
    },
    {
      id: 3,
      name: "Alex C",
      img: "./Friends.jpg",
    },
    {
      id: 4,
      name: "Luke Camb",
      img: "./desk.jpg",
    },
  ];

  return (
    <ErrorBoundary>
    <div className="stories">
      <div className="story">
        <img src="./add.jpg" alt="" />
        <span>Steve H</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
    </ErrorBoundary>
  );
};

export default Stories;
