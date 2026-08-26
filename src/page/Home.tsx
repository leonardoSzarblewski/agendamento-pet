import { DailySchedule } from "../components/DailySchedule";
import "./homeModules.css";

import sun from "../assets/sun.svg";
import cloud from "../assets/cloud.svg";
import moon from "../assets/moon.svg";

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
      <div className="container-main-daily-schedule">
        <DailySchedule icon={sun} period={"Manhã"} time={"09h-12h"} />
        <DailySchedule icon={cloud} period={"Tarde"} time={"13h-18h"} />
        <DailySchedule icon={moon} period={"Noite"} time={"19h-21h"} />
      </div>
    </div>
  );
}
