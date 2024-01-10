import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles
import React, { useEffect } from "react";
import historyImage from "../../assets/images/1.webp";
import missionImage from "../../assets/images/2.webp";
import Container from "../Container";

const AboutVibeican = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      id="about"
      className="bg-gradient-to-b from-black to-black text-slate-50"
    >
      <Container>
        <div className=" mx-auto px-4 py-8 overflow-x-hidden">
          {/* History and Background */}
          <div className="flex flex-col md:flex-row items-center my-8">
            <img
              src={historyImage}
              alt="History"
              className="w-full md:w-1/2 h-auto"
              data-aos="fade-right"
            />
            <div
              className="md:ml-6 text-center md:text-left"
              data-aos="fade-left"
            >
              <h2 className="text-3xl font-bold mb-4">
                History and Background
              </h2>
              <p className="text-lg">
                The Vibeican emerged from a collective aspiration to intertwine
                spirituality with modern technology, creating a unique movement
                that resonates with contemporary seekers. Its inception was
                rooted in the desire to harness the positive aspects of faith
                and digital innovation, aiming to foster a community grounded in
                optimism and forward-thinking. Over time, The Vibeican has
                evolved, adapting to the ever-changing landscape of society and
                technology. It has become a beacon for those seeking to balance
                the demands of modern life with spiritual fulfillment. Through
                its growth, The Vibeican has maintained its core mission of
                spreading positivity, embracing diverse perspectives, and
                encouraging personal and communal growth in a digitally
                interconnected world.
              </p>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="flex flex-col md:flex-row items-center my-8">
            <div
              className="md:mr-6 text-center md:text-left"
              data-aos="fade-right"
            >
              <h2 className="text-3xl font-bold mb-4">Mission Statement</h2>
              <p className="text-lg">
                "The Vibeican is dedicated to fostering a harmonious blend of
                spirituality and modern innovation. Our mission is to inspire
                and empower individuals through a fusion of faith and
                cutting-edge technology, nurturing a community where positivity,
                inclusivity, and progress are paramount. We believe in the
                transformative power of technology when guided by compassionate
                and ethical principles. Our core values include promoting
                open-minded exploration of spiritual practices, encouraging
                positive technological advancements, and building a supportive
                and diverse global community committed to the betterment of
                humanity."
              </p>
            </div>
            <img
              src={missionImage}
              alt="Mission"
              className="w-full md:w-1/2 h-auto"
              data-aos="fade-left"
            />
          </div>

          {/* The Team */}
          {/* <div className="text-center my-8" data-aos="zoom-in">
            <h2 className="text-3xl font-bold mb-4">The Team</h2>
            <div className="flex flex-wrap justify-center">
              <div className="m-4 bg-white bg-opacity-100 backdrop-filter backdrop-blur-lg p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={teamMemberPhoto}
                  alt="Team Member"
                  className="w-40 h-40 rounded-full mx-auto shadow-sm hover:shadow-lg transition-shadow duration-300"
                />
                <h3 className="text-xl text-slate-900 font-semibold mt-2">
                  Name
                </h3>
                <p className="text-slate-900">CEO</p>
              </div>
              <div className="m-4 bg-white bg-opacity-100 backdrop-filter backdrop-blur-lg p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={teamMemberPhoto}
                  alt="Team Member"
                  className="w-40 h-40 rounded-full mx-auto shadow-sm hover:shadow-lg transition-shadow duration-300"
                />
                <h3 className="text-xl text-slate-900 font-semibold mt-2">
                  Name
                </h3>
                <p className="text-slate-900">COO</p>
              </div>
              <div className="m-4 bg-white bg-opacity-100 backdrop-filter backdrop-blur-lg p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={teamMemberPhoto}
                  alt="Team Member"
                  className="w-40 h-40 rounded-full mx-auto shadow-sm hover:shadow-lg transition-shadow duration-300"
                />
                <h3 className="text-xl text-slate-900 font-semibold mt-2">
                  Name
                </h3>
                <p className="text-slate-900">CTO</p>
              </div>
              
            </div>
          </div> */}
        </div>
      </Container>
    </div>
  );
};

export default AboutVibeican;
