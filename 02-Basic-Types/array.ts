// Membuat file ini menjadi module agar variabel tidak bentrok dengan file lain
export {};

/*
Array adalah tipe data yang digunakan untuk menyimpan daftar nilai.
Dalam pengembangan web, array sangat sering digunakan untuk:

    - Menyimpan list user dari API
    - Daftar product
    - Daftar URL route
    - Menyimpan data form
    - Menyimpan data chart
    - Mengelola state di React/Next.js

Ciri-ciri Array:
    - Ditulis menggunakan tanda kurung siku []
    - Dapat berisi tipe yang sama, atau tipe campuran (union)
    - TypeScript mendukung generics: Array<string>, Array<number>, dsb.
*/

console.log(
  "------------------------------------------- Contoh Penggunaan Array --------------------------------------\n"
);

/*
1. Array Sederhana (Basic)
*/

console.log("1. Array Sederhana\n");

let names: string[] = ["Michael", "Sarah", "Anthony"];

console.log(names);
// Output: ["Michael", "Sarah", "Anthony"]

console.log("\n");

/*
2. Mengakses nilai dalam Array
*/

console.log("2. Mengakses Nilai Array\n");

console.log(names[0]); // Output: Michael
console.log(names[1]); // Output: Sarah

console.log("\n");

/*
3. Menambahkan nilai ke Array (push)
*/

console.log("3. Menambahkan Nilai (push)\n");

names.push("Jennifer");
console.log(names);
// Output: ["Michael", "Sarah", "Anthony", "Jennifer"]

console.log("\n");

/*
4. Array Number (Angka)
*/

console.log("4. Array Number\n");

let scores: number[] = [90, 82, 75];

console.log(scores);
// Output: [90, 82, 75]

console.log("\n");

/*
5. Array Campuran menggunakan Union
*/

console.log("5. Array Campuran (Union Type)\n");

let mixedValues: (string | number)[] = ["Laptop", 1500, "Tablet", 800];

console.log(mixedValues);
// Output: ["Laptop", 1500, "Tablet", 800]

console.log("\n");

/*
6. Looping Array menggunakan for-of
*/

console.log("6. Looping Array (for-of)\n");

for (let user of names) {
  console.log(`User: ${user}`);
  // Output: User: Michael, User: Sarah, dst.
}

console.log("\n");

/*
7. Mapping Array (umum di React/Next.js)
*/

console.log("7. Mapping Array\n");

let users: string[] = ["Alice", "Robert", "Edward"];

let userList = users.map((user) => `Hello, ${user}!`);

console.log(userList);
// Output: ["Hello, Alice!", "Hello, Robert!", "Hello, Edward!"]

console.log("\n");

/*
8. Array of Object (paling umum dalam web development)
*/

console.log("8. Array of Object\n");

let products: { id: number; name: string; price: number }[] = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Keyboard", price: 150 },
];

console.log(products);
/*
Output:
[
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Keyboard", price: 150 }
]
*/

console.log("\n");

/*
9. Filtering Array (umum untuk search, pencarian data)
*/

console.log("9. Filtering Array\n");

let expensiveProducts = products.filter((p) => p.price > 500);

console.log(expensiveProducts);
/*
Output:
[
  { id: 1, name: "Laptop", price: 1200 }
]
*/

console.log("\n");

/*
10. Find dalam Array (mencari data pertama)
*/

console.log("10. Find dalam Array\n");

let foundProduct = products.find((p) => p.name === "Laptop");

console.log(foundProduct);
/*
Output:
{ id: 1, name: "Laptop", price: 1200 }
*/

console.log("\n");

/*
11. Array dengan Generic Type
*/

console.log("11. Array dengan Generic Type\n");

let tags: Array<string> = ["tech", "news", "web"];

console.log(tags);
// Output: ["tech", "news", "web"]

console.log("\n");

/*
12. Tuple (Array dengan panjang dan tipe tetap)
*/

console.log("12. Tuple (Fixed Type Array)\n");

let userTuple: [string, number] = ["Daniel", 28];

console.log(userTuple);
// Output: ["Daniel", 28]

console.log("\n");

/*
13. Readonly Array (tidak bisa diubah)
*/

console.log("13. Readonly Array\n");

let roles: readonly string[] = ["admin", "editor", "viewer"];

console.log(roles);
// Output: ["admin", "editor", "viewer"]

// roles.push("owner"); ❌ ERROR: readonly tidak boleh diubah

console.log("\n");

/*
14. Array untuk menyimpan daftar route (contoh Next.js)
*/

console.log("14. Array Route (Web Development)\n");

let routes: string[] = ["/", "/login", "/dashboard", "/products"];

console.log(routes);
// Output: ["/", "/login", "/dashboard", "/products"]

console.log("\n");

/*
15. Array Rendering HTML (Frontend)
*/

console.log("15. Array Rendering HTML\n");

let htmlList = users.map((user) => `<li>${user}</li>`).join("");

console.log(`<ul>${htmlList}</ul>`);
/*
Output:
<ul>
  <li>Alice</li>
  <li>Robert</li>
  <li>Edward</li>
</ul>
*/

console.log("\n");

/*
16. Fungsi yang Mengembalikan Array
*/

console.log("16. Fungsi Mengembalikan Array\n");

function getUsernames(): string[] {
  return ["Oliver", "Henry", "Lucas"];
}

console.log(getUsernames());
// Output: ["Oliver", "Henry", "Lucas"]

console.log("\n");
