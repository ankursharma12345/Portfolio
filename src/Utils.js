const getExp = () => {
  const date = new Date();
  let currentMonth = date.getMonth() + 1;
  let currentYear = date.getFullYear().toString();
  let expInYears = currentYear.slice(1) - 23;
  let expInMonths = parseInt(currentMonth) - 5;
  return { expInYears: expInYears, expInMonths: expInMonths };
};

export default getExp;
