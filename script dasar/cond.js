// conditional
var minimarketStatus = "open"
if (minimarketStatus == "open"){
    console.log("saya akan membeli telur dan buah")
} else{
    console.log("minimarketnya tutup")
}

// conditional bersarang
var minimarketStatus = "open"
var telur = "soldout"
var buah = "soldout" 
if ( minimarketStatus == "open" ) {
    console.log("saya akan membeli telur dan buah")
    if(telur == "soldout" || buah == "soldout" ) {
        console.log("belanjaan saya tidak lengkap")    
    } else if( telur == "soldout") {
        console.log("telur habis")
    } else if ( buah == "soldout" ) {
        console.log("buah habis")
    }
} else {
    console.log("minimarket tutup, saya pulang lagi")
}

// switch case
var buttonPushed = 1;
switch(buttonPushed) {
  case 1:   { console.log('matikan TV!'); break; }
  case 2:   { console.log('turunkan volume TV!'); break; }
  case 3:   { console.log('tingkatkan volume TV!'); break; }
  case 4:   { console.log('matikan suara TV!'); break; }
  default:  { console.log('Tidak terjadi apa-apa'); }}