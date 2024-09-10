import { Link } from "react-router-dom";

const DashboardHome = () => {
  return (
    <>
      <section className="container p-10">
        <h3 className="text-3xl font-bold mb-10">Welcome back, Jane!</h3>

        <div className="border-b-2 border-gray-300">
          <Link to="/dashboard/new-trip">
            <button className="btn-white mb-4 mr-4 shadow-lg">
              Start a New Trip
            </button>
          </Link>
          <Link to="/dashboard/my-trips">
            <button className="btn-white mb-4 shadow-lg">View All Trips</button>
          </Link>
        </div>

        {/* Upcoming Trips */}
        <div className="max-w-2xl p-10 mt-10 bg-roam-blue border-2 border-black shadow-lg rounded-md">
          <h4 className="text-xl pb-2 mb-6 font-bold border-b-2 border-black">
            Upcoming Trips
          </h4>
          <p>Trip 1 (Dates)</p>
          <p>Trip 2 (Dates)</p>
        </div>
        {/* Recent Completed Trips */}
        <div className="max-w-2xl p-10 mt-10 bg-roam-green border-2 border-black shadow-lg rounded-md">
          <h4 className="text-xl pb-2 mb-6 font-bold border-b-2 border-black">
            Recent Completed Trips
          </h4>
          <p>Trip 1 (Dates)</p>
          <p>Trip 2 (Dates)</p>
        </div>
      </section>
    </>
  );
};

export default DashboardHome;
