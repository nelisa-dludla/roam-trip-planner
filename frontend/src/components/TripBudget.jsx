const TripBudget = () => {
  return (
    <>
      <div className="max-w-2xl p-10 mt-10 bg-roam-green border-2 border-black shadow-lg rounded-md">
        <table className="table-auto">
          <tbody>
            <th className="font-bold text-2xl text-left">Overview</th>
            <tr className="text-lg">
              <td className="font-bold">Total Budget:</td>
              <td>[RX]</td>
            </tr>
            <tr className="text-lg">
              <td className="font-bold">Number of People:</td>
              <td>[X]</td>
            </tr>
            <tr className="text-lg">
              <td className="font-bold">Price per Person:</td>
              <td>[RX]</td>
            </tr>
            <th className="font-bold text-2xl text-left pt-10">Breakdown</th>
            <tr className="text-lg">
              <td className="font-bold pr-4">Transport:</td>
              <td>[RX]</td>
            </tr>
            <tr className="text-lg">
              <td className="font-bold">Accomodation:</td>
              <td>[RX]</td>
            </tr>
            <tr className="text-lg">
              <td className="font-bold">Food & Miscellaneous:</td>
              <td>[RX]</td>
            </tr>
          </tbody>
        </table>
      </div>
        <div className="mt-10">
            <button className="btn-white mb-4 mr-4 shadow-lg">
              Edit Budget
            </button>
        </div>
    </>
  );
};

export default TripBudget;
