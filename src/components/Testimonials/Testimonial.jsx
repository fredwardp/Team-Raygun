import "./Testimonial.css";

const Testimonial = ({ data, index }) => {
  return (
    <article>
      <div className="partner_wrapper">
        <p className="partner_text">{data.text}</p>
        <div className="partner_infos">
          <img src={data.image} alt="" />
          <div>
            <p className="partner_name">{data.name}</p>
            <p className="partner_profession">{data.profession}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Testimonial;
