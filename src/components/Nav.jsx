// import {useEffect, useState} from "react";
import {Link, NavLink} from "react-router-dom";

const Nav = () => {
  // const [theme, setTheme] = useState("light");
  const navLink = (
    <>
      {" "}
      <li>
        <NavLink
          className={({isActive}) =>
            isActive
              ? "text-lg font-semibold px-5 py-3 text-[#0DFFD7]  underline"
              : "text-lg font-semibold "
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({isActive}) =>
            isActive
              ? "text-lg font-semibold px-5 py-3 text-[#0DFFD7]  underline"
              : "text-lg font-semibold "
          }
          to="/about"
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({isActive}) =>
            isActive
              ? "text-lg font-semibold px-5 py-3 text-[#0DFFD7]  underline"
              : "text-lg font-semibold "
          }
          to="/skills"
        >
          Skills
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({isActive}) =>
            isActive
              ? "text-lg font-semibold px-5 py-3 text-[#0DFFD7]  underline"
              : "text-lg font-semibold "
          }
          to="/services"
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({isActive}) =>
            isActive
              ? "text-lg font-semibold px-5 py-3 text-[#0DFFD7]  underline"
              : "text-lg font-semibold "
          }
          to="/portfolio"
        >
          Portfolio
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({isActive}) =>
            isActive
              ? "text-lg font-semibold px-5 py-3 text-[#0DFFD7]  underline"
              : "text-lg font-semibold "
          }
          to="/contact"
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  // const handleTheme = (e) => {
  //   if (e.target.checked) {
  //     setTheme("dark");
  //   } else {
  //     setTheme("light");
  //   }
  // };

  // useEffect(() => {
  //   localStorage.setItem("theme", theme);
  //   const localTheme = localStorage.getItem("theme");
  //   document.querySelector("html").setAttribute("data-theme", localTheme);
  // }, [theme]);

  return (
    <div className="navbar bg-base-100  fixed z-10 lg:px-52">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            // tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLink}
          </ul>
        </div>
        <a className=" text-3xl font-bold font-Playwrite text-[#0DFFD7]">
          Shahjalal
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal items-center px-1">{navLink}</ul>
      </div>
      <div className="navbar-end">
        <Link to="contact">
          <button className=" btn hover:text-[#0DFFD7] bg-[#0DFFD7] font-Poppins text-lg text-[#000000] border-none">
            Hire Me
          </button>
        </Link>
      </div>
      {/* <label className="grid cursor-pointer place-items-center ml-5">
        <input
          type="checkbox"
          onChange={handleTheme}
          value="dark"
          className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
        />
        <svg
          className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
        </svg>
        <svg
          className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </label> */}
    </div>
  );
};

export default Nav;
