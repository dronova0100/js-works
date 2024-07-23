// rest, spread , деструктуризация

// ...rest - соед отдельн знач в массив
// ...spread - разделения коллекций на отдел элем

// const arr = [1, 2, 3];
// const arr2 = [4,5,6];
// const arrCopy = [../arr];
// console.log(...arr);
// consolel.log = arr.concat(arr2
// )
// consolel.log(result);
// console.log(Math.max(...arr)); // разложили на элем

// const numbers = [1,2,3,45,5,6;];
// const  test - [3,5...numbers,7];

// const log(test);

// const obj = {
// 	mane: John;\
// 	age 25:
// }

// const obfCity = {

// }

// const objCopy = onbeforeinput
// console,log[obj === obj. cpoe{
// 	...obg = obj;

// }

// const test = function(a,b ...rest) {
// console.log(arguments);
// console.log(b);
// console.log(test);
// }

// test('Привет',''использованной 'rest', 'оператр' );

// const log = function(...ardg) {
// 	console.log(args);
// }

// log (1,2,3,4,5);

// деструктуризация
// для массива
// для объекта
// литерал массива с левой стороны от =

// особый синтукис, кот позвол извлекать значения

// const userProfol = ['Дэвид'Johnson, yekaterina.fronova@mail.ru];

// const  [firsztName, lastName,  email] = userProfol;
// const  [firsztName2, lastName2,  email2] = ['Дэвид'Johnson, yekaterina.fronova@mail.ru];

const user = {
  name: "John",
  age: 10,
  city: "Gomel",
  phone: 4563487239,
  car: true,
};

function displayUserName({ name }) {
  console.log(name);
}

displayUserName(user);
