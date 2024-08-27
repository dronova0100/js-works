// ES-модули
// import - В, export - ИЗ
// from - путь к файлу
// as - использовать другое имя импортируемой сущности
// default - экспорт по умолчанию, имя не обязательно, при импорте можно задать любое имя, при импорте не нужны фигурные скобки
// import * as ИМЯ - импортировать всё
// реэкспорт

import {
    MY_SETTINGS,
    myVariable,
    logUserName,
    sayToUser as sayHello,
    sayToUser as sayGoodbye
} from './constants/constants.js';
// import * as constants from './constants.js'
import { logUserName as testFunc, books } from './app.js';
import sumFromFile from './utils/sum.js';

// console.log(constants.MY_SETTINGS);
// console.log(constants.myVariable);

console.log(MY_SETTINGS);
console.log(myVariable);

// constants.logUserName('John');
logUserName('John');

testFunc('david');

console.log(books);

sumFromFile(2, 4);

sayHello('Peter');
sayGoodbye('Emma');