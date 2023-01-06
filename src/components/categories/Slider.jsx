import React from "react";
import SlideCard from "./SlideCard";
import "./home.css";

const SliderHome = () => {
  return (
    <>
      <section className="homeSlide contentWidth">
        <div className="container">
          <SlideCard />
        </div>
      </section>
    </>
  );
};

export default SliderHome;
