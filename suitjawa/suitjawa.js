var tanya = true;
while(tanya){
    // menangkap pilihan user
    var p = prompt('Silahkan Pilih (gajah, semut, orang)');

    // menangkap pilihan komputer
    var komp = Math.random();

    if (komp < 0.34){
        komp = 'gajah';
    } else if (komp >= 0.34 && komp < 0.67){
        komp = 'semut';
    } else {
        komp = 'orang';
    }
    console.log(komp)

    // rules
    var hasil = '';
    if( p == komp){
        hasil = 'SERI'
    } else if (p == 'gajah'){
        // if ( komp == 'orang'){
        //     hasil = 'Player MENANG'
        // }else {
        //     hasil = 'Player KALAH'
        // }
        hasil = ( komp = 'orang') ? 'Player MENANG' : 'Player KALAH'
    } else if ( p == 'orang'){
        // if ( komp == 'semut'){
        //     hasil = 'Player MENANG';
        // } else{
        //     hasil = 'Player KALAH'
        // }
        hasil = ( komp = 'semut') ? 'Player MENANG' : 'Player KALAH'
    } else if (p == 'semut') {
        hasil = ( komp = 'gajah') ? 'Player MENANG' : 'Player KALAH'
    } else {
        hasil = 'Anda Memasukan Pilihan yang Salah'
    }

    // hasil
    alert('Kamu Memilih: ' + p + ' dan Komputer Memilih: ' + komp + '\nMaka Hasilnya ' + hasil);

    tanya = confirm('Anda ingin Mencoba Lagi ?');
}

alert('Terima Kasih Sudah Bermain')