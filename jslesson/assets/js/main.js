//task 1
function sum1(){
    const result = (0.1 + 0.2).toFixed(1); 
     return document.getElementById('result1').innerText = `${result}`
}
//task 2
function sum2(){
    const num1 = '1'
    const num2 = 2
    const result_2 = parseInt(num1) + num2
    return document.getElementById('result2').innerText = `${result_2}`
   
}
 
function task3(){
   const size = document.getElementById('memory').valueAsNumber
     if(isNaN(size)){
     return alert('Not a number value')
   }
   const result_3 = Math.floor(size * 1024 / 820)
        return document.getElementById('result3').innerText = `${result_3}`

}
function task4(){
   const price = document.getElementById('price').valueAsNumber
   const pricechoco = document.getElementById('pricechoco').valueAsNumber
   let count = 0
     if(isNaN(price) || isNaN(pricechoco)){
      return alert('Not a number value')
   }
    const surrender = price % pricechoco
    count = Math.floor(price / pricechoco)
    return document.getElementById('result4').innerText = `Здача: ${surrender} гривень, 
    кількість шоколадок ${count} `

}
function task5(){
    let number = document.getElementById('number').valueAsNumber
    if(isNaN(number)) return alert('Not a number value')
    if (number >= 100 && number <= 999) {
    // Отримуємо цифри числа
    const hundreds = Math.floor(number / 100); // Сотні
    const tens = Math.floor((number % 100) / 10); // Десятки
    const units = number % 10; // Одиниці

    // Збираємо число задом наперед
    const reversedNumber = units * 100 + tens * 10 + hundreds;

    // Виводимо результат
    document.getElementById('result5').innerText = `Число задом наперед: ${reversedNumber}`;
    } else {
         return alert("Введіть коректне тризначне число.");
    }
}

function task6(){
    const sumUsers = document.getElementById('sumUsers').valueAsNumber
     if(isNaN(sumUsers)) return alert('Not a number value')
      document.getElementById('result6').innerText = (sumUsers * 5 / 100 * 2 / 12 + sumUsers).toFixed(2)
}



