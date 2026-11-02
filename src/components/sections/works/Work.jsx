import { MoveRight, MoveUpRight } from "lucide-react";
import useWork from "../../../hooks/useWork.js";
import Button from "../../button/Button.jsx";
import "./Work.scss";

const work = () => {
  const worksData = useWork();

  //console.log(worksData.data);
  return (
    <section className="work section" id="work">
      <div className="work__container container grid">
        <div className="section__badge">
          <h3 className="badge__text">05/selected works</h3>
          <div className="badge__line"></div>
        </div>

        <h2 className="section__title">
          A few things <span>we've made</span>
        </h2>

        <div className="project__grid">
          {worksData.data?.map((workData) => (
            <article className="project__card" key={workData.work_id}>
              <a href={workData.preview_link} className="project__card-image">
                <img src={workData.image_url} alt={workData.title} />
                <span className="icon">
                  <MoveUpRight strokeWidth={1.5} nonScalingStroke size={16} />
                </span>
              </a>

              <div className="project__data">
                <div>
                  <h3 className="project__title">{workData.title}</h3>
                  <p className="project__desc">{workData.description}</p>
                </div>

                <div className="project__category">{workData.category}</div>
              </div>

              <div className="project__tags">
                {workData.tags?.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <Button
          to="/"
          className="work__footer"
          icon={<MoveRight />}
          justify="right"
        >
          Lihat Semua Project
        </Button>
      </div>
    </section>
  );
};

export default work;
