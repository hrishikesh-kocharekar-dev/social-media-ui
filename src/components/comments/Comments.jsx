import { useContext } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";
import ErrorBoundary from "../posts/ErrorBoundary";

const Comments = () => {
  useContext(AuthContext);

  const comments = [
    {
      id: 1,
      desc: "Wild!!",
      name: "Nancy",
      userId: 1,
      profilePicture: "/front3.jpg",
    },
    {
      id: 2,
      desc: "🚀🚀",
      name: "Pete D",
      userId: 2,
      profilePicture: "/front6.jpg",
    },
  ];

  return (
    <ErrorBoundary>
      <div className="comments">
        <div className="write">
          <input type="text" placeholder="write a comment" />
          <button>Send</button>
        </div>
        {comments.map((comment) => (
          <div className="comment">
            <img src={comment.profilePicture} alt="" />
            <div className="info">
              <span>{comment.name}</span>
              <p>{comment.desc}</p>
            </div>
            <span className="date">4 hour ago</span>
          </div>
        ))}
      </div>
    </ErrorBoundary>
  );
};

export default Comments;
