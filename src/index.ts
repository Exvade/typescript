let namaSaya: string = "Deft Valian Exanova";
let usernaame: number = 123;;
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

console.log({ temanKita })

console.log({ namaSaya });
console.log({ usernaame });
console.log({ isDead });
console.log({ istriSaya });
console.log({ legendFavorit });