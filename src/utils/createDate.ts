export const createDate = (
  date: string
): { weekDay: string; dayMonth: string } => {
  const formattedDate = new Date(date);
  const dateString = new Intl.DateTimeFormat("ru-RU", {
    weekday: "short",
    month: "short",
    day: "numeric",
  }).format(formattedDate);

  const result = dateString.split(",");
  return { weekDay: result[0], dayMonth: result[1].split(".")[0] };
};
