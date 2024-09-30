import { Link } from "react-router-dom";
import "./CoachingTestimonial.css";

const CoachingTestimonial = () => {
  return (
    <section className="coaching_testi">
      <article>
        <blockquote>
          „Maximilian hat uns ein individuelles Coaching für unsere Website
          gegeben, welches sehr hilfreich war. Er war stets gut vorbereitet und
          konnte auch komplexe Themen super erklären.”
        </blockquote>
        <p>
          Valentin Ade, Gründer von
          <Link>The Negotiation Studio</Link>
        </p>
      </article>
      <div>
        <img
          src="/img/coaching_testi.png"
          alt="testimonial geschäftsführer foto"
        />
      </div>
    </section>
  );
};

export default CoachingTestimonial;
