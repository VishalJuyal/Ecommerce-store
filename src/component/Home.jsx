import React from "react";
import Products from "./Products";
import "./Home.css";

const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src="/assets/heroImg.jpg"
          className="card-img"
          alt="Background"
          height="550px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <p className="card-title-mm display-6 fw-bold ">
              NEW SEASON ARRIVALS
            </p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
