// Date

// UTC => Гринвич
// текущий часовой пояс => таймзона, timezone

// const date = new Date();

// console.log(date);

// // текущая дата - toLocaleDateString()
// console.log(date.toLocaleDateString().replaceAll('/', '.'));

// // текущее время - toLocaleTimeString()
// console.log(date.toLocaleTimeString());
// console.log(date.toLocaleTimeString().slice(0, -3));

// // время и дата - toLocaleString()
// console.log(date.toLocaleString());


// отдельные компоненты даты и времени

// console.log(date.getFullYear()); // возвращает год
// console.log(date.getMonth()); // месяц с 0 до 11
// console.log(date.getDate()); // день месяца, с 1 до 31
// console.log(date.getDay()); // порядковый номер дня недели с 0 до 6, 0 - воскр.
// console.log(date.getHours()); // часы от 0 до 23
// console.log(date.getMinutes()); // минуты от 0 до 59
// console.log(date.getSeconds()); // секунды от 0 до 59
// console.log(date.getMilliseconds()); // миллисекунды от 0 до 999

// console.log(date.getUTCHours()); // часы по Гринвичу



// не привязаны к часовой зоне

// console.log(date.getTime()); // значение в мс, прошедшее с 1 января 1970г.
// console.log(date.getTimezoneOffset()); // смещение текущей часовой зоны и UTC




// ----------------------

// year, month, date (число в месяце), hours, minutes, seconds, ms
// const date = new Date(2000, 0, 10);
// const date2 = new Date(2000, 0, 15);

// // console.log(date.getDate());
// // console.log(date2.getDate());

// console.log(date.getTime());
// console.log(date2.getTime());

// const diff = date2.getTime() - date.getTime();

// const convertMsToDays = 1000 * 60 * 60 * 24;

// console.log(diff / convertMsToDays);

// ------------------------------

// const date = new Date();

// date.setFullYear(2026); // setFullYear(год, месяц, день )
// date.setMonth(10); // setMonth(месяц, день)
// date.setDate(30); // setDate(день)
// date.setHours(26); // setHours(часы, минуты, сек, мс)
// // date.setMinutes(55); // setMinutes(минуты, сек, мс)
// // date.setSeconds(40); // setSeconds(сек, мс)
// // date.setMilliseconds(800); // setMilliseconds(мс)

// console.log(date);



// --------------------------------

// new Date().getTime() === Date.now()
// const test = new Date().getTime();

// // количество мс от 1 января 1970
// const test2 = Date.now();

// console.log(test);
// console.log(test2);


// const startTime = Date.now();

// for(let i = 0; i < 10000000; i++ ) {
//     // логика
// }

// const endTime = Date.now();

// const diff = endTime - startTime;

// console.log(diff);


// const date = new Date();

// // настройки для вывода/формата
// const options = {
//     year: 'numeric',
//     weekday: 'long',
//     month: 'long',
// }

// // 1й аргумент - локаль
// console.log(date.toLocaleDateString('de-DE', options));
// console.log(date.toLocaleDateString('ko-KR', options));
// console.log(date.toLocaleDateString('th-TH', options));



// объекты






// ---------------------


// 1) Создать случайный массив чисел длиной 10
// На основе оригинального массива создать массив чисел которые являются четными и делятся на 4

// function getRadndomArray() {
//     const arr = [];
//     for (let i = 0; i < 10; i++) {
//         const randomNumber = Math.floor(Math.random() * 100);
//         arr.push(randomNumber);
//     }
//     return arr;
// }

// const numbers = getRadndomArray();

// const filteredNumbers = numbers.filter((elem) => {
//     return elem % 4 === 0 && elem % 2 === 0;
// })

// console.log(numbers);
// console.log(filteredNumbers);



// 2 Создать массив имен длиной больше 5, выяснить есть ли в массиве "Семен" (без метода includes)
// some

// const names = ['Валерий', 'Галина', 'Cемен', 'Дмитрий', 'Анна'];

// const isSemen = names.some((name) => {
//     return name === 'Cемен';
// });

// console.log(isSemen);



// 3

// function getRadndomArray() {
//     const arr = [];
//     for (let i = 0; i < 10; i++) {
//         const randomNumber = Math.floor(Math.random() * 100);
//         arr.push(randomNumber);
//     }
//     return arr;
// }

// const numbers = getRadndomArray();

// // reduce

// const result = numbers.reduce((sum, number) => {
//     // if (number % 2 === 0) {
//     //     return sum + number;
//     // } else {
//     //     return sum;
//     // }
//     return number % 2 ? sum : sum + number
// }, 0);

// console.log(numbers);
// console.log(result);


// 4) Спросить у пользователя 5 чисел, ПОСЛЕ ввода всех чисел, проверить все ли из них преобразуемы в число (могут быть числами)


// const numbers = [];

// for (let i = 0; i < 5; i++) {
//     const number = prompt('Введите число');
//     numbers.push(number);
// }

// const result = numbers.every((elem) => {
//     return elem !== '' && elem !== null && !isNaN(elem);
// });

// console.log(result);





// 5) Сделайте функцию, которая параметром будет принимать массив с числами и возвращать максимальное и минимальное значение из этого массива в виде следующего объекта:

// {
// 	max: 9,
// 	min: 1,
// }


// const arr = [2, 3, 6, 8, 1, 6, 9];

// function getMinAndMax(arr) {
//     const max = Math.max(...arr);
//     const min = Math.min(...arr);

//     return {
//         max,
//         min
//     };
//     // {
//     //     max: max,
//     //     min: min
//     // }
// }

// const result = getMinAndMax(arr);

// console.log(result);




// 6) Напишите функцию isEmptyObj(), которая проверяет пуст объект или нет. Если объект пуст, функция вернет true, если в объекте есть хотя бы одно поле, функция вернет false.

// const obj = {
//     test: 2
// };

// function isEmptyObj(obj) {
//     const keys = Object.keys(obj);
//     if (!keys.length) {
//         return true;
//     } else {
//         return false;
//     }
// }

// const res = isEmptyObj(obj);
// console.log(res);



// 7) Вам дан массив computers с объектами. Найдите в массиве объект "MacBook Pro 16" и выведите его в консоль.

// const computers = [
//     {
//         name: 'MacBook Pro 13',
//         price: 4000
//     },
//     {
//         name: 'MacBook Pro 14',
//         price: 5000
//     },
//     {
//         name: 'MacBook Pro 16',
//         price: 7000
//     },
// ];

// const macbook = computers.find(({ name }) => {
//     return name === 'MacBook Pro 16';
// });

// console.log(macbook);



// Создать функцию, которая принимает имя человека
// и возвращает 'Hello, имя' если длина имени меньше 5
// и возвращает 'Hi, имя' если больше


// function greeting(personName) {
//     if (personName.length < 5) {
//         return `Hello, ${personName}`;
//     } else {
//         return `Hi, ${personName}`;
//     }
// }

// const greeting = personName => personName.length < 5 ? `Hello, ${personName}` : `Hi, ${personName}`

// console.log(greeting('John'));
// console.log(greeting('Albert'));


// Дан массив [10, 4, 100, -5, 54, 2]
// Нужно получить сумму кубов всех чисел в массиве
// 10^3 = ...
// решить через reduce

// const numbers = [10, 4, 100, -5, 54, 2];

// const result = numbers.reduce((sum, number) => {
//     return sum + number ** 3;
// }, 0);

// console.log(result);

// // forEach

// let sum = 0;
// numbers.forEach((number) => {
//     sum += number ** 3;
// });

// console.log(sum);