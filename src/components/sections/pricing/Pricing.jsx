import { MoveRight } from "lucide-react";
import { pricingData } from "../../../local/pricing.local.js";
import Button from "../../button/Button.jsx";
import "./Pricing.scss";

const Pricing = () => {
  const pricingItems = pricingData();

  return (
    <section className="pricing section" id="pricing">
      <div className="pricing__container container grid">
        <div className="section__badge">
          <h3 className="badge__text">04/Investasi</h3>
          <div className="badge__line"></div>
        </div>

        <h2 className="section__title">
          Rancang kebutuhanmu. <span>Tentukan pilihanmu.</span>
        </h2>

        <div className="pricing__cards grid">
          {pricingItems.data.map((pricingItem) => {
            return (
              <div className="pricing__card" key={pricingItem.id}>
                <div className="pricing__card-title">
                  <span></span>
                  <h4>{pricingItem.title}</h4>
                </div>
                <p className="pricing__card-desc">{pricingItem.desc}</p>
              </div>
            );
          })}
        </div>

        <Button
          to="/pricing"
          className="pricing__footer"
          variant="ghost"
          icon={<MoveRight />}
        >
          Lihat Disini
        </Button>
      </div>
    </section>
  );
};

export default Pricing;
