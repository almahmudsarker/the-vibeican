import React from "react";
import bannerImg from "../../assets/images/banner.png";

const LearningBanner = () => {
  return (
    <div
      className="container-fluid"
      style={{
        backgroundImage: `url(${bannerImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "400px",
        width: "100%",
      }}
    ></div>
  );
};

export default LearningBanner;
