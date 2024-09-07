"use strict";
let namaSaya = "Deft Valian Exanova";
let usernaame = 123;
let isDead = false;
let pacarSaya;
pacarSaya = "Nabila Fitriyani";
pacarSaya = 1;
// array biasa
let istriSaya;
istriSaya = ["Nabila", "Fitriyani"];
// tupple type
let legendFavorit;
legendFavorit = ["Hattori", 30, true];
let temanKita;
temanKita = {
    nama: "Rangga",
    isKampret: true,
    hutang: 45000,
};
//!Function
function create() {
    return 2;
}
//? Arrow Function
const create2 = () => "Hello world";
console.log(create2());
//versi clean code, buat variabel yang menampung function
const result = create2();
console.log(result);
console.log({ temanKita });
console.log({ namaSaya });
console.log({ usernaame });
console.log({ isDead });
console.log({ istriSaya });
console.log({ legendFavorit });
