// let, const

// const carName = 'tesla';
// let maxCarSpeed = 30;
// let carOwner = 'John';

// alert(carName);
// alert(maxCarSpeed);
// alert(carOwner);



// операторы
// = - присвоить
// +
// -
// *
// /
// ** - возведение в степень
// % - остаток от деления (модуль)

// ++ - инкремент => увеличить на 1
// ++2
// 2++

// -- - декремент => уменьшить на 1
// --2
// 2--


// let a = 10;
// let b = 4;

// const res_1 = a + b;
// const res_2 = a - b;
// const res_3 = a * b;
// const res_4 = a ** b;
// const res_5 = a / b;
// const res_6 = a % b;

// console.log('+:', res_1);
// console.log('-:',res_2);
// console.log('*:',res_3);
// console.log('**:',res_4);
// console.log('/:',res_5);
// console.log('%:',res_6);


// // делить можно
// const c = 5;
// console.log(c / 0);

// // NaN => not a number
// console.log('gdfdfg' * 2);
// console.log(0 / 0);


// // конкатенация строк
// console.log('Hello' + 'world');

// console.log('Hello' + 2); // => если один из операндов строка - получим строку


// операторы присваивания

// let x = 4;

// x += 2; // => x = x + 2
// x -= 2; // => x = x - 2
// x *= 2; // => x = x * 2
// x /= 2; // => x = x / 2
// x **= 2; // => x = x ** 2
// x %= 2; // => x = x % 2

// console.log(x);



// операторы сравнения => Boolean => true или false
// == 
// === - равное и значение и тип
// !=
// !== - не равное значение или не равный тип
// >
// <
// >=
// <=
// ?

// console.log('==:', '2' == 2);
// console.log('===:', '2' === 2);

// console.log('==:', '2' != 2);
// console.log('===:', '2' !== 2);

// console.log(4 > 6);
// console.log(4 < 6);
// console.log(4 >= 4);
// console.log(4 <= 2);

// console.log('3' > '25');

// console.log('H' === 'h');


// равны друг другу и не равны ничему другому
// console.log(null == undefined);



// логические операторы

// и - &&
// или - ||
// не - !

// console.log((4 + 5 < 10) && 4 < 6);
// console.log(4 > 5 || 4 < 6);

// console.log(!true);
// console.log(!false);



// Преобразование типов

// явно
// Number() => преобразование к числу
// String() => преобразование к строке
// Boolean() => преобразование к true/false
// +, *, /

// const a = 2;
// const b = '4';

// console.log(a * b);
// console.log(b / a);
// console.log(+b + a);
// console.log(Number(b) + a);
// console.log('Hello');

// console.log(typeof Number(b));
// console.log(typeof String(a));
// console.log(Boolean(a));
// console.log(typeof Boolean(a));

// console.log(Number('Hello')); // => NaN


// const userAge = prompt('Введите ваш возраст');

// console.log(userAge);

// // Boolean === !!
// console.log(!!userAge);


// 6 falsy значений => false
// false, 0, '', null, undefined, NaN
// console.log(!!false);
// console.log(!!0);
// console.log(!!'');
// console.log(!!null);
// console.log(!!undefined);
// console.log(!!NaN);


// let test = 'value';
// let test2 = '2';

// console.log(+test);
// console.log(test * 2);
// console.log(test / 2);
// console.log(test - 2);
// console.log(2 - test);

// console.log(typeof +test); // => typeof NaN => number

// // isNaN - проверка на NaN => true/false
// console.log(isNaN(+test));
// console.log(isNaN(+test2));


// шаблонные строки - `` - бэктики
// можно писать многострочный текст
// можно писать другие кавычки без экранирования
// можно внедрять значения или писать выражения

// const greeting = 'Hello';
// const firstName = 'John';
// // Hello, John!
// // const message = greeting + ',' + ' ' + firstName + '!';

// // интерполяция - ${}
// const message = `${greeting}, ${firstName}!`;
// console.log(message);



// Запросить у пользовтаеля имя и возвраст
// вывести в консоль сообщение: "Добро пожаловать ИМЯ, Вам ВОЗРАСТ лет"

