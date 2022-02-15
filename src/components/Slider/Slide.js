import React from "react";
import styled from "styled-components";

const SlideContent = styled.div`
  height: 100;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const Slide = ({ content }) => (
  <SlideContent style={{ backgroundImage: `url(${content})` }} />
);

export default Slide;
