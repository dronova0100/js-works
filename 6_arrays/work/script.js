// массивы
// [] => объект

// [ 9, 7, 8]
// ['1', '6', '9', '7']
// [1, '6', 9, '7'];

// cs
// создание массива
// const users = [1, 2, 3]; // литерал массива - []
// console.log(typeof users); // объект

// const people = new Array(); // конструктор
// console.log(people);

// const names = Array.of('Sam', 'Tom', 'John', 'David');
// console.log(names);

// const letters = Array.from('Hello');
// console.log(letters);


// const arr = [1, 2, 3];

// console.log(arr.length);
// console.log(arr[0]);


// ссылочный тип данных
// console.log(2 === 2);

// const arr1 = [1, 2, 3];
// const arr2 = [1, 2, 3];
// const arr3 = arr1;
// arr3[0] = 10;

// // console.log(arr1 === arr2);
// // console.log(arr1 === arr3);

// console.log(arr3);
// console.log(arr1);



// проверка на массив
// Array.isArray(переменная)
// const arr = ['1', 2, 'Hello'];
// const test = 2;

// console.log(Array.isArray(arr)); // true
// console.log(Array.isArray(test)); // false


// удаление/добавление
// const arr = ['1', 2, 'Hello'];
// arr[5] = 'new element';

// delete arr[0];

// console.log(arr);




// методы

// split() => метод СТРОКИ

// const str = 'Lorem ipsum dolor sit amet';
// const str2 = 'JavaScript';

// const result = str.split(' ');
// const result2 = str2.split('');

// console.log(result);
// console.log(result2);


// методы массивов
// push() => добавляет в конец массива
// возвращает новую длину массива

// const arr = [5, 9, 1, 10, 2];

// const res = arr.push('test', true, 88);

// console.log(arr);
// console.log(res);



// pop() - удаляет последний элемент массива
// возвращает удаленный элемент

// const arr = [5, 9, 1, 10, 2];

// const res = arr.pop();

// for (let  i = 1; i <= 3; i++) {
//     arr.pop();
// }

// console.log(arr);
// console.log(res);



// shift() => удаляет первый элемент
// возвращает удаленный элемент

// const arr = [5, 9, 1, 10, 2];

// const res = arr.shift();

// console.log(arr);
// console.log(res);



// unshift() => добавляет элемент(ы) в начало
// возвращает новую длину

// const arr = [5, 9, 1, 10, 2];

// const res = arr.unshift('test', 2, true);

// console.log(arr);
// console.log(res);




// concat() => объединяет массивы

// const arr = [5, 9, 1, 10, 2];
// const arr2 = [5, 9, 1, 10, 2];

// const res = arr.concat('test', 2, true);
// const res2 = arr.concat(arr2);

// console.log(arr);
// console.log(res);
// console.log(res2);



// reverse() => переворачивает
// мутирует исходный массив

// const arr = [5, 9, 1, 10, 2];

// const res = arr.reverse();

// console.log(arr);
// console.log(res);



// join() => преобразовывает элементы массива в строку
// если массив пустой => '' (пустая строка)
// const str = 'JavaScript';

// const res = str.split('').reverse().join('');

// const arr = [];
// const res2 = arr.join('');
// const res3 = arr.pop(); // => undefined - если массив пустой
// const res4 = arr.shift(); // => undefined - если массив пустой

// console.log(str);
// console.log(res);
// console.log(res2);
// console.log(res3);
// console.log(res4);



// slice(start, end) => копирование части массива

// const arr = [5, 9, 1, 10, 2];

// const res = arr.slice();

// console.log(arr);
// console.log(res);
// console.log(arr === res);



// indexOf(element, index) => возвращает индекс первого вхождения элемента
// lastIndexOf(element, index) => возвращает индекс последнего вхождения элемента
// второй аргумент (index) - начало поиска
// const arr = [5, 9, 1, 10, 2, 9];

// const index = arr.indexOf(9); // 1
// const lastIndex = arr.lastIndexOf(9); // 5
// const testIndex = arr.lastIndexOf(88); // -1
// const testIndex2 = arr.indexOf(88); // -1

// console.log(arr);
// console.log(index);
// console.log(lastIndex);
// console.log(testIndex);
// console.log(testIndex2);



// includes(element, start) => проверяет, содержит ли массив указанный элемент
// start => индекс начала поиска
// => true/false
// const arr = [5, 9, 1, 10, 2];

// const res = arr.includes(10);
// const res2 = arr.includes(11);

// console.log(arr);
// console.log(res);
// console.log(res2);



// at(index) => возвращает элемент по индексу
// arr[3]
// const arr = [5, 9, 1, 10, 2];

// const res = arr.at(3);
// const res2 = arr.at(10);

// console.log(arr);
// console.log(res);
// console.log(res2);



// fill(element, start, end) => заполняет значениями
// мутирует
// const arr = [5, 9, 1, 10, 2];

// const res = arr.fill(3, 2, 4);

