import { useState } from "react";

const TripDetails = () => {
  const [isEditing, setIsEditing] = useState(false);
  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  return (
    <>
      <div className="max-w-2xl p-10 mt-10 bg-roam-blue border-2 border-black shadow-lg rounded-md">
        <form>
          <table className="table-auto">
            {isEditing ? (
              <tbody>
                <tr className="text-lg">
                  <td className="font-bold">
                    <label for="trip_name">Trip Name:</label>
                  </td>
                  <td>
                    <input
                      className="bg-roam-white p-1 mb-1 rounded-md"
                      type="text"
                      id="trip_name"
                      value="Girl's Trip"
                    />
                  </td>
                </tr>
                <tr className="text-lg">
                  <td className="font-bold">
                    <label for="destination">Destination:</label>
                  </td>
                  <td>
                    <input
                      className="bg-roam-white p-1 mb-1 rounded-md"
                      type="text"
                      id="destination"
                      value="Cape Town"
                    />
                  </td>
                </tr>
                <tr className="text-lg">
                  <td className="font-bold">
                    <label for="dates">Dates:</label>
                  </td>
                  <td>
                    <input
                      className="bg-roam-white p-1 mb-1 mr-1 rounded-md"
                      type="date"
                      id="dates"
                      value="2024-12-27"
                    />
                    <input
                      className="bg-roam-white p-1 mb-1 rounded-md"
                      type="date"
                      id="dates"
                      value="2025-01-07"
                    />
                  </td>
                </tr>
                <tr className="text-lg">
                  <td className="font-bold pr-4">Days Remaining:</td>
                  <td>[X] Days</td>
                </tr>
                <tr className="text-lg">
                  <td className="font-bold">Total Budget:</td>
                  <td>[RX]</td>
                </tr>
                <tr className="text-lg">
                  <td className="font-bold">Price per Person:</td>
                  <td>[RX]</td>
                </tr>
              </tbody>
            ) : (
              <tbody>
                <tr className="text-lg">
                  <td className="font-bold">Trip Name:</td>
                  <td>Girl's Trip</td>
                </tr>
                <tr className="text-lg">
                  <td className="font-bold">Destination:</td>
                  <td>Cape Town</td>
                </tr>
                <tr className="text-lg">
                  <td className="font-bold">Dates:</td>
                  <td>[Start Date - End Date]</td>
                </tr>
                <tr className="text-lg">
                  <td className="font-bold pr-4">Days Remaining:</td>
                  <td>[X] Days</td>
                </tr>
                <tr className="text-lg">
                  <td className="font-bold">Total Budget:</td>
                  <td>[RX]</td>
                </tr>
                <tr className="text-lg">
                  <td className="font-bold">Price per Person:</td>
                  <td>[RX]</td>
                </tr>
              </tbody>
            )}
          </table>
        </form>
      </div>
      {isEditing ? (
        <div className="mt-10">
          <button
            className="btn-white mb-4 mr-4 shadow-lg"
            onClick={handleEdit}
          >
            Update Details
          </button>
          <button
            className="btn-white p-4 font-bold shadow-lg"
            onClick={handleCancelClick}
          >
            Cancel
          </button>
        </div>
      ) : (
        <div className="mt-10">
          <button
            className="btn-white mb-4 mr-4 shadow-lg"
            onClick={handleEdit}
          >
            Edit Trip
          </button>
          <button className="p-4 text-white font-bold bg-red-500 rounded-full shadow-lg hover:bg-red-700">
            Delete Account
          </button>
        </div>
      )}
    </>
  );
};

export default TripDetails;
