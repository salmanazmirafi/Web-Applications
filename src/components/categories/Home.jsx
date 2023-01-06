import React from "react";
import Categories from "./Category";

const Home = () => {
  return (
    <div>
      <section className="home">
        <div className="container d_flex">
          <Categories />
        </div>
      </section>
    </div>
  );
};

export default Home;
