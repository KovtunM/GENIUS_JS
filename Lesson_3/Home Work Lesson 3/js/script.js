//  -- 1 --
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.

// const fruts = [
//   { id: 0, name: 'Apple' },
//   { id: 1, name: 'Tomat' },
//   { id: 2, name: 'Cherry' },
//   { id: 3, name: 'Orange' },
// ];
// let fruts_name = fruts.map(frut => frut.name);
// console.log(fruts_name);

//  -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for.

// for (let i = 2; i <= 10; i += 2) {
//   console.log(i);
// }

//  -- 3 --
//Замініть цикл "for" на "while"
// for (let i = 0; i < 5; i++) {
//     console.lpg( `цифра ${i}!` );
//   }

// let i = 0;
// while (i < 5) {
//   console.log(`цифра ${i}!`);
//   i++;
// }

//  -- 4 --
// Напишіть цикл, який пропонує prompt ввести число більше за 100.
// Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
// Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.

// let user_input;
// do {
//   user_input = prompt('Будь ласка, введіть число більше за 100:');
// } while (
//   user_input !== null &&
//   (isNaN(user_input) || Number(user_input) <= 100)
// );

// if (user_input !== null) {
//   console.log('Ви ввели число', user_input);
// } else {
//   console.log('Ви скасували введення.');
// }

//  -- 5 --
// Вирахуйте середній вік

// const girls = [
//   { age: 23, name: "Оля" },
//   { age: 29, name: "Аня" },
//   { age: 10, name: "Юля" },
//   { age: 20, name: "Катя" },
// ];

// const girls = [
//   { age: 23, name: 'Оля' },
//   { age: 29, name: 'Аня' },
//   { age: 10, name: 'Юля' },
//   { age: 20, name: 'Катя' },
// ];

// let totalAge = 0;
// for (let girl of girls) {
//   totalAge += girl.age;
// }

// const averageAge = Math.floor(totalAge / girls.length);
// console.log('Середній вік дівчат:', averageAge);
