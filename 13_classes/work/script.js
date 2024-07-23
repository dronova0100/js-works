// функции-конструкторы
// new
// классы


// {}

// функции-конструкторы

// Имя функции-конструктора начинается с большой буквы
// функция-конструктор выполняется только с помощью оператора new

// когда вызываем new User() 
// Создается пустой объект и он присваивается в this
// Выполняется тело функции. Добавляются свойства
// Возвращается значение this

// function User(userName, age) {
//     // this = {} неявно
//     this.userName = userName;
//     this.age = age;
//     this.isAdmin = false;
//     this.sayHi = function () {
//         console.log(`Hi, my name is ${this.userName}`);
//     };
//     this.showAge = function () {
//         console.log(`Мне ${this.age} лет`);
//     };
//     // return this неявно
// }

// const vasya = new User('Vasya', 20);
// const vasya2 = new User('Petya', 20);
// const vasya3 = new User('Oleg', 20);
// const vasya4 = new User('Olga', 20);
// const vasya5 = new User('Danila', 20);

// vasya2.sayHi();
// vasya.showAge();


// ООП
// классы
// this
// class

// class Animal {
//     constructor() {
//         this.type = 'bird'
//     }
// }

// class User {
//     // методы класса
//     constructor(userName) {
//         this.userName = userName;
//         this.isAdmin = false;
//     }
//     sayHello() {
//         console.log(`Hello, my name is ${this.userName}`);
//     };
//     showAdmin() {
//         console.log(`Я админ? - ${this.isAdmin}`)
//     }
//     // ...
// }

// // инстанс, экземпляр
// // аргументы при вызове будут в конструкторе
// // конструктор => инициализирует поля
// const user1 = new User('John');
// user1.sayHello();
// user1.showAdmin();

// console.log(user1);

// // instanceof => проверка, является ли объект экземпляром класса
// console.log(user1 instanceof User);
// console.log(user1 instanceof Animal);


// поля
// 2 группы
// 1) поля экземпляра класса

// 2) поля самого класса (статические) - static перед именем
// принадлежат классу, исп. для создания констант
// хранят инфу для класса
// определяют логику класса, а не экземпляра
// статический метод имеет доступ к статическим полям
// статический метод не имеет доступ к полям экземпляра (не использует this)


// уровни доступа
// публичные - доступны внутри класса и в экземпляре
// приватные (частное) - доступные только внутри класса - #
// private, public, protected, readonly - модификаторы доступа TypeScript

// поля могут быть одновременно статическими и приватными

// class User {
//     name;
//     static TYPE_ADMIN = 'admin';
//     static TYPE_REGULAR = 'regular';
//     static #MAX_INSTANCES = 2;
//     static #instances = 0;

//     constructor(name, type) {
//         User.#instances++;
//         if (User.#instances > User.#MAX_INSTANCES) {
//             console.log('Нельзя создать экземпляр класса');
//         }
//         this.name = name;
//         this.type = type;
//     }
//     getUserName() {
//         console.log(`Имя - ${this.name}`);
//     }
//     static isUserInstance(obj) {
//         console.log(obj instanceof User);
//     }
// }

// const user = new User('John', 'admin');

// console.log(user);

// const test = {
//     name: 'test',
//     type: 'test',
//     getUserName() {
//         console.log(`Имя - ${this.name}`);
//     }
// }

// console.log(test);

// user.#name; => ошибка доступа
// user.getUserName();

// const user2 = new User('David', User.TYPE_ADMIN);

// console.log(user2);

// User.isUserInstance(user2);


// new User('Peter', User.TYPE_ADMIN);
// new User('Bob', User.TYPE_ADMIN);
// new User('Hanna', User.TYPE_REGULAR);



// extends 
// class Child extends Parent {}

// class Animal {
//     constructor(type) {
//         this.type = type;
//     }
//     getAnimalType() {
//         console.log(`Я - ${this.type}`);
//     }
// }

// class Dog extends Animal {
//     constructor(type, klichka, color) {
//         super(type); // инициализация родительского конструктора
//         // super - первый, а затем все поля дочернего класса
//         this.klichka = klichka;
//         this.color = color;
//     }
//     // getAnimalType() {
//     //     console.log(`Я - ${this.klichka}`);
//     // }
// }

// const bobik = new Dog('dog','bobik', 'gray');

// console.log(bobik);
// bobik.getAnimalType();



