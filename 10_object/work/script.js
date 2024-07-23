// объект
// object
// {}
// ключ:значение,
// литерал объекта - {}
// функция в объекте называется метод
// получить значение => через . или ['ключ']
// const car = {
//     year: 1990,
//     model: 'lada',
//     owner: 'dyadya misha',
//     color: 'malinovyi',
//     bibip: function () {
//         console.log('bibip');
//     },
//     run() {
//         console.log('lada can run');
//     },
//     dtp: true,
//     sizes: ['Valerik', 'Dimon'],
//     engine: {
//         power: 80,
//         swap: false
//     }
// };
// const car5 = {
//     year: 1990,
//     model: 'lada',
//     owner: 'dyadya misha',
//     color: 'malinovyi',
//     bibip: function () {
//         console.log('bibip');
//     },
//     run() {
//         console.log('lada can run');
//     },
//     dtp: true,
//     sizes: ['Valerik', 'Dimon'],
//     engine: {
//         power: 80,
//         swap: false
//     }
// };
// const car4 = {
//     year: 1990,
//     model: 'lada',
//     owner: 'dyadya misha',
//     color: 'malinovyi',
//     bibip: function () {
//         console.log('bibip');
//     },
//     run() {
//         console.log('lada can run');
//     },
//     dtp: true,
//     sizes: ['Valerik', 'Dimon'],
//     engine: {
//         power: 80,
//         swap: false
//     }
// };
// const car3 = {
//     year: 1990,
//     model: 'lada',
//     owner: 'dyadya misha',
//     color: 'malinovyi',
//     bibip: function () {
//         console.log('bibip');
//     },
//     run() {
//         console.log('lada can run');
//     },
//     dtp: true,
//     sizes: ['Valerik', 'Dimon'],
//     engine: {
//         power: 80,
//         swap: false
//     }
// };
// const car2 = {
//     year: 1990,
//     model: 'lada',
//     owner: 'dyadya misha',
//     color: 'malinovyi',
//     bibip: function () {
//         console.log('bibip');
//     },
//     run() {
//         console.log('lada can run');
//     },
//     dtp: true,
//     sizes: ['Valerik', 'Dimon'],
//     engine: {
//         power: 80,
//         swap: false
//     }
// };

// console.log(car.model);
// console.log(typeof car);

// car.bibip();
// car.run();

// console.log(car['engine']);


// car.perekup = true;

// console.log(car);


// const cars = [car, car2, car4, car5];







// 2) const arr = [
//     { a: 2, b: 1 },
//     { a: 5, b: 12 },
//     { a: 95, b: 7 }
// ];

// Используя МЕТОДЫ массивов

// 2.1. вывести в консоль 'its valid' если во всех объектах поле a > b, иначе вывести 'its invalid'

// const arr = [
//     { a: 2, b: 1 },
//     { a: 5, b: 12 },
//     { a: 95, b: 7 }
// ];

// const result = arr.every((currentElement) => {
//     return currentElement.a > currentElement.b
// });

// console.log(result);

// if (result) {
//     console.log('its valid')
// } else {
//     console.log('its invalid')
// }

// result ? console.log('its valid') : console.log('its invalid');



// Создать объект dog
// имя, возраст, порода, окрас(цвет)
// метод makeSound() => "Гав, гав!"
// Вывести в консоль имя и породу
// Вывести в консоль звук


// const dog = {
//     name: 'Rex',
//     age: 4,
//     poroda: 'Ovcharka',
//     color: 'black',
//     makeSound() {
//         console.log("Гав, гав!");
//     }
// };

// console.log(dog.name);
// console.log(dog.poroda);
// dog.makeSound();



// function sayHello() {
//     console.log(name);
//     console.log(age);
//     var name = 'John';
//     let age = 30;
// }
// // hoisting
// sayHello();
// // undefined Ошибка
// // John 30
// // 


// true/false => числу
// true => 1
// false => 0
// false, 0, undefined, null, NaN, ''
// console.log(+true);
// console.log(!'John');

// false


// let c = { greeting: 'Hey' };

// let d;

// d = c;

// c.greeting = 'Hello';

// console.log(d.greeting);



// function sum(a, b) {
//     console.log(a + b);
// }

// sum(1, `2`);

// NaN
// ошибка
// 3
// '12'



// let number = 0;
// console.log(number++);
// console.log(++number);
// console.log(number);

// x x 2
// 1 1 2
// 0 1 2
// 0 2 2 x1
// 1 2 2 x2



// const users = [
//     { name: 'Vasya', isOnline: true },
//     { name: 'Olya', isOnline: true },
//     { name: 'Kolya', isOnline: false },
//     { name: 'Petya', isOnline: false },
//     { name: 'Anya', isOnline: true },
//     { name: 'Sasha', isOnline: false },
//     { name: 'Denis', isOnline: true },
//     { name: 'Oleg', isOnline: false },
// ];

