import "./CoachingWho.css";

const CoachingWho = () => {
  return (
    <section className="coaching_who">
      <div className="header">
        <h2>An wen richtet sich das SEO-Coaching?</h2>
        <p>
          Unser Coaching-Angebot richtet sich an Marketing-Teams, Redakteure und
          Einzelpersonen. Je nachdem, wer in einem Unternehmen für den Bereich
          SEO zuständig ist bzw. mit Verantwortung trägt.
        </p>
      </div>
      <div className="content">
        <div>
          <img src="/img/coaching_who1.svg" alt="people" />
          <p>Marketing Teams</p>
        </div>
        <div>
          <img src="/img/coaching_who2.svg" alt="raute" />
          <p>Redakteure</p>
        </div>
        <div>
          <img src="/img/coaching_who3.svg" alt="person" />
          <p>Einzelpersonen</p>
        </div>
      </div>
    </section>
  );
};

export default CoachingWho;
