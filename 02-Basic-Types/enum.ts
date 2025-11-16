// Membuat file ini menjadi module agar variabel tidak bentrok dengan file lain
export {};

/*
Enum adalah fitur TypeScript yang digunakan untuk membuat sekumpulan nilai tetap (constant values).
Enum sering dipakai dalam pengembangan web untuk mendefinisikan:
    - Role user (admin, editor, viewer)
    - Status order (pending, paid, shipped)
    - Tipe event
    - Tipe action di frontend atau backend

Ciri-ciri Enum:
    1. Menghasilkan value numerik (default) atau string (string enum)
    2. Lebih aman daripada string biasa karena menghindari typo
    3. Banyak digunakan untuk state management (React, Next.js), dan backend API
*/

console.log(
  "------------------------------------------- Contoh Penggunaan Enum -------------------------------------------\n"
);

/*
1. Enum Sederhana (Numeric Enum)
*/

console.log("1. Enum Sederhana (Numeric Enum)\n");

enum UserRole {
  ADMIN,
  EDITOR,
  VIEWER,
}

let roleJohn: UserRole = UserRole.EDITOR;
let roleAlice: UserRole = UserRole.ADMIN;

console.log(roleJohn); // Output: 1
console.log(roleAlice); // Output: 0

console.log("\n");

/*
2. Memeriksa Role Menggunakan Enum
*/

console.log("2. Memeriksa Role Menggunakan Enum\n");

if (roleJohn === UserRole.EDITOR) {
  console.log("John has Editor access.");
  // Output: John has Editor access.
}

if (roleAlice === UserRole.ADMIN) {
  console.log("Alice has Admin access.");
  // Output: Alice has Admin access.
}

console.log("\n");

/*
3. Enum dengan Nilai String (String Enum)
*/

console.log("3. String Enum\n");

enum OrderStatus {
  PENDING = "pending",
  PAID = "paid",
  SHIPPED = "shipped",
  DELIVERED = "delivered",
}

let orderStatus: OrderStatus = OrderStatus.PAID;

console.log(orderStatus);
// Output: paid

console.log("\n");

/*
4. Enum untuk Role Management (Kasus Web Modern)
*/

console.log("4. Enum untuk Role Management (Web Case)\n");

function checkAccess(role: UserRole): string {
  if (role === UserRole.ADMIN) {
    return "Full access granted.";
  } else if (role === UserRole.EDITOR) {
    return "Editor access granted.";
  } else {
    return "Viewer access granted.";
  }
}

console.log(checkAccess(UserRole.VIEWER));
// Output: Viewer access granted.

console.log("\n");

/*
5. Enum untuk HTTP Status (Dipakai Backend)
*/

console.log("5. Enum untuk HTTP Status\n");

enum HttpStatus {
  OK = 200,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  INTERNAL_ERROR = 500,
}

let apiResponseStatus: HttpStatus = HttpStatus.OK;

console.log(apiResponseStatus);
// Output: 200

console.log("\n");

/*
6. Enum dalam Switch Case (Frontend & Backend)
*/

console.log("6. Enum dalam Switch Case\n");

function handleOrder(status: OrderStatus) {
  switch (status) {
    case OrderStatus.PENDING:
      console.log("Order masih menunggu pembayaran.");
      break;
    case OrderStatus.PAID:
      console.log("Order sudah dibayar, sedang diproses.");
      break;
    case OrderStatus.SHIPPED:
      console.log("Order sedang dikirim.");
      break;
    case OrderStatus.DELIVERED:
      console.log("Order sudah diterima.");
      break;
  }
}

handleOrder(OrderStatus.SHIPPED);
// Output: Order sedang dikirim.

console.log("\n");

/*
7. Enum sebagai Key Dictionary (Useful di Frontend)
*/

console.log("7. Enum sebagai Key Dictionary\n");

const pageRoutes = {
  [UserRole.ADMIN]: "/admin/dashboard",
  [UserRole.EDITOR]: "/editor/articles",
  [UserRole.VIEWER]: "/home",
};

console.log(pageRoutes[UserRole.ADMIN]);
// Output: /admin/dashboard

console.log("\n");

/*
8. Enum untuk State Management (React/Next.js)
*/

console.log("8. Enum untuk State Management (Frontend)\n");

enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

let currentTheme: Theme = Theme.LIGHT;

console.log(currentTheme);
// Output: light

currentTheme = Theme.DARK;

console.log(currentTheme);
// Output: dark

console.log("\n");

/*
9. Enum String yang Lebih Kompleks (Real API Case)
*/

console.log("9. Enum untuk API Response Type\n");

enum ApiResponseType {
  SUCCESS = "success",
  FAILED = "failed",
  UNAUTHORIZED = "unauthorized",
}

function showMessage(type: ApiResponseType) {
  return `API response status: ${type}`;
}

console.log(showMessage(ApiResponseType.SUCCESS));
// Output: API response status: success

console.log("\n");

/*
10. Enum Digabung dengan Function (Level Lanjut)
*/

console.log("10. Enum Digabung dengan Function (Advanced)\n");

function getStatusColor(status: OrderStatus): string {
  if (status === OrderStatus.PENDING) return "yellow";
  if (status === OrderStatus.PAID) return "blue";
  if (status === OrderStatus.SHIPPED) return "purple";
  return "green";
}

console.log(getStatusColor(OrderStatus.DELIVERED));
// Output: green

console.log("\n");
