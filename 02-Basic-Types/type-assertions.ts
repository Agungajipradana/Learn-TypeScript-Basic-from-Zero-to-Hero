// Membuat file ini menjadi module agar variabel tidak bentrok dengan file lain
export {};

/*
Type Assertions adalah fitur TypeScript yang digunakan ketika developer
"meyakinkan" compiler bahwa sebuah nilai memiliki tipe tertentu.

TypeScript tidak mengubah data di runtime — hanya memberi tahu compiler.

Kapan digunakan?
  1. Ketika hasil API tidak jelas tipe-nya
  2. Saat mengakses elemen DOM di frontend
  3. Ketika developer tahu lebih baik daripada TypeScript
  4. Untuk mempersempit tipe yang terlalu umum (any / unknown)

Dua cara penulisan:
  - Menggunakan "as" (rekomendasi)
  - Menggunakan angle bracket <T> (tidak boleh pada JSX)
*/

console.log(
  "------------------------------------------- Contoh Penggunaan Type Assertions --------------------------------------\n"
);

/*
1. Type Assertions Sederhana (Mengubah tipe any → string)
*/

console.log("1. Type Assertions Sederhana\n");

let rawValue: any = "Hello World";
let textLength = (rawValue as string).length;

console.log(textLength);
// Output: 11

console.log("\n");

/*
2. Percaya diri bahwa data API pasti string
*/

console.log("2. Assertions pada Hasil API\n");

let apiResponse: any = "David Johnson";
let userName = apiResponse as string;

console.log(userName);
// Output: David Johnson

console.log("\n");

/*
3. Assertions untuk DOM (Frontend: React/Next.js/Vanilla JS)
*/

console.log("3. Assertions untuk DOM\n");

// Simulasi element DOM
// (di browser hasilnya akan berupa objek HTML element)
let element = document.createElement("input");

let inputElement = element as HTMLInputElement;
inputElement.value = "Hello User";

console.log(inputElement.value);
// Output: Hello User

console.log("\n");

/*
4. Assertions untuk Object Literal (API JSON)
*/

console.log("4. Assertions untuk API JSON\n");

let jsonData: unknown = JSON.parse(`{
  "name": "Amanda Brown",
  "age": 27
}`);

interface User {
  name: string;
  age: number;
}

let userData = jsonData as User;

console.log(userData.name);
// Output: Amanda Brown

console.log("\n");

/*
5. Assertions untuk Narrowing (unknown → number)
*/

console.log("5. Assertions dari unknown\n");

let value: unknown = 99;

let numValue = value as number;

console.log(numValue + 1);
// Output: 100

console.log("\n");

/*
6. Assertions pada Array (key API tidak jelas)
*/

console.log("6. Assertions pada Array\n");

let unknownItems: unknown = ["Laptop", "Mouse", "Keyboard"];

let productList = unknownItems as string[];

console.log(productList[1]);
// Output: Mouse

console.log("\n");

/*
7. Double Assertion (dangerous, tetapi berguna)
*/

console.log("7. Double Assertion (any → unknown → target)\n");

/*
Double assertion digunakan saat TypeScript "tidak mengizinkan secara langsung".

Contoh kasus di real web development:
  API return number, developer ingin memaksakan jadi string.
*/

let price: number = 1500;

// memaksa menjadi string
let forcedString = price as unknown as string;

console.log(forcedString);
// Output: 1500

console.log("\n");

/*
8. Assertions untuk Event (Frontend)
*/

console.log("8. Assertions untuk Event DOM\n");

let mockEvent = {
  target: {
    value: "john@example.com",
  },
};

let emailEvent = mockEvent as { target: { value: string } };

console.log(emailEvent.target.value);
// Output: john@example.com

console.log("\n");

/*
9. Assertions untuk Fetch API (menterjemahkan response)
*/

console.log("9. Assertions pada Fetch API\n");

// Simulasi fetch response JSON
let fakeApiResponse = JSON.parse(`
{
  "id": 101,
  "title": "Premium Headphones",
  "stock": 14
}
`);

interface Product {
  id: number;
  title: string;
  stock: number;
}

let productData = fakeApiResponse as Product;

console.log(productData.title);
// Output: Premium Headphones

console.log("\n");

/*
10. Assertion Ketika Menerima Data Multitype (union)
*/

console.log("10. Assertions pada Union Type\n");

let mixedValue: string | number = "250";

// meyakinkan bahwa ini string
let confirmedString = mixedValue as string;
console.log(confirmedString.toUpperCase());
// Output: 250

console.log("\n");

/*
11. Assertion untuk memastikan tipe file upload
(umum di Next.js, React, Express)
*/

console.log("11. Assertions pada File Upload\n");

let uploadedFile: any = {
  name: "profile.png",
  size: 2048,
  type: "image/png",
};

interface UploadFile {
  name: string;
  size: number;
  type: string;
}

let fileData = uploadedFile as UploadFile;

console.log(fileData.type);
// Output: image/png

console.log("\n");

/*
12. Assertions Kompleks: DOM + API + Union
*/

console.log("12. Contoh Assertions Kompleks\n");

/*
Kasus:
  Developer mengambil value dari input DOM,
  lalu mengirim ke API sebagai tipe number.
*/

let priceInput = document.createElement("input");
priceInput.value = "450";

let inputPrice = priceInput as HTMLInputElement;

// convert string → number
let finalPrice = Number(inputPrice.value as string);

console.log(finalPrice);
// Output: 450

console.log("\n");

/*
13. Assertions untuk State Management (mirip Redux / Zustand)
*/

console.log("13. Assertions pada State Management\n");

type State = {
  user: unknown;
};

let appState: State = {
  user: {
    name: "Melissa Carter",
    email: "melissa@example.com",
  },
};

let userState = appState.user as { name: string; email: string };

console.log(userState.email);
// Output: melissa@example.com

console.log("\n");

/*
14. Assertions untuk Form Validation (Frontend)
*/

console.log("14. Assertions pada Form Validation\n");

let formData: any = {
  email: "alex@example.com",
  age: "28",
};

interface Form {
  email: string;
  age: string;
}

let validatedForm = formData as Form;

console.log(validatedForm.age);
// Output: 28 (string)

console.log("\n");