// oop
// прототипы 
// __proto__
// [[Prototype]]
// prototype



// создать функцию конструктор Book()
// создать 6 книг с помощью функции конструктора, поместить их в массив
// Книга должна содержать три поля:
// author
// bookName
// pageAmount

// создать функцию getBiggerBook()
// функция принимает массив книг
// возвращает одну книгу с наибольшим количеством страниц

// const booksTest = []

// function Book(author, bookName, pageAmount) {
//     this.author = author;
//     this.bookName = bookName;
//     this.pageAmount = pageAmount;
//     booksTest.push(this);
// }

// const b1 = new Book('Кто-то', 'Книга', 200);
// const b2 = new Book('Кто-то 2', 'Книга 2', 400);
// const b3 = new Book('Кто-то 3', 'Книга 3', 222);
// const b4 = new Book('Кто-то 4', 'Книга 4', 444);
// const b5 = new Book('Кто-то 5', 'Книга 5', 777);
// const b6 = new Book('Кто-то 6', 'Книга 6', 111);

// const books = [b1, b2, b3, b4, b5, b6];

// console.log(booksTest);

// const maxBook = booksTest.sort((a,b) => {
//     return a.pageAmount - b.pageAmount;
// });

// console.log(maxBook[maxBook.length - 1]);

// const maxObj = books.reduce((acc, currentBook) => {
//     return acc.pageAmount > currentBook.pageAmount ? acc : currentBook
// })

// console.log(maxObj);



// прототипы => {} => ссылка на объект, который используется для наследования
// прототипное наследование
// [[Prototype]] => указывает на прототип
// prototype
// __proto__
// конец цепочки => null

// const str = '2'; // new Number(...)
// const num = 2; // new String(...)
// const bool = false; // new Boolean(...)
// const obj = {a: 2}; // new Object(...)
// const arr = [1,2,3] // new Array(...)

// function Box(width, height) { // new Function(...)
//     this.width = width;
//     this.height = height;
// }

// const box1 = new Box(200,200);

// console.log(box1);
// console.log(box1.__proto__);
// console.log(Box.prototype);


// function Auto(brand, color, gas) {
//     this.brand = brand;
//     this.color = color;
//     this.gas = gas;
//     this.drive = function () {
//         if (this.gas > 0) {
//             this.gas = this.gas - 10;
//             console.log(`Бензин у ${this.brand} - ${this.gas}`);
//             return this.gas;
//         } else {
//             console.log(`Бензин закончился :(`);
//         }
//     };
// }

// Array.prototype.mymethod = function () {
//     console.log('test');
// };

// String.prototype.mystringmethod = function () {
//     console.log('my string method');
// };

// const arr = [12, 3];
// const str = 'test';

// arr.mymethod();
// str.mystringmethod();

// Auto.prototype.drive = function () {
//     if (this.gas > 0) {
//         this.gas = this.gas - 10;
//         console.log(`Бензин у ${this.brand} - ${this.gas}`);
//         return this.gas;
//     } else {
//         console.log(`Бензин закончился :(`);
//     }
// };

// const opel = new Auto('opel', 'blue', 60);
// const lada = new Auto('lada', 'red', 50);

// opel.drive();
// opel.drive();
// opel.drive();
// lada.drive();
// opel.drive();
// lada.drive();
// // lada.test(); // ошибка
// console.log(opel.drive === lada.drive);

// console.log(opel);


// class Car {
//     constructor(brand, color, gas) {
//         this.brand = brand;
//         this.color = color;
//         this.gas = gas;
//     }
//     drive() {
//         if (this.gas > 0) {
//             this.gas = this.gas - 10;
//             console.log(`Бензин у ${this.brand} - ${this.gas}`);
//             return this.gas;
//         } else {
//             console.log(`Бензин закончился :(`);
//         }
//     };
// }

// const tesla = new Car('tesla', 'white', 100);
// const bmw = new Car('bmw', 'black', 20);

// console.log(bmw);

// bmw.drive();
// tesla.drive();

// console.log(bmw.drive === tesla.drive);


// __proto__ 
// getPrototypeOf = {drive: f() {}}
// setPrototypeOf

// console.log(tesla.__proto__ === Car.prototype);

// объект без прототипа




// const obj = {
//     number: 20
// };

// const another_obj = {
//     age: obj
// };

// const one_more_obj = obj;

// console.log(obj === another_obj.age);
// console.log(obj === one_more_obj);

