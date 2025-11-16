// Membuat file ini menjadi module agar variabel tidak bentrok dengan file lain
export {};

/*
Tipe data 'any' adalah tipe paling fleksibel dalam TypeScript karena memungkinkan
variabel menyimpan nilai dari tipe data apa pun.

Ciri-ciri tipe data 'any':
    1. Dapat menyimpan tipe data apa saja (string, number, boolean, object, dll)
    2. Menghilangkan pemeriksaan tipe (disable TypeScript checking)
    3. Harus digunakan dengan hati-hati karena bisa menyebabkan error runtime
    4. Cocok untuk data dari API yang tidak jelas tipenya
    5. Berguna untuk migrasi dari JavaScript ke TypeScript

Catatan:
Gunakan 'unknown' bila memungkinkan, karena lebih aman daripada 'any'.
*/

console.log(
  "------------------------------------------- Contoh Penggunaan any --------------------------------------\n"
);

/*
1. Mendefinisikan any secara sederhana
*/

console.log("1. Mendefinisikan any secara sederhana\n");

let data: any = "Hello World";
console.log(data); // Output: Hello World

data = 123;
console.log(data); // Output: 123

data = true;
console.log(data); // Output: true

console.log("\n");

/*
2. any memperbolehkan semua operasi (tidak aman)
*/

console.log("2. any memperbolehkan operasi bebas\n");

let value: any = "John";
value = value.toUpperCase();
console.log(value); // Output: JOHN

value = 55;
value = value + 10;
console.log(value); // Output: 65

console.log("\n");

/*
3. any pada data dari API (kasus real web development)
*/

console.log("3. any pada API Response\n");

// Misalnya API mengembalikan tipe data yang tidak jelas
function getApiResponse(): any {
  return {
    name: "Samantha",
    age: 29,
    active: true,
  };
}

let response: any = getApiResponse();
console.log(response);
// Output: { name: 'Samantha', age: 29, active: true }

console.log(response.name);
// Output: Samantha

console.log("\n");

/*
4. any untuk data dinamis (form input di web)
*/

console.log("4. any pada Form Input\n");

let formValue: any;

formValue = "Robert"; // input name
console.log(formValue); // Output: Robert

formValue = 33; // input age
console.log(formValue); // Output: 33

formValue = true; // input newsletter checkbox
console.log(formValue); // Output: true

console.log("\n");

/*
5. any pada array campuran (tidak direkomendasikan)
*/

console.log("5. Array dengan any\n");

let mixedArray: any[] = ["Laptop", 22, true, { brand: "Asus" }];

console.log(mixedArray);
// Output: [ 'Laptop', 22, true, { brand: 'Asus' } ]

console.log("\n");

/*
6. any memungkinkan property apa pun (berbahaya)
*/

console.log("6. Property bebas pada any (bahaya)\n");

let user: any = {};

user.firstName = "Daniel";
user.age = 30;
user.sayHello = function () {
  return "Hello from Daniel!";
};

console.log(user.firstName); // Output: Daniel
console.log(user.sayHello()); // Output: Hello from Daniel!

console.log("\n");

/*
7. any dalam kondisi dan operasi (tidak aman)
*/

console.log("7. any dalam kondisi\n");

let flag: any = "true"; // string, bukan boolean

if (flag) {
  console.log("This will still execute (any dianggap truthy).");
}
// Output: This will still execute (any dianggap truthy).

console.log("\n");

/*
8. any untuk migrasi dari JavaScript
*/

console.log("8. Migrasi dari JavaScript\n");

// Kode JS lama:
function calculatePrice(price: any, tax: any) {
  return price + tax;
}

console.log(calculatePrice(100, 20)); // Output: 120

console.log("\n");

/*
9. any untuk menangani struktur data tidak terduga
*/

console.log("9. any untuk struktur data tidak terduga\n");

let unknownJson: any = JSON.parse('{"product":"Smartphone","price":799}');

console.log(unknownJson.product); // Output: Smartphone
console.log(unknownJson.price); // Output: 799

console.log("\n");

/*
10. any + function (menghilangkan type checking)
*/

console.log("10. any dalam Function\n");

function processData(input: any): any {
  return input;
}

console.log(processData("Hello")); // Output: Hello
console.log(processData(404)); // Output: 404
console.log(processData(true)); // Output: true

console.log("\n");

/*
11. any membuat TypeScript tidak bisa mendeteksi error
*/

console.log("11. any menghilangkan error\n");

let username: any = "Jonathan";

// TS biasanya error jika string melakukan operasi number
let loginCount = username * 2;

console.log(loginCount);
// Output: NaN (Kesalahan runtime → TS tidak mendeteksi karena any)

console.log("\n");

/*
12. any pada DOM (kasus frontend)
*/

console.log("12. any pada DOM\n");

let button: any = {
  innerText: "Click Me",
  disabled: false,
};

button.disabled = true;

console.log(button.disabled); // Output: true

console.log("\n");

/*
13. Catatan: Hindari any, gunakan unknown bila memungkinkan (tingkat lanjut)
*/

console.log("13. Hindari any bila memungkinkan\n");

let something: any = "Hello";
console.log(something); // Output: Hello

// Contoh lebih aman menggunakan unknown (disarankan pada project nyata)
let safer: unknown = "Hello";

// console.log(safer.toUpperCase()); // Error (lebih aman)

console.log("\n");
