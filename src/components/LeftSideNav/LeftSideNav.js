import React, { useEffect, useState } from "react";
import "./LeftSideNav.css";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="category-list">
      <h3 className="fw-fw-bold text-dark mb-4">Categories</h3>
      {categories.map((category) => (
        <Link
          to={`/course/details/${category.id}`}
          className="text-dark"
          key={category.id}
        >
          {category.title}
        </Link>
      ))}
    </div>
  );
};

export default LeftSideNav;
