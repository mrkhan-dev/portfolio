/* eslint-disable react/no-unescaped-entities */
import dev1 from "../../assets/dev1.png";

import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";
import {Typewriter} from "react-simple-typewriter";

const Banner = () => {
  useEffect(() => {
    AOS.init({duration: 1000});
    AOS.refresh();
  }, []);

  return (
    <div className="max-w-[1416px] mx-auto mt-32  px-4 lg:px-0">
      <div className="lg:flex lg:flex-row flex-col justify-between mb-24 ">
        <div data-aos="fade-right">
          <p className="text-2xl font-Poppins text-gray-500">Hi, I am</p>
          <h2 className="text-7xl font-semibold font-Roboto">Shahjalal</h2>
          <p className="text-4xl mt-4 font-Roboto text-[#0DFFD7]">
            <Typewriter
              words={["Front-end developer", "Learning MERN Stack development"]}
              loop={5}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>
          <p className="mt-4 font-Roboto">
            That's awesome! It's great to connect with another passionate
            front-end developer. React.js is such a powerful <br /> tool for
            creating engaging user interfaces. It's fantastic to see your
            dedication to building seamless digital experiences <br /> for
            users. I'm definitely open to collaboration. Let's turn those ideas
            into reality!
          </p>
          <a href="/download.pdf" download>
            <button className="btn bg-[#0DFFD7] font-Poppins text-lg text-[#000000] hover:text-[#0DFFD7] border-none mt-4">
              Download Resume
            </button>
          </a>
        </div>
        <div className="lg:h-[400px] z-0 border-[#0DFFD7] border-x-0 flex justify-center items-center lg:w-[400px] rounded-full border">
          <img className="rounded-full" src={dev1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
