import "./AgenturTeam.css";
import content from "./AgenturTeam.json";

const AgenturTeam = () => {
  return (
    <section className="agentur_team">
      <h2>Das Team</h2>
      <div className="team_wrapper">
        {content.map((data) => (
          <div className="bg_wrapper" key={data.name}>
            <div className="member_wrapper">
              <img src={data.img} alt="team member image" />
              <article>
                <div className="header">
                  <h3>
                    {data.name} <span>{data.profession}</span>
                  </h3>
                </div>
                <p className="description">{data.description}</p>
                <div className="bullet_points">
                  {data.bulletPoints.map((point, index) => (
                    <p>
                      <span>{point.title}: </span> {point.text}
                    </p>
                  ))}
                </div>
              </article>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AgenturTeam;
