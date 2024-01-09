import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles
import React, { useEffect } from "react";
import footerImg from "../../assets/images/banner.png";
import logoImg from "../../assets/images/text logo.png";
import Container from "../Container";

const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="" style={{ backgroundImage: `url(${footerImg})` }}>
      {/* Black Shadow Overlay */}
      <footer className=" text-white p-6 backdrop-blur-xl backdrop-filter bg-opacity-5">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 opacity-75"></div>
        <Container>
          <div className="text-center">
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
              data-aos="fade-up"
            >
              {/* Column 1 */}
              <div>
                <h2 className="font-bold text-lg mb-2">Quick Links</h2>
                <ul className="text-sm">
                  <li>
                    <a href="#about">About Us</a>
                  </li>

                  {/* Add more links as needed */}
                </ul>
              </div>
              {/* Column middle */}
              <div>
                <img
                  src={logoImg}
                  alt="The Vibeican"
                  className="w-40 mx-auto"
                />
              </div>
              {/* Column 3 */}
              <div>
                <h2 className="font-bold text-lg mb-2">Contact</h2>
                <p className="text-sm">Email: contact@thevibeican.com</p>
                {/* Add more contact details or social media links */}
              </div>
            </div>
            <hr className="opacity-10" />
            <div className="text-center text-sm mt-6">
              © {new Date().getFullYear()} The Vibeican. All rights reserved.
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