// const filteredUsers = users.filter((user) => {
//     return user.isOnline === true;
// });

// const names = filteredUsers.map((user) => {
//     return user.name;
// });

// console.log(names);

// // Сейчас онлайн: ...

// console.log(`Сейчас онлайн: ${names.join(', ')}`);



// var num = 8;
// var num = 10;

// console.log(num);

// // 10 x2
// // 8
// // Ошибка


// const arr = [1, 2, 3];

// console.log(typeof arr);

// // object


// const obj = {
//     a: 'one',
//     b: 'two',
//     a: 'three'
// }

// console.log(obj);

// {b: two, a: three}
// ошибка
// {b: two, a: one}



// function sayHello() {
//     return (() => 0)(); // IIFE
// }

// console.log(typeof sayHello());

// number
// object
// boolean


// console.log(typeof typeof 1);

// ошибка
// number
// string


// const numbers = [1, 2, 3];

// numbers[10] = 11;

// console.log(numbers);

// [1,2,3, undefind, ..., 11]
// [1,2,3, empty..., 11]


// !!value === Boolean(value)
// console.log(!!null);
// console.log(!!'');
// console.log(!!1);

// false false true


// console.log(3 + 4 + '5');

// '75'
// 345
// 12

// const num = parseInt('7-2*6');

// console.log(num);

// 42
// '42'
// NaN
// 7
// const arr = [1, 2, 3]

// console.log(Array.isArray(arr));



// const person = {
//     name: 'John',
//     age: 20,
//     address: {
//         country: 'Belarus',
//         city: 'Gomel',
//         phoneNumber: '375292320327'
//     },
//     stack: ['html', 'css', 'js', 'react'],
//     walk() {
//         setTimeout(() => {
//             console.log('Person can walk');
//         }, 1000);
//     },
// };

// person.walk();
// delete person.age;
// console.log(person.age);

// person.age = 111;

// console.log(person);

// console.log(person.address['country']);
// console.log(person.address.country);

// person.stack.forEach((elem) => {
//     console.log(elem);
// });


// Object.keys(object) => массив ключей объекта
// Object.values(object) => массив значений объекта

// includes

// console.log(Object.keys(person));
// console.log(Object.values(person));



// Object.entries(object) => массив с массивами пар
// console.log(Object.entries(person));


// for of => массивов, строк, коллекций


// for in => объекты


// for (const key in person) {
//     console.log(key);
//     // console.log(person[key]);
// }


// функции конструктора
// const person2 = new Object();
// person2.name = 'David';
// person2.age = 222;
// person2.address = {};
// person2.address.country = 'Moldova';
// person2.address.city = 'Kish';
// person2.address.phoneNumber = '+4412345678';
// person2.stack = ['java', 'docker', 'php'];
// person2.walk = function () {
//     setTimeout(() => {
//         console.log('Person can walk');
//     }, 1000);
// };


// console.log(person2);

// const person3 = {
//     name: 'Oleg',
//     age: 18,
//     address: {
//         country: 'Belarus',
//         city: 'Minsk',
//         phoneNumber: '375292320327'
//     },
//     stack: ['html', 'css', 'js', 'react'],
//     walk() {
//         setTimeout(() => {
//             console.log('Person can walk');
//         }, 1000);
//     },
// };

// const persons = [person, person2, person3];

// console.log(persons);

// const filteredMoldovane = persons.filter((person) => {
//     return person.address.country === 'Moldova'
// })

// console.log(filteredMoldovane[0]);

// const moldovanin = persons.find((person) => {
//     return person.address.country === 'Moldova'
// })

// console.log(moldovanin);



// ...
// деструктуризация массива
// деструктуризация объекта










// объекты ч2

// { ключ: значение}

const student1 = {
    name: 'John',
    age: 22,
};

const student2 = student1;

const student3 = {
    name: 'John',
    city: 'Gomel'
};

// console.log(student1 === student2); // true
// console.log(student1 === student3); // false


const objCopy = {
    ...student1
};

const ojCopy2 = {

};

for (const key in student1) {
    ojCopy2[key] = student1[key];
}

// console.log(ojCopy2 === student1); // false



// Object.assign(target, source1, ..., sourceN) => скопировать свойства из множества объйктов

const student4 = Object.assign({}, student1, student3);

// console.log(student4 === student1); // false
// console.log(student4);



// проверить наличие ключа

// console.log(student1.city); // undefined


// prop in object
// оператор in - проверяет наличие ключа в объекте или цепочке прототипов

