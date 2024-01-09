import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import aiFaithImage from "../../assets/images/3.gif";
import ethicalImage from "../../assets/images/vibe.png";
import futureImage from "../../assets/images/zline.webp";
import Container from "../Container";

const FaithAndTechnology = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-gradient-to-b from-black to-black text-slate-100 overflow-x-hidden">
      <Container>
        <div className="container mx-auto px-4 py-8">
          {/* Articles on AI and Faith */}
          <div className="text-center my-8" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-4">
              Articles on AI and Faith
            </h2>
            <p className="text-xs sm:text-sm lg:text-lg">
              Explore how artificial intelligence and spirituality intersect,
              and how technology influences religious practices and beliefs.
              This exploration delves into the ways AI is being integrated into
              spiritual experiences and religious education. We examine how
              AI-driven analytics and algorithms are transforming religious
              practices, from personalized spiritual guidance to enhanced
              understanding of sacred texts. The implications of AI in
              faith-based communities are profound, raising questions about
              authenticity, ethics, and the nature of spiritual experience in
              the digital age. We also look at the potential of AI to foster
              interfaith dialogue and understanding, breaking down barriers
              between different belief systems. This section offers a thoughtful
              analysis of the evolving relationship between technology and
              spirituality, opening a dialogue on the future of faith in an
              increasingly digital world.
            </p>

            <img
              src={aiFaithImage}
              alt="AI and Faith"
              className="mx-auto my-10 rounded-lg"
              data-aos="fade-in"
            />
          </div>

          {/* Ethical Considerations */}
          <div
            className="flex flex-col md:flex-row items-center my-8 "
            data-aos="fade-right"
          >
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">
                Ethical Considerations
              </h3>
              <p className="text-xs sm:text-sm lg:text-lg">
                An exploration of the ethical dimensions of artificial
                intelligence in the context of faith delves into the profound
                moral implications and responsibilities that come with
                integrating AI into spiritual practices. This critical
                discussion addresses the challenges and opportunities presented
                by AI in religious settings, such as the use of AI for
                personalized spiritual advice, automation in religious rituals,
                or interpretation of religious texts. It raises key questions
                about the preservation of human agency, the authenticity of
                AI-mediated spiritual experiences, and the ethical use of
                personal data in religious contexts. The dialogue also extends
                to the responsibility of technologists and religious leaders in
                ensuring that AI applications in spirituality adhere to ethical
                standards that respect diverse faith traditions and promote
                inclusive, compassionate, and just practices. This section
                encourages a thoughtful consideration of how AI can be harnessed
                to enhance, rather than diminish, the spiritual well-being and
                ethical integrity of faith communities.
              </p>
            </div>
            <img
              src={ethicalImage}
              alt="Ethical Considerations"
              className="w-full md:w-1/2 h-auto mt-4 md:mt-0 md:ml-4"
            />
          </div>

          {/* Future Outlook */}
          <div className="text-center my-16" data-aos="fade-left">
            <h3 className="text-2xl font-bold mb-4">Future Outlook</h3>
            <p className="text-lg">
              Speculate on future advancements in technology and how they might
              shape or influence faith practices. Consider the possibilities and
              challenges that lie ahead at the intersection of technology and
              spirituality.
            </p>
            <img
              src={futureImage}
              alt="Ethical Considerations"
              className="mx-auto my-10 rounded-lg"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FaithAndTechnology;
