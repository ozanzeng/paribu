import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Nav = styled.nav`
  position: relative;
`;
const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  a {
    text-decoration: none;
    font-size: 16px;
    color: #fff;
    padding: 8px 15px;
    background: none;
    font-weight: 200;
  }
  a:visited {
    color: #fff;
  }
`;
const NavItem = styled.li`
  display: flex;
  border-radius: 3px;
  transition: background 0.2s;
  &:hover,
  &:focus {
    background-color: #2f323e;
  }
`;
const Navigation = () => {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <Link to='/'>Piyasalar</Link>
        </NavItem>
        <NavItem>
          <Link to={`/easy-trade/`}>Kolay Al/Sat</Link>
        </NavItem>
        <NavItem>
          <Link to='/adsf'>Cüzdan</Link>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default Navigation;
