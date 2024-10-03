import { useParams } from "react-router-dom";
import "./CaseStudie.css";
import content from "./CaseStudie.json";
import { useEffect, useState } from "react";
import PotenzialAnalyse from "../../components/PotenzialAnalyse/PotenzialAnalyse";

const CaseStudie = () => {
  const { name } = useParams();
  const [company, setCompany] = useState(content[name]);
  console.log(company);

  return (
    <>
      <header className="container case_studie_header">
        <div className="gradient_opacity_wrapper">
          <div></div>
          <p>Case Study</p>
        </div>
        <h1>{company.header.name}</h1>
        <div className="header_description">
          <div>
            <p>Branche:</p>
            <p>{company.header.branche}</p>
          </div>
          <div>
            <p>Typ:</p>
            <p>{company.header.typ}</p>
          </div>
          <div>
            <p>Zeitraum:</p>
            <p>{company.header.zeitraum}</p>
          </div>
        </div>
        <div
          className="case_studie_img_wrapper"
          style={{ background: company.header.background }}
        >
          <img src={company.header.img} alt="company_homepage" />
        </div>
      </header>
      <main className="container case_studie_main">
        <p className="big_text">{company.main.bigText}</p>
        <div className="testi_bg_wrapper">
          <div className="case_studie_testi">
            <img src={company.main.testimonial.img} alt="owner_img" />
            <div>
              <p>{company.main.testimonial.text}</p>
              <p>
                <span>{company.main.testimonial.name}</span>
                {company.main.testimonial.profession}
              </p>
            </div>
          </div>
        </div>

        <div className="case_studie_result">
          <div className="left">
            <div>
              <h2>Erreichte Ergebnisse</h2>
            </div>
          </div>

          <div className="right">
            {company.main.result.resultData.map((result, index) => (
              <article key={index}>
                <p>{result.heading}</p>
                <h3>{result.subHeading}</h3>
                <p>{result.text}</p>
              </article>
            ))}
          </div>
        </div>
        <img
          className="case_studie_data_img"
          src={company.main.dataImg}
          alt=""
        />
      </main>
      <PotenzialAnalyse />
    </>
  );
};

export default CaseStudie;
