export const dateFormatter = (selectedDate: string) => {
  const dateObj = new Date(selectedDate);
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "long",
    year: "numeric",
  };
  return dateObj.toLocaleDateString("tr-TR", options);
};
