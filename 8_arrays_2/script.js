// array


// copyWithin(target, start, end) => возвращает массив
// копирует
// мутирует

// const arr = [1, 2, 3, 4];

// const result = arr.copyWithin(2, 0);

// console.log(arr);
// console.log(result);



// every(function) => true/false
// обязательно return
// не мутирует
// проверяет все элементы на условие
// const arr = [1, 2, 3, 4];

// const result = arr.every((currentElement) => {
//     return currentElement > 0;
// });

// console.log(arr);
// console.log(result);



// some(function) => true/false
// не мутирует
// обязательно return
// проверяет все элементы на условие
// вернет true если подходит хотя бы 1 элемент

// const arr = [1, 2, 3, 4];

// const result = arr.some((currentElement) => {
//     return currentElement > 0;
// });

// console.log(arr);
// console.log(result);




// find(function) => элемент
// Если элемент не найден => undefined
// получаем первый найденный элемент
// const arr = ['John', 'Bob', 'David', 'Oleg'];

// const result = arr.find((currentElement) => {
//     return currentElement === 'Oleg';
// });

// console.log(arr);
// console.log(result);


// indexOf, lastIndexOf
// includes

// findIndex(function) => индекс
// индекс первого вхождения
// если элемент не найден => -1
// const arr = ['John', 'Bob', 'David', 'Oleg', 'Oleg'];

// const result = arr.findIndex((currentElement) => {
//     return currentElement === 'Petr';
// });

// console.log(arr);
// console.log(result);




// sort(function) => сортирует массив
// мутирует
// можно без функции в аргументе
// const arr = ['John', 'Bob', 'David', 'Oleg'];
// const numbers = [2, 5, 8, 10, 1, 7];

// const result = arr.sort();
// numbers.sort((a, b) => {
//     return a - b; // в порядке возрастания
//     return b - a; // в порядке убывания
// });

// console.log(arr);
// console.log(result);
// console.log(numbers);



// forEach(function) => undefined
// callback - функция обратного вызова
// const numbers = [2, 5, 8, 10, 1, 7];

// const result = numbers.forEach((number, index) => {
//     console.log(`Текущий элемент: ${number} под индексом ${index}`);
// });

// console.log(numbers);
// console.log(result);




// map(function) => новый [] 
// не мутирует
// трансформировать
// новый массив имеет такую же длину, как у исходного
// const numbers = [2, 5, 8, 10, 1, 7];

// const result = numbers.map((item, index) => {
//     console.log(`Текущий элемент: ${number} под индексом ${index}`);
//     return number ** 2;
// });

// console.log(numbers);
// console.log(result);
// console.log(result === numbers); // false




// filter(function) => новый массив
// не мутирует
// фильтрует по условию

// const numbers = [2, 5, 8, 10, 1, 7];

// const result = numbers.filter((number, index) => {
//     console.log(`Текущий элемент: ${number} под индексом ${index}`);
//     return number > 6;
// });

// console.log(numbers);
// console.log(result);





// reduce(function, начальное_значение) => результирующее значение
// не мутирует
// return
// первый аргумент - acc - аккумулятор
// const numbers = [2, 5, 8, 10, 1, 7];

// const result = numbers.reduce((sum, currentElem, index, arr) => {
//     return sum + currentElem;
// }, 0);

// console.log(numbers);
// console.log(result);



// with(индекс, значение) => новый массив с измененным элементом
// не мутирует
// const arr = ['JS', 'HTML', 'CSS', 'Java'];

// // arr[2] = 'PHP';

// const result = arr.with(2, 'PHP');

// console.log(arr);
// console.log(result);



// toSorted() => новый отсортированный массив
// не мутирует
// const arr = ['JS', 'HTML', 'CSS', 'Java'];

// const result = arr.toSorted();

// console.log(arr);
// console.log(result);



// toReversed() => новый массив
// не мутирует
// const arr = ['JS', 'HTML', 'CSS', 'Java'];

// const result = arr.toReversed();

// console.log(arr);
// console.log(result);




// toSpliced() => вернет копию обработанонго массива
// не мутирует
// const arr = ['JS', 'HTML', 'CSS', 'Java'];

// const result = arr.toSpliced(2, 1, 'PHP');
// // const result2 = arr.splice(2, 0, 'PHP');

// console.log(arr);
// console.log(result);
// console.log(result2);




// const names = ['John', 'David', 'Bob', 'Martin', 'Tony'];

// // новый массив [Mr. John, Mr. David, Mr. Bob, Mr. Martin, Mr. Tony]
// // map

// const namesWithMr = names.map((name) => {
//     // return 'Mr. ' + name;
//     return `Mr. ${name}`;
// });

// console.log(namesWithMr);








// const arrayNumbers = [10, 15, 5, 100, 50, 101, 203, 800];

// const isMoreThenHundred = arrayNumbers.some((num) => {
//     return num > 100;
// });

// console.log(isMoreThenHundred) // => true



// const names = ['Александр', 'Ян', 'Оля ', 'Вячеслав', 'Маша', 'Анатолий'];

// const filteredNames = names.filter((name) => {
//     return name.length >= 5;
// });

// console.log(filteredNames) // => ['Александр','Вячеслав', 'Анатолий']


// const methods = [
//     'push()',
//     'pop()',
//     'shift()',
//     'unshift()',
//     'slice()',
//     'splice()',
//     'foreach()',
//     'map()',
//     'find()',
//     'findIndex()',
// ];

// methods.forEach((method) => {
//     console.log(`Метод ${method}`);
// });



// Вывести таблицу умножения
// 1 * 1 = 1
// 1 * 2 = 2
// 1 * 3 = 3
// ...
// 9 * 9 = 81


// for (let i = 1; i <= 9; i++) {
//     for (let j = 1; j <= 9; j++) {
//         console.log(`${i} * ${j} = ${i * j}`);
//     }
//     console.log('\n');
// }



// function createTable() {
//     const num = +prompt('Введите число');

//     for (let i = 1; i <= 9; i++) {
//         console.log(`${num} * ${i} = ${num * i}`);
//     }
// }

// createTable();