// const name = prompt('Имя');
// const age = prompt('Возраст');

// console.log(`Добро пожаловать ${name}, Вам ${age} лет`);


// инкремент, декремент

// let i = 0;

// console.log(i++);
// console.log(i++);

// console.log(i);

// console.log(++i);
// console.log(++i);

// console.log(i);


// условные операторы 

// if else

// if (5 > 10) {
//     let a = 4;
//     console.log(a);
// } else {
//     console.log('else block');
// }

// let test = 4;

// if (test === 1 || test === 2 || test === 3) {
//     console.log('1 или 2 или 3');
// } else 
// // if (test === 2) {
// //     console.log('2');
// // } else if (test === 3) {
// //     console.log('3');
// // } else 
// {
//     console.log('не 1 не 2 и не 3');
// }



// switch
// 

// const str = prompt('Введите слово');
// switch (str) {
//     case 'ципленок':
//         console.log('Правильно - цыпленок');
//         break;
//     case 'циц':
//         console.log('Правильно - цыц');
//         break;
//     case 'циган':
//         console.log('Правильно - цыган');
//         break;
//     default:
//         console.log('Молодец, ты написал правильно!')
//         break;
// }


// if (5 > 10) {
//     console.log('5 больше 10');
// } else {
//     console.log('5 меньше 10');
// }

// тернарный оператор - короткая запись if else
// 'условие' ? 'в случае true' : 'в случае false'

// 5 > 10 ? console.log('5 больше 10') : console.log('5 меньше 10')





// // 1
// const age1 = prompt('Возраст 1');
// const age2 = prompt('Возраст 2');

// // !Boolean(age1) || !Boolean(age2)

// if (
//     isNaN(age1) || isNaN(age2) || 
//     age1 === '' || age2 === '' || 
//     age1 === null || age2 === null
// ) {
//     console.log(`Ошибка`);
// } else if (+age1 > +age2) {
//     console.log(`Старшему: ${age1} лет`);
// } else if (+age2 > +age1) {
//     console.log(`Старшему: ${age2} лет`);
// } else {
//     console.log(`Возраст равен`);
// }

// 2
// const age = +prompt('Ваш возраст');

// if (age >= 0 && age <= 10) {
//     console.log('привет мальчик');
// } else if (age >= 11 && age <= 18) {
//     console.log('привет подросток');
// } else if (age >= 19 && age <= 40) {
//     console.log('здарова пацан');
// } else if (age >= 41 && age <= 80) {
//     console.log('добрый вечер');
// } else if (age >= 81 && age <= 100) {
//     console.log('здравия желаю');
// } else {
//     console.log('Столько не живут');
// }


// 4

// const colorName = prompt('Введите цвет');
// switch (colorName) {
//     case 'red':
//         console.log(1);
//         break;
//     case 'blue':
//         console.log(2);
//         break;
//     case 'orange':
//         console.log(3);
//         break;
//     case 'gray':
//         console.log(4);
//         break;
//     case 'salmon':
//         console.log(5);
//         break;
//     default:
//         console.log('ошибка');
//         break;
// }


// 5

// const month = +prompt('Номер месяца');
// switch (month) {
//     case 1:
//         console.log('январь');
//         break;
//     case 2:
//         console.log('февраль');
//         break;
//     case 3:
//         console.log('март');
//         break;
//     case 4:
//         console.log('апрель');
//         break;
//     case 5:
//         console.log('май');
//         break;
//     default:
//         console.log('ошибка');
//         break;
// }


// // 3
// const num1 = +prompt('Введите число 1');
// const num2 = +prompt('Введите число 2');
// const num3 = +prompt('Введите число 3');

// if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
//     console.log('ошибка')
// } else {
//     console.log((num1 + num2 + num3) / 3)
// }



// 7

// const num = +prompt('Введите число');

// if (num > 0) {
//     console.log('Число положительное');
// } else if (num < 0) {
//     console.log('Число отрицательное');
// } else {
//     console.log('Число равно нулю');
// }



// 8 

// const planet = prompt('Введите название планеты');

// planet === 'Земля' || planet === 'земля' ? console.log('Привет, землянин') : console.log('Привет, инопланетянин');


