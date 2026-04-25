import {
  generateNextMonthDays,
  getDaysOfGregorianMonth,
  getDaysOfJalaaliMonth,
} from ".";
import { DatePickerProps } from "../core";
import { dateTransformer } from "./dateTransformer";
import { generatePrevMonthDays } from "./generatePrevMonthDays";

export const generateDays = (
  minute: number,
  hour: number,
  month: number,
  year: number,
  isJalaali = true,
  disabledDates: DatePickerProps["disabledDates"],
) => {
  const currentMonthDays = isJalaali
    ? getDaysOfJalaaliMonth(minute, hour, month, year, disabledDates)
    : getDaysOfGregorianMonth(minute, hour, month, year, disabledDates);

  const firstDay = dateTransformer(
    {
      minute,
      hour,
      day: currentMonthDays[0].day,
      month,
      year,
    },
    isJalaali,
  );

  const startOfMonthWeekDay = isJalaali
    ? firstDay.weekday()
    : firstDay.isoWeekday();

  const daysOfMonthAfterUnshift = currentMonthDays.unshift(
    ...generatePrevMonthDays({
      minute,
      hour,
      currentMonth: month,
      currentMonthWeekDay: startOfMonthWeekDay,
      year,
      isJalaali,
      disabledDates,
    }),
  );

  currentMonthDays.push(
    ...generateNextMonthDays({
      minute,
      hour,
      currentMonth: month,
      currentMonthWeekDay: 42 - daysOfMonthAfterUnshift,
      year,
      isJalaali,
      disabledDates,
    }),
  );

  return { days: currentMonthDays };
};
