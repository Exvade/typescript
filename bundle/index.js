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
// function create(): void {
//   console.log("Hello World");
// }
// create();
//? Arrow Function
const create2 = () => "Hello world";
//versi clean code, buat variabel yang menampung function
const result = create2();
console.log(result);
function add(x, y) {
    const z = x + y;
    console.log(`Hasil nya adalah ${z}`);
}
add(10, 9);
let sayaManusia;
sayaManusia = "Deft Valian Exanova";
function create(processor) {
    console.log(`
  terimakasih ${processor.brand}💗 
  berhasil membuat processor dengan detail berikut:
  nama base model: ${processor.baseModel}
  nama model: ${processor.modelName}
  kecepatan clock: ${processor.clockSpeed}
  turbo boost: ${processor.isTurboBoost ? "ada" : "tidak ada"}
  `);
}
const intelCoreI5 = {
    brand: "Intel",
    baseModel: "Core i5",
    modelName: "11350F",
    clockSpeed: 2.9,
    isTurboBoost: false,
};
create(intelCoreI5);
console.log({ temanKita });
console.log({ namaSaya });
console.log({ usernaame });
console.log({ isDead });
console.log({ istriSaya });
console.log({ legendFavorit });
