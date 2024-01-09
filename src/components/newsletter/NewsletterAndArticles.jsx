import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import React, { useEffect, useState } from "react";
import Container from "../Container";

const NewsletterAndArticles = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [isHovered, setIsHovered] = useState(false);

  const normalStyle = {};

  const hoverStyle = {
    boxShadow: "0 0 2px white",
  };

  return (
    <div className="bg-black text-white py-8">
      {/* Newsletter Subscription */}
      <div className="container mx-auto px-4 text-center" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="mb-4">
          Subscribe to our newsletter for regular updates and insights.
        </p>
        <form className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 rounded-l-lg"
          />
          <button
            type="submit"
            className="bg-white text-black hover:bg-transparent hover:text-white border p-2 rounded-r-lg"
          >
            Subscribe
          </button>
        </form>
      </div>
      <Container>
        {/* Content Ideas for Articles and Blog Posts */}
        <div
          className="container mx-auto px-4 py-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2 className="text-2xl text-slate-200 font-bold text-center mb-6">
            Featured Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Article Titles */}
            {[
              "The Role of Faith in a Technological World",
              "Understanding The Vible: A Guide to Modern Spirituality",
              "Artificial Intelligence: A New Frontier in Spiritual Exploration",
              "The Power of Positive Vibes: How They Shape Our Lives",
              "Ethical AI: Balancing Technology and Humanity",
              "Community Stories: How The Vibeican Changed Lives",
              "Navigating the Challenges of Modern Faith Practices",
              "Empowerment vs. Engagement: Redefining Social Media Algorithms",
            ].map((title, index) => (
              <div
                key={index}
                className="p-4 bg-transparent border border-dotted rounded-lg backdrop-blur-lg bg-opacity-50"
                style={isHovered ? hoverStyle : normalStyle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-gray-400 mt-2">
                  A brief summary or introduction of the article...
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NewsletterAndArticles;
