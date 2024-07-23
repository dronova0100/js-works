// регулярные выражения
// regular expressions

// шаблон

// new RegExp() - конструктор
// // - литерал

// new RegExp(шаблон, флаг)
// /шаблон/флаг

// /hello/

// ^ - начало строки
// $ - конец строки
// \ - экранирование, указать что какой-то символ является частью строки
// . - один любой символ

// \w - соотвествие буквам, цифам, символам подчеркивания
// \W - наоборот от \w
// \d - соответствие 0-9 
// \D - соотв. всему, но не 0-9
// \s - пробел
// \S - соотв. не символам пробелы

// + - повторение символа от 1 раза
// | - ИЛИ (29|33|44|25)
// {n} - n вхождений символа
// {n, m} - от n до m раз

// g - поиск всех совпадений
// i - регистронезависимый поиск


// test()
// exec()
// match()
// replace()
// search()
// split()




// test(строка для проверки) => true/false
// содержит ли строка шаблон
// const str = 'hello world ! javascritp';
// // const pattern = /^hello|byu/i;
// const pattern = /\!/i;

// console.log(pattern.test(str));



// exec() - поиск совпадений
// возвращает массив с первым совпадением и доп. информацией
// если совпадений нет => null
// const str = 'world';
// const pattern = /hello/i;

// console.log(pattern.exec(str));



// match(pattern) - метод строки
// поиск всех совпадений
// возвращает массив всех совпадений

// const str = 'The quick brown fox jumps over the lazy dog';

// const pattern = new RegExp('the', 'gi');

// const res = str.match(pattern);

// console.log(res);



// replace()
// заменяет совпадение в строке
// возвращает новую строку
// const str = 'The quick brown fox jumps over the lazy dog';

// const pattern = new RegExp('fox', 'i');

// const result = str.replace('pattern', 'cat');

// console.log(result);



// search() - метод строки
// ищет совпадение и возвращает индекс первого символа
// если совпадений нет => -1
// const str = 'The quick brown fox jumps over the lazy dog';

// const pattern = /jumps/;

// const res = str.search(pattern);

// console.log(res);



// split() - метод строки
// возвращает массив
// const str = 'The quick brown fox jumps over the lazy dog';

// const pattern = /\s/;

// const res = str.split(pattern);

// console.log(res);

// const str = 'LOrem ipsum dolor wellok sit amet consectetur adipisicing';

// const p1 = /\w+l{2}\w+/;

// console.log(p1.exec(str));


// const letters = ['a', 'e', 'i', 'o', 'u', 'y'];
// let newStr = '';

// for (let i = 0; i < str.length; i++) {
//     if (!letters.includes(str[i].toLowerCase())) {
//         newStr += str[i]
//     }
// }

// console.log(newStr);

// const pattern = /[aeiouy]/gi;

// const newString = str.replace(pattern, '');
// console.log(newString)





// -------------------
// 1) Дан массив [1,1,1,4,4,5,1,6,6,74,74,74,3]. Написать функцию, которая вернет массив только уникальных значений
// const arr1 = [1]
// const numbers = [[1], [1], [1], [4], [4], [5], [1], [6], [6], [74], [74], [74], [3]];
// const collection = new Set(numbers.flat());

// const uniqNumbers = [...new Set(numbers)];
// const uniqArray = Array.from(collection);

// console.log(uniqNumbers);
// console.log(uniqArray);


// 2) Timer

// class Timer {
//     constructor(counter = 0) {
//         this.counter = counter;
//         this.id = null;
//     }
//     start() {
//         const intervalId = setInterval(() => {
//             this.counter += 1;
//             console.log(this.counter);
//         }, 1000)
//         this.id = intervalId;
//     }
//     stop() {
//         clearInterval(this.id);
//     }
//     reset() {
//         this.counter = 0;
//     }
// }

// const timer1 = new Timer();
// const timer2 = new Timer(10);
// console.log(timer1);

// timer1.start();
// timer2.start()

// setTimeout(() => {
//     timer1.stop();
// }, 5000);

// setTimeout(() => {
//     timer1.start();
// }, 7000);

// setTimeout(() => {
//     timer1.reset()
// }, 10000);

// setTimeout(() => {
//     timer1.stop();
//     timer1.reset();
//     console.log(timer1);
// }, 12000);



// 3) Person

