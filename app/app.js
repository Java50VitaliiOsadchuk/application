//numbers

//num = Math.floor(num); //округление до меньшего знач 
//num = Math.trunc(num); //отбрасывание дробной части
//num = Math.ceil(num); //округление до большего значения 
//num = Math.round(num); //округление по правилам округления
//um **=2; //num = num **2( num в квадрате )

//strings
//let str = "a'bs'd";
//let str1 = 'a"dc"d';
//let res = "123" + 56;
//let res1 = "123" - 56;
//let res2 = "123" / 56;
//let res3 = "123" / "2";
//let res4 = "ab" / 8;

//boolean
//let a ;
//let error = true;
//let res = true + true; // складывается как 2 числа
//let res1 = true && false; // всегда фольс
//let res2 = a && 256 / a; // 
//let res3 = 200 && 0;
//let massage = error && "some error happening";
//let re3 = a || 10;
//let ref4 = "123" > "9";
//let res5 = "123" > 9;


//equility operators
//let res10 = "123" == 123; //true -  сравнивает значения 
//let rer11 = "123" === 123; //false - сравнивает типы

//Home work 11

// Number 1
//computes sum of all digits in the number
//number may be either or positive or 0 
let num = 123.45;
let num1 = -280.123;
let num2 = 123;
let sum = getDigitsum(num);
let sum1 = getDigitsum(num1);
let sum2 = getDigitsum(num2);

function getDigitsum(number) {
    number = Math.round(number);
    if (number < 0) { number = -number; }
    let res = 0;
    do {
        res = Math.trunc(res + number % 10);
        number = Math.trunc(number / 10);
    } while (number != 0);
    return res;
}
console.log("res1 =", sum);
console.log("res2 =", sum1);
console.log("res3 =", sum2);

// Number 2
//example of expression "100/((10+20)**2)"
//task for searching in Internet
//only 1 line code 
let string = ("9000 / ((10 + 20) ** 2)");
let string1 = ("9 + 100 / 2");
console.log(eval(string));
console.log(eval(string1));

// Number 3
//there should be printed "ananas"
let ananas = "a" + "lol" / 2 + "a" + "s";
console.log(ananas.toLocaleLowerCase());

function reverse(number) {
    
// Number 4
//return string with digits of a given number in the reversed order
//example reverse(1234) should return "1234"
//consider only integer part ,fractional part should be removed
//example reverse (123.56) should return "4321"
//example reverse (-1234) should return "-4321"
let reverse = PrintReverse(123.45);
let reverse1 = PrintReverse(-280.123);
let reverse2 = PrintReverse(123456);
let reverse3 = PrintReverse(-123);
function PrintReverse(number) {
    number = Math.trunc(number);
    let a = 0;
    let res = " ";
    if (number < 0) {
        number = -number;
        res = "-"
    };
    do {
        a = number % 10;
        res = res + a;
        number = Math.trunc(number / 10);
    } while (number != 0);

    return res;
}
console.log(reverse);
console.log(reverse1);
console.log(reverse2);
console.log(reverse3);
}








