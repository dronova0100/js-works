// функции

// области видимости - scope
// глобальная
// функциональная
// блочная


// hoisting => поднятие

// let b = 2;

// let a = 2;

// test()

// function test() {
//     const c = 22;
//     console.log(c)

//     if (true) {
//         let b = 10;
//         console.log(b);

//         console.log(d);
//         var d = 88;

//         function test2() {
//             console.log('test2');
//         }
//     }
// }


// лексическая область
// набор правил движка где и как найти переменную

// скриытый объект, в нем есть переменные этой функции 
// и ссылки на внешнее окружение
// и др. инфомрация

// function func() {
//     var a = 5;
//     let b = 10;
//     const c = 15;

//     function func2() {
//         console.log(a);
//         console.log(b);
//         console.log(c);
//     }
//     func2();
// }

// func();



// замыкания - closure

// для чего
// инкапсуляция - защита данных
// для запоминания параметров
// function sayHello() {
//     const message = 'Добрый вечер!';
//     const test = 22;
//     return function(name) {
//         console.log(test);
//         console.log(`${message} ${name}`);
//     }
// }

// const message = 'Привет';

// const result = sayHello();
// // const result2 = function(name) {
// //     console.log(`${message} ${name}`)
// // }

// console.dir(result);

// result('John');
// result('David');
// result('Oleg');
// result('Vasya');

// function counter(count) {
//     // let count = 0;
//     return function() {
//         return ++count;
//     }
// }

// const useCounter = counter(0);
// const useCounter2 = counter(0);

// console.log(useCounter());
// console.log(useCounter());
// console.log(useCounter());

// console.log(useCounter2());
// console.log(useCounter2());


// сборщик мусора
// достижимость



// pure function
// чистая функция
// не вызывают побочных эффектов (side effects)
// никак не влияет на окружающее состояние

// при передаче одинаковых параметров ВСЕГДА
// выдет одинаковый результат

// let c = 1;
// function pure(a, b) {
//     // c++;
//     return (a + b) / b;
// }

// console.log(pure(2, 10));
// console.log(pure(2, 10));
// console.log(pure(2, 10));

// function impure(a, b) {
//     return (a + b) / Math.random();
// }

// console.log(impure(2, 10));
// console.log(impure(2, 10));
// console.log(impure(2, 10));




// рекурсия - повторение процесса внутри самого себя

// метод создания функции которая вызывает саму себя 
// пока не будет достигнут результат

// условие завершения => предохранитель от плохих данных
// базовый сценарий => цель

// рекурсия => повторный вызов самой функции с измененным аргументом

// любая задача, которую можно решить рекурсией, также решается циклом

// структур данных с глубокой вложенностью или неизвестной глубиной

// let days = -10;

// function daysTest() {
//     if (days === 365) {
//         return; // базовый сценарий
//     }

//     if (days < 0) {
//         return; // условие завершения
//     }

//     days++
//     console.log(days)
//     daysTest(); // рекурсия
// }

// daysTest();




// Написать функцию, которая при каждом вызове возвращает попеременно true => false => true
// замыкание

// function switcher() {
//     let status = true;
//     return function() {
//         console.log(status);
//         status = !status;
//         return status;
//     }
// }

// const useSwitcher = switcher();

// useSwitcher();
// useSwitcher();
// useSwitcher();
// useSwitcher();




// Написать функцию для генерации случайного массива заданной длины. Функция принимает длину массива. Функция возвращает получившийся массив

// function getArray(length) {
//     const arr = [];
//     for (let i = 0; i < length; i++) {
//         arr.push(Math.floor(Math.random() * 10));
//     }
//     console.log(arr);
// }

// getArray(10);
// getArray(20);
// getArray(1);



// Написать функцию, которая выводит количество аргументов функции
// test(1,'test', 64) // => Количество аргументов: 3
// test(true,'test', 64, 0) // => Количество аргументов: 4
// test(5) // => Количество аргументов: 1
// test() // => Количество аргументов: 0

// function test() {
//     console.log(`Количество аргументов: ${arguments.length}`);
// }


// Написать функцию, которая возводит переданное число в переданную степень
// выведите результат в консоль


// function test2(num, stepen) {
//     console.log(Math.pow(num, stepen))
// }

// test2(2, 2)
// test2(2, 3)




// Написать функцию которая сокращает имя и фамилию в инициалы
// John Travolta => J.T.
// Лев Толстой => Л.Т.
// names('Лев Толстой') // => Л.Т.

