import "./schedulingButton.modules.css";

type Props = {
  onClick?: () => void;
  children: string;
};

export function SchedulingButton({ onClick, children }: Props) {
  return (
    <div className="container-button">
      <button className="buttonScheduling" onClick={onClick}>
        {children}
      </button>
    </div>
  );
}
