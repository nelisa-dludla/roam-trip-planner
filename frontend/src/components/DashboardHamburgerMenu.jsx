import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const DashboardHamburgerMenu = ({ setIsOpen }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="md:hidden w-screen h-screen absolute z-10 bg-roam-white p-10">
        <button className="block ml-auto" onClick={handleClick}>
          <FontAwesomeIcon
            className="text-2xl font-bold p-3 bg-roam-white rounded-md"
            icon={faTimes}
          />
        </button>
        <ul className="flex flex-col items-center mt-20">
          <Link to="/dashboard/home" onClick={handleClick}>
          <li className="py-4 font-bold text-2xl hover:text-white">Home</li>
          </Link>
          <Link to="/dashboard/my-trips" onClick={handleClick}>
          <li className="py-4 font-bold text-2xl hover:text-white">My Trips</li>
          </Link>
          <Link to="/dashboard/new-trip" onClick={handleClick}>
          <li className="py-4 font-bold text-2xl hover:text-white">New Trip</li>
          </Link>
          <Link to="/dashboard/profile" onClick={handleClick}>
          <li className="py-4 font-bold text-2xl hover:text-white">Profile</li>
          </Link>
          <li className="py-4 font-bold text-2xl hover:text-white">Logout</li>
        </ul>
      </nav>
    </>
  );
};

export default DashboardHamburgerMenu;
