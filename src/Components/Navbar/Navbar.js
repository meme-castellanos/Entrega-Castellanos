import React from "react";
import NavItem from "./NavItem";
import CartWidget from "./CartWidget";

const Navbar = () => {
  const navItemText = ["Inicio", "Productos", "Sobre Nosotros", "Contacto"];
  return (
    <div>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <img
              width="50"
              height="50"
              className="img-fluid d-inline-block align-text-top"
              alt="Logo"
              src="https://cdn-icons-png.flaticon.com/512/10218/10218062.png"
            />
            <p className="navbar-brand">Memê Perfumerías</p>
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
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                {navItemText.map((texto,index) => (
                  <NavItem key={index} navText={texto} />
                ))}
              </ul>
              <CartWidget/>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
