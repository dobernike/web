/**
 * Добавить функциям defer
важность: 5

Добавьте всем функциям в прототип метод defer(ms), который откладывает вызов функции на ms миллисекунд.

После этого должен работать такой код:

function f() {
  alert( "привет" );
}

f.defer(1000); // выведет "привет" через 1 секунду
 */

Function.prototype.defer = function (ms) {
  setTimeout(this, ms);
}

function f() {
  console.log("привет");
}

f.defer(1000); // выведет "привет" через 1 секунду
