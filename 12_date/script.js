// date

// UTC => Гринвич
//текущий часовой пояс => таймзонаб timezone

// const date = new Date();

// console.log(date);

// текущая дата toLocaleDateString()
// console.log(date.toLocaleDateString().replaceAll("/", "."));

// текущее время toLocaleTimeString()
// console.log(date.toLocaleTimeString().slice(0, -3));

// время и дата toLocaleString()
// console.log(date.toLocaleString());

// отдельные компоненты даты и времени
// console.log(date.getFullYear()); // возвращаето год
// console.log(date.getMonth()); // возвращаето месяц с 0-11
// console.log(date.getDate()); // возвращаето месяц с 1-31
// console.log(date.getDay()); // порядковый номер дня недели с 0-6
// console.log(date.getHours()); // часы c 0-23
// console.log(date.getMinutes()); // минуты 0-59
// console.log(date.getSeconds()); // секунды с 0-59
// console.log(date.getMilliseconds()); // миллисекунды с 0-999

// console.log(date.getUTCHours()); // часы по Гринвичу

//не привязаны к часовой зоне
// console.log(date.getTime()); // значение в мс, прошедшее с 1 января 1970г
// console.log(date.getTimezoneOffset()); // смещение текущей часовой зоны и UTC

// year, mouth, date, hours, minutes, seconds, milliseconds
// const date = new Date(2000, 0, 10);
// const date2 = new Date(2000, 1, 15);

// // console.log(date.getDate());
// // console.log(date2.getDate);

// const diff = date2.getTime() - date.getTime();

// const convertMSToDays = 1000 * 60 * 60 * 24;

// console.log(diff / convertMSToDays);

// const date = new Date();

// date.setMonth(10); //setMonth ( месяц, день)
// date.setFullYear(2026); // setFullYear (год, месяц, день)
// date.setDate(30); // setDate (день)
// date.setHours(30); // setHours (часы, минуты, секунды, мс)
// date.setSeconds(30); // setHours (часы, минуты, секунды, мс)

// console.log(date);

//___________________________________________________________________________________________________________
//new Date().getTime() === Date.now()
// const test = new Date().getTime();

// // время в мс от 1 января 1970
// const test2 = Date.now();

// console.log(test);
// console.log(test2);

// const start = Date.now();

// for (let i = 0; i < 1000000; i++) {
//   //
// }

// const end = Date.now();

// const diff = end - start;

// console.log(diff);

// const date = new Date();

// const options = {
//   year: "numeric",
//   weekday: "long",
// };
// console.log(date.toLocaleDateString("de-DE", options));
