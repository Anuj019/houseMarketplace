import React from "react";
import { Link } from "react-router-dom";
import rentCategoryImage from "../assets/jpg/rentCategoryImage.jpg";
import sellCategoryImage from "../assets/jpg/sellCategoryImage.jpg";
import Slider from "../components/Slider";

const Explore = () => {
  return (
    <div className="explore">
      <header className="page-header">Explore</header>
      <main>{<Slider />}</main>
      <p className="exploreCategoryHeading">Categories</p>
      <div className="exploreCategories">
        <Link to="/category/rent">
          <img
            src={rentCategoryImage}
            alt="Rental Property"
            className="exploreCategoryImg"
          />
          <p className="exploreCategoryName"> Places for rent</p>
        </Link>
        <Link to="/category/sale">
          <img
            src={sellCategoryImage}
            alt="sell Property"
            className="exploreCategoryImg"
          />
          <p className="exploreCategoryName"> Places for sale</p>
        </Link>
      </div>
    </div>
  );
};

export default Explore;
