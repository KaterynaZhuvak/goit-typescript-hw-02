/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Weekday {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

function getRandomWeekday(): Weekday {
  const randomIndex = Math.floor(Math.random() * 7);
  return randomIndex;
}

function isWeekend(day: Weekday): boolean { 
  return day === Weekday.Saturday || day === Weekday.Sunday;
}

const randomWeekDay = getRandomWeekday();
console.log(`Will I have day off today? ${isWeekend(randomWeekDay)}`);
