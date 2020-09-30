// Operator Matematika
var a = 5;
var b = 9;
var c = a+b;
var d = b-a;
var e = a*b;
var f = b/a;
var g = b%a;

// cara pertama
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);

// cara kedua
console.log(a+b);
console.log(b-a);
console.log(a*b);
console.log(b/a);
console.log(b%a);

// Operator Logika

// == Equal Operator
var angka = 100
console.log(angka == 100) // true
console.log(angka == 20) // false

// Not Equal !=
var sifat = "rajin"
console.log(sifat != "malas") // true
console.log(sifat != "bandel") //true 

// Membandingkan berdasarkan nilai dan tipe data
var angka = 8
console.log(angka == "8") // true, padahal "8" adalah string.
console.log(angka === "8") // false, karena tipe data nya berbeda
console.log(angka === 8) // true 

// kebalikan dari === yaitu !==
var angka = 11
console.log(angka != "11") // false, padahal "11" adalah string
console.log(angka !== "11") // true, karena tipe datanya berbeda
console.log(angka !== 11) // false

// < > <= >=
var number = 17
console.log( number < 20 ) // true
console.log( number > 17 ) // false
console.log( number >= 17 ) // true, karena terdapat sama dengan
console.log( number <= 20 ) // true

// OR ||
console.log(true || true); // true
console.log(true || false); // true
console.log(true || false || false); // true
console.log(false || false); // false

// AND &&
console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false
console.log(false && true && true); // false
console.log(true && true && true); // true 