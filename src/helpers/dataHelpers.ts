import dayjs from "dayjs";

export const dateHelpers = {
  getDateTime: (date: Date) =>
    dayjs(date.toISOString()).format("DD/MM/YYYY - HH:mm"),

  isEqual: (date1: string, date2: string) => dayjs(date1).isSame(date2, "date"),
};
