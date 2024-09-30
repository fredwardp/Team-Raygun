import "./Kunden.css";

const Kunden = () => {
  return (
    <section className="kunden_sec ">
      <div>
        <h2>Unsere zufriedenen Kunden</h2>
        <div className="kunden_mobile_shadow"></div>
        <article>
          <img src="/img/kunden/mpu_wolff.svg" alt="" />
          <img src="/img/kunden/tns.svg" alt="" />
          <img src="/img/kunden/dental.svg" alt="" />
          <img src="/img/kunden/ER.svg" alt="" />
          <img
            className="kundenlogo_mobile"
            src="/img/kunden/mpu_wolff.svg"
            alt=""
          />
          <img className="kundenlogo_mobile" src="/img/kunden/tns.svg" alt="" />
          <img
            className="kundenlogo_mobile"
            src="/img/kunden/dental.svg"
            alt=""
          />
          <img className="kundenlogo_mobile" src="/img/kunden/ER.svg" alt="" />
        </article>
      </div>
    </section>
  );
};

export default Kunden;
