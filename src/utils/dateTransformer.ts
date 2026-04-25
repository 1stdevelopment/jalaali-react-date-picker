/* eslint-disable @typescript-eslint/no-explicit-any */
import moment from "moment-jalaali";
import { Date } from "../core";

export const dateTransformer = (
  data: Date,
  isJalaali: boolean,
): moment.Moment => {
  const { minute, hour, day, month, year } = data;
  if (day < 1 || month < 1 || year < 1) {
    throw new Error("entered inputs are not valid");
  }
  const result = moment(
    `${year}-${month}-${day}`,
    isJalaali ? "jYYYY-jM-jDD" : "YYYY-M-DD",
  );

  result.hour(hour);
  result.minute(minute);

  if (!result.isValid()) {
    throw new Error("entered inputs are not valid");
  }

  return result;
};