// console.log('city' in student1); // false
// console.log('name' in student1); // true


// hasOwnProperty('prop') => true/false
// наличие собственного свойства (не в прототипе)
// не проверяет цепочку прототипов

// console.log(student1.hasOwnProperty('city')); // false
// console.log(student1.hasOwnProperty('name')); // true




// ? - опциональная цепочка
// безопасный способ доступа к свойствам
// останавливает вычисление и возвращает undefined если значение перед ?. => undefined или null

// const person = {
//     name: 'John',
//     age: 20,
//     address: {
//         country: 'Belarus',
//         city: 'Gomel',
//         phoneNumber: '375292320327',
//         // getInfo() {
//         //     console.log('get info');
//         // }
//     },
//     stack: ['html', 'css', 'js', 'react'],
//     walk() {
//         console.log('Person can walk');
//     },
// };

// console.log(person.address.city);
// console.log(person?.address?.street);
// console.log(person.address.country);



// Object.keys(объект) => [ключ, ключ, ..., ключN] клюей
// Object.values(объект) => [значение, значение, ..., значениеN] значений
// Object.entries(объект) => [[ключ, значение],[ключ, значение]] => [ключ, значение]


// console.log(Object.keys(student1)); 
// console.log(Object.values(student1));
// console.log(Object.entries(student1));


// DRY => don't repeat yourself


// this - контекст вызова (текущий констекст выполнения кода)
// методу в объекте нужен доступ к информации внутри объекта
// чаще всего this = {}
// this => объект перед точкой
// у () => {} нет своего this, берет из внешней функции
// к () => {} нельзя привязать контекст
// в глобальном контексте указывает на window

// const person = {
//     firstName: 'David',
//     lastName: 'Travolta',
//     age: 40,
//     getFullName() {
//         console.log(`Hello ${this.firstName} ${this.lastName}`);
//     }
// };



// const person2 = {
//     firstName: 'John',
//     lastName: 'Travolta',
//     age: 40,
// };

// const person3 = {
//     firstName: 'Peter',
//     lastName: 'Travolta',
//     age: 40,
// };


// person.getFullName();

// console.log(this); // window

// потеря контекста

// setTimeout(person.getFullName, 1000);

// this устанавливается во время вызова

// const test = person.getFullName;

// test();


// привязка контекста
// методы функций
// call(), apply(), bind() => явно указать this
// call(), apply() - привязывают контекст и вызывают функцию
// call() => аргументы передаются через запятую
// apply() => аргументы передаются массивом

// bind() => привязывает контекст и возвращает новую функция, с привязанным контекстом, изменить уже привязанный контекст нельзя
// function getFullName(a, b) {
//     console.log(`Hello ${this.firstName} ${this.lastName}`);
//     console.log(a + b);
// }

// getFullName.apply(person, [2, 4]); // a => array
// getFullName.call(person, 10, 20); // c => comma

// const bindResult = getFullName.bind(person3, 15, 35);
// // getFullName.bind(person3, 15, 35)();

// bindResult.apply(person2, [1,1]);




// const square = {
//     side: 5,
//     area() {
//         return this.side * this.side;
//     },
//     perimeter: () => 4 * this.side
// };

// console.log(square.area());
// console.log(square.perimeter());

// 25
// NaN




// let foo = {
//     baz: function () {
//         console.log(this);
//     }
// };

// foo.baz();
// let bar = foo.baz;

// bar();

// foo {}
// window


// дед
// 


// function check(str) {
//     if (str === str.split('').reverse().join('')) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }

// check('дед');
// check('дедуля');



// const arr = [
//     { a: 2, b: 1 },
//     { a: 5, b: 12 },
//     { a: 95, b: 7 }
// ];

// const result = arr.map((obj) => {
//     return {
//         ...obj,
//         // a: obj.a
//         b: obj.b ** 2
//     }
// })

// console.log(result);





// const person1 = {
//     name: 'John',
//     age: 23,
//     isProgrammer: true,
//     tech: ['HTML', 'CSS', 'JS']
// };

// const person2 = {
//     name: 'David',
//     age: 34,
//     isProgrammer: false,
//     tech: ['DIG', 'BUILD', 'RUN']
// };

// const person3 = {
//     name: 'Peter',
//     age: 41,
//     isProgrammer: false,
//     tech: ['JUMP', 'SPEAK', 'READ']
// };

// const person4 = {
//     name: 'Gregory',
//     age: 54,
//     isProgrammer: true,
//     tech: ['JAVA', 'NGINX', 'PYTHON']
// };

// const persons = [person1, person2, person3, person4];

// const getCounter = () => {
//     let time = 0;
//     return () => {
//         time += 1000;
//         return time;
//     };
// };

// const nextTime = getCounter();

