// Membuat file ini menjadi module agar variabel tidak bentrok dengan file lain
export {};

/*
Boolean adalah tipe data dalam TypeScript yang hanya memiliki dua nilai:
    - true
    - false

Tipe data ini sangat sering digunakan dalam pengembangan web, misalnya:
    - Mengecek apakah user sudah login
    - Mengecek apakah data valid
    - Mengatur state UI (loading, open/close modal)
    - Menentukan hasil kondisi dalam logika aplikasi
*/

console.log(
  "------------------------------------------- Contoh Penggunaan Boolean --------------------------------------\n"
);

/*
1. Boolean Sederhana
*/

console.log("1. Boolean Sederhana\n");

let isOnline: boolean = true;
let isSubscribed: boolean = false;

console.log(isOnline); // Output: true
console.log(isSubscribed); // Output: false

console.log("\n");

/*
2. Boolean dari Operator Perbandingan
*/

console.log("2. Boolean dari Operator Perbandingan\n");

let age: number = 21;
let isAdult: boolean = age >= 18;

console.log(isAdult); // Output: true

console.log("\n");

/*
3. Boolean dalam Kondisi if-else
*/

console.log("3. Boolean dalam Kondisi\n");

let isAdmin: boolean = true;

if (isAdmin) {
  console.log("Access granted for admin.");
} else {
  console.log("Access denied.");
}

// Output: Access granted for admin.

console.log("\n");

/*
4. Boolean pada Validasi Form (Web)
*/

console.log("4. Boolean pada Validasi Form (Web)\n");

let email: string = "robert@example.com";
let isValidEmail: boolean = email.includes("@") && email.endsWith(".com");

console.log(isValidEmail); // Output: true

console.log("\n");

/*
5. Boolean untuk Menentukan State UI (Frontend)
*/

console.log("5. Boolean untuk UI State\n");

let isModalOpen: boolean = false;

// Membuka modal
isModalOpen = true;

console.log(isModalOpen); // Output: true

// Menutup modal
isModalOpen = false;

console.log(isModalOpen); // Output: false

console.log("\n");

/*
6. Boolean dari Fungsi
*/

console.log("6. Boolean dari Fungsi\n");

function isPasswordStrong(password: string): boolean {
  return password.length >= 8 && password.includes("@");
}

console.log(isPasswordStrong("Weak123")); // Output: false
console.log(isPasswordStrong("Super@123")); // Output: true

console.log("\n");

/*
7. Boolean dengan Logical Operators (AND, OR, NOT)
*/

console.log("7. Logical Operators\n");

let hasAccount: boolean = true;
let hasVerifiedEmail: boolean = false;

let canLogin = hasAccount && hasVerifiedEmail;
let canShowBanner = !hasVerifiedEmail;

console.log(canLogin); // Output: false
console.log(canShowBanner); // Output: true

console.log("\n");

/*
8. Boolean pada API Response Check (Backend/Frontend)
*/

console.log("8. Boolean pada API Response\n");

let responseStatus: number = 200;
let isSuccess: boolean = responseStatus === 200;

console.log(isSuccess); // Output: true

console.log("\n");

/*
9. Boolean dalam Ternary Operator
*/

console.log("9. Boolean dalam Ternary Operator\n");

let loggedIn: boolean = true;
let message = loggedIn ? "Welcome back!" : "Please log in.";

console.log(message); // Output: Welcome back!

console.log("\n");

/*
10. Boolean dalam Filtering Data (Contoh real web)
*/

console.log("10. Filtering Data\n");

let users = [
  { name: "Daniel", active: true },
  { name: "Sarah", active: false },
  { name: "Kevin", active: true },
];

let activeUsers = users.filter((u) => u.active === true);

console.log(activeUsers);
// Output: [ { name: 'Daniel', active: true }, { name: 'Kevin', active: true } ]

console.log("\n");

/*
11. Boolean dengan Union Type
*/

console.log("11. Boolean dengan Union Type\n");

let toggle: boolean | "loading" = true;

console.log(toggle); // Output: true

toggle = "loading";

console.log(toggle); // Output: loading

console.log("\n");

/*
12. Optional Boolean (sering digunakan di React/Next.js)
*/

console.log("12. Optional Boolean\n");

function showNotification(message: string, isVisible?: boolean) {
  if (isVisible) {
    console.log("Notification:", message);
  } else {
    console.log("Notification hidden.");
  }
}

showNotification("New message received!", true); // Output: Notification: New message received!
showNotification("Update available!"); // Output: Notification hidden.

console.log("\n");

/*
13. Strict Boolean di TypeScript (Tingkat lanjut)
*/

console.log("13. Strict Boolean\n");

let isLoading: boolean = Boolean(1); // 1 → true

console.log(isLoading); // Output: true

// boolean vs Boolean (wrapper object) — perbedaan penting untuk TS
let x: boolean = true;
// let y: Boolean = new Boolean(false);  // Tidak direkomendasikan dalam TypeScript

console.log("\n");
