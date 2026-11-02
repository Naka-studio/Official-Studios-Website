import { processData } from "../../../local/process.local.js";
import "./Process.scss";

const Process = () => {
  const processitems = processData();

  return (
    <section className="process section" id="process">
      <div className="process__container container grid">
        <div className="process__badge section__badge">
          <h3 className="badge__text">06/easy steps</h3>
          <div className="badge__line"></div>
        </div>

        <div className="process__content">
          <h2 className="section__title">
            sengaja didesain sederhana <span>dan mudah untuk semua orang.</span>
          </h2>
          <div className="process__cards">
            {processitems.data.map((processItem) => (
              <div className="process__card" key={processItem.id}>
                <div className="process__card-number">0{processItem.id}</div>
                <div className="process__card-data">
                  <h3 className="process__card-data-title">
                    {processItem.title}
                  </h3>
                  <p className="process__card-data-desc">{processItem.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
