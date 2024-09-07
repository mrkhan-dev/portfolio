import frontendIcon from "../../assets/icon/web-design.png";
import backendIcon from "../../assets/icon/backend.png";
import databaseIcon from "../../assets/icon/database-management.png";
import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Services = () => {
  useEffect(() => {
    AOS.init({duration: 1000});
    AOS.refresh();
  }, []);

  return (
    <div className="px-4 lg:px-0">
      <div data-aos="fade-up">
        <h2 className="text-center font-semibold text-4xl mb-8">Services</h2>
        <div className="lg:flex lg:flex-row flex-col justify-center lg:gap-4 items-center">
          <div className="card bg-base-100 lg:w-96 shadow-xl border">
            <figure>
              <img className="h-30 w-28" src={frontendIcon} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className=" text-xl font-semibold text-center">Front-end</h2>
              <p className="text-lg">
                I offer expert frontend development services, creating
                responsive, user-friendly websites and web applications using
                modern technologies like HTML, CSS, JavaScript, and frameworks
                like React.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 lg:w-96 shadow-xl border mt-4 lg:mt-0">
            <figure>
              <img className="h-30 w-28" src={backendIcon} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="text-xl font-semibold text-center">Backend</h2>
              <p className="text-lg">
                I offer professional backend development services, building
                robust, scalable server-side applications using technologies
                like Node.js and Express.js to ensure seamless performance and
                security.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 lg:w-96 border shadow-xl mt-4 lg:mt-0">
            <figure>
              <img className="h-30 w-28" src={databaseIcon} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="text-xl font-semibold text-center">Database</h2>
              <p className="text-lg">
                I offer professional MongoDB database services, specializing in
                designing, implementing, and managing scalable, high-performance
                NoSQL databases to ensure efficient data storage, retrieval, and
                security for your applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
