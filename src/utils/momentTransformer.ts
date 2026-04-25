import { Moment } from "moment-jalaali";
import { Date } from "../core";

export const momentTransformer = (moment: Moment, isJalaali: boolean): Date => {
  const date: Date = {
    minute: 0,
    hour: 0,
    day: isJalaali ? moment.jDate() : moment.date(),
    year: isJalaali ? moment.jYear() : moment.year(),
    month: Number(moment.format(isJalaali ? "jM" : "M")),
  };
  return date;
};
