import { useMemo } from "react";
import { generateDays } from "../../../utils";
import { localizedMonth } from "../../constants";
import { useDatePickerContext } from "../../context/date/dateProvider";

export const useMonths = () => {
  const { state, locale = "fa", disabledDates } = useDatePickerContext();

  const months = localizedMonth[locale || "fa"];

  const res = useMemo(() => {
    return months.map((month) => {
      const { days } = generateDays(
        state.minute,
        state.hour,
        month.id,
        state.year,
        locale === "fa",
        disabledDates || (() => false),
      );
      if (
        days
          .filter((item) => item.month === month.id)
          .every((day) => day.isDisabled)
      ) {
        return { ...month, isDisabled: true };
      }
      return month;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disabledDates, locale, months, state.year]);

  return {
    months: res,
  };
};
