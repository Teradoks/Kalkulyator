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
      select_opeation();
  });
}

function select_opeation(){
  nl.question('Выберите и введите номер нужной операции:\n\
      1. Сложение\n\
      2. Вычитание\n\
      3. Умножение\n\
      4. Деление\n\
      5. Смена знака \n\
      6. Выход\n\
      : ',
      function (argument) {
      operation = parseInt(argument);
      if (operation ==6){
          nl.close();
      }
      else if(operation<6 || operation>0){

      }
      else{
          console.log('Выбрана неверная операция');
          nl.close();
      }
  });
}