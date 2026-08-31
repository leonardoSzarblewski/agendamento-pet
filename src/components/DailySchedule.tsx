import { AxiosError } from "axios";
import "./dailySchedule.modules.css";
import { useEffect, useState } from "react";

type Props = {
  icon: string;
  period: string;
  time: string | number;
};

type Scheduling = {
  time: string;
  owner: string;
  petName: string;
  description: string;
};

export function DailySchedule({ icon, period, time }: Props) {
  const [data, setDataForm] = useState<Scheduling | null>(null);

  useEffect(() => {
    try {
      const dataSave = JSON.parse(
        localStorage.getItem("agendamento") ?? "null",
      );
      setDataForm(dataSave);
    } catch (error) {
      console.log(error);

      if (error instanceof AxiosError) {
        return alert(error.response?.data.message);
      }

      setDataForm(null);
    }
  }, []);

  function remove() {
    localStorage.removeItem("agendamento");
    setDataForm(null);

    alert("Agendamento removido com sucesso!");
  }

  return (
    <div className="container-daily-schedule">
      <div className="header-daily-schedule">
        <div className="morning">
          <img src={icon} />
          <span>{period}</span>
        </div>

        <div>
          <p>{time}</p>
        </div>
      </div>

      {data ? (
        <div className="main-daily-schedule">
          <div className="time">
            <p>{data.time}</p>
            <span>
              {data.owner} / <strong>{data.petName}</strong>
            </span>
          </div>

          <p className="service">{data.description}</p>

          <button className="button-daily-schedule" onClick={remove}>
            Remover agendamento
          </button>
        </div>
      ) : (
        <p className="message-scheduling">Nenhum agendamento salvo.</p>
      )}
    </div>
  );
}
