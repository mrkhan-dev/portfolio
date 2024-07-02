import frontendIcon from "../../assets/icon/web-design.png";
import backendIcon from "../../assets/icon/backend.png";
import databaseIcon from "../../assets/icon/database-management.png";
const Services = () => {
  return (
    <div>
      <div>
        <h2 className="text-center font-semibold text-4xl mb-8">Services</h2>
        <div className="flex justify-center gap-4 items-center">
          <div className="card bg-base-100 w-96 shadow-xl">
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
          <div className="card bg-base-100 w-96 shadow-xl">
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
          <div className="card bg-base-100 w-96 shadow-xl">
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
