import React from "react";

const CartWidget = () => {
  return (
    <div>
      <button type="button" class="btn btn-secondary position-relative">
      <i className="fa-solid fa-cart-shopping"
            style={{ color: "#f9fafb" }}
          ></i>
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
          4<span class="visually-hidden">Productos en tu carrito</span>
          
        </span>
      </button>
    </div>
  );
};

export default CartWidget;
