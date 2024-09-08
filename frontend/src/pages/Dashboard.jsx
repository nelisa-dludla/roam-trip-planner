import DashboardMobileNavbar from "../components/DashboardMobileNavbar";
import DashboardNavbar from "../components/DashboardNavbar";
import DashboardHome from "../components/DashboardHome";
import DashboardMyTrips from "../components/DashboardMyTrips";
import DashboardNewTrip from "../components/DashboardNewTrip";
import DashboardProfile from "../components/DashboardProfile";
import DashboardTripView from "../components/DashboardTripView";

const Dashboard = ({ page }) => {
  const renderContent = () => {
    switch (page) {
      case "home":
        return <DashboardHome />;
      case "my-trips":
        return <DashboardMyTrips />;
      case "new-trip":
        return <DashboardNewTrip />;
      case "profile":
        return <DashboardProfile />;
      case "trip-view":
        return <DashboardTripView />;
    }
  };

  return (
    <>
      <section className="h-screen flex">
        <DashboardNavbar page={page} />
        <div className="flex flex-col w-full">
          <DashboardMobileNavbar />
          {/* Content */}
          {renderContent()}
        </div>
      </section>
    </>
  );
};

export default Dashboard;
