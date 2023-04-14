import { useAuthorization } from "../hooks/useAuthorization";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import LearnMore from "./LearnMore";
import StoryList from "./StoryList";

const Homepage = () => {
  useAuthorization();

  return (
    <>
      <Header />
      <Hero />
      <StoryList />
      <LearnMore />
      <Footer />
    </>
  );
};

export default Homepage;
