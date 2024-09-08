import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const HamburgerMenu = ({setIsOpen}) => {
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
            className="text-2xl font-bold p-3 bg-roam-white"
            icon={faTimes}
          />
        </button>
        <ul className="flex flex-col items-center mt-20">
          <a href="#benefits">
          <li className="py-4 font-bold text-2xl hover:text-white">Benefits</li>
            </a>
          <a href="#about">
          <li className="py-4 font-bold text-2xl hover:text-white">About</li>
            </a>
        </ul>
      </nav>
    </>
  );
};

export default HamburgerMenu;