// persons.forEach(({ tech, name }) => {
//     tech.forEach((tech) => {
//         setTimeout(() => {
//             console.log(`${name} can ${tech}`);
//         }, nextTime());
//     });
// })



// объекты продолжение ч.3


// const user = {
//     userName: 'vasya',
//     age: 71
// };

// 3 свойства конфигурации (флаги, дескрипторы)
// значения дескрипторов => true/false

// writable - доступно ли свойство для записи, если true - можно менять
// enumerable - видимо ли свойство в for in, Object.keys()
// configurable - переконфигурация, нельзя использовать delete для удаления, и др.

// при создании объекта "простым способом const obj = {}" то все дескрипторы будут со значением true


// для изменения: Object.defineProperty(), Object.defineProperties()
// для чтения: Object.getOwnPropertyDescriptor(),Object.getOwnPropertyDescriptors()


// writable: true


// const laptop = {
//     screen: '18inch'
// };


// Object.defineProperty(obj, key, settings)
// Object.defineProperty(объект, имя свойства, объект с дескрипторами)
// Object.defineProperty(laptop, 'os', {
//     value: 'Windows', // значение свойства
//     writable: false,
//     enumerable: true,
//     configurable: true
// });

// если не указать десрипторы в defineProperty - они будут false

// getOwnPropertyDescriptors(объект)
// getOwnPropertyDescriptor(объект, ключ)

// const descriptorsLaptop = Object.getOwnPropertyDescriptors(laptop);
// const descriptorUser = Object.getOwnPropertyDescriptor(user, 'userName');

// console.log(descriptorsLaptop);
// console.log(descriptorUser);

// laptop.os = 'MacOS';

// console.log(laptop);




// defineProperties(объект, объект с ключами и дескрипторами)

// const flower = {
//     name: 'rose',
//     color: 'red'
// };


// Object.defineProperties(flower, {
//     name: { writable: false, configurable: false },
//     color: { enumerable: false }
// }
// );


// // нельзя изменить
// Object.defineProperty(flower, 'name', {
//     configurable: true,
// })

// for (const key in flower) {
//     console.log(key);
// }

// console.log(Object.keys(flower));
// console.log(Object.values(flower));
// console.log(Object.entries(flower));

// console.log(flower.color);




// геттер, сеттер
// дескрипторы доступа
// определить работу свойства с помощь функций для чтения и записи свойства

// геттер - чтение get
// сеттер - запись set

// геттер - для получения значения свойства
// метод будет вызываться при получении значения

// сеттер - для установки значения свойства
// принимает аргумент - новое значение



// const cat = {
//     _hiddenName: 'Кот',
//     _hiddenAge: 22,
//     get name() {
//         return this._hiddenName;
//     },
//     set name(value) {
//         this._hiddenName = value;
//     },
//     get age() {
//         return this._hiddenAge;
//     },
//     set age(value) {
//         const today = new Date();
//         const dob = today - value;
//         this._hiddenAge = dob;
//     }
// };

// Object.defineProperty(cat, 'name', {
//     get: function () {
//         return this._hiddenName;
//     },
//     set: function(value) {
//         this._hiddenName = value
//     }
// });

// cat.name = 22.02.1988;

// console.log(cat.name);
// console.log(cat);

// const user2 = {
//     name: 'John',
//     age: 20,
//     bio: {
//         dnk: '+'
//     }
// };

// защитить объект от вмешательства извне
// не влияют на вложенный объект
// Object.seal(obj) - запечатать, нельзя удалить и добавить, можно только менять
// Object.freeze(obj) - нельзя ничего
// Object.preventExtensions(obj) - запрещает расширение, т.е. нельзя добавлять новые поля


// true/false
// Object.isSealed(obj) - запечатан ли объект
// Object.isFrozen(obj) - заморожен ли
// Object.isExtensible(obj) - проверяет на расширение

// Все 3 запрещают добавлять


// Object.freeze(user2);

// user2.city = 'Gomel';
// delete user2.age;
// user2.name = 'David'

// console.log(Object.isFrozen(user2));
// console.log(Object.isFrozen(user));
// console.log(user2);



// Object.preventExtensions(user2);

// user2.city = 'Gomel'; // нельзя
// delete user2.age; // можно
// user2.name = 'David' // можно

// console.log(Object.isExtensible(user2)); // false - не расширяемый, т.е. нельзя добавить

// console.log(Object.isExtensible(user));
// console.log(user2);


// нельзя изменить прототип
// Object.seal(user2);

// user2.city = 'Gomel'; // нельзя
// delete user2.age; // нельзя
// user2.name = 'David' // можно

// console.log(Object.isSealed(user2));
// console.log(Object.isSealed(user));
// console.log(user2);

