// rest, spread, деструктуризация


// ...rest - для соединения отдельных значений в массив - остаточный оператор
// rest => используется в конце

// ...spread - раздление коллекции на отдельные элементы
// spread - просто способ копирования
// может использоваться в любом месте

// const arr = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arrCopy = [...arr];

// console.log(arr === arrCopy);

// const result = arr.concat(arr2);
// const result2 = [...arr, ...arr2];
// console.log(result);
// console.log(result2);

// console.log(...arr);

// console.log(Math.max(...arr)); // разложить масисв на отдельные элементы


// const numbers = [2, 3, 4, 5, 6];
// const test = [7, 1, ...numbers, 8, 10];

// console.log(test);


// const obj = {
//     name: 'John',
//     age: 55
// }

// const objCopy = {
//     ...obj,
//     city: 'Gomel'
// };

// console.log(obj === objCopy);
// console.log(objCopy);



// ...rest

// const test = function (a, b, ...rest) {
//     console.log(a);
//     console.log(b);
//     console.log(rest);
// };

// test('Пример', 'использования', 'rest', 'оператора', 'еще один аргумент');


// const log = function (...args) {
//     console.log(args);
// };

// log(1, 2, 3, 4, 5);




// деструктуризация
// для массива => извлекаем значение и записываем в переменную
// литерал массива [] с левой стороны от =

// для объекта
// литерал объекта - {}

// особый синтаксис, который позволяет извлекать значения


// const userProfile = ['David', 'Johnson', 'david@gmail.com'];


// DRY => don't repeat yourself

// const firstName = userProfile[0];
// const lastName = userProfile[1];
// const email = userProfile[2];

// const [firstName, lastName, email = 'test@gmail.com'] = userProfile;

// const [firstName2, lastName2, email2 = 'test@gmail.com'] = ['David', 'Johnson'];

// console.log(firstName);
// console.log(lastName);
// console.log(email);


// const [userName, ...userData] = userProfile;

// console.log(userName);
// console.log(userData);


// обмен локальными переменными

// let width = 300;
// let height = 400;
// const landscape = true; // пейзаж

// console.log(`${width} x ${height}`); // 300x400

// if (landscape) {
//     // let initialWidth = width; // доп. переменная для копирования значения
//     // width = height;
//     // height = initialWidth;
//     [width, height] = [height, width];
//     console.log(`${width} x ${height}`); // 400x300
// }


// const user = {
//     name: 'John',
//     age: 30,
//     city: 'Gomel',
//     phone: '375252320327',
//     car: true,
// };

// const { name, age } = user;
// console.log(name);
// console.log(age);

// function displayUserName({ name, age }) {
//     console.log(name);
//     console.log(age);
// }

// displayUserName(user);


