import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
      <Outlet />
    </Fragment>
  );
};
export default Layout;
