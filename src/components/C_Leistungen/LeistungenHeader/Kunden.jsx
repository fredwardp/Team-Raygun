import "./Kunden.css";

const Kunden = () => {
  return (
    <section className="kunden_sec ">
      <div>
        <h2>Unsere zufriedenen Kunden</h2>
        <div className="kunden_mobile_shadow"></div>
        <article>
          <img src="/img/BeispielKunde.svg" alt="" />
          <img src="/img/BeispielKunde.svg" alt="" />
          <img src="/img/BeispielKunde.svg" alt="" />
          <img src="/img/BeispielKunde.svg" alt="" />
          <img src="/img/BeispielKunde.svg" alt="" />
          <img
            className="kundenlogo_mobile"
            src="/img/BeispielKunde.svg"
            alt=""
          />
          <img
            className="kundenlogo_mobile"
            src="/img/BeispielKunde.svg"
            alt=""
          />
          <img
            className="kundenlogo_mobile"
            src="/img/BeispielKunde.svg"
            alt=""
          />
          <img
            className="kundenlogo_mobile"
            src="/img/BeispielKunde.svg"
            alt=""
          />
          <img
            className="kundenlogo_mobile"
            src="/img/BeispielKunde.svg"
            alt=""
          />
        </article>
      </div>
    </section>
  );
};

export default Kunden;
