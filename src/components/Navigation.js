import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Piyasalar</Link>
        </li>
        <li>
          <Link to={`/easy-trade/`}>Kolay Al/Sat</Link>
        </li>
        <li>
          <Link to='/adsf'>Cüzdan</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
