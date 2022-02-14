import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
  }
`;

const Layout = ({ children }) => {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Outlet />
    </Fragment>
  );
};
export default Layout;
