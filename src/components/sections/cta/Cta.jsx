import { Link } from "react-router-dom";
import { Mails, MoveUpRight } from "lucide-react";
import "./Cta.scss";

const Cta = () => {
  return (
    <section className="cta section" id="contact-us">
      <div className="cta__container container">
        <div className="section__badge">
          <h3 className="badge__text cta-badge">08/Start somewhere</h3>
          <div className="badge__line cta-badge-line"></div>
        </div>

        <h2 className="cta-title section__title">
          Punya sesuatu yang siap berkembang?{" "}
          <span>Kami bantu wujudkan semua.</span>
        </h2>

        <p className="section__subtitle">
          Ceritakan apa yang sedang kamu bangun, perbaiki, atau redesign.
          Obrolan pertama tentang semuanya - bukan sales pitch.
        </p>

        <div className="ctA">
          <Link to="/" className="ctA-btn">
            Ayo Ngobrol{" "}
            <MoveUpRight
              nonScalingStroke
              size={16}
              strokeWidth={1.5}
              className="ctA-btn-icon"
            />
          </Link>
          <a href="#" className="ctA-btn ghost">
            <Mails
              nonScalingStroke
              size={16}
              strokeWidth={1.5}
              className="ctA-btn-icon"
            />{" "}
            Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cta;
