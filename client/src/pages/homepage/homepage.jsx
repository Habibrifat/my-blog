import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Header from "../../components/header/header";
import Posts from "../../components/posts/posts";
import SideBar from "../../components/sidebar/sideBar";
import "./homepage.css";
import axios from "axios";

const Homepage = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <div>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <SideBar />
      </div>
    </div>
  );
};

export default Homepage;
