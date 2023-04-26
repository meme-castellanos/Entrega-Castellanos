import React from "react";

const CartWidget = () => {
  return (
    <div className="ml-auto">
      <div >
        <button type="button" className="btn btn-secondary position-relative">
          <i
            className="fa-solid fa-cart-shopping"
            style={{ color: "#f9fafb" }}
          ></i>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
            4<span className="visually-hidden">Productos en tu carrito</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default CartWidget;
