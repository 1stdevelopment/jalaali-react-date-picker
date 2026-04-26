import { useDatepicker } from "src/core";
import { Selector } from "../selector";

interface TimeSelectorProps {
  type: "hour" | "minute";
}

export const MINUTE_PICKER = "minute-picker";
export const HOUR_PICKER = "hour-picker";

const hourOptions = Array.from({ length: 24 }, (_, i) => i);
const minuteOptions = Array.from({ length: 60 }, (_, i) => i);

export const TimeSelector = ({ type }: TimeSelectorProps) => {
  const { state, locale, onHourChange, onMinuteChange, onDateChange } =
    useDatepicker();

  const isRtl = (locale || "fa") === "fa";

  const value = type === "hour" ? state.hour : state.minute;

  const options = type === "hour" ? hourOptions : minuteOptions;

  const handleChange = (val: number) => {
    const date = {
      ...state,
      [type]: val,
    };

    if (type === "hour") {
      onHourChange(date);
    } else {
      onMinuteChange(date);
    }

    onDateChange(date, false);
  };

  return (
    <Selector
      id={type === "hour" ? HOUR_PICKER : MINUTE_PICKER}
      value={value}
      onChange={handleChange}
      options={options}
      dir={isRtl ? "rtl" : "ltr"}
    />
  );
};
