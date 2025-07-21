import { MAIN_DATE_FORMAT, MAIN_TIME_FORMAT } from "@/constants";
import moment, { type Moment } from "moment";

import { formatTwoValues } from "./common";

export function formatDateUtil(
  dateString: string | Date | Moment | null,
  flag?: string,
  formatDate: string = MAIN_DATE_FORMAT
) {
  const dateTime = moment.utc(dateString).local();

  if (flag === "time") {
    return dateString ? dateTime.format(MAIN_TIME_FORMAT) : "";
  }

  if (flag === "date") {
    return dateString ? dateTime.format(formatDate) : "";
  }

  return dateString
    ? formatTwoValues(
        dateTime.format(formatDate),
        dateTime.format(MAIN_TIME_FORMAT)
      )
    : "";
}

export const isDateInFutureUtil = (dateStr: string): boolean => {
  const givenDate = moment(dateStr, MAIN_DATE_FORMAT);
  const today = moment().startOf("day");
  return givenDate.isSameOrAfter(today);
};

export const getTimeZone = () =>
  Intl.DateTimeFormat().resolvedOptions().timeZone;
