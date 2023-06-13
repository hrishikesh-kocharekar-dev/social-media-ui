import Post from "../post/Post";
import ErrorBoundary from "./ErrorBoundary";
import "./posts.scss";

const Posts = () => {
  const posts = [
    {
      id: 1,
      name: "Jon Connors",
      userId: 1,
      profilePic: "/front4.jpg",
      img: "./ai.jpg",
    },

    // 2nd post
    {
      id: 2,
      name: "Jon Connors",
      userId: 2,
      profilePic: "/front4.jpg",
      desc: "",

      img: "./vr.jpg",
    },
  ];

  return (
    <ErrorBoundary>
      <div className="posts">
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </ErrorBoundary>
  );
};

export default Posts;
