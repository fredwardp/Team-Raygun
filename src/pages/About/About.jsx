import AgenturAbout from "../../components/C_Agentur/AgenturAbout/AgenturAbout";
import AgenturHeader from "../../components/C_Agentur/AgenturHeader/AgenturHeader";
import AgenturLeads from "../../components/C_Agentur/AgenturLeads/AgenturLeads";
import AgenturPublikationen from "../../components/C_Agentur/AgenturPublikationen/AgenturPublikationen";
import AgenturTeam from "../../components/C_Agentur/AgenturTeam/AgenturTeam";
import AgenturTimeline from "../../components/C_Agentur/AgenturTimeline/AgenturTimeline";
import PotenzialAnalyse from "../../components/PotenzialAnalyse/PotenzialAnalyse";
import Testimonials from "../../components/Testimonials/Testimonials";
import "./About.css";

const About = () => {
  return (
    <>
      <AgenturHeader />
      <main className="container">
        {/* <AgenturLeads /> */}
        <AgenturAbout />
        <AgenturTeam />
        <AgenturTimeline />
        <AgenturPublikationen />
      </main>
      <Testimonials />
      <PotenzialAnalyse />
    </>
  );
};

export default About;
