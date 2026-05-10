import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Utilities from "./pages/Utilities";
import Insurance from "./pages/Insurance";
import Vehicles from "./pages/Vehicles";
import Subscriptions from "./pages/Subscriptions";
import Maintenance from "./pages/Maintenance";
import Documents from "./pages/Documents";
import Briefing from "./pages/Briefing";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/utilities" element={<Utilities />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/briefing" element={<Briefing />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