// another_obj.age.number = 44;

// console.log(obj.number === 44);
// console.log(one_more_obj.number === 44);


// X.__proto__
// Y.prototype

//каике-то __proto__ объектов Х равны каким-то prototype объектов Y

// X.__proto__ === Y.prototype

// const user = {}; // user.__proto__ 
// const numbers = []; // numbers.__proto__
// const age = 18; // age.__proto__ new Number(...)
// const number = 22 // new Number(...)

// console.log(age__proto__ === number__proto__)

// const userName = 'John'; // userName.__proto__
// const isLoading = false; // isLoading.__proto__
// function doSmth() { }; // doSmth.__proto__
// const getData = function () { }; // getData.__proto__
// const arrowFunc = () => { }; // arrowFunc.__proto__
// class Person { }; // Person.__proto__

// __proto__ - есть у любого объекта
// __proto__ - почти всегда объект
// __proto__ у одинаковых по "типу" объектов - равны, т.е. это один и тот же объект
// __proto__ у разных по 'типу' объектов - разные объекты


// const user2 = {}; // user.__proto__ new Object(..)
// const user3 = {}; // user.__proto__ new Object(..)
// const numbers2 = []; // numbers.__proto__ new Array(..)

// console.log(user2.__proto__ === numbers2.__proto__); // false
// console.log(user2.__proto__ === user3.__proto__); // true


// __proto__ указывает на объект функции-конструктора (Класса) с помощью которой был создан объект => Y.prototype

// const level = 5; // new Number()
// console.log(level.__proto__ === Number.prototype)

// console.log(level.__proto__)
// console.log(level.prototype)

// class MyClass { // new Function(...)

// }

// const test = new MyClass()

// function Animal() {

// }

// function animal() {

// }

// console.log(MyClass.__proto__ === Function.prototype)
// console.log(MyClass.prototype)

// console.log(Animal.__proto__ === Function.prototype);
// console.log(Animal.prototype);

// const myClassObj = new MyClass();

// console.log(myClassObj.__proto__ === MyClass.prototype);
// console.log(MyClass.__proto__ === Function.prototype);


// __proto__ - у любого объекта
// prototype - у class или function
// __proto__ - ссылается на prototype класса или функции-конструктора с помощью кот. был создан


// const user = { userName: 'John' }
// user.toString();

// console.log(user.__proto__ === Object.prototype)

// user.__proto__ => Object.prototype => toString()


// class MyClass {
//     constructor(userName) {
//         this.userName = userName;
//     }
//     hello() {
//         console.log(`hello ${this.userName}`);
//     }
// }

// MyClass.prototype.hello = function () {
//     console.log(`hello ${this.userName}`);
// }

// function MyClassFunc(userName) {
//     this.userName = userName;
// }

// MyClassFunc.prototype.hello = function() {
//     console.log(`hello ${this.userName}`);
// }

// const myClass = new MyClass('john');
// myClass.hello();
// const myClassFunc = new MyClassFunc('david');
// myClassFunc.hello();

// console.log(myClass);
// console.log(myClassFunc);



// class Animal {
//     constructor(type) {
//         this.type = type;
//     }
//     canJump() {
//         console.log('I can jump!');
//     }
// }

// class Dog extends Animal {
//     constructor(type, name) {
//         super(type);
//         this.name = name;
//     }
//     canWoof() {
//         console.log('I can woof!');
//     }
// }

// const chappi = new Dog('собака', 'бобик');
// console.log(chappi);
// chappi.canJump();
// chappi.canWoof();


// до ES6
// конструктор родительского класса
// function Animal(type, sound) {
//     this.type = type;
//     this.sound = sound;
// }

// Animal.prototype.makeSound = function () {
//     console.log(this.sound);
// };

// // конструктор дочернего класса
// function Dog(breed, ...rest) {
//     // вызов конуструктора родительского класса
//     Animal.apply(this, rest);
//     this.breed = breed;
// }


// // Object.create() => создать объект с прототипом
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

// Dog.prototype.hello = function () {
//     console.log('Hello');
// };

// const labrador = new Dog('labrador', 'dog', 'gav-gav');

// console.log(labrador.constructor);
// console.log(labrador);

// labrador.makeSound();
// labrador.hello();



// const obj = {
//     a: 22
// };


// const test = Object.create(obj, {
//     info: {
//         value: function () {
//             console.log('Info from test obj');
//         }
//     }
// });

