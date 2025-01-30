import { Link } from "react-router-dom";
import Carousel from "./Carousel";

const Home = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="container border">
        <Carousel />
      </div>
      <div className="">
        <Link to={"/privacy"} className="text-red-700">
          Privacy Policy
        </Link>
      </div>
    </div>
  );
};

export default Home;
