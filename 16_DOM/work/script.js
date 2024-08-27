// BOM
// API
// DOM

// BOM - Browser Object Model
// объектная модель браузера

// API - application programming interface
// набор правил с помощью которых одна программа общается с другой
// одна программа использует функции, которые предоставлены во вне другой программой


// DOM - Document Object Model
// объектная модель документа
// стандартизирован


// ---------------
// BOM
// нет единого стандарта
// взаимодействие с браузером


// window
// navigator
// history
// location
// screen
// document



// window
// самый главный объект в браузере
// корневой объект
// console.log(window);
// если открыть несколько вкладок, то будет создано соотв. кол-во объектов window




// navigator
// информационный объект
// инф. о бразуере, о языке, версии, местоположении и т.д.


// console.log(navigator);
// console.log(window.navigator);


// geolocation
// опред. местоположение

// const geo = navigator.geolocation;

// console.log(geo)

// function success(position) {
//     console.log(position)
//     const lat = position.coords.latitude;
//     const long = position.coords.longitude;
//     console.log(`Широта: ${lat}`)
//     console.log(`Долгота: ${long}`)
// }

// geo.getCurrentPosition(success)




// history
// объект отв. за историю переходов

// console.log(history)

// имитация кнопок:
// back - назад
// forward - вперед





// location
// адресная строка

// console.log(location);



// screen
// информация об экране пользователя

// console.log(screen);





// document

// console.log(document)

// document.title = 'My title from JS';

// const title = document.title;

// // console.log(document.readyState);

// console.log(document.body)


// write - вывод строки в документ
// document.write('test text');



// родитель - может быть только 1, у узла может не быть родителя
// дети, дочерние узлы - те элементы, кот. расположены в родителе
// сиблинги, соседи - имеют такого же родителя


// поиск элементов
// document.
// querySelector() - получить элемент на странице по селектору
// const header = document.querySelector('.main_header');

// console.log(header);


// querySelectorAll() - получить все элементы на странице по селектору
// const listItems = document.querySelectorAll('#list li');

// console.log(listItems);



// getElementById - поиск элемента по ID
// const elem = document.getElementById('list');
// console.log(elem);

// getElementsByClassName - поиск элемента по имени класса
// const elem = document.getElementsByClassName('main_header');
// console.log(elem);



// getElementsByTagName - поиск элемента по тегу
// const elem = document.getElementsByTagName('li');
// console.log(elem);


// getElementsByName
// const elem = document.getElementsByName('test');
// console.log(elem);


// const oddLis = document.querySelectorAll(`li:nth-child(2n + 1)`);

// console.log(oddLis);


// const divWithButtons = document.getElementById('buttons_block');
// const buttons = divWithButtons.querySelectorAll('.btn');

// console.log(buttons);

// console.log(buttons.length);

// console.log(buttons[0]);

// buttons[0].style.backgroundColor = 'green'
// buttons[0].style.marginBottom = '20px';



// function test() {
//     console.log('works');
// }

// buttons.forEach((button) => {
//     console.log(button);
//     button.addEventListener('click', test)
// });


// const input = document.querySelector('[type="submit"]')

// console.log(input);


// matches
// closest
// contains


// matches - проверяет соотв. ли элемент указанному селектору
// true/false

// const elem = document.getElementById('main');

// console.log(elem.matches('p.paragraph'));

// console.log(elem.matches('h1.paragraph'));



// closest - поиск ближайшего предка по селектору

// const elem = document.querySelector('.third');

// const closestFirst = elem.closest('.first');

// console.log(closestFirst);



// contains - проверяет содержит ли данный узел другой узел в качестве потомка
// true/false

// const elem1 = document.querySelector('.first');
// const elem3 = document.querySelector('.third');
// const out = document.querySelector('.out');

// console.log(elem1.contains(elem3));
// console.log(elem1.contains(out));



// const elem = document.querySelector('.first');

// id, style, className

// console.log(elem.id)
// console.log(elem.style)
// console.log(elem.className)



