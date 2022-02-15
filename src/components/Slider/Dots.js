import React from "react";
import styled from "styled-components";

const Dot = styled.span`
  postion: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8px;
  height: 8px;
  margin-right: 20px;
  border-radius: 50%;
  background: ${(props) =>
    props.active ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.5)"};
  ${(props) =>
    props.active
      ? `
        &::after {
          content: "";
          padding: 12px;
          display: block;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
        }
      `
      : ""}
`;

const DotsWrap = styled.div`
  position: absolute;
  bottom: 25px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dots = ({ slides, activeIndex }) => {
  return (
    <DotsWrap>
      {slides.map((slide, i) => (
        <Dot key={slide} active={activeIndex === i} />
      ))}
    </DotsWrap>
  );
};

export default Dots;
