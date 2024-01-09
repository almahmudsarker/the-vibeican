import React, { useState } from "react";
import bgImage from "../../assets/images/bg.png";
import bannerImg from "../../assets/images/text logo.png";
const HomePage = () => {
  const [isHovered, setIsHovered] = useState(false);

  const normalStyle = {};

  const hoverStyle = {
    boxShadow:
      "0 0 5px cyan, 0 0 25px cyan, 0 0 50px cyan, 0 0 100px cyan, 0 0 200px cyan",
  };
  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* Hero Section */}
      <div
        className="flex items-center justify-center h-screen z-[-1]"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Black Shadow Overlay */}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 opacity-75 inset-0 "></div>
        <img
          className="absolute w-30 h-30 z-100"
          // style={isHovered ? hoverStyle : normalStyle}
          // onMouseEnter={() => setIsHovered(true)}
          // onMouseLeave={() => setIsHovered(false)}
          src={bannerImg}
          alt=""
        />
      </div>
    </div>
  );
};

export default HomePage;
