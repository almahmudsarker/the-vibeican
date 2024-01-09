import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import bgImage from "../../assets/images/bg.png";
import Container from "../Container";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className=" overflow-x-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundBlur: "5px",
      }}
    >
      <Container>
        <nav className="flex items-center justify-between bg-gray p-6 backdrop-blur-sm">
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>

          <div
            className={`${
              isOpen ? "block" : "hidden"
            } sm:block flex-grow  sm:items-center sm:w-auto`}
          >
            <a
              href="/"
              className="block mt-4 sm:inline-block sm:mt-0 text-white hover:text-gray-50 mr-4"
            >
              Home
            </a>
            <a
              href="#about"
              className="block mt-4 sm:inline-block sm:mt-0 text-white hover:text-gray-50 mr-4"
            >
              About
            </a>
          </div>

          <div className="w-1/2 flex justify-center sm:flex-grow">
            {/* <span className="text-white font-bold text-3xl tracking-tight">
              The Vibeican
            </span> */}
          </div>

          <div
            className={`${
              isOpen ? "block" : "hidden"
            } sm:block sm:flex-grow  sm:items-center sm:justify-end`}
          >
            <a
              href="#login"
              className="block mt-4 sm:inline-block sm:mt-0 text-white hover:text-white mr-4"
            >
              Login
            </a>
            <a
              href="#signup"
              className="block mt-4 sm:inline-block sm:mt-0 text-white hover:text-white"
            >
              Sign Up
            </a>
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default NavBar;
