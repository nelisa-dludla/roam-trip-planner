import { Link } from "react-router-dom";

const DashboardNavbar = ({ page }) => {
  return (
    <>
      <nav className="p-10 w-96 shadow-lg hidden border-r-2 border-black rounded-r-[50px] md:inline">
        <div className="py-4 mb-10 border-b-4 border-black">
          <h1 className="font-bold text-3xl">Roam</h1>
        </div>
        <ul>
          {page === "home" ? (
            <li className="p-4 my-2 font-bold text-xl text-white bg-black rounded-full">Home</li>
          ) : (
            <Link to="/dashboard/home">
              <li className="p-4 my-2 font-bold text-xl hover:border-2 hover:border-2 hover:border-black hover:rounded-full hover:bg-white">Home</li>
            </Link>
          )}
          {page === "my-trips" || page === "trip-view" ? (
            <li className="p-4 my-2 font-bold text-xl text-white bg-black rounded-full">My Trips</li>
          ) : (
            <Link to="/dashboard/my-trips">
              <li className="p-4 my-2 font-bold text-xl hover:border-2 hover:border-2 hover:border-black hover:rounded-full hover:bg-white">My Trips</li>
            </Link>
          )}
          {page === "new-trip" ? (
            <li className="p-4 my-2 font-bold text-xl text-white bg-black rounded-full">New Trip</li>
          ) : (
            <Link to="/dashboard/new-trip">
              <li className="p-4 my-2 font-bold text-xl hover:border-2 hover:border-2 hover:border-black hover:rounded-full hover:bg-white">New Trip</li>
            </Link>
          )}
          {page === "profile" ? (
            <li className="p-4 my-2 font-bold text-xl text-white bg-black rounded-full">Profile</li>
          ) : (
            <Link to="/dashboard/profile">
              <li className="p-4 my-2 font-bold text-xl hover:border-2 hover:border-2 hover:border-black hover:rounded-full hover:bg-white">Profile</li>
            </Link>
          )}
              <li className="p-4 my-2 font-bold text-xl hover:border-2 hover:border-2 hover:border-black hover:rounded-full hover:bg-white">Logout</li>
        </ul>
      </nav>
    </>
  );
};

export default DashboardNavbar;
