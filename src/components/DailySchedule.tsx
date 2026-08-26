import "./dailySchedule.modules.css";

type Props = {
  icon: string;
  period: string;
  time: string | number;
};

export function DailySchedule({ icon, period, time }: Props) {
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

      <div className="main-daily-schedule">
        <div className="time">
          <p>09:00</p>
          <span>
            Thor / <strong>Leonardo</strong>
          </span>
        </div>

        <p className="service">Vacinação</p>

        <button className="button-daily-schedule">Remover agendamento</button>
      </div>
    </div>
  );
}
