const date = new Date();
const arr = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jly",
  "Aug",
  "Sept",
  "Nov",
  "Dec",
];
console.log(`${arr[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`);
