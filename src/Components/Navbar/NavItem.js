import React from "react";

const NavItem = (props) => {
  return (
    <div>
      <li className="nav-item">
        <button style={{backgroundColor:"transparent" , color:"whitesmoke" , border:"none"}} aria-current="page" >
          {props.navText}</button>
      </li>
    </div>
  );
};

export default NavItem;