// class Person {
//     constructor(firstName, lastName, age, gender) {
//         this.firstName = firstName || 'Джон';
//         this.lastName = lastName || 'Доу';
//         this.age = age || 0;
//         this.gender = gender || 'Мужской';
//     }
//     sayFullName() {
//             console.log(`${this.firstName} ${this.lastName}`);
//     }
//     static greetExtraTerrestrials(raceName) {
//         console.log(`Добро пожаловать на планету Земля, ${raceName}`);
//     }
// }

// const chuvak = new Person('David', 'Duhovniy', 60, 'male');
// const chuvak2 = new Person();

// chuvak.sayFullName();
// // chuvak.greetExtraTerrestrials();
// Person.greetExtraTerrestrials('нептунец');

// console.log(chuvak2);


// console.log(+'Infinity'); // Infinity
// console.log(typeof +'Infinity'); // number

// console.log('1'[1]); // undefined
// console.log('1' + [1,2]); // '11,2'



// паттерны проектирования

// шаблон

// 3 группы
// Порождающие, структурные и поведенческие


// Singleton
// гарантирует что у класса есть 1 инстанс

// class Sun {
//     static #instance = null

//     constructor() {

//     }

//     get sunInstance() {
//         if (Sun.#instance) {
//             return Sun.#instance;
//         } else {
//             Sun.#instance = new Sun();
//             return Sun.#instance;
//         }
//     }
// }


// const sun1 = Sun.instance;
// const sun2 = Sun.instance;

// console.log(sun1)
// console.log(sun2)

// console.log(sun1 === sun2);




// Фабрика

// class Transport {
//     constructor(type, width, height) {
//         this.type = type
//         this.width = width
//         this.height = height
//     }
//     transport(to) {
//         console.log(`Доставка груза в ${to} по ${this.type}`)
//     }
// }

// class Logictic {
//     constuctTransport(type) {
//         if (type === 'ground') {
//             return new Transport(type, 300, 200)
//         } else if (type === 'sea') {
//             return new Transport(type, 100, 50)
//         }
//     }
// }

// const logisticFabric = new Logictic();

// const fura = logisticFabric.constuctTransport('ground');

// fura.transport('Dobrush');

// const korablik = logisticFabric.constuctTransport('sea');

// korablik.transport('Mogilev');



// class BMW {
//     constructor(model, speed, color) {
//         this.model = model
//         this.speed = speed
//         this.color = color
//     }
// }

// class BMWFactory {
//     create(type) {
//         switch (type) {
//             case 'X3':
//                 return new BMW(type, 150, 'red')
//             case 'X5':
//                 return new BMW(type, 200, 'black')
//             case 'X6':
//                 return new BMW(type, 250, 'white')
//         }
//     }
// }

// const factory = new BMWFactory();

// const x6 = factory.create('X6');

// const x6Models = [];

// for (let i = 1; i <= 100; i++) {
//     x6Models.push(factory.create('X6'));
// }

// console.log(x6Models);


// абстрактная фабрика
// прокси





// абстрактная фабрика Abstract Factory
// фабрика фабрик

// группировка связанных или похожих объектов

// class BMW_1_Series {

// }

// class BMW_M_Series {

// }

// function familyFactory() {
//     return new BMW_1_Series();
// }

// function sportFactory() {
//     return new BMW_M_Series();
// }

// function bmwProducer(type) {
//     switch (type) {
//         case 'family': return familyFactory;
//         case 'sport': return sportFactory;
//         default: return null;
//     }
// }

// const createFamily = bmwProducer('family');
// const familyCar = createFamily();

// const createSport = bmwProducer('sport');
// const sportCar = createFamily();





// proxy
// Заместитель
// промежуточный модуль


class Person {
    constructor(name) {
        this.name = name;
    }
    walk(to) {
        console.log(`${this.name} walks to ${to}`);
    }
    sleep(hours) {
        console.log(`${rhis.name} sleeps ${hours} hours`);
    }
}

const p1 = new Person('John');

p1.walk('bar');
p1.walk('home');


class PersonProxy {
    constructor(person) {
        this.person = person;
    }
    walk(to) {
        if (to === 'bar') {
            console.log(`${this.person.name}'у нельзя идти в бар!`);
        } else {
            this.person.walk(to);
        }
    }
    sleep(hours) {
        console.log(`${rhis.name} sleeps ${hours} hours`);
    }
}


const hp1 = new PersonProxy(new Person('David'));

hp1.walk('bar');
hp1.walk('home');