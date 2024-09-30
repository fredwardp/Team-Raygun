import React, { useRef } from "react";
import content from "./Zusammenarbeit.json";
import Leistungen4Phasen from "../../components/C_Leistungen/Leistungen4Phasen/Leistungen4Phasen";
import LeistungenFürWen from "../../components/C_Leistungen/LeistungenFürWen/LeistungenFürWen";
import LeistungenHeader from "../../components/C_Leistungen/LeistungenHeader/LeistungenHeader";
import LeistungenInbound from "../../components/C_Leistungen/LeistungenInbound/LeistungenInbound";
import LeistungenLeistungen from "../../components/C_Leistungen/LeistungenLeistungen/LeistungenLeistungen";
import LeistungenMagnet from "../../components/C_Leistungen/LeistungenMagnet/LeistungenMagnet";
import LeistungenZusammenarbeit from "../../components/C_Leistungen/LeistungenZusammenarbeit/LeistungenZusammenarbeit";
import FAQ from "../../components/FAQ/FAQ";
import PotenzialAnalyse from "../../components/PotenzialAnalyse/PotenzialAnalyse";
import Testimonials from "../../components/Testimonials/Testimonials";
import "./Leistungen.css";
import Leistungen4PhasenMobile from "../../components/C_Leistungen/Leistungen4Phasen/Leistungen4PhasenMobile";

const Leistungen = () => {
  const vorteileRef = useRef(null);
  const leistungenRef = useRef(null);
  const methodeRef = useRef(null);

  const handleScroll = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleVorteileClick = () => handleScroll(vorteileRef);
  const handleLeistungenClick = () => handleScroll(leistungenRef);
  const handleMethodeClick = () => handleScroll(methodeRef);

  return (
    <>
      <LeistungenHeader
        onVorteileClick={handleVorteileClick}
        onLeistungenClick={handleLeistungenClick}
        onMethodeClick={handleMethodeClick}
      />
      <main>
        <LeistungenMagnet ref={vorteileRef} />
        <LeistungenLeistungen ref={leistungenRef} />
        <LeistungenInbound ref={methodeRef} />
        <Leistungen4Phasen />
        <Leistungen4PhasenMobile />
        <LeistungenFürWen />
        <LeistungenZusammenarbeit
          content={content}
          heading="So läuft die Zusammenarbeit ab"
        />
        <div
          style={{
            height: "var(--padding-xxl)",
            position: "relative",
            zIndex: "2",
            backgroundColor: "var(--main-bg-color)",
          }}
        ></div>
        <Testimonials />
        <FAQ />
        <PotenzialAnalyse />
      </main>
    </>
  );
};

export default Leistungen;
