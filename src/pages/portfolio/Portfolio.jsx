import {Link} from "react-router-dom";
import image1 from "../../assets/portfolio/Screenshot 2024-05-24 123147.png";
import image2 from "../../assets/portfolio/Screenshot 2024-07-02 233012.png";
import image3 from "../../assets/portfolio/Screenshot 2024-07-02 233647.png";
const Portfolio = () => {
  return (
    <div>
      <h2 className="text-center text-4xl font-semibold font-Roboto mb-8">
        My Portfolio
      </h2>
      <div className="flex gap-4">
        <div className="max-w-lg p-4 bg-[#FFEBF4] rounded-md px-8 py-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <img
                src={image1}
                alt=""
                className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
              />
            </div>
          </div>
        </div>
        <div className="max-w-lg p-4 bg-[#E5F3FC] rounded-md px-8 py-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <img
                src={image2}
                alt=""
                className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
              />
            </div>
          </div>
        </div>
        <div className="max-w-lg p-4 bg-[#F2EEFF] rounded-md px-8 py-8">
          <div className="space-y-4">
            <Link to="https://health-hub-a0fd0.web.app" target="blank">
              <div className="space-y-2">
                <img
                  src={image3}
                  alt=""
                  className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
