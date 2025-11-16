// Membuat file ini menjadi module agar variabel tidak bentrok dengan file lain
export {};

/*
null dan undefined adalah dua tipe data penting dalam TypeScript.

    undefined → Variabel sudah dideklarasikan tetapi belum memiliki nilai
    null      → Nilai yang sengaja dikosongkan oleh developer

Dalam pengembangan web:
    - undefined sering muncul ketika API belum selesai atau data belum tersedia
    - null digunakan untuk "reset state" atau data yang belum diisi

Catatan:
    TypeScript dapat lebih ketat jika strictNullChecks diaktifkan.
*/

console.log(
  "------------------------------------------- Contoh Penggunaan null & undefined -------------------------------------------\n"
);

/*
1. Variabel undefined (otomatis)
*/

console.log("1. Variabel undefined\n");

let username: string | undefined;

console.log(username);
// Output: undefined

console.log("\n");

/*
2. Memberikan nilai null pada variabel
*/

console.log("2. Memberikan nilai null\n");

let selectedProduct: string | null = null;

console.log(selectedProduct);
// Output: null

console.log("\n");

/*
3. Mengisi nilai setelah null (umum pada form)
*/

console.log("3. Mengisi nilai setelah null\n");

selectedProduct = "Premium Keyboard";

console.log(selectedProduct);
// Output: Premium Keyboard

console.log("\n");

/*
4. Fungsi yang mungkin mengembalikan undefined (data belum tersedia)
*/

console.log("4. Fungsi dengan kemungkinan undefined\n");

function getUserEmail(isAvailable: boolean): string | undefined {
  if (isAvailable) {
    return "michael@example.com";
  }
  return undefined;
}

console.log(getUserEmail(true)); // Output: michael@example.com
console.log(getUserEmail(false)); // Output: undefined

console.log("\n");

/*
5. null dalam kondisi untuk validasi form
*/

console.log("5. null pada Validasi Form\n");

let phoneNumber: string | null = null;

if (phoneNumber === null) {
  console.log("Phone number still empty.");
} else {
  console.log("Phone number:", phoneNumber);
}

// Output: Phone number still empty.

console.log("\n");

/*
6. undefined saat memeriksa optional value
*/

console.log("6. undefined ketika memeriksa optional value\n");

interface UserProfile {
  name: string;
  age?: number; // optional
}

const profileJohn: UserProfile = {
  name: "John",
};

console.log(profileJohn.age);
// Output: undefined

console.log("\n");

/*
7. null untuk reset state (Frontend)
*/

console.log("7. null untuk reset state\n");

let activeMenu: string | null = "Dashboard";

console.log(activeMenu); // Output: Dashboard
activeMenu = null;
console.log(activeMenu); // Output: null

console.log("\n");

/*
8. undefined untuk data API yang belum selesai di-load
*/

console.log("8. undefined ketika API belum load\n");

let apiResponse: string | undefined;

console.log(apiResponse);
// Output: undefined

apiResponse = "Data loaded successfully";

console.log(apiResponse);
// Output: Data loaded successfully

console.log("\n");

/*
9. Nullish Coalescing Operator (??)
Digunakan untuk memberi nilai default jika null atau undefined.
*/

console.log("9. Nullish Coalescing Operator (??)\n");

let userTheme: string | null = null;

let appliedTheme = userTheme ?? "light";

console.log(appliedTheme);
// Output: light

console.log("\n");

/*
10. Optional Chaining Operator (?.)
Digunakan untuk mengakses data yang mungkin undefined.
*/

console.log("10. Optional Chaining (?.)\n");

type UserSettings = {
  preferences?: {
    language: string;
    notifications?: {
      email?: boolean;
    };
  };
};

const userSettings: UserSettings = {
  preferences: {
    language: "English",
    // notifications tidak ada → undefined
  },
};

console.log(userSettings.preferences?.language);
// Output: English

console.log(userSettings.preferences?.notifications?.email);
// Output: undefined

console.log("\n");

/*
11. Kombo null + undefined untuk Web API
*/

console.log("11. null & undefined pada API Response\n");

interface ApiUser {
  id: number;
  email: string | null; // bisa null jika belum diverifikasi
  phone?: string; // optional (bisa undefined)
}

const userAlex: ApiUser = {
  id: 1,
  email: null, // user belum verifikasi email
};

console.log(userAlex.email); // Output: null
console.log(userAlex.phone); // Output: undefined

console.log("\n");

/*
12. Fungsi yang mengembalikan null saat data tidak ditemukan
*/

console.log("12. Fungsi dengan Return null\n");

function findUserById(id: number): string | null {
  const mockUsers: Record<number, string> = {
    1: "Emily",
    2: "Robert",
  };

  return mockUsers[id] ?? null;
}

console.log(findUserById(1)); // Output: Emily
console.log(findUserById(5)); // Output: null

console.log("\n");

/*
13. Simulasi Form Handling (Paling lengkap)
*/

console.log("13. Simulasi Form Handling\n");

let formEmail: string | null = null;
let formPassword: string | undefined;

console.log(formEmail);
// Output: null

console.log(formPassword);
// Output: undefined

formEmail = "adam@example.com";
formPassword = "secret123";

if (formEmail && formPassword) {
  console.log("Form ready to submit.");
} else {
  console.log("Form not complete.");
}

// Output: Form ready to submit.

console.log("\n");
