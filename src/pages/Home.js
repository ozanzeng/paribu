import React from "react";
import Slider from "../components/Slider";

import img1 from "../images/1.png";
import img2 from "../images/2.png";
import img3 from "../images/3.png";

const images = [img1, img2, img3];

const Home = () => {
  return (
    <div>
      <Slider slides={images} autoPlay={2} />
      <p>This is home page.</p>
    </div>
  );
};

export default Home;
