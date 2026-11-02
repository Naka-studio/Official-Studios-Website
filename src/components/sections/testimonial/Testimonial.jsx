import { testimonialData } from "../../../local/testimonial.local.js";
import "./Testimonial.scss";

const Testimonial = () => {
  const testimonialItems = testimonialData();

  return (
    <section className="testimonial section" id="testimonial">
      <div className="testimonial__container container grid">
        <div className="section__badge">
          <h3 className="badge__text">07/what they said</h3>
          <div className="badge__line"></div>
        </div>

        <div className="testimonial__cards">
          {testimonialItems.data.map((testimonialItem) => (
            <div className="testimonial__quote" key={testimonialItem.id}>
              <blockquote className="quote">
                "{testimonialItem.quote}"
              </blockquote>
              <p className="quote__by">
                {testimonialItem.people}, {testimonialItem.role} -{" "}
                {testimonialItem.company}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
