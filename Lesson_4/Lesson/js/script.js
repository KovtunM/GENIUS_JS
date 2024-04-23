//----------------Функції

// function showMessage(name, city) {
//   console.log('Hello my name is ' + name + ' Im from ' + city);
// }

// showMessage('Mixa', 'Lviv');
// showMessage('Liza', 'Kyiv');

// const userAge = '27 years old';

// const sayHi = function () {
//   let message = 'Hello, my name Ivan ';
//   console.log(message + userAge);
// };

// sayHi();

//--------------Повернення значення функції

// function sum(a, b) {
//   return a + b;
// }

// let result = sum(7, 8);
// console.log(result);

//-------------------------Return

// const testFunk = function (a, b) {
//   console.log('a :', a);
//   console.log('b :', b);
//   c = a + b;
//   return 100;
// };
// testFunk(5, 9);

//--------------------Порядок виконання коду

// const a = function () {
//   c();
//   console.log('function a');
//   b();
// };

// const b = function () {
//   console.log('function b');
// };

// const c = function () {
//   console.log('function c');
// };

// a();

//-------------------Аргументи і rest

// const addName = function () {
//   const arg = Array.from(arguments);
//   console.log(arguments);
//   console.log(arg);
// };

// addName(1, 3, 5);

// const addName = function (...arg) {
//   console.log(arg);
// };

// addName(1, 3, 5);
// addName(1, 3, 5, 85, 67);

//------------------------Callback(функції зворотнього виклику)

// function Ask(question, yes, no) {
//   if (confirm(question)) {
//     yes();
//   } else {
//     no();
//   }
// }

// function show_Ok() {
//   console.log('You say "OK"');
// }

// function show_No() {
//   console.log('You say "NO"');
// }
// Ask('Yes or No?', show_Ok, show_No);

//----------------------higher order functions(функції вищого порядку)

// const Hello = function (name, age) {
//   console.log(`Hello, ${name} ${age}`);
// };

// const search_Name_Age = function (callback) {
//   const name = 'Ivan';
//   const age = '27 years';
//   callback(name, age);
// };

// search_Name_Age(Hello);

//--------------------------Практика

// function check_Age(age) {
//   if (age > 18) {
//     return console.log('Hello');
//   }
//   return console.log('Good Bye');
// }

// check_Age(16);

// function show_Movie(age) {
//   if (age < 21) {
//     return console.log('Go home!');
//   }
//   return console.log('Go to movie!');
// }
// show_Movie(20);

//----------------------Стрілочні функції

// const test = arg => {
//   console.log(arg);
// };
// test('hello');

// const show_Movie = age => {
//   if (age < 21) {
//     return console.log('Go home!');
//   }
//   return console.log('Go to movie!');
// };

// show_Movie(20);

//----------------

// const a = () => {
//   console.log('a');
// };

// const b = () => {
//   console.log('b');
// };

// const c = () => {
//   console.log('c');
//   a();
//   b();
// };

// c();

//--------------------------Практика

// const addNumber = number => {
//   let summ = Number(number) + 10;
//   return console.log(summ);
// };

// const numberRef = document.querySelector("input[name='number']");

// const buttonRef = document.querySelector('button');

// buttonRef.addEventListener('click', () => addNumber(numberRef.value));
