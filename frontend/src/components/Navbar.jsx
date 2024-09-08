import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <>
      {isOpen ? (
        <HamburgerMenu setIsOpen={setIsOpen} />
      ) : (
        <nav className="container mx-auto p-4 h-[80px] flex justify-between items-center border-b-2 border-black rounded-b-[50px]">
          {/* LHS */}
          <div className="flex items-center">
            {/* Logo */}
            <div>
              <h2 className="text-3xl font-bold p-2 mr-4">
                Roam
              </h2>
            </div>
            <ul className="flex">
              <a className="hidden md:inline" href="#benefits">
                <li className="p-4 font-semibold text-lg hover:text-xl hover:font-bold">
                  Benefits
                </li>
              </a>
              <a className="hidden md:inline" href="#about">
                <li className="p-4 font-semibold text-lg hover:text-xl hover:font-bold">
                  About
                </li>
              </a>
            </ul>
          </div>
          {/* RHS */}
          <div>
            <ul className="hidden md:block">
              <Link to={"/login"}>
                <li className="p-3 w-28 font-semibold text-center text-white text-lg border bg-black rounded-full shadow-lg hover:bg-slate-500">
                  Log In
                </li>
              </Link>
            </ul>
            <button className="md:hidden" onClick={handleClick}>
              <FontAwesomeIcon
                className="text-2xl font-bold bg-white p-3 bg-roam-white"
                icon={faBars}
              />
            </button>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
