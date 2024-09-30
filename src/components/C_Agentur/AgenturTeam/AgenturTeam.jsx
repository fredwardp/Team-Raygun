import { useState } from "react";
import "./AgenturTeam.css";
import content from "./AgenturTeam.json";
import AgenturTeamBox from "./AgenturTeamBox";

const AgenturTeam = () => {
  return (
    <section className="agentur_team">
      <h2>Das Team</h2>
      <div className="team_wrapper">
        {content.map((data) => (
          <AgenturTeamBox data={data} />
        ))}
      </div>
    </section>
  );
};

export default AgenturTeam;