// // Object.getPrototypeOf() => узнать прототип

// console.log(Object.getPrototypeOf(test));
// console.log(test.a);

// test.info();

// console.log(obj.toString())


// создать объект kurochka у кот. есть поле цвет
// у корчки должно быть поле isOtbivnaya: false
// после isOtbivnaya должно быть доступно для записи
// но если его поменять на true, то курочку "воскресить" нельзя
// то поле isOtbivnaya должно быть доступно только для чтения
// после того как курочка стала отбивной запретить объекту расширяться
// запретить добавлять новые поля



// const kurochka = {
//     color: 'ryaba',
//     _isOtbivnaya: false
// };

// Object.defineProperty(kurochka, 'isOtbivnaya', {
//     get() {
//         return this._isOtbivnaya;
//     },
//     set(newValue) {
//         if (newValue) {
//             this._isOtbivnaya = newValue;
//             Object.preventExtensions(this);
//         }
//     }

// });

// kurochka.canFly = false;

// kurochka.isOtbivnaya = true;

// kurochka.isOtbivnaya = false;

// kurochka.isAlive = false;

// console.log(kurochka);



// ООП
// smartphone
// map, set



// ООП - {}

// Наследование
// Инкапсуляция
// Абстракция
// Полиморфизм


// Наследование

// class Animal {
//     constructor(type) {
//         this.type = type;
//     }
//     canJump() {
//         console.log('I can jump!');
//     }
// }

// class Dog extends Animal {
//     constructor(type, name) {
//         super(type);
//         this.name = name;
//     }
//     canWoof() {
//         console.log('I can woof!');
//     }
//     canJump() {
//         console.log('I can\'t jump!');
//     }
// }

// класс может наследоваться только от 1 родителя
// можно безгранично увеличивать цепочку наследования
// если класс наследует свойства/методы, то в первую очередь нужно присвоить свойства/методы родителя через super()
// при наследовании дочернемим классом наследуются все свойства/методы, т.е. нельзя ограничить или запретить
// дочерний класс может переопределять свойства/методы





// Инкапсуляция

// возможность решить, какую информацию скрыть от внешнего мира, а какую предоставить
// достигается с помощью приватных/публичных полей

// private/public, #, _

// полезно в случаях:
// ничто и никто не повлиял из вне
// свойства/методы нужны для внутренних процессов
// не хотим раскрывать детали


// class User {
//     name;
//     static TYPE_ADMIN = 'admin';
//     static TYPE_REGULAR = 'regular';
//     static #MAX_INSTANCES = 2;
//     static #instances = 0;

//     constructor(name, type) {
//         User.#instances++;
//         if (User.#instances > User.#MAX_INSTANCES) {
//             console.log('Нельзя создать экземпляр класса');
//         }
//         this.name = name;
//         this.type = type;
//     }
//     private getUserName() {
//         console.log(`Имя - ${this.name}`);
//     }
//     static isUserInstance(obj) {
//         console.log(obj instanceof User);
//     }
// }



// Полиморфизм => множество форм

// одно действие - несколько реализаций

// class Animal {
//     constructor(type) {
//         this.type = type;
//     }
//     makeSound() {

//     }
// }

// class Dog extends Animal {
//     constructor(type, name) {
//         super(type);
//         this.name = name;
//     }
//     makeSound() {
//         console.log('Я делаю гав-гав');
//     }
// }

// class Horse extends Animal {
//     constructor(type, name) {
//         super(type);
//         this.name = name;
//     }
//     makeSound() {
//         console.log('Я делаю иго-го');
//     }
// }

// const dog1 = new Dog('dog', 'bobik');
// const horse1 = new Horse('horse', 'rocket');
// dog1.makeSound();
// horse1.makeSound();




// Абстракция

// описывает обобщенные параметры которые присущи футболисту
// class Footballer {
//     constructor(name, club) {
//         this.name = name
//         this.club = club
//     }
//     shoot() {

//     }
//     pass() {

//     }
//     celebrateGoal() {

//     }
// }

// class Forward extends Footballer {
//     constructor(name, club) {
//         super(name, club);
//     }
//     shoot() {
//         console.log('Очень сильный удар!');
//     }
//     pass() {
//         console.log('Средненький пасс!');
//     }
//     celebrateGoal() {
//         console.log('Ураа! Я забил гол!');
//     }
// }

// модель содержит только важные свойства с точки зрения приложения



