// функции


// function declaration => просто объявление функции
// function expression => функциональное выражение
// arrow function => стрелочная функция


// function declaration
// function sayHello() {
//     console.log('Привет');
// }

// sayHello();



// function expression
// ананоминая функция
// const sayHello = function() {
//     console.log('Выражение');
// }

// sayHello();



// arrow function
// () => {}

// const sayHello = () => {
//     console.log('Стрелочная функция');
// }

// sayHello();

// let a = 10;
// let b = 5;

// если аргумент не передан => undefined
// фукнция принимает - параметры

// function test() {
//     const a = 2;
//     function test2() {
//         let c = 2;
//         function test3() {
//             console.log(c);
//         }
//     }
// }

// function getSum(a, b) {
//     // a и b
//     a = 15;
//     // до ES6
//     // let newFirst = first || 0;
//     // let newSecond = second || 0;
//     console.log(a + b);
//     var test2 = 11111;
//     // console.log(first);
// }

// console.log(test2); // у var есть функциональная область видимости
// first = 0 - значение по умолчанию

// console.dir(getSum); // функция => object

// функции передаем при вызове - аргументы
// getSum(a,b);
// console.log('a:', a);

// области видимости - scope
// глобальная
// функциональная
// блочная

// let c = 22;

// if (true) {
//     // num
//     // console.log(c);
//     let c = 44;
//     let test = 33;
//     const str = 'test';

//     console.log(num);
//     var num = 20;
//     // console.log(c);
// }

// // console.log(str);

// // var - нет блочной области видимости
// console.log(num);


// поднятие => hoisting - поднятие в начало своей обалсти видимости

// const names = ['John', 'Max', 'David', 'Gleb'];
// // arguments - псевдо массив аргументов функции
// // arguments.length => количество аргументов
// function changeName(test, str) {
//     console.log(arguments);
//     // console.log(arguments.slice()); // ошибка
//     test[0] = 'Kate';
// }

// changeName(names, 'text');

// console.log(names);



// return
// undefined - если нет return
let num1 = 11;
let num2 = 7;

// function test() {
//     console.log('test')
// }
// // first-class object
// // first class citizen
// function sum(a, b, func) {
//     // a, b - локальные переменные
//     if (true) {
//         func();
//     }
//     console.log(a + b);
//     return a + b;
// }

// const result = sum(num1, num2, test);

// console.log(result);

// особенности стрелочных функций
// можно опустить () если функция принимает 1 аргумент
// можно опустить {} если функция сразу что-то возвращает
// нет arguments
// const arrowSum = a => {
//     // console.log(arguments);
//     console.log(a);
//     return a;
// }

// const arrowSum3 = (a, b) => a + b;

// const arrowSum2 = function(a, b) {
//     console.log(arguments);
//     // console.log(a + b);
//     return a + b;
// }

// // arrowSum();
// arrowSum2(num1, num2);

// // IIFE
// (function sum(a, b = 0) {
//     // a, b - локальные переменные
//     console.log(a + b);
//     return a + b;
// })(10, 5)



// TDZ




// Задачи
// 0 Дан массив [ 'John', 'Dan', 'David', 'Lambert', 'Eddie', 'Janett', 'Mike']


const arr = ['John', 'Dan', 'David', 'Lambert', 'Eddie', 'Janett', 'Mike'];

// 1) Переставить 'Janett', 'Mike' в начало массива

// const name1 = arr.pop();
// const name2 = arr.pop();

// arr.unshift(name1);
// arr.unshift(name2);

// arr.unshift(arr.pop());
// arr.unshift(arr.pop());


// const arrSlice = arr.slice(arr.indexOf('Janett'));
// arr.pop();
// arr.pop();
// console.log(arrSlice.concat(arr));


// const arrSlice = arr.slice(arr.indexOf('Janett'));

// arr.splice(0, 0, arr[arr.indexOf('Janett')], arr[arr.indexOf('Mike')]);
// arr.splice(0, 0, 'Janett', 'Mike');
// arr.splice(0, 0, ...arrSlice);
// arr.splice(arr.lastIndexOf('Janett'), 1);
// arr.splice(arr.lastIndexOf('Mike'), 1);


// const startIndex = arr.indexOf('Janett');
// const arrSplice = arr.splice(startIndex, 2);

// console.log(arr);
// console.log(arrSplice.concat(arr));


// arr.splice(0, 0, arrSlice);
// arr.pop();
// arr.pop();

// console.log(arr.flat());




// 2) Заменить 'Dan', 'David' на 'Bob', 'Oliver'

// const newArr = ['Bob', 'Oliver'];

// arr.splice(arr.indexOf('Dan'), 2, 'Bob', 'Oliver');

// console.log(arr);


