import { AxiosError } from "axios";
import "./dailySchedule.modules.css";
import { useEffect, useState } from "react";
import { getPeriodFromTime, type PeriodKey } from "../utils/schedulePeriod";

type Props = {
  icon: string;
  period: string;
  time: string | number;
  periodKey: PeriodKey;
};

export type Scheduling = {
  id: string;
  time: string;
  owner: string;
  petName: string;
  description: string;
};

export function DailySchedule({ icon, period, time, periodKey }: Props) {
  const [data, setDataForm] = useState<Scheduling[]>([]);

  useEffect(() => {
    try {
      const dataSave: Scheduling[] = JSON.parse(
        localStorage.getItem("agendamento") ?? "[]",
      );

      const filtered = dataSave.filter(
        (item) => getPeriodFromTime(item.time) === periodKey,
      );

      setDataForm(filtered);
    } catch (error) {
      console.log(error);

      if (error instanceof AxiosError) {
        return alert(error.response?.data.message);
      }

      setDataForm([]);
    }
  }, []);

  function handleRemove(id: string) {
    const agendamentos: Scheduling[] = JSON.parse(
      localStorage.getItem("agendamento") ?? "[]",
    );

    const updated = agendamentos.filter((item) => item.id !== id);

    localStorage.setItem("agendamento", JSON.stringify(updated));

    const filtered = updated.filter(
      (item) => getPeriodFromTime(item.time) === periodKey,
    );

    setDataForm(filtered);

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

      {data.length > 0 ? (
        data.map((item) => (
          <div className="main-daily-schedule" key={item.id}>
            <div className="time">
              <p>{item.time}</p>
              <span>
                {item.owner} / <strong>{item.petName}</strong>
              </span>
            </div>
            <p className="service">{item.description}</p>
            <button
              className="button-daily-schedule"
              onClick={() => handleRemove(item.id)}
            >
              Remover agendamento
            </button>
          </div>
        ))
      ) : (
        <p className="message-scheduling">Nenhum agendamento salvo.</p>
      )}
    </div>
  );
}
