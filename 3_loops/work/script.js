// loop
// многократное выполнение одних и тех же действий, инструкция (кода)
// for
// while
// do ... while
// for ... in
// for ... of


// for => цикл со счетчиком
// итерация
// for (let i = 1; i <= 10; i++) {
//     // if (i === 5) {
//     //     console.log('i === 5')
//     // }
//     console.log(`Колесо сделало ${i} оборот`);
// }

// for (инициализация; условие; финальное выражения) {
//  тело цикла
// }


// break - прерывает цикл
// продолжает выполнение кода после него

// continue - прерывает текущую итерацию

// for (let i = 1; i <= 15; i++) {
//     if (i % 5 === 0) {
//         continue;
//     }
//     console.log(i);
// }

// console.log('После цикла');




// while

// let i = 0;
// const end = 5;

// while (i <= end) {
//     // тело цикла
//     console.log(i);
//     i += 1;
// }

// console.log('после цикла');



// do while
// выполнится обязательно не меньше 1 раза
// let i = 0;
// const end = 5;

// do {
//     console.log(i);
//     i += 1;
// } while (i <= end);



// -------------------------
// 1

// const dlina = +prompt('Введите сторону квадрата');

// const result = dlina * dlina;
// const result2 = dlina ** 2;

// console.log(result);
// console.log(result2);


// 2

// const num = +prompt('Введите число');

// const res = num ** 3;

// console.log(res);



// 3 Сделать цикл который выводит 'bla' 'blabla' 'blablabla' 'blablablabla'

// const str = 'bla';
// let newStr = 'bla';

// for (let i = 1; i <= 4; i++) {
//     console.log(newStr);
//     newStr += str;
// }


// 4
// const str = '#';
// let newStr = '';

// const count = +prompt('Сколько раз вывести #');

// for (let i = 1; i <= count; i++) {
//     newStr += str;
// }

// console.log(newStr);



// 5 Пользователь ввел число, а на экран вывелись все числа от введенного до 0.

// const num = +prompt('Введите число');

// if (num > 0) {
//     for (let i = num; i >= 0; i--) {
//         console.log(i);
//     }
// } else {
//     for (let i = num; i <= 0; i++) {
//         console.log(i);
//     }
// }


// 6 сделать цикл который выводит нечетные числа от 40 до 140

// const start = 40;
// const end = 140;

// for (let i = start; i <= end; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }