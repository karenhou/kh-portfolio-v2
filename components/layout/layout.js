import React from "react";
import Nav from "../nav";

const Layout = (props) => {
  return (
    <>
      <Nav />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
