//Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.
/*
const number = (n) => n**2;

console.log(number(5));
*/

//Сделайте функцию, которая возвращает сумму двух чисел.
/*
const summ = (a, b) => a + b;

console.log(summ(5, 7));
*/

//Сделайте функцию, которая отнимает от первого числа второе и делит на третье.
/*
const getNumber = (a,b,c) => (a-b)/c;

console.log(getNumber(12,4,3))
*/

//Сделайте функцию, которая принимает параметром число от 1 до 7,
// а возвращает день недели на русском языке.
/*
function weekDay(n){
    let weekArray = ["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье"];
    return weekArray[n-1];
}

console.log(weekDay(5));
*/

//Сделайте функцию, которая параметрами принимает 2 числа.
//Если эти числа равны - пусть функция вернет true, а если не равны - false.
/*
const isEqual = (a,b) => a === b;

console.log(isEqual(3,5));
*/

//Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма
//больше 10 - пусть вернет true, а если нет то - false.
/*
const getNum = (a,b) => (a + b) > 10

console.log(getNum(10,0))
*/

//Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет.
// Если отрицательное - пусть функция вернет true, а если нет - false.
/*
const isNegative = (a) => a < 0

console.log(isNegative(0))
*/

//Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет,
//что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true,
//если не так - false.
/*
const isNumberInRange = (a) => a > 0 && a < 10;

console.log(isNumberInRange(-5));
*/

//Создайте функцию rgb(), которая будет принимать три числовых аргумента и возвращать
//строку вида «rgb(23,100,134)». Если аргументы не заданы, считать их равными нулю.
//Не проверять переменные на тип данных

/*
const rgb=(r=0,g=0,b=0) => {
    return "rgb("+ r + "," + g + "," + b +")";
}

console.log(rgb(45,87))
*/

/*
const rgb=(r=0,g=0,b=0) => `rgb(${r}, ${g}, ${b})`;
console.log(rgb(146,5));
*/

//Написать функцию, которая принимает в себя три параметра - число и две функции.
//Первая переданная функция  возвращает возведенное в квадрат переданное число и будет вызываться,
//если число четное. Вторая переданная коллбэк-функция будет вызываться с переданным в нее числом ,
//если число нечетное, и будет возвращать число, увеличенное на 1.

/*
const scuaring = (num) => num ** 2;
const incrementing = (num) => num + 1;

const getNumbers = (num, fun1, fun2) => {
    if (num % 2 === 0) {
        let number1 = fun1(num);
        console.log(number1);
    } else {
        let number2 = fun2(num);
        console.log(number2);
    }
};

getNumbers(7,scuaring,incrementing)
*/

//Написать функцию mult(num1, num2 , num3) принимающую 3 числа. Функцию перемножает num1 и num2 столько раз,
// сколько указано в третьем аргументе num3. Значения num1 и num2 по умолчанию 1,  num3 по умолчанию 2. 
/*
const mult = (num1 =1, num2=1 , num3=2) => {
    let num = 0
    for(let i = 0; i <= num3 ; i++){
        num += num1*num2
    }
    
    return num
}

console.log(mult(2,6,3))

/* непонятно до конца условие*/

//Написать функцию, которая принимает 3 аргумента(каждый аргумент - 1 слово) и возвращает строку с этими 3 словами,
// расположенными в алфавитном порядке.

const myString =(word1="",word2="",word3="") => {
    return localCompare(myString)
}
console.log(localCompare(myString(апельсин,яблоко,маракуйя)))