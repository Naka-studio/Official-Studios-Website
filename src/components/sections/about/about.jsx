import { MoveRight } from "lucide-react";
import Button from "../../button/Button.jsx";
import "./about.scss";

const about = () => {
  return (
    <section className="about section" id="about">
      <div className="about__container container grid">
        <div className="about__badge section__badge">
          <h3 className="badge__text">01/filosofi</h3>
          <div className="badge__line"></div>
        </div>

        <div className="about__content grid">
          <h2 className="section__title">
            AI mungkin bisa <span>menghasilkan, </span>
            Tapi manusialah yang <span>memberi seni.</span>
          </h2>
          <p className="about__subtitle section__subtitle">
            AI membantu membangun website, tetapi sentuhan manusia menghadirkan
            empati, pengalaman pengguna yang lebih bermakna, dan detail kreatif
            yang membuat setiap karya terasa unik.
          </p>

          <h3 className="about__tagline">Sense of Human !!</h3>

          <Button
            to="/about"
            className="about__btn"
            variant="ghost"
            icon={<MoveRight />}
            iconPosition="right"
            justify="left"
          >
            Pelajari Selengkapnya
          </Button>
        </div>
      </div>
    </section>
  );
};

export default about;
