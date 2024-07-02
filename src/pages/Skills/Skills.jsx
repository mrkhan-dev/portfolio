import node from "../../assets/icon/node.png";
import express from "../../assets/icon/express.png";
import jwt from "../../assets/icon/jwt.png";
import "./skills.css";
import {DiMongodb} from "react-icons/di";
import {Link} from "react-router-dom";
const Skills = () => {
  return (
    <div className="max-w-[1416px] mx-auto mt-32">
      <h2 className="text-center font-semibold font-Roboto text-4xl">Skills</h2>
      <div className="flex gap-24 justify-between mt-12">
        <div className="w-1/2">
          <h3 className="text-3xl px-4 font-semibold">
            Expe<span className="text-[#7462e1]">r</span>t
          </h3>
          <div className="container">
            <div className="skill-box">
              <span className="title">HTML</span>
              <div className="skill-bar">
                <span className="skill-per html">
                  <span className="tooltip">95%</span>
                </span>
              </div>
            </div>
            <div className="skill-box">
              <span className="title">CSS</span>
              <div className="skill-bar">
                <span className="skill-per css">
                  <span className="tooltip">80%</span>
                </span>
              </div>
            </div>
            <div className="skill-box">
              <span className="title">Tailwind Css</span>
              <div className="skill-bar">
                <span className="skill-per tailwindCss">
                  <span className="tooltip">84%</span>
                </span>
              </div>
            </div>
            <div className="skill-box">
              <span className="title">Javascript</span>
              <div className="skill-bar">
                <span className="skill-per javascript">
                  <span className="tooltip">75%</span>
                </span>
              </div>
            </div>
            <div className="skill-box">
              <span className="title">ReactJS</span>
              <div className="skill-bar">
                <span className="skill-per reactjs">
                  <span className="tooltip">70%</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-3xl px-4 font-semibold">
            Famili<span className="text-[#7462e1]">a</span>r
          </h3>
          <div className="grid grid-cols-2 gap-6 mt-4">
            <Link to="https://nodejs.org/en">
              <div className=" h-[140px] w-[140px]  shadow-md">
                <img className="p-8" src={node} alt="" />
              </div>
            </Link>
            <Link to="https://expressjs.com">
              <div className=" h-[140px] w-[140px]  shadow-md">
                <img className="p-8" src={express} alt="" />
              </div>
            </Link>
            <Link to="https://www.mongodb.com">
              <div className=" h-[140px] flex justify-center items-center w-[140px]  shadow-md">
                <DiMongodb className="text-6xl text-[#00684A]" />
              </div>
            </Link>
            <Link to="https://jwt.io" target="blank">
              <div className=" h-[140px] w-[140px]  shadow-md">
                <img className="p-8" src={jwt} alt="" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
