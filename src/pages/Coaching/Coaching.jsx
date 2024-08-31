import CoachingConvinced from "../../components/C_Coaching/CoachingConvinced/CoachingConvinced";
import CoachingFormats from "../../components/C_Coaching/CoachingFormats/CoachingFormats";
import CoachingHeader from "../../components/C_Coaching/CoachingHeader/CoachingHeader";
import CoachingTestimonial from "../../components/C_Coaching/CoachingTestimonial/CoachingTestimonial";
import CoachingThemen from "../../components/C_Coaching/CoachingThemen/CoachingThemen";
import CoachingWhat from "../../components/C_Coaching/CoachingWhat/CoachingWhat";
import CoachingWho from "../../components/C_Coaching/CoachingWho/CoachingWho";
import CoachingWhy from "../../components/C_Coaching/CoachingWhy/CoachingWhy";
import LeistungenZusammenarbeit from "../../components/C_Leistungen/LeistungenZusammenarbeit/LeistungenZusammenarbeit";
import PotenzialAnalyse from "../../components/PotenzialAnalyse/PotenzialAnalyse";
import Testimonials from "../../components/Testimonials/Testimonials";
import "./Coaching.css";
import content from "./CoachingView.json";

const Coaching = () => {
  return (
    <>
      <CoachingHeader />
      <main className="container">
        <CoachingWhat />
        <CoachingWho />
        <CoachingFormats />
        <CoachingThemen />
        <CoachingTestimonial />
        <CoachingWhy />
        <LeistungenZusammenarbeit
          content={content}
          heading="So kann ein gemeinsames SEO-Coaching für dich aussehen"
          smallFont="true"
        />
        <CoachingConvinced />
      </main>
      <Testimonials />
      <PotenzialAnalyse />
    </>
  );
};

export default Coaching;
