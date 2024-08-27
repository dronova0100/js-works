// "use strict";

// use strict
// строгий режим
// this => undefined



// переменные - объявление только с let, const, var

// myVariable = 'some variable';
// console.log(myVariable);


// функция - запрет на создание функции с повторяющимися именами параметров
// function duplicate(a,a) {

// }


// this => undefined в строгом режиме
// function test() {
//     console.log(this.username);
// }
// test();



// objects
// ошибка при попытке расширения
// изменения и удаления при writable: false или configurable: false
const obj = {};
Object.preventExtensions(obj);

obj.userName = 'John';

console.log(obj);


function test2() {
    'use strict';
    const obj = {};
    Object.preventExtensions(obj);
    
    obj.userName = 'John';
    
    console.log(obj);
}

test2()