import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles
import React, { useEffect } from "react";

const EngagementAlgorithms = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        {/* Analysis of Current Algorithms */}
        <div className="my-8" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-4">
            Analysis of Current Algorithms
          </h2>
          <p className="text-lg">
            Discuss how current social media algorithms affect our lives,
            shaping our perceptions, behaviors, and interactions. These
            algorithms often prioritize engagement over user well-being, leading
            to issues like echo chambers and addictive usage patterns.
          </p>
        </div>

        {/* Proposing Alternatives */}
        <div className="my-8" data-aos="fade-right">
          <h3 className="text-2xl font-bold mb-4">Proposing Alternatives</h3>
          <p className="text-lg">
            Suggest ideas for more positive and empowering algorithms that
            prioritize user mental health, provide balanced perspectives, and
            encourage meaningful interactions over passive consumption.
          </p>
        </div>

        {/* User Engagement */}
        <div className="my-8" data-aos="fade-left">
          <h3 className="text-2xl font-bold mb-4">User Engagement</h3>
          <p className="text-lg">
            Explore ideas on how users can positively engage with technology,
            advocating for digital literacy, conscious content consumption, and
            active participation in shaping the digital landscape.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EngagementAlgorithms;
