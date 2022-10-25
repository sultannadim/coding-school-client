import React from "react";
import { Link } from "react-router-dom";
import "./Categories.css";

const Categories = ({ category }) => {
  const { id, title, img } = category;
  return (
    <div className="col-md-4 col-sm-6 mt-sm-5 mt-3 ">
      <Link className="category-box">
        <img src={img} alt="logo" />
        <h4 className="mt-3 text-dark">{title}</h4>
      </Link>
    </div>
  );
};

export default Categories;
