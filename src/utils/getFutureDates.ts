export const getFutureDates = (): string[] => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  };

  let startDate = new Date();
  startDate.setDate(startDate.getDate() + 1);

  let datesArray = [];

  datesArray.push('Tomorrow'); // first date will be tomorrow

  // next dates

  for (let i = 0; i < 4; i++) {
    var currentDate = new Date();
    currentDate.setDate(startDate.getDate() + i);
    datesArray.push(currentDate.toLocaleDateString('en', options));
  }

  return datesArray;
};
