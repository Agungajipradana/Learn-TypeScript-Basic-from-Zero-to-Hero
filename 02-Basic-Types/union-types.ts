// Membuat file ini menjadi module agar variabel tidak bentrok dengan file lain
export {};

/*
Union Types adalah fitur TypeScript yang memungkinkan sebuah variabel memiliki
lebih dari satu tipe data. Ini sangat berguna dalam pengembangan web, terutama pada:

- Input dari user (bisa string atau number)
- API response (bisa sukses atau error)
- Form data
- State management (React/Next.js)
- Parameter yang fleksibel tapi tetap aman (type-safe)

Union ditulis menggunakan simbol "|".
*/

console.log(
  "------------------------------------------- Contoh Penggunaan Union Types -------------------------------------------\n"
);

/*
1. Union Type Sederhana
*/

console.log("1. Union Type Sederhana\n");

let userId: string | number = 101;

console.log(userId); // Output: 101

userId = "USR-202";
console.log(userId); // Output: USR-202

console.log("\n");

/*
2. Union Type pada Variabel User Input
*/

console.log("2. Union Type pada User Input\n");

let ageOrMessage: number | string = 25;

console.log(ageOrMessage); // Output: 25

ageOrMessage = "Age is not provided";
console.log(ageOrMessage); // Output: Age is not provided

console.log("\n");

/*
3. Union Type pada Function Parameter
*/

console.log("3. Union Type pada Function Parameter\n");

function formatPrice(price: number | string): string {
  return `$${price}`;
}

console.log(formatPrice(150));
// Output: $150

console.log(formatPrice("199.99"));
// Output: $199.99

console.log("\n");

/*
4. Union Type untuk Role User (Kasus Web)
*/

console.log("4. Union Type untuk Role User (Web Case)\n");

type UserRole = "admin" | "editor" | "viewer";

let currentRole: UserRole = "viewer";

console.log(currentRole); // Output: viewer

currentRole = "admin";
console.log(currentRole); // Output: admin

console.log("\n");

/*
5. Union Type dalam Kondisi (if-else)
*/

console.log("5. Union Type dalam Kondisi\n");

function checkPermission(role: UserRole) {
  if (role === "admin") {
    console.log("Full access granted.");
  } else if (role === "editor") {
    console.log("Editor access granted.");
  } else {
    console.log("Viewer access granted.");
  }
}

checkPermission("editor");
// Output: Editor access granted.

console.log("\n");

/*
6. Union untuk Validasi Form (Web Development)
*/

console.log("6. Union untuk Validasi Form\n");

let phoneNumber: string | null = null;

console.log(phoneNumber); // Output: null

phoneNumber = "+1-202-553-4480";

console.log(phoneNumber);
// Output: +1-202-553-4480

console.log("\n");

/*
7. Union Type pada API Response (Sederhana)
*/

console.log("7. Union Type pada API Response\n");

type ApiResponse = string | { message: string; status: number };

let successResponse: ApiResponse = {
  message: "User created successfully.",
  status: 200,
};

let errorResponse: ApiResponse = "Something went wrong";

console.log(successResponse);
// Output: { message: 'User created successfully.', status: 200 }

console.log(errorResponse);
// Output: Something went wrong

console.log("\n");

/*
8. Union Type pada Array (Mix Data)
*/

console.log("8. Union Type pada Array\n");

let mixedArray: (string | number)[] = ["James", 27, "Software Engineer", 9000];

console.log(mixedArray);
// Output: ["James", 27, "Software Engineer", 9000]

console.log("\n");

/*
9. Union untuk Query Params (Next.js / Web)
*/

console.log("9. Union Type untuk Query Params (Web)\n");

function parsePageParam(page: string | number): number {
  if (typeof page === "string") {
    return parseInt(page);
  }
  return page;
}

console.log(parsePageParam("5")); // Output: 5
console.log(parsePageParam(3)); // Output: 3

console.log("\n");

/*
10. Nested Union Types (Level Lanjut)
*/

console.log("10. Union Type Tingkat Lanjut\n");

type LoginResult =
  | { status: "success"; token: string }
  | { status: "error"; message: string }
  | "network-error";

function login(username: string, password: string): LoginResult {
  if (username === "David" && password === "12345") {
    return { status: "success", token: "TOKEN-ABC-123" };
  }
  return { status: "error", message: "Invalid credentials" };
}

console.log(login("David", "12345"));
// Output: { status: 'success', token: 'TOKEN-ABC-123' }

console.log(login("Lucas", "wrongpass"));
// Output: { status: 'error', message: 'Invalid credentials' }

console.log("\n");

/*
11. Union Type untuk State Management (React/Next.js)
*/

console.log("11. Union Type untuk State Management\n");

type Theme = "light" | "dark" | "system";

let appTheme: Theme = "light";

console.log(appTheme); // Output: light

appTheme = "system";
console.log(appTheme); // Output: system

console.log("\n");

/*
12. Function Return Type dengan Union (Advanced)
*/

console.log("12. Union pada Function Return Type\n");

function getUser(id: number): string | { id: number; name: string } {
  if (id === 1) {
    return { id: 1, name: "Robert" };
  }
  return "User not found";
}

console.log(getUser(1));
// Output: { id: 1, name: 'Robert' }

console.log(getUser(99));
// Output: User not found

console.log("\n");
