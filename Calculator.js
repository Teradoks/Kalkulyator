const readline = require('readline');//подключение модуля readline

const nl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let num1 = 0;
let num2 = 0;
let operation = null;

function input_num1(){
  nl.question('Введите первое значение: ', function (argument) {
      num1 = parseFloat(argument);
  });
}