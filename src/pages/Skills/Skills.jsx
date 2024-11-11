import {useEffect} from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init({duration: 1000});
    AOS.refresh();
  }, []);

  return (
    <div
      data-aos="fade-up"
      className="max-w-[1416px] mx-auto mt-32  px-4 lg:px-0"
    >
      <h2 className="text-center text-4xl font-Roboto mt-8 font-semibold">
        Technologies that I know
      </h2>
      <div className="grid lg:grid-cols-6 grid-cols-3 gap-2 lg:gap-6 lg:w-[1020px] mx-auto mt-12">
        <div className=" lg:h-[140px] lg:w-[140px] shadow-md border ">
          <img
            className=" w-20 mt-6 ml-7 hover:scale-125 
                transition"
            src="https://skillicons.dev/icons?i=html"
            alt=""
          />
        </div>
        <div className=" lg:h-[140px] lg:w-[140px] shadow-md border ">
          <img
            className=" w-20 mt-6 ml-7 hover:scale-125 
                transition"
            src="https://skillicons.dev/icons?i=css"
            alt=""
          />
        </div>
        <div className=" lg:h-[140px] lg:w-[140px] shadow-md border ">
          <img
            className=" w-20 mt-6 ml-7 hover:scale-125 
                transition"
            src="https://skillicons.dev/icons?i=tailwind"
            alt=""
          />
        </div>
        <div className=" lg:h-[140px] lg:w-[140px] shadow-md border ">
          <img
            className=" w-20 mt-6 ml-7 hover:scale-125 
                transition"
            src="https://skillicons.dev/icons?i=javascript"
            alt=""
          />
        </div>
        <div className=" lg:h-[140px] lg:w-[140px] shadow-md border ">
          <img
            className=" w-20 mt-6 ml-7 hover:scale-125 
                transition"
            src="https://skillicons.dev/icons?i=react"
            alt=""
          />
        </div>
        <div className=" lg:h-[140px] lg:w-[140px] shadow-md border ">
          <img
            className=" w-20 mt-6 ml-7 hover:scale-125 
                transition"
            src="https://skillicons.dev/icons?i=nodejs"
            alt=""
          />
        </div>
        <div className=" lg:h-[140px] lg:w-[140px] shadow-md border ">
          <img
            className=" w-20 mt-6 ml-7 hover:scale-125 
                transition"
            src="https://skillicons.dev/icons?i=expressjs"
            alt=""
          />
        </div>
        <div className=" lg:h-[140px] lg:w-[140px] shadow-md border ">
          <img
            className=" w-20 mt-6 ml-7 hover:scale-125 
                transition"
            src="https://skillicons.dev/icons?i=nextjs"
            alt=""
          />
        </div>
        <div className=" lg:lg:h-[140px] lg:lg:w-[140px] shadow-md border ">
          <img
            className=" w-20 mt-6 ml-7 hover:scale-125 
                transition"
            src="https://skillicons.dev/icons?i=mongodb"
            alt=""
          />
        </div>
        <div className=" lg:lg:h-[140px] lg:lg:w-[140px] shadow-md border ">
          <img
            className=" w-20 mt-6 ml-7 hover:scale-125 
                transition"
            src="https://skillicons.dev/icons?i=firebase"
            alt=""
          />
        </div>
        <div className=" lg:h-[140px] lg:w-[140px] shadow-md border ">
          <img
            className=" w-20 mt-6 ml-7 hover:scale-125 
                transition"
            src="https://skillicons.dev/icons?i=git"
            alt=""
          />
        </div>
        <div className=" lg:h-[140px] lg:w-[140px] shadow-md border ">
          <img
            className=" w-20 mt-6 ml-7 hover:scale-125 
                transition"
            src="https://skillicons.dev/icons?i=github"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