// function names(name) {
//     const arr = name.split(' ');
//     const index = name.indexOf(' ') + 1;
//     console.log(`${arr[0][0]}.${arr[1][0]}.`);
//     console.log(`${name[0]}.${name[index]}.`);
// }



// Написать функцию, которая будет суммировать числа от 1 до num
// sum(5) // => 1 + 2 + 3 + 4 + 5 => 15

// function sum(num) {
//     let sum = 0;
//     for (let i = 1; i <= num; i++) {
//         sum += i;
//     }
//     console.log(sum);
// }


// function sum2(num) {
//     if (num === 0) {
//         return 0; 
//     }

//     if (num < 0) {
//         return 'Ошибка';
//     }

//     return num + sum2(num - 1); // 5 + 4 + 3 + 2 + 1 + 0
// }

// const result = sum2(5); // 5 + 4 + 3 + 2 + 1

// console.log(result);



// Написать функцию, которая считает сумму чисел массива
// рекурсия

// const numbers = [1,2,3,4,5,6];

// function sumArray(arr,sum = 0) {
//     if (arr.length === 0) {
//         return sum;
//     } else {
//         return sumArray(arr, sum + arr.pop());
//     }
// }

// console.log(sumArray(numbers));


// перписать на рекурсию





// каррирование
// частичное применение
// HOF
// callback
// IIFE



// каррирование или каринг
// currying

// преобразование функии с множеством аргументов
// в набор вложенных функций с 1 аргументом
// каррированная функция

// function sum(x, y, z) {
//     return x + y + z;
// }

// console.log(sum(2, 4, 6));

// каррирование всегда приводит к замыканию
// если 1 или 0 аргумент - то каррировать нельзя
// количество функций = количеству аргументов
// function currySum(x) {
//     return function (y) {
//         return function (z) {
//             return x + y + z;
//         };
//     };
// }

// console.log(currySum(2)(4)(6));

// currySum(2)(4)(6);


// const sumWith5 = currySum(5);


// ru, en
// const translate = (local, text) => {
//     if (local === 'ru') {

//     }
//     // логика перевода
// }

// translate('ru', 'Good morning');
// translate('ru', 'Milk');
// translate('de', 'Freedom');
// translate('de', 'My name is John');

// const curryTranslate = (local) => {
//     return function(text) {
//         console.log(`${local}: ${text}`);
//     }
// }

// const translateToRu = curryTranslate('ru');
// const translateToDe = curryTranslate('de');

// translateToRu('Good morning');
// translateToRu('Good morning');
// translateToRu('Good morning');
// translateToDe('My name is John');




// частичное применение
// partial application
// фиксирование одного или нескольких значений (аргументов)
// function add(a, b, c) {
//     return a + b + c;
// }

// function partAdd(a) {
//     return function (b, c) {
//         return a + b + c;
//     };
// }

// const addFive = partAdd(5);

// console.log(addFive(2, 3));
// console.log(addFive(1, 1));
// console.log(addFive(2, 2));
// console.log(addFive(3, 3));




// hof
// higher order function
// функция высшего порядка

// функция, которая принимает функцию в качестве аргумента
// функция, которая возвращает новую функцию

// const arr = [1, 2, 3];
// arr.map(() => {

// });


// callback
// функция обратного вызова

// function greeting(name) {
//     console.log(`Привет, ${name}`);
// }

// function greeting2(name) {
//     console.log(`Здарова, ${name}`);
// }

// function inputHandler(callback) {
//     const userName = prompt('Enter your name');
//     callback(userName);
//     greeting(userName);
// }

// inputHandler(greeting);
// inputHandler(greeting2);



// settimeout, setinterval
// Web API
// Browser API


// setTimeout(() => {
//     console.log('Через 1 сек');
// }, 1000);

// setInterval(() => {
//     console.log('1 сек');
// }, 1000)


// const timerId = setInterval(() => console.log('test'), 1000)

// setTimeout(() => {
//     clearInterval(timerId);
// }, 3000);

// clearTimeout, clearInterval

// console.log('start');

// setTimeout(() => {
//     console.log('timeout');
// }, 0);

// console.log('end');



// IIFE
// immediately invoked function expression
// немедленно вызываемая функция
// ()()

// const test = (function hello() {
//     const text = 'IIFE';
//     return function () {
//         console.log(text)
//     }
// })();

// test();




// Написать функцию, которая параметром принимаем массив и возвращает случайный элемент массива

// const numbers = [2, 4, 6, 1, 6, 9, 3];

// function getRandomElement(arr) {
//     const index = Math.floor(Math.random() * arr.length);
//     console.log('index', index);
//     return arr[index];
// }

// console.log(getRandomElement(numbers));