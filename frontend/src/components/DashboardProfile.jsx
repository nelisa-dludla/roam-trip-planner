const DashboardProfile = () => {
  return (
    <>
      <section className="container p-10">
        <h3 className="text-3xl font-bold mb-10">Profile Settings</h3>
        <p className="text-lg">
          <span className="font-bold">Name:</span> Joe
        </p>
        <p className="text-lg">
          <span className="font-bold">Email:</span> jdoe123@gmail.com
        </p>
        <button className="p-4 mt-20 text-white font-bold bg-red-500 rounded-full shadow-lg hover:bg-red-700">
          Delete Account
        </button>
      </section>
    </>
  );
};

export default DashboardProfile;