// DOM
// children - список дочерних узлов
// parentElement - родительский элемент
// previousElementSibling, nextElementSibling - получить предыдущий/следующий узел сосед

// console.log(elem.children);

// console.log(elem.parentElement);

// console.log(elem.previousElementSibling);
// console.log(elem.nextElementSibling);


// const btn = document.querySelector('.button');

// контент

// textContent - возвращает текст всех вложенных узлов без HTML
// innerHTML - возвращает HTML всего что вложено в элемент
// outerHTML - возвращает HTML текущего элемента и всего, что вложено

// console.log(btn.textContent);
// console.log(btn.innerHTML);
// console.log(btn.outerHTML);

// btn.textContent = 'новый текст из JS'

// btn.innerHTML = `
// <div id="buttons_block" style="border: 1px solid orange;">
//     <h2>Block with buttons</h2>
//     <button class="btn">Button 1</button>
//     <button class="btn">Button 2</button>
// </div>
// `

// btn.outerHTML = `
// <div id="buttons_block" style="border: 1px solid orange;">
//     <h2>Block with buttons</h2>
//     <button class="btn">Button 1</button>
//     <button class="btn">Button 2</button>
// </div>
// `



// Модификация DOM

// создать элемент
// createElement(tag)

// const link = document.createElement('a');
// link.textContent = 'new page';
// link.href = '#';
// link.id = 'myLink';
// link.className = 'link';

// console.log(link);

// const img = document.createElement('img');
// img.src = '';
// img.alt = '';

// const myDiv = document.querySelector('.test');

// append() - добавляет узлы в конец ноды
// prepend() - добавляет узлы в начало ноды
// before() - добавляет узлы ДО ноды
// after() - добавляет узлы ПОСЛЕ ноды
// replaceWith() - заменяет ноду другим элементом


// myDiv.append(link);

// myDiv.prepend(link);

// myDiv.before(link);

// myDiv.after(link);

// myDiv.replaceWith(link);


// insertAdjacentHTML/Text/Element
// insertAdjacentHTML(where, what)
// insertAdjacentText(where, what)
// insertAdjacentElement(where, what)

// where
// 'afterbegin' - сразу после открывающего тега
// 'afterend' - сразу после закрывающего тега
// 'beforebegin' - до открывающего тега
// 'beforeend' - до закрывающего тега

// myDiv.insertAdjacentHTML('afterbegin', '<span>CONTENT</span>');
// myDiv.insertAdjacentText('afterend', '<span>CONTENT</span>');
// myDiv.insertAdjacentElement('beforeend', link);



// удалить элемент
// remove()

// myDiv.remove();



// клонировать узел
// cloneNode(true/false)
// true - глубокая копия - вместе с дочерними элементами
// const clone = myDiv.cloneNode(true);
// const clone2 = myDiv.cloneNode(false);

// console.log(clone);
// console.log(clone2);



// appendChild()
// insertBefore()
// removeChild()
// replaceChild()



// Атрибуты

// hasAttribute() - проверить наличие => true/false
// getAttribute() - получить значение => значение
// setAttribute() - установить атрибут со значением
// removeAttribute() - удалить

// console.log(myDiv.hasAttribute('some'));
// console.log(myDiv.hasAttribute('test'));

// const value = myDiv.getAttribute('some');
// console.log(value);

// myDiv.setAttribute('newAttr', 'newValue');

// myDiv.removeAttribute('some');



// стили

// const userFontSize = parseInt(prompt('Введите размер шрифта'));
// const userFontSize = prompt('Введите размер шрифта');

// const pattern = /[a-z]/gi;

// const newString = userFontSize.replace(pattern, '');
// console.log(newString);

const div = document.querySelector('.test');

// div.style.color = 'red';

// div.style.fontSize = `${newString}px`; 


// const currentClass = div.className;
// div.className = `${currentClass} class_from_js`;
// console.log(currentClass);


// classList
// add() - добавляет класс
// remove() - удалить класс
// contains() - проверить наличие => true/false
// toggle() - переключатель классов. Если класс есть - удалит, если класса нет - добавит


