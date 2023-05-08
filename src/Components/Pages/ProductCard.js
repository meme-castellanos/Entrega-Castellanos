import React from "react";
import Contador from "../Contador/Contador";

const ProductCard = (props) => {
  const { titulo, imagen, descripcion, precio, stock } = props;
  return (
    <div className="card m-2 mt-3" style={{width: "18rem"}}>
      <img src={imagen} className="card-img-top" alt="Perfume" />
      <div className="card-body">
        <h5 className="card-title bg-dark" style={{color:"whitesmoke"}}>{titulo}</h5>
        <p className="card-text">{descripcion}</p>
        <h5 className="text-dark mb-0">${precio}</h5>
        <p className="text-muted mb-0">
          Stock: <span className="fw-bold">{stock}</span>
        </p>
        <Contador/>
      </div>
    </div>
  );
};

export default ProductCard;
