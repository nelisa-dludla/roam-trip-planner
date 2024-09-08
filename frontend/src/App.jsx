import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import DashboardTripView from "./components/DashboardTripView";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/home" element={<Dashboard page="home" />} />
          <Route
            path="/dashboard/my-trips"
            element={<Dashboard page="my-trips" />}
          />
          <Route
            path="/dashboard/new-trip"
            element={<Dashboard page="new-trip" />}
          />
          <Route
            path="/dashboard/profile"
            element={<Dashboard page="profile" />}
          />
          <Route
            path="/dashboard/my-trips/view/:id"
            element={<Dashboard page="trip-view"/>}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
