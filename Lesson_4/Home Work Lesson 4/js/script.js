// ---1---
// Перепишіть функцію, використовуючи '?' або '||'
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Батьки дозволили?');
//   }
// }
// checkAge(15);

// function checkAge(age) {
//   return (age > 18) ? true: confirm('Батьки дозволили?');
// }

// function checkAge(age) {
//   return (age > 18) || confirm('Батьки дозволили?');
// }

// ---2---
// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.

// function min(a, b) {
//   return (a < b) ? alert(a) : alert(b);
// }
// min(3, 5);

// ---3---
// Перепишіть з використанням стрілкових функцій
// Замініть Функціональні Вирази на стрілкові функції у коді нижче:

// function ask(question, yes, no) {
// if (confirm(question)) yes();
// else no();
// }
// ask(
// "Ви згодні?",
// function() { alert("Ви погодились."); },
// function() { alert("Ви скасували виконання."); }
// );

// let funcAsk = (question, yes, no) => confirm(question) ? yes() : no();
// funcAsk(
//   "Ви згодні?",
//   yes = () => alert("Ви погодились."),
//   no = () => alert("Ви скасували виконання.")
// )
