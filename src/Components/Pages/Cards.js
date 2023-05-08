import React from "react";
import ProductCard from "./ProductCard";

const Cards = () => {
  const products = [
    {
      titulo: "Givenchy",
      imagen:
        "https://elbalconar.vtexassets.com/arquivos/ids/162196-500-auto?v=1769789364&width=500&height=auto&aspect=true",
      descripcion: "L'Interdit EDP - 80ml ",
      precio: 53000,
      stock: 5,
    },
    {
      titulo: "Carolina Herrera",
      imagen:
        "https://elbalconar.vtexassets.com/arquivos/ids/158395-500-auto?v=1769727036&width=500&height=auto&aspect=true",
      descripcion: "CH EDT - 30ml",
      precio: 25900,
      stock: 2,
    },
    {
      titulo: "Dior",
      imagen:
        "https://elbalconar.vtexassets.com/arquivos/ids/158708-500-auto?v=1769726994&width=500&height=auto&aspect=true",
      descripcion: "J'adore EDP - 100ml",
      precio: 54700,
      stock: 4,
    },
    {
      titulo: "Lancôme",
      imagen:
        "https://elbalconar.vtexassets.com/arquivos/ids/159161/3605532612690_1.jpg?v=1769795434",
      descripcion: "La vie est Belle EDP - 75ml",
      precio: 58000,
      stock: 1,
    },
  ];
  return (
    <div
      style={{ backgroundColor: "#eee" }}
    >
      <div className="row d-flex justify-content-around">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            titulo={product.titulo}
            imagen={product.imagen}
            descripcion={product.descripcion}
            precio={product.precio}
            stock={product.stock}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