// 3) Перевернуть массив и заменить первые 3 элемента на 'Robert'

// arr.reverse().fill('Robert', 0, 3);
// arr.reverse().splice(0, 3, 'Robert', 'Robert', 'Robert');

// arr.reverse();
// arr.shift();
// arr.shift();
// arr.shift();
// arr.unshift('Robert');
// arr.unshift('Robert');
// arr.unshift('Robert');

// console.log(arr);


// 4) Дан второй массив ['Bob', 'Oliver', 'Robert', 'Daniel']. Скопировать все эелемнты начиная с 'Oliver' и вставить их в конец первого массива

// const arr2 = ['Bob', 'Oliver', 'Robert', 'Daniel'];

// const arrSlice = arr2.slice(arr2.indexOf('Oliver'));

// console.log(arr.concat(arrSlice));



// 5) Из второго массива скопировать 'Robert' и вставить меджу 'David' и 'Lambert'

// const arr2 = ['Bob', 'Oliver', 'Robert', 'Daniel'];
// const robertIndex = arr2.indexOf('Robert');
// const davidIndex = arr.indexOf('David');

// // const element = arr2.slice(robertIndex, robertIndex + 1);

// const elem = arr2[robertIndex];

// arr.splice(davidIndex + 1, 0, elem);

// // console.log(element);
// // console.log(elem);

// console.log(arr);





// 1) Написать функцию-валидатор числа, которая принимает сроку и возвращает true, если эта строка может быть числом, false - если не может


// function validationNumber(someString) {
//     const isNumber = !!Number(someString);
//     if (isNumber) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(validationNumber('1'));

// const test = someString => !!Number(someString) ? true : false;

// console.log(test('2'));




// 2) Написать функцию, которая вычисляет среднее арифметическое за год (нужно передавать оценки за 4 четверти)

// function getAverage(num1, num2, num3, num4) {
//     const sum = num1 + num2 + num3 + num4;
//     console.log(Math.round(sum / arguments.length));
// }

// getAverage(9, 1, 5, 5);


// 3) Написать функцию, которая вычисляет процент побед. Функция принимает количество побед и поражений, и возвращает процент поражений и побед

// function getWinsPercent(wins, losses) {
//     const games = wins + losses;
//     const winsPercent = ((wins / games) * 100).toFixed(2);
//     const lossesPercent = ((losses / games) * 100).toFixed(2);
//     const message = `Процент побед - ${winsPercent}%, процент поражений - ${lossesPercent}%`;
//     console.log(message);
//     return message;
// }

// getWinsPercent(20, 80);
// getWinsPercent(15, 11);
// getWinsPercent(16, 23);



// 4) Необходимо создать функцию getSumOfNumbers. Она будет считать сумму от 0 до переданного числа. Выберите любой из 3 типов при создании функции.
// getSumOfNumbers принимает в себя 2 параметра: number и type.
// Параметр number - это число, до которого будет считаться сумма. То есть, если было передано число 10, то функция должна посчитать сумму от 0 до 10 (0 + 1 + 2 + … + 10).
// Параметр type отвечает за выбор чисел для подсчета суммы. Он может быть 3-мя значениями: “odd”, “even” и “”. Если type равняется “odd”, то в сумму должны входить только нечетные числа, “even” - четные числа, пустая строка “” - все числа. По умолчанию параметр type должен быть равен odd.

// Функция getSumOfNumbers должна возвращать итоговую сумму с помощью return.

// Возможные результаты функции getSumOfNumbers:
// 1. number = 10, type = ‘odd’. Возвращает 25.
// 2. number = 10, type = ‘even’. Возвращает 30.
// 3. number = 10, type = ‘’. Возвращает 55.

// 0 => число
// 1+2+3+4+5+6+7+8+9+10

// 20 => 1+2+3+4+5+6+7+8+9+10+11+12+13+14+15+16+17+18+19+20

// const getSumOfNumbers = (number, type = 'odd') => {
//     let sum = 0;
//     for (let i = 0; i <= number; i++) {
//         const isEven = i % 2 === 0;
//         const isOdd = !isEven;
//         if (type === '') {
//             sum += i;
//         } else if (isEven && type === 'even') {
//             sum += i;
//         } else if (isOdd && type === 'odd') {
//             sum += i;
//         }
//     }
//     console.log(sum);
//     return sum;
// }

// getSumOfNumbers(10, '');
// getSumOfNumbers(10, 'even');
// getSumOfNumbers(10, 'odd');

// function evenOrOdd(number) {
//   if (number % 2 === 0) {
//     return 'Even'
//   } else {
//     return 'Odd'
//   }
// }

// const evenOrOdd = number => number % 2 ? 'Odd' : 'Even';


