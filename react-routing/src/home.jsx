import React from "react";
import { Link } from "react-router";

const Home = () => {
  return (
    <div>
      <Link to={"/about"}>Go To About Page</Link>
      <Link to={"/contact"}>Go To Contact Page</Link>
    </div>
  );
};

export default Home;
