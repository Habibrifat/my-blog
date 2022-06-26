import SideBar from "../../components/sidebar/sideBar";
import SinglePost from "../../components/singlepost/singlePost";
import "./single.css";

const Single = () => {
  return (
    <div className="single">
      <SinglePost />
      <SideBar />
    </div>
  );
};

export default Single;
