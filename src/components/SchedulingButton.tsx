import "./schedulingButton.modules.css";

type Props = {
  onClick: () => void;
};

export function SchedulingButton({ onClick }: Props) {
  return (
    <div className="container-button">
      <button className="buttonScheduling" onClick={onClick}>
        NOVO AGENDAMENTO
      </button>
    </div>
  );
}
