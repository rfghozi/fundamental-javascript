// mengubah tipe data

// cara pertama
var int = 12;
var real = 3.45;
var arr = [6, 7, 8];

var strInt = String(int);
var strReal = String(real);
var strArr = String(arr);

console.log(strInt);
console.log(strReal);
console.log(strArr);

// cara kedua 
var number = 21;
var array = [1, 2];

console.log(number.toString());
console.log(array.toString());

// mengubah data ke number
var number1 = Number("90");
var number2 = Number("1.23");
var number3 = Number("4 5");

console.log(number1);
console.log(number2);
console.log(number3);

// mengembalikan angka dari string
var int  = '89';
var real = '56.7';
var strInt_1 = parseInt(int);  // strInt_1 = 89
var strInt_2 = parseInt(real); // strInt_2 = 56
var strReal_1 = parseFloat(int); // strReal_1 = 89
var strReal_2 = parseFloat(int); // strReal_2 = 56.7