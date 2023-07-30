export function formatDate(inputDate) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date(inputDate);
  const year = date.getFullYear();
  const month = months[date.getMonth()];
  return `20 ${month} ${year}`;
}
