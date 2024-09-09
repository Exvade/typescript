let namaSaya: string = "Deft Valian Exanova";
let usernaame: number = 123;
let isDead: boolean = false;

let pacarSaya: string | number;
pacarSaya = "Nabila Fitriyani";
pacarSaya = 1;

// array biasa
let istriSaya: string[];
istriSaya = ["Nabila", "Fitriyani"];

// tupple type
let legendFavorit: [string, number, boolean];
legendFavorit = ["Hattori", 30, true];

//! TIPEDATA CUSTOM
type TemanType = {
  nama: string;
  isKampret: boolean;
  hutang?: number;
};
let temanKita: TemanType;
temanKita = {
  nama: "Rangga",
  isKampret: true,
  hutang: 45_000,
};

//!Function
function create(): void {
  console.log("Hello World");
}
create();

//? Arrow Function
const create2 = (): string => "Hello world";
//versi clean code, buat variabel yang menampung function
const result = create2();
console.log(result);

function add(x: number, y: number): void {
  const z: number = x + y;
  console.log(`Hasil nya adalah ${z}`);
}
add(10, 9);

//? Tipedata union
type Wanita = string;
type Pria = boolean;

// type Gender = Wanita | Pria;
type Gender = string | boolean;

let sayaManusia: Gender;
sayaManusia = "Deft Valian Exanova";

console.log({ temanKita });
console.log({ namaSaya });
console.log({ usernaame });
console.log({ isDead });
console.log({ istriSaya });
console.log({ legendFavorit });
