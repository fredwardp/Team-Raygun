import HomeAI from "../../components/C_Home/HomeAI/HomeAI";
import HomeGrid from "../../components/C_Home/HomeGrid/HomeGrid";
import HomeHeader from "../../components/C_Home/HomeHeader/HomeHeader";
import PotenzialAnalyse from "../../components/PotenzialAnalyse/PotenzialAnalyse";
import Testimonials from "../../components/Testimonials/Testimonials";
import WallGrid from "../../components/WallGrid/WallGrid";
import "./Home.css";

const Home = () => {
  return (
    <>
      <HomeHeader />
      <HomeGrid />
      <WallGrid />
      <HomeAI />
      <Testimonials />
      <PotenzialAnalyse />
    </>
  );
};

export default Home;
