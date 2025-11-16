// Membuat file ini menjadi module agar variabel tidak bentrok dengan file lain
export {};

/*
String adalah tipe data dalam TypeScript yang digunakan untuk menyimpan teks.
Tipe data ini sangat umum digunakan dalam pengembangan web, seperti menyimpan 
nama user, email, URL, route, pesan, dan teks tampilan.

Ciri-ciri Tipe Data String:
    1. Menggunakan tanda kutip tunggal (' '), kutip ganda (" "), atau template literal (` `)
    2. Dapat menggabungkan teks dan variabel
    3. Banyak digunakan di frontend (React/Next.js) dan backend (Node.js)
*/

console.log(
  "------------------------------------------- Contoh Penggunaan String --------------------------------------\n"
);

/*
1. Mendefinisikan String secara Sederhana
*/

console.log("1. Mendefinisikan String secara Sederhana\n");

let firstName: string = "Michael";
let lastName: string = "Douglas";
let city: string = "New York";

console.log(firstName); // Output: Michael
console.log(lastName); // Output: Douglas
console.log(city); // Output: New York

console.log("\n");

/*
2. Menggabungkan String (Concatenation)
*/

console.log("2. Menggabungkan String (Concatenation)\n");

let fullName = firstName + " " + lastName;
let greeting = "Hello, my name is " + fullName;

console.log(fullName); // Output: Michael Douglas
console.log(greeting); // Output: Hello, my name is Michael Douglas

console.log("\n");

/*
3. Template Literal (Cara Modern)
*/

console.log("3. Template Literal (Cara Modern)\n");

let country = "United States";
let introMessage = `Hello, my name is ${fullName} and I live in ${country}.`;

console.log(introMessage);
// Output: Hello, my name is Michael Douglas and I live in United States.

console.log("\n");

/*
4. String untuk Keperluan Web (URL, Query Params, Route)
*/

console.log("4. String untuk Keperluan Web (URL, Query Params, Route)\n");

let baseUrl: string = "https://api.example.com";
let endpoint: string = "/users";
let userId: string = "152";

let finalUrl = `${baseUrl}${endpoint}/${userId}`;

console.log(finalUrl);
// Output: https://api.example.com/users/152

console.log("\n");

/*
5. String Method Umum untuk manipulasi teks
*/

console.log("5. String Method Umum\n");

let productName: string = "   premium laptop   ";
let trimmed = productName.trim();
let upper = trimmed.toUpperCase();
let sliced = trimmed.slice(0, 7);
let replaced = trimmed.replace("premium", "exclusive");

console.log(trimmed); // Output: premium laptop
console.log(upper); // Output: PREMIUM LAPTOP
console.log(sliced); // Output: premium
console.log(replaced); // Output: exclusive laptop

console.log("\n");

/*
6. Validasi Input (Contoh kasus web)
*/

console.log("6. Validasi Input\n");

let email: string = "jennifer@example.com";
let isValidEmail = email.includes("@") && email.includes(".");

console.log(isValidEmail);
// Output: true

console.log("\n");

/*
7. String dalam Kondisi (if-else)
*/

console.log("7. String dalam Kondisi\n");

let role: string = "admin";

if (role === "admin") {
  console.log("Access granted for admin.");
} else {
  console.log("Access denied.");
}

// Output: Access granted for admin.

console.log("\n");

/*
8. Union Type untuk String
*/

console.log("8. Union Type untuk String\n");

let status: "draft" | "published" | "archived" = "draft";

console.log(status);
// Output: draft

status = "published";
console.log(status);
// Output: published

console.log("\n");

/*
9. String Literal Type (State yang fixed)
*/

console.log("9. String Literal Type\n");

type Theme = "light" | "dark";
let currentTheme: Theme = "light";

console.log(currentTheme);
// Output: light

currentTheme = "dark";
console.log(currentTheme);
// Output: dark

console.log("\n");

/*
10. Template Literal Type (Tingkat lanjut)
*/

console.log("10. Template Literal Type\n");

type UserID = `user-${number}`;
let newUserId: UserID = "user-321";

console.log(newUserId);
// Output: user-321

console.log("\n");

/*
11. Menggabungkan String untuk HTML Rendering (Frontend)
*/

console.log("11. HTML Rendering\n");

let userHtml = `
    <div>
        <h1>${fullName}</h1>
        <p>Lives in: ${city}, ${country}</p>
    </div>
`;

console.log(userHtml);
/*
Output:
    <div>
        <h1>Michael Douglas</h1>
        <p>Lives in: New York, United States</p>
    </div>
*/

console.log("\n");

/*
12. Fungsi yang Mengembalikan String
*/

console.log("12. Fungsi String\n");

function generateWelcome(name: string): string {
  return `Welcome to our platform, ${name}!`;
}

console.log(generateWelcome("Amanda"));
// Output: Welcome to our platform, Amanda!

console.log("\n");
