import { useState } from "react";
import { Link } from "react-router-dom";

const DashboardMyTrips = () => {
  const [view, setView] = useState("upcoming");
  const upcomingTrips = [
    <Link to="/dashboard/my-trips/view/1">
      <p className="text-xl bg-roam-pink p-2 rounded-md mb-2 shadow-md hover:bg-rose-400 hover:font-semibold">
        Upcoming Trip 1
      </p>
    </Link>,
    <p className="text-xl bg-roam-pink p-2 rounded-md mb-2 shadow-md hover:bg-rose-400 hover:font-semibold">
      Upcoming Trip 2
    </p>,
  ];
  const completedTrips = [
    <p className="text-xl bg-roam-purple p-2 rounded-md mb-2 shadow-md hover:bg-purple-300 hover:font-semibold">
      Completed Trip 1
    </p>,
    <p className="text-xl bg-roam-purple p-2 rounded-md mb-2 shadow-md hover:bg-purple-300 hover:bg-purple-300">
      Completed Trip 2
    </p>,
  ];

  const handleUpcomingTrips = () => {
    setView("upcoming");
  };

  const handleCompletedTrips = () => {
    setView("completed");
  };

  const displayTrips = () => {
    switch (view) {
      case "upcoming":
        return upcomingTrips;
      case "completed":
        return completedTrips;
    }
  };

  return (
    <>
      <section className="container p-10">
        <h3 className="text-3xl font-bold mb-10">My Trips</h3>

        <div className="flex border-b-2 border-gray-300">
          {view === "upcoming" ? (
            <p className="btn-black mr-4 mb-4">Upcoming Trips</p>
          ) : (
            <button
              className="btn-white mr-4 mb-4"
              onClick={handleUpcomingTrips}
            >
              Upcoming Trips
            </button>
          )}
          {view === "completed" ? (
            <p className="btn-black mb-4">Recent Completed Trips</p>
          ) : (
            <button className="btn-white mb-4" onClick={handleCompletedTrips}>
              Recent Completed Trips
            </button>
          )}
        </div>
        <div className="py-10 max-w-2xl">{displayTrips()}</div>
      </section>
    </>
  );
};

export default DashboardMyTrips;
