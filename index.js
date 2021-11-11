
/* Как использовать prettier постоянно?*/


/*
const a = -3 ;

if (a === 0){
  console.log("Верно");
} else{
  console.log("Неверно");
}
*/

/*
const a = -3;

if (a > 0){
  console.log("Верно");
} else{
  console.log("Неверно");
}
*/

/*
const a = -3;

if (a < 0){
  console.log("Верно");
} else{
  console.log("Неверно");
}
*/

/*
const a = 1;

if (a >= 0){
  console.log("Верно");
} else{
  console.log("Неверно");
}
*/

/*
const a = 1;

if (a <= 0){
  console.log("Верно");
} else{
  console.log("Неверно");
}
*/

/*
const a = 0;

if (a != 0){
  console.log("Верно");
} else{
  console.log("Неверно");
}
*/


/*
const a = "тест";

if (a === "test"){
  console.log("Верно");
} else{
  console.log("Неверно");
}
*/


/*ЛОГИЧЕСКИЕ ОПЕРАТОРЫ */

/*
const test = false;

if (test === true){
  console.log("Верно");
} else{
  console.log("Неверно");
}
*/

/*
const test = false;

let result = (test === true) ? console.log("Верно") : console.log("Неверно")

*/


/*
const test = false;

if (test === false){
  console.log("Верно");
} else{
  console.log("Неверно");
}
*/

/*
const test = false;

let result = (test === false) ? console.log("Верно") : console.log("Неверно")
*/



/*РАБОТА С && и || */

/*
const  a = 2;

if (a > 0 && a < 5){
  console.log("Верно");
} else{
  console.log("Неверно");
}
*/

/*
const a = 2;

if (a === 0 || a===2){
  console.log(a + 7);
} else{
  console.log(a/10);
}
*/


/*
const a = 3;
const b = 5;

if (a <= 0 && b >= 3 ){
  console.log(a + b);
} else{
  console.log(a - b);
}
*/

/*
const a = 3;
const b = 5;

if (a > 2 && a < 11 || b >= 6 && b < 14){
  console.log("Верно");
} else{
  console.log("Неверно");
}
*/


/* НА SWITCH-CASE*/

/*
const value = 1;

switch(value){
  case"1":
    result = "зима";
    break;
  case"2":
    result = "весна";
    break;
  case"3":
    result = "лето";
    break;
  case"4":
    result = "осень";
    break;
}

*/

/* ОБЩИЕ ЗАДАЧИ*/

/* 

 const day = 15;

if (day >= 1 && day <= 10 ){
  console.log("первая декада");
} else if (day > 10 && day <= 20){
  console.log("вторая декада");
} else if (day > 20 && day <=31){
  console.log("третья декада");
}

*/




/*

const month = 12;

if (month >= 1 && month <= 2 || month === 12){
  console.log("Зима");
} else if (month >2 && month <=5){
  console.log("Весна");
} else if (month >5 && month <=8){
  console.log("Лето");
} else if (month >8 && month <=11){
  console.log("Осень");
}

*/



/*
const list =[];

for ( let i = 1; i <= 100; i++ ){
  if (i% 15 === 0){
    list.push("FizzBuzz");
  } else if (i % 3 === 0){
    list.push("Fizz")
  } else if (i % 5 === 0){
    list.push("Buzz");
  } else {
    list.push(i);
  }
}
console.log(list);
*/




/*
const string = "abcde";

if (string[0] === "a"){
  console.log("да");
} else {
  console.log("нет");
}
*/



/*
const string = "12345";

if (string[0] === "1" || string[0] === "2" || string[0] === "3" ){
  console.log("да");
} else {
  console.log("нет");
}

*/




/*
const string = "432"

let num1 = Number(string[0])
let num2 = Number(string[1])
let num3 = Number(string[2])

console.log(num1 + num2 + num3)
*/

const string = "234621"

let num1 = Number(string[0])
let num2 = Number(string[1])
let num3 = Number(string[2])
let num4 = Number(string[3])
let num5 = Number(string[4])
let num6 = Number(string[5])

if (num1 + num2 + num3 === num4 + num5 + num6){
  console.log("да")
} else {
  console.log("нет")
}