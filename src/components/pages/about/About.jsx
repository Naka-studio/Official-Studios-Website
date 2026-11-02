import Button from "../../button/Button.jsx";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import "./About.scss";

const About = () => {
  return (
    <main className="about__page">
      <section className="about__header section">
        <div className="header__container container">
          <Link to="/" className="back-btn">
            <ArrowLeft nonScalingStroke size={16} strokeWidth={1} /> Back to
            Home
          </Link>

          <div className="about-p-eyebrow">
            <span></span>
            <h3 className="badge__text">01/Studio's Filosophy</h3>
          </div>

          <h2 className="section__title">
            AI bisa menghasilkan, <span>Manusia yang memberikan makna.</span>
          </h2>

          <p className="section__subtitle">
            Kami bukan anti-AI. Kami Pro-manusia.
          </p>
        </div>
      </section>

      <section className="about__detail section">
        <div className="detail__container container grid">
          <div className="first-col">
            <div className="detail__badge section__badge">
              <h3 className="badge__text">apa yang kami percaya</h3>
              <div className="badge__line"></div>
            </div>
          </div>

          <div className="second-col">
            <p className="detail__desc">
              AI adalah bagian dari cara kami bekerja. AI membantu kami bergerak
              lebih cepat, mengeksplorasi lebih banyak arah, dan menangkap
              hal-hal yang mungkin terlewat. Kami menggunakannya saat memang
              masuk akal.
            </p>
            <p className="detail__desc">
              Tapi taste tidak bisa diotomatisasi. Begitu juga konteks,
              judgment, atau kemampuan memahami apa yang benar-benar dibutuhkan
              bisnis — bukan hanya apa yang dikatakannya.
            </p>
            <p className="detail__desc">
              Setiap keputusan desain yang kami buat adalah keputusan manusia.
              Tools berubah. Itu tidak.
            </p>

            <h3 className="tagline">Human-taste</h3>
          </div>
        </div>
      </section>

      <section className="about__approach section">
        <div className="approach__container container grid">
          <div className="section__badge">
            <h3 className="badge__text">Cara kami memikirkan pekerjaan</h3>
            <div className="badge__line"></div>
          </div>

          <div className="approach__cards">
            <div className="approach__card">
              <span className="approach__card-number">01</span>
              <div className="approach__card-data">
                <h3 className="data__title">Bisnis dulu</h3>
                <p className="data__desc">
                  Website yang terlihat bagus tapi tidak bekerja untuk bisnis
                  hanya dekorasi. Kami mulai dari apa yang perlu dicapai bisnis.
                </p>
              </div>
            </div>

            <div className="approach__card">
              <span className="approach__card-number">02</span>
              <div className="approach__card-data">
                <h3 className="data__title">Kejernihan diatas kecerdasan</h3>
                <p className="data__desc">
                  Desain cerdas yang membingungkan orang bukan desain cerdas.
                  Kami mengutamakan interface yang membuat langkah berikutnya
                  terasa jelas.
                </p>
              </div>
            </div>

            <div className="approach__card">
              <span className="approach__card-number">03</span>
              <div className="approach__card-data">
                <h3 className="data__title">Detail itu penting</h3>
                <p className="data__desc">
                  Perbedaan antara website yang bagus dan yang luar biasa
                  biasanya tidak terlihat — ada di spacing, transisi, microcopy,
                  hal-hal yang dirasakan orang tanpa disadari.
                </p>
              </div>
            </div>

            <div className="approach__card">
              <span className="approach__card-number">04</span>
              <div className="approach__card-data">
                <h3 className="data__title">Tanpa Template slop</h3>
                <p className="data__desc">
                  Setiap project dimulai dari masalah yang sebenarnya, bukan
                  dari tema atau template. Itulah satu-satunya cara untuk
                  menghasilkan sesuatu yang benar-benar cocok.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about__Studio section">
        <div className="studio__container container grid">
          <div className="first-col">
            <div className="studio__badge section__badge">
              <h3 className="badge__text">Tentang studio</h3>
              <div className="badge__line"></div>
            </div>
          </div>

          <div className="second-col">
            <p className="studio__desc">
              Naka Studio adalah studio indie-developer independen yang kecil.
              Kami bekerja dengan bisnis yang ingin website ataupun program
              mereka benar-benar melakukan sesuatu — bukan hanya ada.
            </p>

            <div className="studio__desc-divider"></div>

            <p className="studio__desc">
              Kami sengaja kecil. Artinya orang yang kamu ajak bicara adalah
              orang yang mengerjakan pekerjaannya.
            </p>
          </div>
        </div>
      </section>

      <section className="section__call section">
        <div className="call__container container grid">
          <div className="first-col">
            <h2 className="section__title">Mau bekerja sama?</h2>
            <p className="section__subtitle">
              Ceritakan apa yang sedang kamu bangun. Obrolan pertama gratis,
              santai, dan tentang ide kamu.
            </p>
          </div>

          <div className="second-col">
            <Button icon={<ArrowUpRight />} className="call-btn">
              Ayo Ngobrol
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
