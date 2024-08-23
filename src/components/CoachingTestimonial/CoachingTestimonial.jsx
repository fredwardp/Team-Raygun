import Testimonial from "../Testimonials/Testimonial";
import "./CoachingTestimonial.css";
import content from "./TestimonialsCoaching.json";

const CoachingTestimonial = () => {
  return (
    <section className="testimonials">
      <div className="top_stroke"></div>
      <h2>Das sagen unsere Partner</h2>
      <div className="content">
        {content.map((data, index) => (
          <Testimonial data={data} key={index} />
        ))}
      </div>
    </section>
  );
};

export default CoachingTestimonial;
