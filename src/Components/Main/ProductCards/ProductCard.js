import React from "react";

const ProductCard = () => {
  return (
    <div className="card">
      <div className="d-flex justify-content-center p-3">
        <p className="lead mb-0">Producto</p>
      </div>
      <img
        src="https://elbalconar.vtexassets.com/arquivos/ids/187561-500-auto?v=1768690283&width=500&height=auto&aspect=true"
        className="card-img-top"
        alt="Gaming Laptop"
      />
      <div className="card-body">
        <div className="d-flex justify-content-between mb-3">
          <h5 className="mb-0">Good Girl - Carolina Herrera</h5>
          <h5 className="text-dark mb-0">$48000</h5>
        </div>

        <div className="d-flex justify-content-between mb-2">
          <p className="text-muted mb-0">
            Stock: <span className="fw-bold">5</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
