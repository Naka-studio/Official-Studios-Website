import { languagesData } from "../../../local/stacks.local";

const Stacks = () => {
  const languages = languagesData();

  return (
    <section className="stacks section" id="stacks">
      <div className="stacks__container container grid">
        <div className="section__badge">
          <h3 className="badge__text">03/Multiple language</h3>
          <div className="badge__line"></div>
        </div>

        <div className="stacks__copy">
          <h2 className="section__title">
            Terus berkembang untuk mengikuti zaman dan{" "}
            <span>menyediakan support untuk berbagai bahasa.</span>
          </h2>

          <ul>
            {languages.data.map((language) => {
              return (
                <li key={language.id}>
                  {language.name}{" "}
                  <img src={language.logo} alt={language.name} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Stacks;
