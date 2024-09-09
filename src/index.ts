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
// function create(): void {
//   console.log("Hello World");
// }
// create();

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

//implementasi union
interface IProcessor {
  brand: string;
  baseModel: string;
  modelName: string;
  clockSpeed: number;
}

interface Intel extends IProcessor {
  isTurboBoost: boolean;
}

interface AMD extends IProcessor {
  isPrecisionBoost: boolean;
}

function createIntel(processor: Intel): void {
  console.log(`
  terimakasih ${processor.brand}💗 
  berhasil membuat processor dengan detail berikut:
  nama base model: ${processor.baseModel}
  nama model: ${processor.modelName}
  kecepatan clock: ${processor.clockSpeed}
  turbo boost: ${processor.isTurboBoost}
  `);
}

function createAMD(processor: AMD): void {
  console.log(`
  terimakasih ${processor.brand}💗 
  berhasil membuat processor dengan detail berikut:
  nama base model: ${processor.baseModel}
  nama model: ${processor.modelName}
  kecepatan clock: ${processor.clockSpeed}
  precision booost: ${processor.isPrecisionBoost}
  `);
}

const coreI5: Intel = {
  brand: "Intel",
  baseModel: "Core i5",
  modelName: "11350F",
  clockSpeed: 2.9,
  isTurboBoost: true,
};
const ryzen3: AMD = {
  brand: "Ryzen",
  baseModel: "Ryzen 3",
  modelName: "R-5570X",
  clockSpeed: 6,
  isPrecisionBoost: true,
};

createIntel(coreI5);
createAMD(ryzen3);

console.log({ temanKita });
console.log({ namaSaya });
console.log({ usernaame });
console.log({ isDead });
console.log({ istriSaya });
console.log({ legendFavorit });
