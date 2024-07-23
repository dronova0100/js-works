// map, set

// Map

// коллекция
// [ключ, значение]
// ключ - любой

// const testMap = new Map();

// console.log(testMap)

// console.log(testMap[0])
// индексов нет, по индексу получить элемент нельзя

// set(ключ, значение) - добавить
// get(ключ) - получить => если ключа нет - undefined
// has(ключ) - проверить наличие => true/false
// values() - итератор значений
// keys() - итератор ключей
// entries() - итератор пар
// delete(ключ) - удалить
// clear() - очистить
// forEach(fn) - перебор ключений и значений

// size - узнать количество значений

// const func = () => {
//     console.log('function')
// }

// testMap.set('1', 'значение по ключу - строка 1')
// testMap.set(1, 'значение по ключу - число 1')
// testMap.set(false, 'значение по ключу - false')
// testMap.set(func, 'ключ - функция')
// testMap.set(NaN, 'ключ - NaN')
// testMap.set('()', func)

// console.log(testMap.get(func));
// console.log(testMap.get('()'));

// console.log(testMap)
// console.log(testMap.get(1))
// testMap.delete('1')
// console.log(testMap.get('1')) // undefined

// console.log(testMap.has(1)) // true
// console.log(testMap.has('1')) // false

// testMap.clear();
// console.log(testMap.size)

// testMap.forEach((value, key) => {
//     console.log(`${key} - ${value}`)
// })

// for (const [key, value] of testMap) {
//     console.log(`${key} - ${value}`)
// }

// const obj = {
//     name: 'John',
//     age: 20
// }

// const mapFromObj = new Map([...Object.entries(obj)])

// const mymap = new Map([['js', 'JavaScript'], ['py', 'Python']])

// console.log(mapFromObj.size)

// Set

// коллекция уникальных значений

// одно и то же значение нельзя добавить в коллекцию Set более 1 раза
// неиндексированная коллекция

// add(значение) - добавить
// has(значение) - проверить наличие
// clear() - очистить
// delete(значение) - удалить
// forEach(fn) - перебор

// size

// const obj = {
//     name: 'John'
// }

// const obj2 = {
//     name: 'John'
// }

// const uniqNumbers = new Set();

// uniqNumbers.add(obj)
// uniqNumbers.add(obj2)
// uniqNumbers.add(obj2)
// uniqNumbers.add(obj2)
// uniqNumbers.add(157)
// uniqNumbers.add(88)
// uniqNumbers.add(69)
// uniqNumbers.add('69')
// uniqNumbers.add(69)
// uniqNumbers.add(false)

// console.log(uniqNumbers.has(69))
// uniqNumbers.delete(69)
// // uniqNumbers.clear()
// console.log(uniqNumbers)
// console.log(uniqNumbers.size)

// uniqNumbers.forEach((value) => {
//     console.log(value);
// })

// for (const value of uniqNumbers) {
//     console.log(value)
// }

// const numbers = [1, 2, 3, 5, 6, 2, 2, 1, 6, 4]

// const uniq = [...new Set(numbers)];

// console.log(uniq);

// ----------------------- ЗАДАЧИ ------------------------

// const handleObjects = (obj, key, action) => {
//     // const objCopy = { ...obj }
//     // if (action === 'get') {
//     //     return obj[key];
//     // } else if (action === 'add') {
//     //     obj[key] = '';
//     //     return obj;
//     // } else if (action === 'delete') {
//     //     delete obj[key];
//     //     return obj;
//     // } else {
//     //     return obj;
//     // }
//     // ссылка
//     action = 'test';
//     switch (action) {
//         case 'get':
//             return obj[key];
//         case 'add':
//             obj[key] = '';
//             return obj;
//         case 'delete':
//             delete obj[key];
//             return obj;
//         default:
//             return obj;
//     }

// };

// const student = {
//     name: 'Maxim',
//     programmingLanguage: 'JavaScript',
// };

// let action = 'delete';

// const result = handleObjects(student, 'programmingLanguage', action);
// console.log('result', result);

// console.log(action);

// const coffees = ['Latte', 'Cappuccino', 'Americano'];

// let favoriteCoffeeName = prompt('Поиск кофе по названию:');
// favoriteCoffeeName = favoriteCoffeeName.trim().toLowerCase();

// const favoriteCoffeeIndex = coffees.findIndex((coffee) => {
//     return coffee.toLowerCase() === favoriteCoffeeName;
// });

