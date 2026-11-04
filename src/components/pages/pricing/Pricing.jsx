import { ArrowLeft, Check, PackageOpen } from "lucide-react";
import { Link } from "react-router-dom";
import useService from "../../../hooks/useService.js";
import { useState, Fragment } from "react";
import Skeleton from "../../skeletons/pricingSkeleton.jsx";
import StateEmpty from "../../../utils/StateEmpty.jsx";
import "./Pricing.scss";

const Services = () => {
  const items = useService();

  const [selected, setSelected] = useState(null);

  const active = selected ?? items.data?.[0]?.name;

  const activeTab =
    items.data?.find((x) => x.name === active)?.service_packages ?? [];

  let content;

  // 1. Loading
  if (items.isLoading) {
    content = <Skeleton />;
  }

  // 2. Error
  else if (items.isError) {
    content = <StateEmpty variant="error" />;
  }

  // 3. Empty
  else if (!activeTab.length) {
    content = (
      <StateEmpty
        variant="empty"
        icon={<PackageOpen />}
        title=">Data belum tersedia_"
      />
    );
  }

  // 4. Success
  else {
    content = activeTab.map((card) => {
      return (
        <div key={card.package_id} className="content__card">
          <h3 className="card__title">{card.name}</h3>

          <div className="card__price">
            <span className="card__price-tag">Mulai dari</span>
            <span className="card__price-number">
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0,
              }).format(Number(card.min_price))}
            </span>
          </div>

          <div className="card__divider"></div>

          <p className="card__desc">{card.description}</p>

          <span className="card__info">Includes:</span>

          <ul className="card__features">
            {card.features.map((feature) => (
              <li className="card__feature" key={feature}>
                <Check
                  className="card__feature-list"
                  size={16}
                  nonScalingStroke
                  strokeWidth={1}
                />{" "}
                {feature}
              </li>
            ))}
          </ul>

          <span className="card__note">
            Harga hanya batas minimum. Harga final tergantung kesepakatan dan
            jumlah request.
          </span>
        </div>
      );
    });
  }

  return (
    <main className="services__page">
      <section className="services__header section">
        <div className="header__container container">
          <Link to="/" className="back-btn">
            <ArrowLeft nonScalingStroke size={16} strokeWidth={1} /> Back to
            Home
          </Link>

          <div className="services-p-eyebrow">
            <span></span>
            <h3 className="badge__text">02/apa yang kami tawarkan</h3>
          </div>

          <h2 className="section__title">
            Desain dengan alasan, <span>Coding dengan tujuan.</span>
          </h2>

          <p className="section__subtitle">
            Kami tawarkan apa yang kami bisa, bukan hanya yang terlihat
            menjanjikan.
          </p>
        </div>
      </section>

      <section className="service__data section">
        <div className="data__container container grid">
          <div className="section__badge">
            <h3 className="badge__text">Semuanya transparan</h3>
            <div className="badge__line"></div>
          </div>

          <div className="data__filter">
            {items.data?.map((item, index) => {
              return (
                <Fragment key={item.service_id}>
                  {index > 0 && <div className="filter__divider"></div>}
                  <button
                    onClick={() => setSelected(item.name)}
                    className={`filter__button ${item.name === active ? "active" : ""}`}
                  >
                    {item.name}
                  </button>
                </Fragment>
              );
            })}
          </div>

          <div className="data__content">{content}</div>
        </div>
      </section>
    </main>
  );
};

export default Services;
