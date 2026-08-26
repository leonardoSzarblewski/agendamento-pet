import { DailySchedule } from "../components/DailySchedule";
import "./homeModules.css";

export function Home() {
  return (
    <div className="container">
      <div className="container-header">
        <div className="agenda-info">
          <h1>Sua agenda</h1>
          <p>
            Aqui você pode ver todos os clientes e serviços agendados para hoje.
          </p>
        </div>
        <div>
          <input type="date" className="date-selector" />
        </div>
      </div>

      <DailySchedule />
    </div>
  );
}
