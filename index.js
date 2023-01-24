const addDays = require("date-fns/addDays");
const result = (days) => {
  const date = addDays(new Date(2020, 7, 22), days);
  const newDate = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()}`;
  return newDate;
};

module.exports = result;
