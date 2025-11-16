// Membuat file ini menjadi module agar variabel tidak bentrok dengan file lain
export {};

/*
Number adalah tipe data dalam TypeScript yang digunakan untuk menyimpan angka.
TypeScript menggunakan satu tipe angka untuk semua format: integer, float,
binary, octal, dan hexadecimal.

Ciri-ciri Tipe Data Number:
    1. Dapat menyimpan integer dan desimal
    2. Dapat digunakan untuk perhitungan matematika
    3. Sangat penting dalam pengembangan web seperti harga, rating,
       pagination, ID numerik, dan perhitungan bisnis
*/

console.log(
  "------------------------------------------- Contoh Penggunaan Number --------------------------------------\n"
);

/*
1. Mendefinisikan Number secara Sederhana
*/

console.log("1. Mendefinisikan Number secara Sederhana\n");

let age: number = 25;
let price: number = 19.99;
let rating: number = 4;

console.log(age); // Output: 25
console.log(price); // Output: 19.99
console.log(rating); // Output: 4

console.log("\n");

/*
2. Operasi Aritmatika
*/

console.log("2. Operasi Aritmatika\n");

let a: number = 10;
let b: number = 3;

let addition = a + b;
let subtraction = a - b;
let multiplication = a * b;
let division = a / b;

console.log(addition); // Output: 13
console.log(subtraction); // Output: 7
console.log(multiplication); // Output: 30
console.log(division); // Output: 3.333...

console.log("\n");

/*
3. Number dalam Pengembangan Web (misal: harga produk)
*/

console.log("3. Number dalam Pengembangan Web\n");

let productPrice: number = 249.5;
let discount: number = 20;
let finalPrice = productPrice - discount;

console.log(finalPrice);
// Output: 229.5

console.log("\n");

/*
4. Bilangan Desimal dan Pembulatan
*/

console.log("4. Bilangan Desimal dan Pembulatan\n");

let score: number = 4.6789;

console.log(score.toFixed(2)); // Output: 4.68
console.log(Math.round(score)); // Output: 5
console.log(Math.floor(score)); // Output: 4
console.log(Math.ceil(score)); // Output: 5

console.log("\n");

/*
5. Random Number (Digunakan untuk token, captcha, ID sementara)
*/

console.log("5. Random Number\n");

let token: number = Math.floor(Math.random() * 9000) + 1000;

console.log(token);
// Output: random 4 digit number (example: 5832)

console.log("\n");

/*
6. Bilangan dalam Notasi Ilmiah (Scientific Notation)
*/

console.log("6. Scientific Notation\n");

let bigNumber: number = 5e6; // 5 × 10^6
let smallNumber: number = 2.5e-3; // 2.5 × 10^-3

console.log(bigNumber); // Output: 5000000
console.log(smallNumber); // Output: 0.0025

console.log("\n");

/*
7. Number dalam Kondisi (if-else)
*/

console.log("7. Number dalam Kondisi\n");

let stock: number = 3;

if (stock > 0) {
  console.log("Product is available.");
} else {
  console.log("Product is out of stock.");
}

// Output: Product is available.

console.log("\n");

/*
8. Union Type untuk Number
*/

console.log("8. Union Type untuk Number\n");

let page: number | "auto" = "auto";
console.log(page); // Output: auto

page = 12;
console.log(page); // Output: 12

console.log("\n");

/*
9. Literal Type untuk Number (State yang tetap)
*/

console.log("9. Number Literal Type\n");

type StatusCode = 200 | 404 | 500;
let responseCode: StatusCode = 200;

console.log(responseCode); // Output: 200

responseCode = 404;
console.log(responseCode); // Output: 404

console.log("\n");

/*
10. Number dalam Perhitungan Web: Pagination
*/

console.log("10. Number dalam Pagination\n");

let totalItems = 57;
let itemsPerPage = 10;
let totalPages = Math.ceil(totalItems / itemsPerPage);

console.log(totalPages);
// Output: 6

console.log("\n");

/*
11. Template Literal Type + Number
*/

console.log("11. Template Literal Type + Number\n");

type ProductID = `product-${number}`;
let id: ProductID = "product-321";

console.log(id);
// Output: product-321

console.log("\n");

/*
12. Number dalam Function (Perhitungan sederhana)
*/

console.log("12. Number dalam Function\n");

function calculateTax(price: number, taxPercentage: number): number {
  return price + price * (taxPercentage / 100);
}

console.log(calculateTax(100, 10));
// Output: 110

console.log("\n");
