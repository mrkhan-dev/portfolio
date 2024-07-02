import github from "../../assets/icon/github.png";
import linkedin from "../../assets/icon/5296501_linkedin_network_linkedin logo_icon.png";
import facebook from "../../assets/icon/facebook.png";
import instagram from "../../assets/icon/instagram.png";
import {Link} from "react-router-dom";

const About = () => {
  return (
    <div>
      <h3 className="text-center text-4xl font-Roboto mt-8 font-semibold">
        About <span className="text-[#7462E1]">Me</span>
      </h3>
      <div className="flex mt-8 max-w-[1416px] mx-auto">
        <div className="w-1/2">
          <img
            className="rounded-xl"
            src="https://i.ibb.co/DKsqBNC/pen-near-notebook-camera-eyeglasses-keyboard-23-2148037061.jpg"
            alt=""
          />
        </div>
        <div className="w-1/2">
          <p className=" font-Poppins text-lg">
            Hello! I am Shahjalal, a passionate{" "}
            <span className="text-[#7462E1] font-semibold">
              front-end web developer{" "}
            </span>
            specializing in React.js. I have a strong background in creating
            dynamic and responsive web applications that provide an excellent
            user experience. Currently, I am expanding my skill set by learning
            MERN stack development. This journey allows me to dive deeper into
            full-stack development, enhancing my ability to build comprehensive
            and robust applications from front to back. With a keen eye for
            detail and a commitment to writing clean, maintainable code, I
            strive to stay updated with the latest industry trends and
            technologies. My goal is to create intuitive and engaging web
            solutions that not only meet but exceed user expectations. Feel free
            to explore my portfolio to see some of the projects I have worked
            on. I am always open to new opportunities and collaborations, so do
            not hesitate to get in touch!
          </p>
          <div className="flex gap-4 mt-4">
            <Link to="https://github.com/mrkhan-dev" target="blank">
              <img className="w-8 h-8" src={github} alt="github" />
            </Link>
            <Link to="https://www.linkedin.com/in/md-shahjalal2" target="blank">
              <img className="w-8 h-8" src={linkedin} alt="linkedin" />
            </Link>
            <Link to="https://web.facebook.com/shahjalalkhan110" target="blank">
              <img className="w-8 h-8" src={facebook} alt="facebook" />
            </Link>
            <Link
              to="https://www.instagram.com/shahjalalkhan110"
              target="blank"
            >
              <img className="w-8 h-9" src={instagram} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
