import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "../components/Layout";
import Home from "./Home";
import NoMatch from "./NoMatch";
import Trade from "./Trade";

const Pages = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index path='/' element={<Home />} />
        <Route path='/easy-trade/' element={<Trade />} />
        <Route path='*' element={<NoMatch />} />
      </Route>
    </Routes>
  );
};

export default Pages;
