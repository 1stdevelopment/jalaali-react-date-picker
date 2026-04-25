import { TimeSelector } from "./components";

export const Time = () => {
  return (
    <div className="time-container">
      <TimeSelector type="minute" />

      <span style={{ color: "var(--primary)" }}>:</span>

      <TimeSelector type="hour" />
    </div>
  );
};
