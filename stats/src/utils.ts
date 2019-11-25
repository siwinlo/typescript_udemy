import { parse } from "querystring";

export const dateStringToDate = (dateString: string): Date => {
  // example: 28/10/2018
  const dateParts = dateString.split("/").map((value: string): number => {
    return parseInt(value);
  });
  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
