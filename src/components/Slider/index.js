import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import SliderContent from "./SliderContent";
import Slide from "./Slide";
import Dots from "./Dots";

const Wrapper = styled.div`
  position: relative;
  height: 485px;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;
`;

const Slider = (props) => {
  const getWidth = () => window.innerWidth;

  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45,
  });

  const { translate, transition, activeIndex } = state;
  const autoPlayRef = useRef();

  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };

    const interval = setInterval(play, props.autoPlay * 1000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    if (activeIndex === props.slides.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0,
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * getWidth(),
    });
  };

  return (
    <Wrapper>
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth() * props.slides.length}
      >
        {props.slides.map((slide, i) => (
          <Slide key={slide + i} content={slide} />
        ))}
      </SliderContent>

      <Dots slides={props.slides} activeIndex={activeIndex} />
    </Wrapper>
  );
};

Slider.defaultProps = {
  slides: [],
  autoPlay: null,
};

export default Slider;
