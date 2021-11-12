
/*
let i = 0;

for(;i <=100 ; i++){
    console.log(i);
}
*/


/*
let i = 11;

for(;i <=33 ; i++){
    console.log(i);
}

*/

/*
let i = 0;

for(;i <=100 ; i +=2){
    console.log(i);
}

*/


/*
let i = 0;

for(;i <=100 ; i ++){
    
}

console.log(i);

*/



/* Выести число 555555555, как?*/
/*
console.log(0 [5,5])
*/

/*
let i = 0;

for(;i <= 300; i++){
    if (i % 2 === 0 && i % 12 === 0 && i != 48 && (i / 12) % 2 != 0){
        console.log("Ooops");
    } else if (i % 2 != 0 && i % 3 === 0){
        console.log("Hola");
    } else if (i === 0){
        console.log("Zero");
    }
} 

*/

/* МАССИВЫ */


/*
let arr = [1,2,3,4,5];

for (i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
*/

/*

let arr = [1,2,3,4,5];
result = 0;

for (i = 0; i < arr.length; i++){
    result += Number(arr[i]);
}

console.log(result);

*/



/* ОБЩИЕ ЗАДАЧИ*/


/*
let arr = [2,3,9,15,0,4];

for (i = 0;i < arr.length;i++){
    if (arr[i] > 3 && arr[i] < 10){
        console.log(arr[i]);
    }
}
*/


/*
let arr = [1,-4,6,9,34,-6];
summ = 0;

for (i = 0;i < arr.length;i++){
    if (arr[i] >= 0){
        summ += arr[i];
    }
}

console.log(summ);
*/

/*
let arr = [1, 2, 5, 9, 4, 13, 4, 10];

for (i = 0;i < arr.length;i++){
    if(arr[i] === 4){
        console.log("Есть!");
        break;
    } 
}
*/


/*
let arr = [10, 20, 30, 50, 235, 3000];

for (i = 0; i < arr.length; i++){
    if (String(arr[i]).startsWith("1") || String(arr[i]).startsWith("2") || String(arr[i]).startsWith("5")){
        console.log(arr[i]);
    }
}
*/


/*
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
string = "-";

for (i = 0; i < arr.length; i++){
    string += arr[i] + "-";
    
}

console.log(string)

*/




/* не знаю как правильно будет сделать жирным в js */
/*
let arr = ["пн","вт","ср","чт","пн","сб","вс",]

for (i = 0; i < arr.length; i++){
    if (i > 4){
        console.log("<b>" + arr[i] + "</b>");
    } else {
        console.log(arr[i]);
    }
}
*/

/* курсив тоже не понимаю как */


/*
let n = 1000;
num = 0 ;

while(n/2 > 50){
    n = n / 2;
    num++;
}
console.log(num)

*/

/*
let a = 1;
let b = 17;
let i = a;
arr = []

for(;i <= b;i++){
    arr += i
}
console.log(arr);
*/

let num = 7;
result = "";

while(num !=1){
    if (num % 2 === 0){
        num = num/2;
    } else {
        num = num*3 + 1;
    }
    result += num + " " ;

}

console.log(result)