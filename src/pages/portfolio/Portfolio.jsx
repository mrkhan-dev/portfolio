/* eslint-disable react/no-unescaped-entities */
// import {Link} from "react-router-dom";
import image1 from "../../assets/portfolio/Screenshot 2024-05-24 123147.png";
import image2 from "../../assets/portfolio/art&craftstire.png";
import image3 from "../../assets/portfolio/Screenshot 2024-07-02 233647.png";
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";
import {FaEye, FaGithub} from "react-icons/fa";
import {Link} from "react-router-dom";
const Portfolio = () => {
  useEffect(() => {
    AOS.init({duration: 1000});
    AOS.refresh();
  }, []);

  return (
    <div data-aos="fade-up" className="lg:max-w-[1416px] mx-auto  px-4 lg:px-0">
      <h1 className="text-center text-4xl font-Roboto font-medium mb-8">
        My Portfolio
      </h1>
      <div className="lg:grid lg:grid-cols-3 ">
        <div className="card card-compact bg-base-100 lg:w-[452px] shadow-xl border">
          <figure className="h-[260px]">
            <img className="bg-cover" src={image1} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shelf Master - Library Management</h2>
            <p className="font-Roboto text-base">
              Shelf Master is a library management system. The Library
              Management Website is a robust and user-friendly web application
              designed to streamline the administration and operation of a
              library.
            </p>
            <h4 className="text-xl">Features -</h4>
            <ul>
              <li className="list-disc ml-3 text-base">
                Provides a user-friendly interface with customizable viewing
                options.
              </li>
              <li className="list-disc ml-3 text-base">
                Users can easily edit the details of their uploaded art pieces,
                including title, description, price, category, and images, and
                delete their added book.
              </li>
            </ul>
            <p className="text-base">
              Technology: javascript, React.js, Tailwind, Express.js, Node.js,
              MongoDB
            </p>
            <div className="card-actions justify-between mt-4">
              <Link
                to="https://github.com/mrkhan-dev/library-management-client"
                target="blank"
              >
                <button className="btn bg-[#0DFFD7] hover:text-[#0DFFD7] text-[#000000] text-base">
                  {" "}
                  <FaGithub /> GitHub
                </button>
              </Link>
              <Link
                to="https://library-management-7a7cf.web.app/"
                target="blank"
              >
                <button className="btn bg-[#0DFFD7] hover:text-[#0DFFD7] text-[#000000] text-base">
                  {" "}
                  <FaEye /> Live Site
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-base-100 lg:w-[452px] shadow-xl mt-4 lg:mt-0 border">
          <figure className="h-[260px]">
            <img className="bg-contain" src={image2} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Colorful Expression - Art & Craft Store
            </h2>
            <p className="font-Roboto text-base">
              Art and Craft Store website designed to showcase and sell unique
              handmade items. This platform allows users to register,
              authenticate, and list their own art for sale.
            </p>
            <div className="flex-1 ">
              <h4 className="text-xl">Features -</h4>
              <ul>
                <li className="list-disc ml-3 text-base">
                  Secure user registration and login system.
                </li>
                <li className="list-disc ml-3 text-base">
                  Password encryption and secure session management.
                </li>
                <li className="list-disc ml-3 text-base">
                  Easy-to-use interface for users to add, edit, and delete their
                  own art listings.
                </li>
                <li className="list-disc ml-3 text-base">
                  etailed product pages with images, descriptions, and pricing.
                </li>
              </ul>
              <p className="text-base">
                Technology: javascript, React.js, Tailwind, Express.js, Node.js,
                MongoDB
              </p>
            </div>
            <div className="card-actions justify-between ">
              <Link to="https://github.com/mrkhan-dev/art-craft-store-client">
                <button className="btn bg-[#0DFFD7] hover:text-[#0DFFD7] text-[#000000] text-base">
                  {" "}
                  <FaGithub /> GitHub
                </button>
              </Link>
              <Link to="https://art-and-craft-dc812.web.app/">
                <button className="btn bg-[#0DFFD7] hover:text-[#0DFFD7] text-[#000000] text-base">
                  {" "}
                  <FaEye /> Live Site
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-base-100 lg:w-[452px] shadow-xl mt-4 lg:mt-0 border">
          <figure className="h-[260px]">
            <img className="bg-contain" src={image3} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Health Hub-Managing medical test appointments
            </h2>
            <p className="font-Roboto text-base">
              The project is a comprehensive web application for managing
              medical test appointments, including features for user
              authentication, profile management, appointment booking, and admin
              management.
            </p>
            <div className="flex-1 ">
              <h4 className="text-xl">Features -</h4>
              <ul>
                <li className="list-disc ml-3 text-base">
                  Users can view and edit their profile details, including
                  changing their avatar, name, and other personal information.
                  options for social media logins.
                </li>
                <li className="list-disc ml-3 text-base">
                  Easy-to-use interface for users to add, edit, and delete their
                  own art listings.
                </li>
              </ul>
            </div>
            <p className="text-base">
              Technology: javascript, React.js, Tailwind, Express.js, Node.js,
              MongoDB
            </p>
            <div className="card-actions justify-between ">
              <Link to="https://github.com/mrkhan-dev/healthCare-client">
                <button className="btn bg-[#0DFFD7] hover:text-[#0DFFD7] text-[#000000] text-base">
                  {" "}
                  <FaGithub /> GitHub
                </button>
              </Link>
              <Link to="https://health-hub-a0fd0.web.app/">
                <button className="btn bg-[#0DFFD7] hover:text-[#0DFFD7] text-[#000000] text-base">
                  {" "}
                  <FaEye /> Live Site
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