// console.log(arr);
// console.log(res);



// splice(index, сколько удалить, что добавить) => 
// мутирует
// const arr = [5, 9, 1, 10, 2];

// const res = arr.splice(3, 1, 'test', 'test2');

// console.log(arr);
// console.log(res);



// циклы

// const arr = [5, 9, 1, 10, 2];

// const arrCopy = [];

// for (let i = 0; i < arr.length; i++) {
//     arrCopy[i] = arr[i];
//     // arrCopy.push(arr[i]);
// }

// console.log(arrCopy === arr);
// console.log(arrCopy);

// const users = ['John', 'David', 'Tom', 'Maxim'];

// for (let user of users) {
//     console.log(user);
// }


// const str = 'JavaScript';

// for (let letter of str) {
//     console.log(letter);
// }







// Задачи
// ------------------------------------------------

// 1) Пользователь вводит число. Создать массив из 5-ти одинаковых чисел введенных пользователем

// const userNumber = +prompt('User number');

// const arr = [];

// var 1
// arr.push(userNumber);
// arr.push(userNumber);
// arr.push(userNumber);
// arr.push(userNumber);
// arr.push(userNumber);
// console.log(arr);


// var 2

// const COUNT = 5;

// for (let i = 0; i < COUNT; i++) {
//     // arr.push(userNumber);
//     arr[i] = userNumber;
// }
// console.log(arr);


// var 3

// const arr2 = [userNumber, userNumber, userNumber, userNumber, userNumber];



// var 4

// const arr2 = new Array(COUNT).fill(userNumber);

// //new Array(COUNT) => [empty, empty, empty, empty, empty]

// console.log(arr2);


// var 5

// const arr3 = new Array(COUNT);

// for (let i = 0; i < arr3.length; i++) {
//     arr3[i] = userNumber;
// }

// console.log(arr3);




// 2) Дан массив [3,6,12,10,51] - вывести все числа в обратном порядке

// const arr = [3, 6, 12, 10, 51];

// // console.log(arr.reverse());

// // arr.length - 1 - индекс последнего элемента
// for (let i = arr.length - 1; i >= 0; i--) {
//    console.log(arr[i]);
// }



// 3) Создать массив из 10 любых чисел, вывести среднее арифметическое всех чисел в массиве

// const arr = [2, 4, 10, 5, 1, 20, 3, 8, 2, 7];

// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }

// const srArifm = sum / arr.length;

// console.log('Среднее арифметическое: ', srArifm);


// 4) Дан массив [2,-4,10,5,1,-20,3,-8]. Создать новый массив, где каждый элемент равен противоположному элементу оригинального массива

// const arr=[2, -4,10, 5, 1,-20, 3,-8];
// const result=[];

// for ( let i = 0; i < arr.length; i++ ) {
//     // result[i] = arr[i] * -1;
//     result.push(arr[i] * -1);
// }

// console.log(result);




// 5) Сформировать массив длиной 10 элементов. Автоматически заполнить этот массив чередующимися нулями и единицами, начиная с нуля.

// const arr = [];

// const MAX_LENGTH = 10;

// for (let i = 0; i < MAX_LENGTH ; i++) {
//     // arr.push(i % 2);

//     // if (!(i % 2)) {
//     //     arr.push(0);
//     // } else {
//     //     arr.push(1);
//     // }

//     // if (i === MAX_LENGTH) {
//     //     break;
//     // }

//     i % 2 ? arr.push(1) : arr.push(0)
// }

// console.log(arr);



// 6) Сформировать массив длиной 8, внутри массива должны быть только те числа, которые делятся нацело на 4 (обязательно использовать цикл)

// const arr = [];

// const MAX_LENGTH = 8;

// for (let i = 0; arr.length < MAX_LENGTH; i++) {
//     if (i === 0) {
//         continue;
//     }
//     if (i % 4 === 0) {
//         arr.push(i);
//     }
// }

// console.log(arr);


// 7) С помощью цикла создать массив длиной 8, где каждый элемент равен квадрату своего номера(индекса) в массиве

// const arr = [];

// const MAX_LENGTH = 8;

// for (let i = 0; i < MAX_LENGTH; i++) {
//     arr.push(Math.pow(i, 2))
// }

// console.log(arr);



// 8) Создать массив из 10 случайных чисел. Вывести количество четных чисел

// const arr = [];

// const MAX_LENGTH = 10;

// let count = 0;

// for (let i = 0; i < MAX_LENGTH; i++) {
//     arr[i] = Number((Math.random() * 100).toFixed(0));
//     if (arr[i] % 2 === 0) {
//         count++;
//     }
// }

// console.log(arr);
// console.log(count);



// 9) Создать массив из 10 чисел и вывести наибольшее число

// const arr = [2, 4, 10, 5, 1, 20, 3, 8, 2];

// let max = arr[0];

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] >= max) {
//         max = arr[i];
//     }
// }

// console.log(max);