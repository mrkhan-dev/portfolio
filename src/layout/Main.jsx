import {Outlet} from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <div className="bg-[#1D232A]">
      <div className="h-20">
        <Nav />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
