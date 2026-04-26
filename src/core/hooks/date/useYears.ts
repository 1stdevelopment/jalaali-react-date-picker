import { useMemo } from "react";
import { generateDays, listOfYears } from "../../../utils";
import { useDatePickerContext } from "../../context/date/dateProvider";

export const useYears = (offset: number) => {
  const { state, locale = "fa", disabledDates } = useDatePickerContext();
  const { years, lowerDecade, upperDecade } = listOfYears(
    locale === "fa",
    offset,
  );

  const res = useMemo(() => {
    return years.map((year) => {
      const { days } = generateDays(
        state.minute,
        state.hour,
        state.month,
        year.id,
        locale === "fa",
        disabledDates || (() => false),
      );
      if (
        days
          .filter((item) => item.year === year.id)
          .every((day) => day.isDisabled)
      ) {
        return { ...year, isDisabled: true };
      }
      return year;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disabledDates, locale, state.month, years]);

  return {
    years: res,
    lowerDecade,
    upperDecade,
  };
};
