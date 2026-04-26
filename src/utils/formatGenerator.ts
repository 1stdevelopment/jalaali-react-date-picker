export const formatGenerator = (isJalaali: boolean, includeTime?: boolean) => {
  const timeFormat = includeTime ? "-HH:mm" : "";
  return isJalaali ? `jYYYY-jMM-jDD${timeFormat}` : `YYYY-MM-DD${timeFormat}`;
};
