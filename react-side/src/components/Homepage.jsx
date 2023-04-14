import { useAuthorization } from "../hooks/useAuthorization";
import Footer from "./Footer";
import FundraiseFor from "./FundraiseFor";
import Header from "./Header";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import LearnMore from "./LearnMore";
import StoryList from "./StoryList";
import UrgentHelpList from "./UrgentHelpList";

const Homepage = () => {
  useAuthorization();

  return (
    <>
      <Header />
      <Hero />
      <HowItWorks />
      <UrgentHelpList />
      <FundraiseFor />
      <StoryList />
      <LearnMore />
      <Footer />
    </>
  );
};

export default Homepage;
