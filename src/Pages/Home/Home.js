import React from "react";
import "./Home.css";
import { useLoaderData } from "react-router-dom";
import Categories from "../../components/Categories/Categories";

const Home = () => {
  const categories = useLoaderData();
  console.log(categories);
  return (
    <>
      <section className="banner ">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="banner-content">
                <h1 className="fw-fw-bold m-0 text-center text-light">
                  Learn your way with Coding School to Programing
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 categories">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="text-text-center text-light fw-bold">
                What will you learn?
              </h1>
            </div>
            {categories.map((category) => (
              <Categories key={category.id} category={category}></Categories>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
