import About from "../About/About";
import Skills from "../Skills/Skills";
import Portfolio from "../portfolio/Portfolio";
import Services from "../services/Services";
import Banner from "./Banner";

const Home = () => {
  return (
    <div className="max-w-[1416px] mx-auto mt-32">
      <Banner />
      <About />
      <div className="mt-24">
        <Skills />
      </div>
      <div className="mt-24">
        <Services />
      </div>
      <div className="mt-24">
        <Portfolio />
      </div>
    </div>
  );
};

export default Home;
