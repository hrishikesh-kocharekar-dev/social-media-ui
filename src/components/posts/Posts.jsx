import Post from "../post/Post";
import ErrorBoundary from "./ErrorBoundary";
import "./posts.scss";

const Posts = () => {
  const posts = [
    // 2nd post
    {
      id: 2,
      name: "Jon Connors",
      userId: 2,
      profilePic: "/front4.jpg",
      desc: "",

      img: "./vr.jpg",
    },
    // 3rd post
    {
      id: 3,
      name: "Travis scout",
      userId: 3,
      profilePic: "/front6.jpg",
      desc: "",
      img: "./Ai.jpg",
    },
    {
      id: 4,
      name: "Alex C",
      userId: 4,
      profilePic: "/Pic7.jpg",
      desc: "",
      img: "./Code.jpg",
    },
  ];

  return (
    // <ErrorBoundary>
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>

    // </ErrorBoundary>
  );
};

export default Posts;
