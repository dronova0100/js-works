// работа с числами
// Math


// String()
// toString()

// const num = 21;

// const result = num.toString();

// console.log(result);
// console.log(typeof result);



// toFixed(number) => возвращает строку
// const a = 8;
// const b = 3;

// const result = a / b;

// console.log(result.toFixed(2));
// console.log(typeof result.toFixed(2));


// console.log(+0.3.toFixed(2) === +(0.1 + 0.2).toFixed(2));

// console.log(0.1 + 0.2);




// +, Number()
// parseInt() => возвращает целое число, вернет число только если строка начинается с числа
// parseFloat() => возвращает дробное число

// let userData = prompt('Введите информацию');

// // const test1 = parseInt(userData);
// const test2 = parseFloat(userData);

// // console.log(test1);
// console.log(test2);



// isInteger() => определяет целое ли число

// const num = 5;

// console.log(Number.isInteger(num));

// Number
// String
// Boolean


// Math

// const PI = Math.PI;

// console.log(PI);


// работа с дробными числами

// const num = 3.2;
// const num2 = 3.9;
// const num3 = 3.5;

// console.log(Math.ceil(num)); // => округление в большую сторону
// console.log(Math.floor(num2)); // => округление в меньшую сторону
// console.log(Math.round(num3)); // по правилам математики

// console.log(Math.trunc(num3)); // отбрасывает дробную часть



// console.log(Math.abs(-5)); // => модуль
// console.log(Math.pow(3, 2)); // возведение в степень, степень - второе число
// console.log(Math.sqrt(36)); // квадратный корень
// console.log(Math.sign(-8)); // определяет знак числа
// console.log(Math.sign(8)); // полож число => 1, отриц число => -1
// console.log(Math.sign(0)); // 0 => 0

// console.log(Math.max(4, 9, 0, -10, 7, 2, 3, 17, 8, 7));
// console.log(Math.min(4, 9, 0, -10, 7, 2, 3, 17, 8, 7));


// Math.random() => генерирует случайное дробное число от 0 до 1, всегда меньше 1
// console.log(Math.floor(Math.random() * 10));


// min - включено
// max - исключено
// console.log(Math.floor(Math.random() * (max - min)) + min);

// min, max - включены
// console.log(Math.floor(Math.random() * (max - min + 1)) + min);



// Задачи
// ----------------------

// 1) Запросить 4 числа и вывести меньшее из них.

// const num1 = +prompt('Введите число');
// const num2 = +prompt('Введите число');
// const num3 = +prompt('Введите число');
// const num4 = +prompt('Введите число');

// console.log(Math.min(num1, num2, num3, num3));


// 2) Запросить 3 числа и вывести большее из них.

// const num1 = +prompt('Введите число');
// const num2 = +prompt('Введите число');
// const num3 = +prompt('Введите число');

// console.log(Math.max(num1, num2, num3));



// 3) Запросить у пользователя 2 числа, вывести в консоль случайное число из этого диапазона.

// const min = +prompt('Введите минимальное число');
// const max = +prompt('Введите максимальное число');

// console.log(Math.floor(Math.random() * (max - min + 1)) + min);


// 4) Запросить у пользователя число, вывести в консоль противоположное число.

// const num = +prompt('Введите число');

// console.log(num * -1);

// if (num < 0) {
//     console.log(Math.abs(num));
// } else if (num > 0) {
//     console.log(+`-${num}`)
// } else {
//     console.log(num);
// }




// 5) Запросить у пользователя число и извлечь из него корень

// const num = +prompt('Введите число');

// console.log(Math.sqrt(num));




// const randomColor = Math.floor(Math.random() * 16777216).toString(16);

// document.body.style.backgroundColor = '#' + randomColor;

// console.log('#' + randomColor);



// const password = Math.random().toString(36).slice(2, 10); // a-z 0-9

// console.log(password);



// дана строка 'javascript' => 'Javascript'

const str = 'javascript';

const newStr = str[0].toUpperCase() + str.slice(1);
const newStr2 = str.replace(str[0], str[0].toUpperCase());
let newStr3 = '';

for (let i = 0; i < str.length; i++) {
    if (i === 0) {
        newStr3 += str[i].toUpperCase();
        continue;
    }
    newStr3 += str[i];
}

console.log(newStr);
console.log(newStr2);
console.log(newStr3);