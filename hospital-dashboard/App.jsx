import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Patients from "./components/Patients";
import Doctors from "./components/Doctors";

export default function App() {
  const [page, setPage] = useState("dashboard");

  return (
    <div className="layout">
      <Sidebar page={page} setPage={setPage} />

      <div className="main">
        <Header />

        {page === "dashboard" && <Dashboard />}
        {page === "patients" && <Patients />}
        {page === "doctors" && <Doctors />}
      </div>
    </div>
  );
}
