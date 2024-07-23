// строки, методы строк

// '', "", ``

const userName = 'Hello, world! javascript';

// console.log(userName);
// console.log(typeof userName);
// console.log(Boolean(userName));
// console.log(Number(userName));
// console.log(isNaN(userName));
// console.log(isNaN(+userName));


// length -> длина строки

// console.log(userName.length);

// получить символ по индексу
// индекс 1-го символа => 0

// console.log(userName[0]);
// console.log(userName[userName.length - 1]);

// console.log(userName.toLowerCase());
// console.log(userName.toUpperCase());


// объединение строк
// const firstName = 'Ivan';
// const lastName = 'Demidov';

// console.log(firstName + ' ' + lastName);
// console.log(`${firstName} ${lastName}`);

// concat(ПЕРЕМЕННАЯ) - объединяет две или более строк в одну
// возвращает новую строку

// const fullName = firstName.concat(' ', lastName);
// console.log(fullName);



// доступ к символам - []
// charAt(INDEX)

// console.log(userName.charAt(4));
// console.log(userName[4]);



// Поиск строки в строке
// includes(string, index?) => возвращает true/false

// console.log(userName.toLowerCase().includes('HeLLo'.toLowerCase()));
// // console.log(userName.includes('Hello'));
// // console.log(userName.includes('Hello', 10));
// console.log(userName.includes('John'));
// console.log(userName.includes('!'));
// console.log(userName.includes('?'));

// indexOf(string, index?) => возвращает индекс или -1
// индекс первого вхождения подстроки в строку
// console.log(userName.indexOf('l'));
// console.log(userName.indexOf('?'));

// lastIndexOf(string, index?) => возвращает индекс или -1
//индекс последнего вхождения подстроки в строку
// console.log(userName.lastIndexOf('l'));



// endsWith(string) => true/false - заканчивается ли строка символами

// console.log(userName.endsWith('!'));
// console.log(userName.endsWith('world'));

// startsWith(string) => true/false - начинается ли строка с символов

// console.log(userName.startsWith('Hello'));
// console.log(userName.startsWith('Hi'));



// search(string) => индекс начала совпадения
// если совпадений нет => -1

// console.log(userName.search('world')); // 7



// извлечение строк

// slice(start, end) => извлекает часть строки и возвращает новую строку
// end - не обязательно
// по умолчанию end - до конца строки

// без аргументов => копия
// const startIndex = userName.search('world');
// const endIndex = userName.search('!') + 1;

// const result = userName.slice(startIndex, endIndex);
// const copy = userName.slice();

// console.log(result);
// console.log(copy);
// console.log(copy === userName);



// substring(start, end) => end может быть меньше, чем start

// const startIndex = userName.search('world');
// const endIndex = userName.search('!') + 1;

// const result = userName.substring(startIndex, endIndex);

// console.log(result);



// substr(start, length)
// length => длина

// const result = userName.substr(7, 5);

// console.log(result);



// добавление символов
// padEnd(number, symbol)
// padStart(number, symbol)

// const testStart = userName.padStart(30, '*');
// const testEnd = userName.padEnd(30, '-');

// console.log(testStart);
// console.log(testEnd);


// замена
// replace()
// replaceAll()

// const res = userName.replace('l', '1');
// const res2 = userName.replaceAll('l', '1');
// // const res2 = userName.replaceAll('world', 'earth');

// console.log(res);
// console.log(res2);



// Повтор строки
// repeat(number)

// const symbol = '#';

// const num = +prompt('Введите количество повторений')

// const result = symbol.repeat(num);

// console.log(result);



// удаление пробелов в строке
// trimStart()
// trimEnd()
// trim()

// const userString = prompt('Введите текст').trim();

// console.log(userString);



// console.log(userName[1]);

// for (let i = 0; i < userName.length; i++) {
//     console.log(userName[i]);
// }





// Задачи
// -------------------------------

// 1) Запросить 2 строки и сравнивнить их длину. Вывести 1, если в первой строке больше символов, чем во второй; -1 – если во второй больше символов, чем в первой; или 0 – если строки одинаковой длины.

// const str1 = prompt('Введите строку 1');
// const str2 = prompt('Введите строку 2');

// if (str1.length > str2.length) {
//     console.log(1);
// } else if (str2.length > str1.length) {
//     console.log(-1);
// } else {
//     console.log(0);
// }


// 2) Дана строка 'aaa@bbb@ccc'. Замените все @ на '!'

// const str = 'aaa@bbb@ccc';

// console.log(str.replaceAll('@', '!'));


// 3) Дана строка 'я учу javascript!'. Найдите количество символов в этой строке.

// const str = 'я учу javascript!';

// console.log(str.length);



// 4) Перевернуть строку:
// 'JavaScript' => 'tpircSavaJ'
// Пример:
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// const str = 'world';
// let reversedString = '';

// for (let i = str.length - 1; i >= 0; i--) {
//     reversedString += str[i];
//     console.log(str[i]);
// }

// console.log(reversedString);



// 5) Запросить у пользователя ввести строку, посчитать сколько в этой строке заглавных букв.

// const str = prompt('Введите строку');
// let counter = 0;

// for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i].toUpperCase()) {
//         counter += 1
//     }
// }
// console.log(counter);
// console.log('w' === 'W');
// console.log('W' === 'W');



// 6) Запросить у пользователя имя и фамилию, вывести в консоль fullName пользователя используя метод строк concat

// const firstName = prompt('Имя');
// const lastName = prompt('Фамилия');

// const fullName = firstName.concat(' ', lastName);

// console.log(fullName);



// 8) Написать программу, которая считает сумму цифр числа.
// Например: число 1357, сумма 1 + 3 + 5 + 7 = 16.

// const num = 1357;
// const str = String(num);
// let sum = 0;

// for (let i = 0; i < str.length; i++) {
//     sum += +str[i];
//     // console.log(str[i]);
// }

// console.log(sum);


// 9) Пользователь вводит год своего рождения, вывести информацию о возрасте пользователя в разные года до текущего. 
// Например, вводим «2003». Вывод: «в 2003 было 0 год», «в 2004 было 1 год», «в 2005 было 2 год» и т.д.

// const currentYear = 2024;
// let DOB = +prompt('Введите год Вашего рождения');

// let age = 0;

// while (DOB <= currentYear) {
//     console.log(`В ${DOB} было ${age} лет`)
//     DOB++;
//     age++;
// }



// 10) Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.


// let bolshe = 0;
// let menshe = 0;
// let nuli = 0;

// for (let i = 1; i <= 10; i++) {
//     const num = +prompt('Введите число');
//     if (num > 0) {
//         bolshe++;
//     } else if (num < 0) {
//         menshe++;
//     } else {
//         nuli++;
//     }
// }

// console.log(`Положительных: ${bolshe}, Отрицательных: ${menshe}, Нулей: ${nuli}`);