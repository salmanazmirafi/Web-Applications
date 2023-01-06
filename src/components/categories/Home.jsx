import React from "react";
import Categories from "./Category";
import SliderHome from "./Slider";

const Home = () => {
  return (
    <div>
      <section className="home">
        <div className="container d_flex">
          <Categories />
          <SliderHome />
        </div>
      </section>
    </div>
  );
};

export default Home;
