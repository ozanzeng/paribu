import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;600;700&display=swap');
  
  body {
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
    background: #2f323e;
  }
  
  a {
    text-decoration: none;
    color: #fff;
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
