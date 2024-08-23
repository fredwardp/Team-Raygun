import CoachingFormats from "../../components/C_Coaching/CoachingFormats/CoachingFormats";
import CoachingHeader from "../../components/C_Coaching/CoachingHeader/CoachingHeader";
import CoachingOnline from "../../components/C_Coaching/CoachingOnline/CoachingOnline";
import CoachingTestimonial from "../../components/C_Coaching/CoachingTestimonial/CoachingTestimonial";
import CoachingView from "../../components/C_Coaching/CoachingView/CoachingView";
import CoachingWhat from "../../components/C_Coaching/CoachingWhat/CoachingWhat";
import CoachingWho from "../../components/C_Coaching/CoachingWho/CoachingWho";
import "./Coaching.css";

const Coaching = () => {
  return (
    <>
      <CoachingHeader />
      <main className="container">
        <CoachingWhat />
        <CoachingWho />
        <CoachingFormats />
        <CoachingTestimonial />
        <CoachingOnline />
        <CoachingView />
      </main>
    </>
  );
};

export default Coaching;
