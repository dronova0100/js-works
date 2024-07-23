// массивы - это структура
// []

//создания массива
// 1 способ
// const user = [1, 2, 3]; // литерал массива - []
// console.log(user);

// const user = [1, 2, 3]; // литерал массива - []
// console.log(typeof user); // - массивы это объект

// 2 способ
// const people = new Array(); //сделать массив с помощью консттруктора
// console.log(people);

// 3 способ
// const names = Array.of("Sam", "Alex", "Max");
// console.log(names);

// 4 способ
// const letters = Array.from("Hello");
// console.log(letters);

// const arr = [1, 2, 3];

// console.log(arr.length);
// console.log(arr[0]);

//  ссылочный тип данных

// console.log(2 === 2);

// const arr1 = [1, 2, 3];
// const arr2 = [1, 2, 3];
// const arr3 = arr1;

// console.log(arr1 === arr2);
// console.log(arr1 === arr3);

//  проверка на массив
//Array.isArray(переменная)

// const arr = ["1", 2, "hello"];
// console.log(Array.isArray(arr)); // true

// удаление/добавление
// const arr = ["1", 2, "hello"];
// arr[5] = "new element";

// delete arr[0];
// console.log(arr);

// методы

// split() - метод строки - делает из строки массив

// const str = "Lorem ipsum dolor sit amet.";
// const str2 = "javascript";

// const result = str.split(" "); // ' ' - делит на слова
// const result2 = str2.split(""); // '' - делит на элементы массива

// console.log(result);
// console.log(result2);

// мотоды массивов

// 1 - push() - добовляет в конец массива
// возвращает новую длину массива

// const arr = [2, 3, 4, 5, 6];

// const res = arr.push("test");

// console.log(arr);
// console.log(res);

// pop() - удаляет последний элемент массива
// возращает удаленый элемент

// const arr = [2, 3, 4, 5, 6];

// const res = arr.pop();

// console.log(arr);
// console.log(res);

// shift() - удаляет в начало массива
// возвращает удаленный элемент

// const arr = [2, 3, 4, 5, 6];

// const res = arr.shift();

// console.log(arr);
// console.log(res);

// unshift()  - добовляет в начало массива
// возвращает новую длину

// const arr = [2, 3, 4, 5, 6];

// const res = arr.unshift("test");

// console.log(arr);
// console.log(res);

// concat() - объединяет массивы

// const arr = [2, 3, 4, 5, 6];
// const arr1 = [2, 3, 4, 5, 6];

// const res = arr.concat("test");
// const res2 = arr.concat("test");

// console.log(arr);
// console.log(res);
// console.log(res2);

// reverse() - переворачивает
// мутирует исходный массив

// const arr = [2, 3, 4, 5, 6];

// const res = arr.reverse();

// console.log(arr);
// console.log(res);

// join() - приобразовывает элементы массива в строку
// если масив пустой то будет пустая строка
// const str2 = "javascript";

// const res = str2.split("").reverse().join("");

// const arr = [];
// const res2 = arr.join('');
// const res3 = arr.pop(''); // undefined - если массив пустой
// const res4 = arr.shift(''); // undefined - если массив пустой

// console.log(str2);
// console.log(res);
// console.log(res2);
// console.log(res3);
// console.log(res4);

// slice(start, end) - копирование массива

// const arr = [2, 3, 4, 5, 6];

// const res = arr.slice();

// console.log(arr);
// console.log(res);
// console.log(res === arr);

// indexOf(element, index) - возращает индекс первого восхождения элемента
// lastIndexOf(element, index) - возращает индекс последнего восхождения элемента
// второй аргумент (index) - начало поиска
// const arr = [2, 3, 4, 5, 6, 9];

// const index = arr.indexOf(9); //1
// const lastIndex = arr.lastIndexOf(9); //5
// const testIndex = arr.lastIndexOf(88); //-1 - элемента нет

// console.log(arr);
// console.log(index);
// console.log(lastIndex);
// console.log(testIndex);

// includes() - проверяетб содержит ли массив указаный элемент
// true/false

// const arr = [2, 3, 4, 5, 6];

// const res = arr.includes(6);

// console.log(arr);
// console.log(res);

//at(index)

// const arr = [2, 3, 4, 5, 6];

// const res = arr.at(2);
// const res2 = arr.at(-2); //-считает с конца

// console.log(arr);
// console.log(res);
// console.log(res2);

//fill(element, start, end) - заполняет значениями
// мутирует
// const arr = [2, 3, 4, 5, 6];

// const res = arr.fill(3);

// console.log(arr);
// console.log(res);

//splice(index, сколько удалить, сколько добавить)
// мутирует

// const arr = [2, 3, 4, 5, 6];

// const res = arr.splice(3, 0, 'test');

// console.log(arr);
// console.log(res);

//

// const arr = [2, 3, 4, 5, 6];

// const res = arr.splice(3, 0, 'test');

// console.log(arr);
// console.log(res);

//циклы
const arr = [2, 3, 4, 5, 6];

// const arrCopy = [];

// for (let i = 0; i < arr.length; i++) {
//   arrCopy.push(arr[i]);
// 	// arrCopy[i] = arr[i];
// }

// console.log(arrCopy);
// console.log(arrCopy === arr); // проверка на копию

// for of

// const users = ["Tom", "David", "Tom", "Maxim"];

// for (let user of users) {
//   console.log(user);
// }

// const str = 'JavaScript';

// for (let letter of str) {
// 	console.log(letter);
// }

// const user = 'JavaScript';

// for (let letter in str) {
// 	console.log(letter);
// }
