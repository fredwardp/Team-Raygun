import HomeAI from "../../components/C_Home/HomeAI/HomeAI";
import HomeGrid from "../../components/C_Home/HomeGrid/HomeGrid";
import HomeHeader from "../../components/C_Home/HomeHeader/HomeHeader";
import CoachingTestimonial from "../../components/CoachingTestimonial/CoachingTestimonial";
import PotenzialAnalyse from "../../components/PotenzialAnalyse/PotenzialAnalyse";
import Testimonial from "../../components/Testimonials/Testimonial";
import WallGrid from "../../components/WallGrid/WallGrid";
import "./Home.css";

const Home = () => {
  return (
    <>
      <HomeHeader />
      <HomeGrid />
      <WallGrid />
      <HomeAI />
      <CoachingTestimonial />
      <PotenzialAnalyse />
    </>
  );
};

export default Home;