// div.classList.add('active');

// div.classList.remove('test');

// const isClassExists = div.classList.contains('active');
// const isClassExists2 = div.classList.contains('test');

// console.log(isClassExists);
// console.log(isClassExists2);

// div.classList.toggle('test');
// div.classList.toggle('test');




// События

// onclick 
// 'click'

// console.log(div)


const input = document.querySelector('.inp');

// input.onclick = function() {
//     console.log('input click');
// }

// input.onclick = function() {
//     console.log('one more click');
// }


// input.oninput = function() {
//     console.log('ввод текста');
// }

// input.onchange = function() {
//     console.log('change');
// }

// input.onfocus = function() {
//     console.log('focus');
// }

// input.onblur = function() {
//     console.log('blur');
// }

// input.onmousemove = function() {
//     console.log('move');
// }

// input.onmouseenter = function() {
//     console.log('enter');
// }

// input.onmouseleave = function() {
//     console.log('leave');
// }

// function keyDownHandler() {
//     console.log('key pressed');
// }

// input.onkeydown = keyDownHandler;




// addEventListener(event, handler)
// removeEventListener(event, handler)

// function clickHandler() {
//     console.log('click');
// }

// input.addEventListener('click', clickHandler)

// input.addEventListener('click', () => {
//     console.log('another click handler');
// })

// input.removeEventListener('click', clickHandler)



// event - объект события

// function clickHandler(event) {
//     console.log(event.data);
// }

// input.addEventListener('input', clickHandler)

// document.oncontextmenu = function() {
//     return false;
// }

// document.onselectstart = function() {
//     return false;
// }

// document.onkeydown = function(e) {
//     if (e.key === 'F12') {
//         return false
//     }
// }



// function Student(name, age) {
//     this.name = name;
//     this.age = age;
//     this.technologies = [];
//     this.status = 'Junior';
//     this.setTechnologies = function (technologies) {
//         this.technologies = [
//             ...this.technologies,
//             ...technologies,
//         ];
//     };
//     this.setNewStatus = function (newStatus) {
//         this.status = newStatus;
//     };

// }

// class Student {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//         this.technologies = [];
//         this.status = 'Junior';
//     }
//     setTechnologies (technologies) {
//         this.technologies = [
//             ...this.technologies,
//             ...technologies,
//         ];
//     };
//     setNewStatus (newStatus) {
//         this.status = newStatus;
//     };
// }

// const student = new Student('Maxim', 20);
// student.setTechnologies(['HTML', 'CSS', 'JavaScript']);
// student.setNewStatus('Middle');
// console.log(student);


// document.body.innerHTML = `
// <form class="create-user-form">
//         <label>
//             Имя
//             <input type="text" name="userName" placeholder="Введите ваше имя">
//         </label>
//         <label>
//             Пароль
//             <input type="password" name="password" placeholder="Придумайте Пароль">
//         </label>
//         <button type="submit">
//             Подтвердить
//         </button>
// </form>
// `
// label1.append(input)
// label2.append(input)
// form.append(label1, label2, button)
// document.body.append(form)

// const form = document.createElement('form');
// form.className = "create-user-form";

// function createLabelWithInput(text, type, name, placeholder) {
//     const label = document.createElement('label');
//     label.textContent = text;

//     const input = document.createElement('input');
//     input.type = type;
//     input.placeholder = placeholder;
//     input.name = name;

//     label.append(input);
//     return label;
// }

// const userName = createLabelWithInput('Имя', 'text', 'userName', 'Введите ваше имя');
// const userPassword = createLabelWithInput('Пароль', 'password', 'password', 'Придумайте Пароль');

// const confirmButton = document.createElement('button');
// confirmButton.type = 'submit';
// confirmButton.textContent = 'Подтвердить';

// form.append(userName, userPassword, confirmButton);

// document.body.append(form);




// делегирование
// всплытие, погружение
// target, currentTarget
// data-* attr
// stopPropagation()
// preventDefault()


