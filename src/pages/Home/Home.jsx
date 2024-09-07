import About from "../About/About";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";
import Skills from "../Skills/Skills";
import Portfolio from "../portfolio/Portfolio";
import Services from "../services/Services";
import Banner from "./Banner";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <About />
      <div className="mt-24">
        <Skills />
      </div>
      <div className="mt-24">
        <Education />
      </div>
      <div className="mt-24">
        <Services />
      </div>
      <div className="mt-24">
        <Portfolio />
      </div>
      <div className="mt-24">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
