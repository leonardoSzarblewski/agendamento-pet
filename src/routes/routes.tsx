import { Routes, Route } from "react-router-dom";
import { Home } from "../page/Home";
import { SchedulingForm } from "../page/SchedulingForm";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/agendamento" element={<SchedulingForm />} />
    </Routes>
  );
}

export default AppRoutes;
