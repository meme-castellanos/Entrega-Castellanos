import React from "react";
import ProductCard from "./ProductCards/ProductCard";

const Cards = () => {
  return (
    <div>
      <section style={{ backgroundColor: "#eee" }}>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-12 col-lg-4 mb-4 mb-lg-0">
              <ProductCard />
            </div>
            <div className="col-md-6 col-lg-4 mb-4 mb-md-0">
              <ProductCard />
            </div>
            <div className="col-md-6 col-lg-4 mb-4 mb-md-0">
              <ProductCard />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cards;
