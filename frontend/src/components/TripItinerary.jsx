import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const TripItinerary = () => {
  return (
    <>
      <div className="max-w-2xl p-10 mt-10 bg-roam-pink border-2 border-black shadow-lg rounded-md">
        <table className="table-auto">
          <tbody>
            <th className="font-bold text-2xl text-left">Day 1 - [Date]:</th>
            <tr className="text-lg">
              <td className="font-bold">Activity 1:</td>
              <td className="pr-4">[Time]</td>
              <td className="pr-2">
                <FontAwesomeIcon icon={faPenToSquare} />
              </td>
              <td>
                <FontAwesomeIcon icon={faTrashCan} />
              </td>
            </tr>
            <tr className="text-lg">
              <td className="font-bold">Activity 2:</td>
              <td className="pr-4">[Time]</td>
              <td className="pr-2">
                <FontAwesomeIcon icon={faPenToSquare} />
              </td>
              <td>
                <FontAwesomeIcon icon={faTrashCan} />
              </td>
            </tr>
            <th className="font-bold text-2xl text-left pt-10">
              Day 2 - [Date]:
            </th>
            <tr className="text-lg">
              <td className="font-bold pr-4">Activity 1:</td>
              <td className="pr-4">[Time]</td>
              <td className="pr-2">
                <FontAwesomeIcon icon={faPenToSquare} />
              </td>
              <td>
                <FontAwesomeIcon icon={faTrashCan} />
              </td>
            </tr>
            <tr className="text-lg">
              <td className="font-bold">Activity 2:</td>
              <td className="pr-4">[Time]</td>
              <td className="pr-2">
                <FontAwesomeIcon icon={faPenToSquare} />
              </td>
              <td>
                <FontAwesomeIcon icon={faTrashCan} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-10">
        <button className="btn-white mb-4 mr-4 shadow-lg">
          Save Itinerary
        </button>
      </div>
    </>
  );
};

export default TripItinerary;
