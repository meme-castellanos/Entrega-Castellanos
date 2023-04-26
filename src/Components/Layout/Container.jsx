import React, { Fragment } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


const Container = (props) => {
  return (
    <Fragment>
      <Navbar />
      {props.children}
      <Footer/>
    </Fragment>
  );
};

export default Container;
