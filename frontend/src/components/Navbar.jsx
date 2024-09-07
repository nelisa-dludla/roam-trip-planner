import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="container mx-auto p-4 h-[80px] flex justify-between items-center">
        {/* LHS */}
        <div className="flex items-center">
          {/* Logo */}
          <div>
            <h2 className="text-3xl text-roam-green font-bold p-2 mr-4">
              Roam
            </h2>
          </div>
          <ul className="flex">
            <a href="#benefits">
              <li className="p-4 font-semibold text-lg hover:text-xl hover:font-bold">Benefits</li>
            </a>
            <a href="#about">
              <li className="p-4 font-semibold text-lg hover:text-xl hover:font-bold">About</li>
            </a>
          </ul>
        </div>
        {/* RHS */}
        <div>
          <ul>
            <Link to={"/login"}>
              <li className="p-3 font-semibold text-lg border border-roam-yellow border-4 rounded-lg shadow-lg hover:bg-[#FFBF46]">
                Log In
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
