// menentukan panjang suatu kata
var word = "Javascript is Awesome"

console.log(word.length)

// string method
// mengembalikan karakter pada indeks yang diinginkan
console.log('i am string'.charAt(3));

// menggabungkan beberapa string
var string1 = "good";
var string2 = "luck";

console.log(string1.concat(string2));

// mengembalikan indeks dari string/karakter yang dicari, yang pertama kali ditemukan, atau -1 apabila tidak ditemukan

var text = "dung dung ces!";
console.log(text.indexOf("dung"));
console.log(text.indexOf("n"));
console.log(text.indexOf("kampret"));
console.log(text.indexOf("ces!"));

// mengambil potongan string berdasarkan index
var car1 = "Lykan Hypersport";
var car2 = car1.substr(6);
var car3 = car1.substr(3);
var car4 = car1.substr(3, 6); // 6 adalah jumlah karakter yang diambil, spasi juga terbawa

console.log(car2);
console.log(car3);
console.log(car4);

// mengubah teks menjadi kapital dan kecil
var letter = "This letter is for you";
var upper = letter.toUpperCase();
var lower= letter.toLowerCase();

console.log(upper);
console.log(lower);

// mengembalikan string yand sudah dihapus karakter whitespace (" ") pada awal dan akhir
var username = " administrator "
var newUsername = username.trim();

console.log(newUsername);