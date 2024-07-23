//array

//copyWithin(target, start, end) => возвращает массив. Мутирует
//копирует

// const arr = [1, 2, 3, 4];

// const result = arr.copyWithin(2, 0);

// console.log(arr);
// console.log(result);

//every( function) => возвращает true/false
// обязательно return!
//не мутирует
// можно проверить что все элементы подходят под условие => true, если нет то false

// const arr = [1, 2, 3, 4];

// const result = arr.every((currentElement) => {
//   return currentElement > 0;
// });

// console.log(arr);
// console.log(result);

// some() => возвращает true/false
// не мутирует
// обязательно return
// позволяет узнать есть ли в массиве какой-то только один элемент который подходит под условие

// const arr = [1, 2, 3, 4];

// const result = arr.some((currentElement) => {
//   return currentElement > 0;
// });

// console.log(arr);
// console.log(result);

//find(function) => элемент
// если элемент не найден => undefined
// получаем первый найденый элемент

// const arr = ["jonh", "bob", "david", "oleg"];

// const result = arr.find((currentElement) => {
//   return currentElement === "oleg";
// });

// console.log(arr);
// console.log(result);

//findIndex(function) =>  индес первого
//если элемент не найден мы получаем -1

// const arr = ["jonh", "bob", "david", "oleg", "oleg"];

// const result = arr.findIndex((currentElement) => {
//   return currentElement === "oleg";
// });

// console.log(arr);
// console.log(result);

//sort(function) => сортирует массив
// можно без фунуции в аргументе

// const arr = ["jonh", "bob", "david", "oleg"];
// const numbers = [1, 2, 3, 5, 7, 9, 0];

// const result = arr.sort();
// numbers.sort((a, b) => {
//   return a - b;
// });

// console.log(arr);
// console.log(result);
// console.log(numbers);

//forEach(function)
// callback  - функия обратного вызова
// всегда возращает undefined
// const numbers = [2, 5, 8, 9, 0, 1];

// const result = numbers.forEach((number, index) => {
//   consol.log(`текущий элемент: ${number} под индексом ${index}`);
// });

// console.log(numbers);
// console.log(result);

// map(function) => новый []
// позволяет мутировая
// const numbers = [2, 5, 8, 10, 7];

// const result = numbers.map((number, index) => {
//   consol.log(`текущий элемент: ${number} под индексом ${index}`);
//   return number;
// });

// console.log(numbers);
// console.log(result);

//filter(function) => новый массив
//не мутирует
//фильтрует по условию

// const numbers = [1, 2, 3, 4, 9, 1, 4];

// const result = numbers.filter((number, index) => {
//   console.log(`текущий элемент: ${number} под индексом ${index}`);
//   return number > 6;
// });

// console.log(numbers);
// console.log(result);

//reduce(function, начальное значение) => результируешее значение
// не мутирует
// return!
// нервый аргумент - acc - аккумулятор(в нашем примере sum)
// const numbers = [1, 2, 3, 4, 9, 1, 4];

// const result = numbers.reduce((sum, currentElement, index, arr) => {
//   return sum + currentElement;
// }, 0);

// console.log(numbers);
// console.log(result);

//with(индекс, значение на которое надо изменить) => новый массив с измен элементом
//не мутирует

// const arr = ["JS", "HTML", "CSS", "Java"];

// arr[2] = "PHP"; один из вариантов
// const result = arr.with(2, "PHP");

// console.log(arr);
// console.log(result);

//toSorted() => новый отсортировоный массив
//не мутирует

// const arr = ["JS", "HTML", "CSS", "Java"];

// const result = arr.toSorted();

// console.log(arr);
// console.log(result);

// toReversed() => новый массив
// не мутирует
// const arr = ["JS", "HTML", "CSS", "Java"];

// const result = arr.toReversed();

// console.log(arr);
// console.log(result);

// toSpliceed() => вернем копию обработанного массива
// не мутирует

// const arr = ["JS", "HTML", "CSS", "Java"];

// const result = arr.toSpliced();

// console.log(arr);
// console.log(result);

// const names = ["Jonh", "David", "Bob", "Martin", "Tony"];

// const nameWithMr = names.map((name) => {
//   // return "Mr" + name;
//   return `Mr. ${name}`;

// });

// console.log(nameWithMr);

// Дан массив чисел arrayNumbers. Необходимо создать переменную isMoreThenHundred, которая будет true или false в зависимости от того, если в нем хотя бы одно число строго больше 100

// const arrayNumbers = [10, 15, 5, 100, 50, 101, 203, 800];
// console.log(isMoreThenHundred) // => true

// const arrayNumbers = [10, 15, 5, 100, 50, 101, 203, 800];

// const isMoreThenHundred = arrayNumbers.some((num) => {
//   return num > 100;
// });

// console.log(isMoreThenHundred); // => true

// ------------------------------------------
// Дан массив имен names. Необходимо создать переменную filteredNames и отфильтровать массив так, чтобы в нем остались только те имена, длина окторых больше либо равна 5

// const names = ['Александр', 'Ян', 'Оля ', 'Вячеслав', 'Маша', 'Анатолий'];

// console.log(filteredNames) // => ['Александр','Вячеслав', 'Анатолий']

// const names = ["Александр", "Ян", "Оля ", "Вячеслав", "Маша", "Анатолий"];

// const filteredNames = names.filter((name) => {
//   return name.length >= 5;
// });

// console.log(filteredNames); // => ['Александр','Вячеслав', 'Анатолий']

// ------------------------------------------
// Дан массив с названиями методов массивов. Необходимо вывести в консоль сообщения "Метод ИМЯ_МЕТОДА" для каждого метода массива.
// const methods = [
//   "push()",
//   "pop()",
//   "shift()",
//   "unshift()",
//   "slice()",
//   "splice()",
//   "foreach()",
//   "map()",
//   "find()",
//   "findIndex()",
// ];

// methods.forEach((method) => {
//   consol.log(`Метод ${method}`);
// });

for (let i = 1; i <= 9; i++) {
  console.log(i);
  for (let j = 1; j <= 9; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
  console.log("/n");
}
