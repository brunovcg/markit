import dayjs from "dayjs";

export const dateHelpers = {
  getDateTime: (date: Date) =>
    dayjs(date.toISOString()).format("DD/MM/YYYY - HH:mm"),

  isEqual: (date1: string, date2: string) => dayjs(date1).isSame(date2, "date"),

  isBetween: (dateFrom: string, dateTo: string, date: string) => {
    const from =
      dayjs(date).isSame(dateFrom, "date") ||
      dayjs(date).isAfter(dateFrom, "date");

    const to =
      dayjs(date).isSame(dateTo, "date") ||
      dayjs(date).isBefore(dateTo, "date");

    return from && to;
  },
};
