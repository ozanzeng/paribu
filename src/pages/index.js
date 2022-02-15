import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "../components/Layout";
import Home from "./home";
import NoMatch from "./noMatch";
import Trade from "./trade";

const Pages = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index path='/' element={<Home />} />
        <Route path='/easy-trade/:transferType' element={<Trade />} />
        <Route path='*' element={<NoMatch />} />
      </Route>
    </Routes>
  );
};

export default Pages;
