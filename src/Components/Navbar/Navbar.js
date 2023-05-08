import React from "react";
import NavItem from "./NavItem";
import logo from "./Assets/bsLogo.png";
import CartWidget from "./CartWidget";
const Navbar = () => {
  const navItemText = ["Inicio", "Productos", "Sobre Nosotros", "Contacto"];
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid d-flex justify-content-between">
          <img alt="Logo" src={logo} />
          <p className="text-center" style={{ margin: "0",color:"whitesmoke", fontSize:"30", fontWeight:"bold" }}>
            Beauty Scents
          </p>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse data-bs-toggle" id="navbarNav">
            <ul className="navbar-nav">
              {navItemText.map((texto, index) => (
                <NavItem key={index} navText={texto} />
              ))}
            </ul>
          </div>
          <CartWidget/>
        </div>
    </nav>
  );
};

export default Navbar;
