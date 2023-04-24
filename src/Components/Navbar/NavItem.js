import React from "react";

const NavItem = (props) => {
  return (
    <div>
      <li className="nav-item">
        <p className="nav-link active" aria-current="page" >
          {props.navText}
        </p>
      </li>
    </div>
  );
};

export default NavItem;