// живые(динамические) и неживые(статические)
// const liveLis = document.getElementsByClassName('item');
// const deadLis = document.querySelectorAll('.item');

// const list = document.querySelector('.spisok');
// const liveLis2 = list.children;

// liveLis[0].remove();
// liveLis[0].remove();
// liveLis[0].remove();

// const deadLi2 = document.querySelectorAll('.item');
// console.log(liveLis);
// console.log(deadLis);
// console.log(deadLis[0].textContent);
// console.log(liveLis2);
// console.log(deadLi2);



// preventDefault() - отменить действие по умолчанию

// const myLink = document.querySelector('.link');

// myLink.addEventListener('click', (event) => {
//     event.preventDefault();
//     console.log(event);
// })


// stopPropagation() - отменить всплытие события
// stopImmediatePropagation() - то же самое что и stopPropagation и + отменяет вызов др. обработчиков событий на этом элементе
// const testDiv = document.querySelector('.third');

// testDiv.addEventListener('click', (event) => {
//     event.stopImmediatePropagation();
//     alert('third');
// })

// testDiv.addEventListener('click', (event) => {
//     event.stopImmediatePropagation();
//     alert('one third');
// })



// target, currentTarget

// объект события
// bubbles - является ли событие всплывающим
// defaultPrevented - отменено ли поведение события по умолчанию
// currentTarget - указывает на элемент на котором установлен обработчик
// target - указывает на элемент, который инициировал событие

// const myButton = document.querySelector('.btn');

// myButton.addEventListener('click', (event) => {
//     console.log(event.target.textContent);
//     console.log(event.currentTarget);
//     console.log(event.target.tagName);
// })


// делегирование событий

// const list = document.querySelector('.spisok');

// list.addEventListener('click', (event) => {
//     if (event.target.textContent === 'Two' && event.target.tagName === 'LI') {
//         event.target.style.color = 'orange';
//     }
//     if (event.target.textContent === 'Two' && event.target.tagName === 'DIV') {
//         event.target.style.color = 'green';
//     }
// })




// const goods = [
//     {
//         title: 'TV',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quia, delectus ullam quasi dolorem exercitationem cum',
//         price: 20
//     },
//     {
//         title: 'Mouse',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quia',
//         price: 6
//     },
//     {
//         title: 'Book',
//         description: 'delectus ullam quasi dolorem exercitationem cum',
//         price: 4
//     },
//     {
//         title: 'Phone',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quia, delectus ullam quasi',
//         price: 11
//     }
// ]

// data-attr
// this
// add to cart
// localStorage

// goods.forEach(({title, description, price}) => {
//     const cardsWrapper = document.createElement('div');
//     const card = document.createElement('div');

//     const cardTitle = document.createElement('h2');
//     cardTitle.textContent = title;

//     const cardDescription = document.createElement('p');
//     cardDescription.textContent = description;

//     const cardAction = document.createElement('button');
//     cardAction.textContent = 'Купить';

//     const cardPrice = document.createElement('span');
//     cardPrice.textContent = price;
//     card.append(cardTitle, cardDescription, cardAction, cardPrice)
//     cardsWrapper.append(card);
//     document.body.append(cardsWrapper);
// })

// function test2() {
//     console.log('test2');
// }

// function test(cb) {
//     cb()
// }

// test(test2)





// data-attr

// data-*

const button = document.querySelector('.mybtn');

console.log(button.hasAttribute('data-price'));
console.log(button.getAttribute('data-price'));

button.setAttribute('data-type', 'actionButton');
console.log(button.hasAttribute('data-type'));

// dataset - {}

console.log(button.dataset.price)
console.log(button.dataset.type)

button.dataset.testId = 'test';


// button.dataset.testId = undefined;

// удалить data-* атрибут -> оператор delete
// delete button.dataset.testId;


// dataset защищен от записи
// button.dataset = 'test';
// button.dataset = {};

// console.log(button.dataset);


// const myPets = document.querySelector('.pets');

// myPets.addEventListener('click', (e) => {
//     console.log(e.target.dataset.klichka)
// })

