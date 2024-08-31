import { Link } from "react-router-dom";
import "./CaseStudies.css";
import content from "./CaseStudies.json";
import PotenzialAnalyse from "../../components/PotenzialAnalyse/PotenzialAnalyse";

const CaseStudies = () => {
  return (
    <>
      <header className="container case_studies_header">
        <h1>Case Studies</h1>
        <p>
          Überzeuge dich selbst. Auf dieser Seite findest du die Erfolgsstories
          unserer Kundenprojekte.
        </p>
      </header>
      <main className="container case_studies_main">
        {content.map((data, index) => (
          <Link key={index} to={`/casestudies/${data.url}`}>
            <div style={{ background: data.background }}>
              <img src={data.img} alt="" />
            </div>
            <h3>{data.name}</h3>
          </Link>
        ))}
      </main>
      <PotenzialAnalyse />
    </>
  );
};

export default CaseStudies;