// const favoriteCoffee = coffees[favoriteCoffeeIndex];

// if (favoriteCoffee) {
//     console.log(`Держите ваш любимый кофе ${favoriteCoffee}. Он ${favoriteCoffeeIndex + 1} по популярности в нашей кофейне.`);
// } else {
//     console.log(`К сожалению, такого вида кофе нет в наличии`);
// }

// const coffees = ['Latte', 'Cappuccino', 'Americano'];
// const prices = [1.5, 1, 2];

// const updatedPrice = prices.map((price) => price + 0.5); // [2, 1.5, 2.5]

// coffees.forEach((coffee, index) => {
//     console.log(`Кофе ${coffee} сейчас стоит ${updatedPrice[index]} евро`)
// })

// const clientsEstimations = [];

// function askClientToGiveEstimation() {
//     const clientEstimation = +prompt('Как вы оцениваете нашу кофейню от 1 до 10?');
//     if (clientEstimation >= 1 && clientEstimation <= 10) {
//         clientsEstimations.push(clientEstimation);
//     }
// }

// for (let i = 0; i < 5; i++) {
//     askClientToGiveEstimation();
// }

// const goodEstimations = clientsEstimations.filter((estimation) => {
//     return estimation > 5;
// })

// const notGoodEstimations = clientsEstimations.filter((estimation) => {
//     return estimation <= 5;
// })

// console.log(`Всего положительных оценок: ${goodEstimations.length}; Всего отрицательных оценок: ${notGoodEstimations.length}`);

// Создать класс Device который создает объекты с полем (булево) isSwitchedOn
// и методом switch, который переключает флаг isSwitchedOn с true на false
// и наоборот

// Создать класс Smartphone который принимает model и price и создает объект
// с этими полями. У каждого объекта должен быть метод callSmbd(string)
// который выводит в консоль сообщение "Вы звоните ${string}"
// Метод callSmbd работает только если девайс isSwitchedOn === true
// Иначе вывести сообщение "Ваше устройство выключено, вы не можете звонить"

// class Device {
//     constructor() {
//         this.isSwitchedOn = false;
//     }
//     switch() {
//         // if (this.isSwitchedOn) {
//         //     this.isSwitchedOn = false;
//         // } else {
//         //     this.isSwitchedOn = true;
//         // }
//         this.isSwitchedOn = !this.isSwitchedOn;
//     }
// }

// // const testDevice = new Device();
// // testDevice.switch();
// // testDevice.switch();
// // console.log(testDevice);

// class Smartphone extends Device {
//     constructor(model, price) {
//         super();
//         this.model = model;
//         this.price = price;
//     }
//     #battery = 100;
//     callSmbd(name) {
//         if (this.isSwitchedOn && this.#battery >= 10) {
//             this.#battery -= 40;
//             if (this.#battery <= 0) {
//                 this.isSwitchedOn = false;
//                 this.#battery = 0;
//             }
//             console.log(`Вы звоните ${name}'у`);
//         } else {
//             console.log(`Ваше устройство выключено, вы не можете звонить`);
//         }
//     }
//     charge() {
//         setTimeout(() => {
//             this.#battery = 100;
//             console.log('this from charge', this);
//         }, 1000);
//     }
// }

// const iphone = new Smartphone('Iphone 14 ProMax', 4000);

// console.log(iphone);

// iphone.callSmbd('John');

// iphone.switch();

// iphone.callSmbd('David');
// iphone.callSmbd('David');
// iphone.callSmbd('David');
// console.log(iphone);

// iphone.callSmbd('Jane');

// iphone.charge();
// console.log(iphone);
// iphone.switch();

// setTimeout(() => {
//     iphone.callSmbd('Jane');
// }, 1200);

function Device() {
  this.isSwitchedOn = false;
}

Device.prototype.switch = function () {
  this.isSwitchedOn = !this.isSwitchedOn;
};

function Smartphone(model, price) {
  Device.call(this);
  this.model = model;
  this.price = price;
}

Smartphone.prototype = Object.create(Device.prototype);
Smartphone.prototype.constructor = Smartphone;

Smartphone.prototype.callSmbd = function (who) {
  if (this.isSwitchedOn) {
    console.log(`Вы звоните ${who}'у`);
  } else {
    console.log(`Ваше устройство выключено, вы не можете звонить`);
  }
};

const xiaomi = new Smartphone("Redmi note 14", 400);

console.log(xiaomi.switch());
xiaomi.callSmbd("Andrew");

// регулярные выражения, паттерны
