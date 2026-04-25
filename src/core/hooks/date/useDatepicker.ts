import moment from "moment-jalaali";
import { useCallback, useMemo } from "react";
import { Date } from "src/core/types";
import { dateTransformer } from "../../../utils";
import { localizedDayLabels, localizedMonth } from "../../constants";
import { useDatePickerContext } from "../../context/date/dateProvider";

export const useDatepicker = () => {
  const {
    state,
    cacheDate,
    locale: locale = "fa",
    onDateChange,
    onMonthchange,
    onYearchange,
    disabledDates,
    onClear,
    ...rest
  } = useDatePickerContext();

  const { isJalaali, dayLabels } = useMemo(() => {
    return {
      isJalaali: locale === "fa",
      months: localizedMonth[locale || "fa"],
      dayLabels: localizedDayLabels[locale || "fa"],
    };
  }, [locale]);

  const goToToday = useCallback(() => {
    const today: Date = isJalaali
      ? {
          minute: state.minute,
          hour: state.hour,
          day: moment().jDate(),
          year: moment().jYear(),
          month: Number(moment().format("jM")),
        }
      : {
          minute: state.minute,
          hour: state.hour,
          day: moment().date(),
          year: moment().year(),
          month: Number(moment().format("M")),
        };

    const todayInMoment = dateTransformer({ ...today }, isJalaali);
    const isTodayDisabled = disabledDates?.(todayInMoment);

    onClear();

    if (isTodayDisabled) {
      onMonthchange?.({ ...today, day: 0 });
      onYearchange?.({ ...today, day: 0 });
    }
    !isTodayDisabled && onDateChange(today);
  }, [
    disabledDates,
    isJalaali,
    onClear,
    onDateChange,
    onMonthchange,
    onYearchange,
    state.hour,
    state.minute,
  ]);

  return {
    state,
    onDateChange,
    goToToday,
    isJalaali,
    locale,
    dayLabels,
    cacheDate,
    onMonthchange,
    onYearchange,
    ...rest,
  };
};
