import { MoveRight, MoveUpRight } from "lucide-react";
import Button from "../../button/Button.jsx";
import "./hero.scss";

const hero = () => {
  return (
    <section className="hero__section" id="hero">
      <div className="hero__container container grid">
        <div className="hero__left-wrapper">
          <div className="hero__badge section__badge">
            <div className="dot__badge"></div>
            <h3 className="badge__text">Web Design | SEO | Developer</h3>
          </div>

          <h1 className="hero__title section__title">
            Website Murni <span>Buatan Manusia,</span> Bukan
            <span> Buatan AI.</span>
          </h1>

          <p className="hero__subtitle section__subtitle">
            Website yang dipikirkan dengan matang untuk bisnis yang ingin lebih
            dari sekedar terlihat bagus
          </p>

          <div className="hero__cta">
            <Button to="/" icon={<MoveUpRight />} iconPosition="right">
              Konsultasi
            </Button>
            <Button
              href="#work"
              variant="ghost"
              icon={<MoveRight />}
              iconPosition="right"
            >
              Lihat karya
            </Button>
          </div>
        </div>

        <div className="hero__art">
          <div className="orb">
            <div className="orb__core"></div>
            <div className="orb__ring ring__one"></div>
            <div className="orb__ring ring__two"></div>
          </div>

          <span className="orbit__line"></span>
          <span className="coord coord-a">≈ 01h 00m / +60° 00′</span>
          <span className="coord coord-b">NAKA U1REVRElP</span>
          <span className="coord coord-c">human-made</span>
        </div>
      </div>

      <div className="hero__shadow"></div>
      <div className="scroll__note">
        Scroll untuk menjelajah <span></span>
      </div>
    </section>
  );
};

export default hero;
