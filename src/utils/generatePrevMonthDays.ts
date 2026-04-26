import { DateMetadata, DatePickerProps } from "../core";
import {
  getDaysOfGregorianMonth,
  getDaysOfJalaaliMonth,
} from "./getDaysOfMonth";

export const generatePrevMonthDays = ({
  minute,
  hour,
  currentMonthWeekDay,
  currentMonth,
  year,
  isJalaali = true,
  disabledDates,
}: {
  minute: number;
  hour: number;
  currentMonthWeekDay: number;
  currentMonth: number;
  year: number;
  isJalaali?: boolean;
  disabledDates: DatePickerProps["disabledDates"];
}) => {
  if (currentMonthWeekDay === 0) {
    return [];
  }
  let prevMonthDays: DateMetadata[] = [];

  if (isJalaali) {
    prevMonthDays = getDaysOfJalaaliMonth(
      minute,
      hour,
      currentMonth === 1 ? 12 : currentMonth - 1,
      currentMonth === 1 ? year - 1 : year,
      disabledDates,
    );
  } else {
    prevMonthDays = getDaysOfGregorianMonth(
      minute,
      hour,
      currentMonth === 1 ? 12 : currentMonth - 1,
      currentMonth === 1 ? year - 1 : year,
      disabledDates,
    );
  }
  const res: DateMetadata[] = [];

  for (
    let i = prevMonthDays.length;
    i > prevMonthDays.length - currentMonthWeekDay;
    i--
  ) {
    res.unshift({ ...prevMonthDays[i - 1], isNotCurrentMonth: true });
  }

  return res.length === 7 ? [] : res;
};
