import { DateMetadata, DatePickerProps } from "../core";
import {
  getDaysOfGregorianMonth,
  getDaysOfJalaaliMonth,
} from "./getDaysOfMonth";

export const generateNextMonthDays = ({
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
  disabledDates: DatePickerProps["disabledDates"];
  isJalaali?: boolean;
}) => {
  if (currentMonthWeekDay === 0) {
    return [];
  }

  let nextMonthDays: DateMetadata[] = [];

  if (isJalaali) {
    nextMonthDays = getDaysOfJalaaliMonth(
      minute,
      hour,
      currentMonth === 12 ? 1 : currentMonth + 1,
      currentMonth === 12 ? year + 1 : year,
      disabledDates,
    );
  } else {
    nextMonthDays = getDaysOfGregorianMonth(
      minute,
      hour,
      currentMonth === 12 ? 1 : currentMonth + 1,
      currentMonth === 12 ? year + 1 : year,
      disabledDates,
    );
  }

  return nextMonthDays
    .slice(0, currentMonthWeekDay)
    .map((item) => ({ ...item, isNotCurrentMonth: true }));
};
