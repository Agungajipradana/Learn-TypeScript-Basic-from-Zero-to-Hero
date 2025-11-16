// Membuat file ini menjadi module agar variabel tidak bentrok dengan file lain
export {};

/*
Literal Types adalah fitur TypeScript yang memungkinkan sebuah variabel
hanya memiliki nilai tertentu (fixed value). Sangat berguna untuk:

    - State management (light/dark mode)
    - Role system (admin/editor/user)
    - Status API (success/error/loading)
    - HTTP methods (GET, POST, PUT)
    - Validasi nilai agar tidak salah input

Literal Types memastikan aplikasi lebih aman, prediktif, dan bebas typo.
*/

console.log(
  "------------------------------------------- Contoh Penggunaan Literal Types -------------------------------------------\n"
);

/*
1. Literal Type Sederhana (String Literal)
*/

console.log("1. Literal Type Sederhana (String Literal)\n");

let direction: "left" | "right" = "left";

console.log(direction); // Output: left

direction = "right";
console.log(direction); // Output: right

console.log("\n");

/*
2. Literal Number (Angka tetap)
*/

console.log("2. Literal Number (Angka Tetap)\n");

let maxRetry: 3 | 5 | 7 = 3;

console.log(maxRetry); // Output: 3

maxRetry = 7;
console.log(maxRetry); // Output: 7

console.log("\n");

/*
3. Literal Boolean (Kondisi yang sudah fixed)
*/

console.log("3. Literal Boolean\n");

let isActive: true | false = true;

console.log(isActive); // Output: true

isActive = false;
console.log(isActive); // Output: false

console.log("\n");

/*
4. Literal Type untuk Role User (Umum di Web App)
*/

console.log("4. Literal Type untuk User Role\n");

type UserRole = "admin" | "editor" | "viewer";

let roleJohn: UserRole = "editor";

console.log(roleJohn); // Output: editor

roleJohn = "admin";
console.log(roleJohn); // Output: admin

console.log("\n");

/*
5. Literal Type untuk Status Halaman (Loading, Error, Success)
*/

console.log("5. Literal Type untuk Page Status\n");

type PageStatus = "loading" | "error" | "success";

let currentStatus: PageStatus = "loading";

console.log(currentStatus); // Output: loading

currentStatus = "success";
console.log(currentStatus); // Output: success

console.log("\n");

/*
6. Literal Type pada HTTP Methods (Frontend/Backend)
*/

console.log("6. HTTP Method Literal\n");

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

let requestMethod: HttpMethod = "GET";

console.log(requestMethod); // Output: GET

requestMethod = "POST";
console.log(requestMethod); // Output: POST

console.log("\n");

/*
7. Literal untuk Endpoint API (Relevan untuk Web Development)
*/

console.log("7. Literal Type untuk API Endpoint\n");

type ApiEndpoint = "/users" | "/products" | "/orders";

let endpoint: ApiEndpoint = "/users";

console.log(endpoint); // Output: /users

endpoint = "/products";
console.log(endpoint); // Output: /products

console.log("\n");

/*
8. Strict Theme Mode (Umum di UI seperti Next.js)
*/

console.log("8. Theme Mode\n");

type Theme = "light" | "dark";

let activeTheme: Theme = "light";

console.log(activeTheme); // Output: light

activeTheme = "dark";
console.log(activeTheme); // Output: dark

console.log("\n");

/*
9. Literal Type untuk Navigation (Next.js Routing)
*/

console.log("9. Navigation Literal\n");

type Route = "/home" | "/dashboard" | "/profile";

let currentRoute: Route = "/home";

console.log(currentRoute); // Output: /home

currentRoute = "/dashboard";
console.log(currentRoute); // Output: /dashboard

console.log("\n");

/*
10. Template Literal Type (String Pola Khusus)
*/

console.log("10. Template Literal Type\n");

type UserID = `user-${number}`;

let newUserId: UserID = "user-42";

console.log(newUserId); // Output: user-42

console.log("\n");

/*
11. Template Literal Type untuk API Key Format
*/

console.log("11. Template Literal untuk API Key\n");

type ApiKey = `key-${string}-${number}`;

let clientApiKey: ApiKey = "key-production-2024";

console.log(clientApiKey); // Output: key-production-2024

console.log("\n");

/*
12. Template Literal Type untuk CSS Class di Frontend
*/

console.log("12. Template Literal untuk CSS Class\n");

type ButtonVariant = `btn-${"primary" | "secondary" | "danger"}`;

let loginButton: ButtonVariant = "btn-primary";

console.log(loginButton); // Output: btn-primary

console.log("\n");

/*
13. Kombinasi Literal + Union Type (Level Tinggi)
*/

console.log("13. Kombinasi Literal + Union\n");

type NotificationType = "success" | "warning" | "error";
type NotificationMessage = `notify-${NotificationType}`;

let notif: NotificationMessage = "notify-success";

console.log(notif); // Output: notify-success

console.log("\n");

/*
14. Fungsi dengan Literal Types (Validasi Input Lebih Ketat)
*/

console.log("14. Fungsi dengan Literal Types\n");

function setTheme(mode: "light" | "dark"): string {
  return `Theme changed to ${mode}`;
}

console.log(setTheme("light")); // Output: Theme changed to light
console.log(setTheme("dark")); // Output: Theme changed to dark

console.log("\n");

/*
15. Fungsi API Request dengan Literal Http Method (Relevan Web)
*/

console.log("15. Fungsi API Request Literal\n");

function request(method: "GET" | "POST", url: string): string {
  return `Request sent using ${method} to ${url}`;
}

console.log(request("GET", "/users"));
// Output: Request sent using GET to /users

console.log(request("POST", "/login"));
// Output: Request sent using POST to /login

console.log("\n");
