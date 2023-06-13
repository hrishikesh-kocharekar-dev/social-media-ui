import "./post.scss";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { useState } from "react";
import ErrorBoundary from "../posts/ErrorBoundary";

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);

  const liked = true;

  return (
    <ErrorBoundary>
      <div className="post">
        <div className="container">
          <div className="user">
            <div className="userInfo">
              <img src={post.profilePic} alt="" />
              <div className="details">
                <Link
                  to={`/profile/${post.userId}`}
                  style={{ textDecoration: "none", color: "mediumseagreen" }}
                >
                  <span className="name">{post.name}</span>
                </Link>
                <span className="date">50 min ago</span>
              </div>
            </div>
            <MoreHorizIcon />
          </div>
          <div className="content">
            <p>{post.desc}</p>
            <img src={post.img} alt="" />
          </div>
          <div className="info">
            <div className="item">
              {liked ? (
                <FavoriteOutlinedIcon />
              ) : (
                <FavoriteBorderOutlinedIcon />
              )}
              50 Likes
            </div>
            <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
              <TextsmsOutlinedIcon />2 Comments
            </div>
            <div className="item">
              <ShareOutlinedIcon />
              Share
            </div>
          </div>
          {commentOpen && <Comments />}
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Post;
