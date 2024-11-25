"use strict";

//task 1
function sum1() {
  var result = (0.1 + 0.2).toFixed(1);
  return document.getElementById('result1').innerText = "".concat(result);
} //task 2


function sum2() {
  var num1 = '1';
  var num2 = 2;
  var result_2 = parseInt(num1) + num2;
  return document.getElementById('result2').innerText = "".concat(result_2);
}

function task3() {
  var size = document.getElementById('memory').valueAsNumber;

  if (isNaN(size)) {
    return alert('Not a number value');
  }

  var result_3 = Math.floor(size * 1024 / 820);
  return document.getElementById('result3').innerText = "".concat(result_3);
}

function task4() {
  var price = document.getElementById('price').valueAsNumber;
  var pricechoco = document.getElementById('pricechoco').valueAsNumber;
  var count = 0;

  if (isNaN(price) || isNaN(pricechoco)) {
    return alert('Not a number value');
  }

  var surrender = price % pricechoco;
  count = Math.floor(price / pricechoco);
  return document.getElementById('result4').innerText = "\u0417\u0434\u0430\u0447\u0430: ".concat(surrender, " \u0433\u0440\u0438\u0432\u0435\u043D\u044C, \n    \u043A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0448\u043E\u043A\u043E\u043B\u0430\u0434\u043E\u043A ").concat(count, " ");
}

function task5() {
  var number = document.getElementById('number').valueAsNumber;
  if (isNaN(number)) return alert('Not a number value');

  if (number >= 100 && number <= 999) {
    // Отримуємо цифри числа
    var hundreds = Math.floor(number / 100); // Сотні

    var tens = Math.floor(number % 100 / 10); // Десятки

    var units = number % 10; // Одиниці
    // Збираємо число задом наперед

    var reversedNumber = units * 100 + tens * 10 + hundreds; // Виводимо результат

    document.getElementById('result5').innerText = "\u0427\u0438\u0441\u043B\u043E \u0437\u0430\u0434\u043E\u043C \u043D\u0430\u043F\u0435\u0440\u0435\u0434: ".concat(reversedNumber);
  } else {
    return alert("Введіть коректне тризначне число.");
  }
}

function task6() {
  var sumUsers = document.getElementById('sumUsers').valueAsNumber;
  if (isNaN(sumUsers)) return alert('Not a number value');
  document.getElementById('result6').innerText = (sumUsers * 5 / 100 * 2 / 12 + sumUsers).toFixed(2);
}