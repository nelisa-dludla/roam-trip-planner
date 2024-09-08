import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import TripBudget from "./TripBudget";
import TripDetails from "./TripDetails";
import TripItinerary from "./TripItinerary";

const DashboardTripView = () => {
  const [view, setView] = useState("details");

  const handleDetails = () => {
    setView("details");
  };

  const handleBudget = () => {
    setView("budget");
  };

  const handleItinerary = () => {
    setView("itinerary");
  };

  const displayContent = () => {
    switch (view) {
      case "details":
        return <TripDetails/>;
      case "budget":
        return <TripBudget/>;
      case "itinerary":
        return <TripItinerary/>;
    }
  };

  return (
    <>
      <section className="container p-10">
        <h3 className="text-3xl font-bold mb-10">Trip View</h3>

        <div className="flex border-b-2 border-gray-300">
          {view === "details" ? (
            <p className="btn-black mr-4 mb-4">Details</p>
          ) : (
            <button className="btn-white mr-4 mb-4" onClick={handleDetails}>
              Details
            </button>
          )}
          {view === "budget" ? (
            <p className="btn-black mr-4 mb-4">Budget</p>
          ) : (
            <button className="btn-white mr-4 mb-4" onClick={handleBudget}>
              Budget
            </button>
          )}
          {view === "itinerary" ? (
            <p className="btn-black mb-4">Itinerary</p>
          ) : (
            <button className="btn-white mb-4" onClick={handleItinerary}>
              Itinerary
            </button>
          )}
        </div>
        <div className="py-10 max-w-2xl">
          <Link to="/dashboard/my-trips">
            <p className="text-xl">
              <FontAwesomeIcon className="mr-4" icon={faArrowLeft} />
              Back to My Trips
            </p>
          </Link>
          {displayContent()}
        </div>
      </section>
    </>
  );
};

export default DashboardTripView;
