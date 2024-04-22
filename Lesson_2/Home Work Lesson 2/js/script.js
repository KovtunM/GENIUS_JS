// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.

// let x = 1;
// if (x >= 0) {
//   console.log(true);
// } else if (x <= 0) {
//   console.log(false);
// }

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true

// let value = true;
// if (value == 'test') {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.

// let x = 13;

// if (x >= 10) {
//   console.log(x - 5);
// } else if (x <= 10) {
//   console.log(x + 5);
// }

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// const int = prompt('Введіть номер місяця');
// let month = 'Введіть число від 1 до 12';

// switch (int) {
//   case '1':
//     month = 'Січень';
//     break;
//   case '2':
//     month = 'Лютий';
//     break;
//   case '3':
//     month = 'Березень';
//     break;
//   case '4':
//     month = 'Квітень';
//     break;
//   case '5':
//     month = 'Травень';
//     break;
//   case '6':
//     month = 'Червень';
//     break;
//   case '7':
//     month = 'Липень';
//     break;
//   case '8':
//     month = 'Серпень';
//     break;
//   case '9':
//     month = 'Вересень';
//     break;
//   case '10':
//     month = 'Жовтень';
//     break;
//   case '11':
//     month = 'Листопад';
//     break;
//   case '12':
//     month = 'Грудень';
//     break;
// }
// console.log(month);

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

// let number = prompt('Введіть тризначне число');
// if (number >= 100 && number <= 999) {
//   let num_1 = Math.floor(number / 100);
//   let num_2 = Math.floor((number % 100) / 10);
//   let num_3 = number % 10;
//   let sum = num_1 + num_2 + num_3;
//   console.log('Сума цифр числа', number, 'дорівнює', sum);
// } else {
//   console.log('Введіть коректне тризначне число');
// }
