let a = 16;
let b = 7;


/*if (a > b) { // 15 > 6
    console.log('a je vece');
} else {
    console.log('b je vece');
}*/

if (a > b) { //ako je ovaj uslov tacan ispisuje telo if dela
    console.log('a je vece'); //kad ovo izvrsi propada van if else petlje, ne proverava dalje uslove
} else if (b > a) {
    console.log('b je vece');
} else {
    console.log('a i b su jednaki')
}


//izrsava daje sta ima 

if (a == 16) {
    console.log('a je 16');
}


if (b == 7) {
    console.log('b je 7');
}

let x = 5;
let y = 5;
let z = 10;

if (x > 10) {
    //radi nesto
}

if (x < z) {
    //ne izvrsava se uslov nije tacan
} else if (y < z) { //proverava ovaj uslov ni ovaj uslov nije tacan napusta petlju

}


if (x == 6) { //proverava da li jx 6, nije sigurno se izvrsava else deo

} else {
    console.log("x je " + x);
}

if (x < 0) {

} else if (x > 2 && x < 3) { // da li je x vece od dva i da li je x manje od 3

} else if (x >= 4 && x < 5) {  // da li je x vece jednako od 4 i da li je x manje od 5

} else {
    console.log("x je" + x); //izvrisce se else deo
}