import { DailySchedule } from "../components/DailySchedule";
import { SchedulingButton } from "../components/SchedulingButton";
import { useNavigate } from "react-router-dom";

import "./homeModules.css";

import sun from "../assets/sun.svg";
import cloud from "../assets/cloud.svg";
import moon from "../assets/moon.svg";
import { ButtonPet } from "../components/ButtonPet";

export function Home() {
  const navigate = useNavigate();

  function navigateScheduling() {
    navigate("/agendamento");
  }

  function getToday() {
    return new Date().toLocaleDateString("sv-SE");
  }

  return (
    <div>
      <ButtonPet />
      <div className="container">
        <div className="container-header">
          <div className="agenda-info">
            <h1>Sua agenda</h1>
            <p>
              Aqui você pode ver todos os clientes e serviços agendados para
              hoje.
            </p>
          </div>
          <div>
            <input
              type="date"
              className="date-selector"
              defaultValue={getToday()}
              min={getToday()}
            />
          </div>
        </div>
        <div className="container-main-daily-schedule">
          <DailySchedule
            icon={sun}
            period={"Manhã"}
            time={"08h-12h"}
            periodKey="manha"
          />
          <DailySchedule
            icon={cloud}
            period={"Tarde"}
            time={"14h-18h"}
            periodKey="tarde"
          />
          <DailySchedule
            icon={moon}
            period={"Noite"}
            time={"20h-22h"}
            periodKey="noite"
          />
        </div>

        <SchedulingButton
          onClick={navigateScheduling}
          children="NOVO AGENDAMENTO"
        />
      </div>
    </div>
  );
}
