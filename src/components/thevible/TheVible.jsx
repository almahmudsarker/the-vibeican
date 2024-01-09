import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles
import React, { useEffect } from "react";
import cptrImg from "../../assets/images/bg1.png";
import cptImg from "../../assets/images/bg2.png";
import bitcoin from "../../assets/images/bitcoin.png";
import mastercard from "../../assets/images/mastercard.png";
import visa from "../../assets/images/visa.png";
import Container from "../Container";

const TheVible = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-black text-white">
      <Container>
        {/* Overview Section */}
        <div
          className="text-center p-6"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="text-3xl font-bold mb-4">The Vible</h2>
          <p className="text-lg">
            The Vible is a collection of chapters that are written by the
            community. Each chapter is written by a different person and is
            about a different topic. The Vible is a way for people to share
            their knowledge and experiences with others. It is also a way for
            people to learn about new topics and ideas. The Vible is a place
            where people can come together and share their knowledge and
            experiences with others.
          </p>
        </div>

        {/* Chapters Section */}
        <div
          className="grid md:grid-cols-2 gap-4 p-6"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          {/* Chapter 1 */}
          <div className=" backdrop-blur-md shadow-lg rounded-lg p-4">
            <h3 className="text-2xl text-slate-400 font-semibold text-center">
              Faith and Vibes
            </h3>
            <img src={cptrImg} alt="Chapter 1" className="w-full h-auto mt-2" />
            <p className="text-md mt-2 text-slate-400 text-center">
              The Vible is a collection of chapters that are written by the
              community. Each chapter is written by a different person and is
              about a different topic.
            </p>
          </div>

          {/* Chapter 2 */}
          <div className="backdrop-blur-md shadow-lg rounded-lg p-4">
            <h3 className="text-2xl font-semibold text-slate-400 text-center">
              Pragmatic Faith
            </h3>
            <img src={cptImg} alt="Chapter 2" className="w-full h-auto mt-2" />
            <p className="text-md mt-2 text-slate-400 text-center">
              The Vible is a collection of chapters that are written by the
              community. Each chapter is written by a different person and is
              about a different topic.
            </p>
          </div>
        </div>

        {/* Interactive Elements */}
        <div
          className="flex flex-wrap justify-center items-center p-6"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="m-4">
            <img src={bitcoin} alt="Organization 1" className="w-30 h-10" />
            {/* Add interactive elements or links */}
          </div>
          <div className="m-4">
            <img src={mastercard} alt="Organization 1" className="w-30 h-10" />
            {/* Add interactive elements or links */}
          </div>
          <div className="m-4">
            <img src={visa} alt="Organization 1" className="w-30 h-10" />
            {/* Add interactive elements or links */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TheVible;
