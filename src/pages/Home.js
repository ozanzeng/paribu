import React from "react";
import Slider from "../components/Slider";
import TradeTable from "../components/TradeTable";
import styled from "styled-components";

import img1 from "../images/1.png";
import img2 from "../images/2.png";
import img3 from "../images/3.png";
import TradeData from "../components/tradeData.json";

const images = [img1, img2, img3];

const Container = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  display: block;
`;

const Home = () => {
  return (
    <div>
      <Slider slides={images} autoPlay={2} />
      <Container>
        <TradeTable tableData={TradeData} />
      </Container>
    </div>
  );
};

export default Home;
