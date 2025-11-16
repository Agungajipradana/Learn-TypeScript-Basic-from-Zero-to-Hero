// Membuat file ini menjadi module agar variabel tidak bentrok dengan file lain
export {};

/*
Practical Example digunakan untuk menggabungkan beberapa tipe data menjadi
sebuah kasus nyata. Dalam pengembangan web, kita sering menemukan data yang
berisi kombinasi string, number, boolean, array, object, union type, dan function.

*/

console.log(
  "-------------------------------- Praktical Example (Menggabungkan Beberapa Tipe) ------------------------------\n"
);

/*
1. Data User Sederhana (string + number)
*/

console.log("1. Data User Sederhana\n");

let userName: string = "Jonathan";
let userAge: number = 28;

console.log(userName); // Output: Jonathan
console.log(userAge); // Output: 28

console.log("\n");

/*
2. Data Product (string + number + boolean)
*/

console.log("2. Data Product Sederhana\n");

let productTitle: string = "Wireless Mouse";
let productPrice: number = 29.99;
let isAvailable: boolean = true;

console.log(productTitle); // Output: Wireless Mouse
console.log(productPrice); // Output: 29.99
console.log(isAvailable); // Output: true

console.log("\n");

/*
3. User dengan Address (object + string + number)
*/

console.log("3. User dengan Address\n");

let user = {
  fullName: "Richard Parker",
  email: "richard@example.com",
  address: {
    street: "Sunset Boulevard",
    number: 77,
    city: "Los Angeles",
  },
};

console.log(user);
/*
Output:
{
  fullName: 'Richard Parker',
  email: 'richard@example.com',
  address: { street: 'Sunset Boulevard', number: 77, city: 'Los Angeles' }
}
*/

console.log("\n");

/*
4. List Product (array of string)
*/

console.log("4. List Product (Array)\n");

let categories: string[] = ["Electronics", "Home", "Accessories"];

console.log(categories);
// Output: ["Electronics", "Home", "Accessories"]

console.log("\n");

/*
5. Array of Objects (Data dari REST API)
*/

console.log("5. Array of Objects (Simulasi Data API)\n");

let users = [
  { id: 1, name: "Emily Watson", role: "admin" },
  { id: 2, name: "Robert Miles", role: "editor" },
  { id: 3, name: "Sarah Johnson", role: "viewer" },
];

console.log(users);
/*
Output:
[
  { id: 1, name: 'Emily Watson', role: 'admin' },
  { id: 2, name: 'Robert Miles', role: 'editor' },
  { id: 3, name: 'Sarah Johnson', role: 'viewer' }
]
*/

console.log("\n");

/*
6. Union Type (text atau number)
*/

console.log("6. Union Type\n");

let requestId: string | number = "req-7788";
console.log(requestId); // Output: req-7788

requestId = 7788;
console.log(requestId); // Output: 7788

console.log("\n");

/*
7. Function + Object (Mengembalikan Profil User)
*/

console.log("7. Function yang Mengembalikan Object\n");

function getUserProfile(name: string, age: number) {
  return {
    name,
    age,
    isAdult: age >= 18,
  };
}

console.log(getUserProfile("Daniel", 22));
/*
Output:
{ name: 'Daniel', age: 22, isAdult: true }
*/

console.log("\n");

/*
8. Type Alias (Standarisasi Struktur Data)
*/

console.log("8. Type Alias\n");

type Account = {
  username: string;
  password: string;
  isActive: boolean;
};

let adminAccount: Account = {
  username: "admin_master",
  password: "securePassword123",
  isActive: true,
};

console.log(adminAccount);
/*
Output:
{
  username: 'admin_master',
  password: 'securePassword123',
  isActive: true
}
*/

console.log("\n");

/*
9. Literal Type untuk Role (mencegah input salah)
*/

console.log("9. Literal Type untuk Role\n");

type Role = "admin" | "editor" | "viewer";

let currentRole: Role = "editor";
console.log(currentRole); // Output: editor

currentRole = "admin";
console.log(currentRole); // Output: admin

console.log("\n");

/*
10. Kombinasi Object + Array + Function (Simulasi Cart eCommerce)
*/

console.log("10. Simulasi Cart eCommerce\n");

type CartItem = {
  title: string;
  price: number;
  quantity: number;
};

let cart: CartItem[] = [
  { title: "Gaming Keyboard", price: 89.99, quantity: 1 },
  { title: "USB Hub", price: 19.99, quantity: 2 },
];

function calculateTotal(items: CartItem[]): number {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
}

console.log(cart);
/*
Output:
[
  { title: 'Gaming Keyboard', price: 89.99, quantity: 1 },
  { title: 'USB Hub', price: 19.99, quantity: 2 }
]
*/

console.log("Total:", calculateTotal(cart));
// Output: Total: 129.97

console.log("\n");

/*
11. Template Literal Type + Object (ID Generator)
*/

console.log("11. Template Literal Type\n");

type OrderID = `order-${number}`;

let newOrderId: OrderID = "order-9981";

console.log(newOrderId); // Output: order-9981

console.log("\n");

/*
12. Advanced Example: Fetch Simulation (Promise + Type)
*/

console.log("12. Simulasi Fetch API dengan Promise\n");

type ApiUser = {
  id: number;
  name: string;
  email: string;
};

function fetchUser(): Promise<ApiUser> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 101,
        name: "Christopher Nolan",
        email: "chris@example.com",
      });
    }, 500);
  });
}

fetchUser().then((data) => {
  console.log(data);
  /*
  Output (setelah 500ms):
  {
    id: 101,
    name: 'Christopher Nolan',
    email: 'chris@example.com'
  }
  */
});

console.log("\n");
