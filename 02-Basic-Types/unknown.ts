// Membuat file ini menjadi module agar variabel tidak bentrok dengan file lain
export {};

/*
Tipe data "unknown" adalah tipe yang lebih aman daripada "any".
Tipe ini digunakan ketika kita tidak tahu secara pasti nilai yang diterima
— terutama pada situasi yang sering terjadi dalam pengembangan web:

    - Data dari API yang belum bisa dipastikan bentuknya
    - Input user (form)
    - Data dari localStorage
    - Third-party library
    - Parsing JSON
    - Dynamic response

Keamanan unknown:
    - Kita tidak bisa langsung mengakses property/method
    - Harus dilakukan pengecekan type-checking terlebih dahulu
*/

console.log(
  "------------------------------------------- Contoh Penggunaan unknown --------------------------------------\n"
);

/*
1. unknown paling sederhana
*/

console.log("1. unknown paling sederhana\n");

let responseData: unknown = "Hello World";

console.log(responseData);
// Output: Hello World

console.log("\n");

/*
2. unknown tidak bisa langsung digunakan tanpa type checking
*/

console.log("2. unknown tidak bisa langsung digunakan tanpa type checking\n");

let userAge: unknown = 25;

// console.log(userAge.toFixed(2)); ❌ ERROR
// Karena unknown harus dicek dulu tipenya

if (typeof userAge === "number") {
  console.log(userAge.toFixed(2));
  // Output: 25.00
}

console.log("\n");

/*
3. unknown untuk menangani input user
   (Contoh: form HTML yang selalu menghasilkan string)
*/

console.log("3. unknown untuk input user (form)\n");

let inputValue: unknown = "42";

if (typeof inputValue === "string") {
  let numericValue = Number(inputValue);
  console.log(numericValue);
  // Output: 42
}

console.log("\n");

/*
4. unknown ketika menerima data dari API (umum di web development)
*/

console.log("4. unknown untuk API Response\n");

let apiResponse: unknown = {
  name: "David",
  email: "david@example.com",
};

// Pastikan struktur datanya sebelum digunakan
if (
  typeof apiResponse === "object" &&
  apiResponse !== null &&
  "name" in apiResponse
) {
  console.log((apiResponse as { name: string }).name);
  // Output: David
}

console.log("\n");

/*
5. unknown untuk data parsing JSON
*/

console.log("5. unknown pada parsing JSON\n");

let rawJson: unknown = JSON.parse('{"title": "Product X", "price": 120}');

if (
  typeof rawJson === "object" &&
  rawJson !== null &&
  "title" in rawJson &&
  "price" in rawJson
) {
  console.log((rawJson as { title: string; price: number }).title);
  // Output: Product X
}

console.log("\n");

/*
6. unknown dalam kondisi (if-else) untuk validasi data
*/

console.log("6. unknown dalam kondisi (if-else)\n");

let sessionUser: unknown = "admin";

if (typeof sessionUser === "string") {
  if (sessionUser === "admin") {
    console.log("Access granted for admin.");
  } else {
    console.log("Access denied.");
  }
}

// Output: Access granted for admin.

console.log("\n");

/*
7. unknown dalam fungsi (parameter fleksibel)
*/

console.log("7. unknown dalam fungsi\n");

function printLength(value: unknown) {
  if (typeof value === "string") {
    console.log(`String length is ${value.length}`);
    // Contoh output: String length is 11
  } else {
    console.log("Value is not a string.");
  }
}

printLength("Hello World");

console.log("\n");

/*
8. Menggunakan type predicate (cara terbaik)
*/

console.log("8. type predicate (advanced)\n");

function isUser(obj: unknown): obj is { name: string; age: number } {
  return (
    typeof obj === "object" && obj !== null && "name" in obj && "age" in obj
  );
}

let dataFromServer: unknown = {
  name: "Robert",
  age: 32,
};

if (isUser(dataFromServer)) {
  console.log(`User: ${dataFromServer.name}, Age: ${dataFromServer.age}`);
  // Output: User: Robert, Age: 32
}

console.log("\n");

/*
9. unknown + union untuk kondisi kompleks
*/

console.log("9. unknown + union\n");

let loginStatus: unknown = "success" as unknown;

if (loginStatus === "success") {
  console.log("Login success.");
  // Output: Login success.
} else {
  console.log("Login failed.");
}

console.log("\n");

/*
10. unknown digunakan sebagai return flexible (API simulation)
*/

console.log("10. unknown sebagai return API\n");

function fakeApi(): unknown {
  return {
    id: 110,
    username: "james",
    role: "editor",
  };
}

let result = fakeApi();

if (typeof result === "object" && result !== null && "username" in result) {
  console.log(`Logged in as: ${(result as any).username}`);
  // Output: Logged in as: james
}

console.log("\n");

/*
11. unknown + DOM (umum di frontend)
*/

console.log("11. unknown + DOM\n");

let userInput: unknown = document ? "Chris" : null;

if (typeof userInput === "string") {
  console.log(`User typed: ${userInput}`);
  // Output (di browser): User typed: Chris
}

console.log("\n");

/*
12. unknown dibandingkan any (tertingkat lanjut)
*/

console.log("12. unknown vs any (perbedaan penting)\n");

let unsafeData: any = "Hello";
let safeData: unknown = "Hello";

// any -> langsung bisa akses (berbahaya)
console.log(unsafeData.toUpperCase());
// Output: HELLO

// unknown -> harus dicek (lebih aman)
if (typeof safeData === "string") {
  console.log(safeData.toUpperCase());
  // Output: HELLO
}

console.log("\n");
