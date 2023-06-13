import Stories from "../../components/stories/Stories";
import Posts from "../../components/posts/Posts";
import Share from "../../components/share/Share";
import "./home.scss";
import ErrorBoundary from "../../components/posts/ErrorBoundary";

const Home = () => {
  return (
    <ErrorBoundary>
      <div className="home">
        <Stories />
        <Share />
        <Posts />
      </div>
    </ErrorBoundary>
  );
};

export default Home;
