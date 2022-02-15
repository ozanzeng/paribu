import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "../components/Layout";
import Home from "./asd";
import NoMatch from "./g11g1";
import Trade from "./afaf";

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
