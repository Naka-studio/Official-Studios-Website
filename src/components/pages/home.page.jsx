import Hero from "../sections/hero/hero.jsx";
import About from "../sections/about/about.jsx";
import Services from "../sections/services/services.jsx";
import Work from "../sections/works/Work.jsx";
import Stacks from "../sections/stacks/Stacks.jsx";
import Pricing from "../sections/pricing/Pricing.jsx";
import Process from "../sections/process/Process.jsx";
import Testimonial from "../sections/testimonial/Testimonial.jsx";
import Cta from "../sections/cta/Cta.jsx";

const homePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      {/*<Stacks />*/}
      <Pricing />
      <Work />
      <Process />
      <Testimonial />
      <Cta />
    </>
  );
};

export default homePage;
