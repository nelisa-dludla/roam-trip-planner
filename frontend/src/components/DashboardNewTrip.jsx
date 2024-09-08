const DashboardNewTrip = () => {
  return (
    <>
      <section className="container p-10">
        <h3 className="text-3xl font-bold mb-10">New Trip</h3>
        <form className="max-w-2xl bg-roam-yellow p-10 border-2 border-black rounded-md shadow-lg">
          <div className="flex flex-col mb-4">
            <label className="font-semibold mb-2" for="trip_name">
              Trip Name:
            </label>
            <input
              className="p-2 rounded-md bg-roam-white border border-gray-400"
              type="text"
              name="trip_name"
              placeholder="Girl's Trip Dec 2024"
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="font-semibold mb-2" for="destination">
              Destination:
            </label>
            <input
              className="p-2 rounded-md bg-roam-white border border-gray-400"
              type="text"
              name="destination"
              placeholder="Cape Town"
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="font-semibold mb-2" for="dates">
              Start Date:
            </label>
            <input
              className="p-2 rounded-md bg-roam-white border border-gray-400"
              type="date"
              name="dates"
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="font-semibold mb-2" for="dates">
              End Date:
            </label>
            <input
              className="p-2 rounded-md bg-roam-white border border-gray-400"
              type="date"
              name="dates"
              required
            />
          </div>
          <button className="btn-white w-40 p-4 mr-4 font-bold bg-roam-yellow rounded-md shadow-lg">
            Save Trip
          </button>
        </form>
      </section>
    </>
  );
};

export default DashboardNewTrip;
