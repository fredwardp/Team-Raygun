import CoachingFormats from "../../components/C_Coaching/CoachingFormats/CoachingFormats";
import CoachingHeader from "../../components/C_Coaching/CoachingHeader/CoachingHeader";
import CoachingOnline from "../../components/C_Coaching/CoachingOnline/CoachingOnline";
import CoachingTestimonial from "../../components/C_Coaching/CoachingTestimonial/CoachingTestimonial";
import CoachingView from "../../components/C_Coaching/CoachingView/CoachingView";
import CoachingWhat from "../../components/C_Coaching/CoachingWhat/CoachingWhat";
import CoachingWho from "../../components/C_Coaching/CoachingWho/CoachingWho";
import CoachingWhy from "../../components/C_Coaching/CoachingWhy/CoachingWhy";
import LeistungenZusammenarbeit from "../../components/C_Leistungen/LeistungenZusammenarbeit/LeistungenZusammenarbeit";
import PotenzialAnalyse from "../../components/PotenzialAnalyse/PotenzialAnalyse";
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
        <CoachingTestimonial />
        <CoachingWhy />
        <CoachingOnline />
        {/* <CoachingView /> */}
        <LeistungenZusammenarbeit
          content={content}
          heading="So kann ein gemeinsames SEO-Coaching für dich aussehen"
          smallFont="true"
        />
        <PotenzialAnalyse />
      </main>
    </>
  );
};

export default Coaching;
