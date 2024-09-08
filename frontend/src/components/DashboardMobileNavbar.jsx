import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import DashboardHamburgerMenu from "./DashboardHamburgerMenu";

const DashboardMobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <>
      {isOpen ? (
        <DashboardHamburgerMenu setIsOpen={setIsOpen} />
      ) : (
        <nav className="p-4 border-b-2 border-black rounded-b-[50px] flex justify-between md:hidden">
          <div className="p-4">
            <h1 className="font-bold text-2xl">Roam</h1>
          </div>
          <button className="flex items-center" onClick={handleClick}>
            <FontAwesomeIcon
              className="text-2xl font-bold bg-roam-white p-3"
              icon={faBars}
            />
          </button>
        </nav>
      )}
    </>
  );
};

export default DashboardMobileNavbar;
