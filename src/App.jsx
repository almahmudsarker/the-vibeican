// import EngagementAlgorithms from "./components/Engagealgo/EngagementAlgorithms";
import AboutVibeican from "./components/aboutvibeican/AboutVibeican";
import FaithAndTechnology from "./components/faithandtech/FaithAndTechnology";
import Footer from "./components/footer/Footer";
import HomePage from "./components/home/HomePage";
import LearningBanner from "./components/learningresource/LearningBanner";
import NavBar from "./components/nabvar/NavBar";
import NewsletterAndArticles from "./components/newsletter/NewsletterAndArticles";
import TheVible from "./components/thevible/TheVible";

function App() {
  return (
    <>
      <NavBar />
      <HomePage />
      <TheVible />
      <AboutVibeican />
      <LearningBanner />
      <FaithAndTechnology />
      {/* <EngagementAlgorithms /> */}
      <NewsletterAndArticles />
      <Footer />
    </>
  );
}

export default App;
