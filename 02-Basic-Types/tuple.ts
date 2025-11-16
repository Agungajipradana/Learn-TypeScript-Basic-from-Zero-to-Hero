// Membuat file ini menjadi module agar variabel tidak bentrok dengan file lain
export {};

/*
Tuple adalah tipe data khusus dalam TypeScript yang memungkinkan kita menyimpan 
array dengan jumlah elemen tetap dan tipe yang sudah ditentukan di setiap posisi.

Tuple sangat berguna dalam pengembangan web, terutama:
    - Mengembalikan value terstruktur dari fungsi
    - Menyimpan koordinat (x, y)
    - Menyimpan struktur data tetap seperti [statusCode, message]
    - Menyimpan data kecil yang posisinya fixed
*/

console.log(
  "------------------------------------------- Contoh Penggunaan Tuple --------------------------------------\n"
);

/*
1. Tuple Sederhana (basic)
*/

console.log("1. Tuple Sederhana\n");

let userData: [string, number] = ["Michael", 28];

console.log(userData);
// Output: ["Michael", 28]

console.log("\n");

/*
2. Mengakses nilai dalam Tuple
*/

console.log("2. Mengakses Nilai Tuple\n");

console.log(userData[0]); // Output: Michael
console.log(userData[1]); // Output: 28

console.log("\n");

/*
3. Tuple dengan 3 elemen
*/

console.log("3. Tuple dengan 3 Elemen\n");

let productInfo: [string, number, boolean] = ["Laptop", 1500, true];

console.log(productInfo);
// Output: ["Laptop", 1500, true]

console.log("\n");

/*
4. Tuple untuk data API Response (umum di web)
*/

console.log("4. Tuple untuk API Response\n");

let apiResponse: [number, string] = [200, "Success"];

console.log(apiResponse);
// Output: [200, "Success"]

console.log("\n");

/*
5. Tuple sebagai return value function
*/

console.log("5. Tuple sebagai Return Function\n");

function getCoordinates(): [number, number] {
  return [120.45, 35.67]; // contoh koordinat
}

console.log(getCoordinates());
// Output: [120.45, 35.67]

console.log("\n");

/*
6. Tuple Optional (elemen boleh tidak ada)
*/

console.log("6. Tuple Optional\n");

let userDetail: [string, number, string?] = ["Sarah", 30];

console.log(userDetail);
// Output: ["Sarah", 30]

console.log("\n");

/*
7. Tuple Readonly (tidak bisa diubah)
*/

console.log("7. Readonly Tuple\n");

let position: readonly [number, number] = [10, 20];

console.log(position);
// Output: [10, 20]

// position[0] = 99 ❌ ERROR (karena readonly)

console.log("\n");

/*
8. Tuple untuk State Management (contoh seperti React useState)
*/

console.log("8. Tuple untuk State Management\n");

function useState(initial: string): [string, (value: string) => void] {
  let state = initial;

  function setState(value: string) {
    state = value;
    console.log("State updated:", state);
  }

  return [state, setState];
}

const [currentName, setName] = useState("Albert");

console.log(currentName);
// Output: Albert

setName("Jonathan");
// Output: State updated: Jonathan

console.log("\n");

/*
9. Tuple dengan Label (lebih mudah dipahami)
*/

console.log("9. Tuple dengan Label\n");

type HttpResponse = [statusCode: number, message: string];

let loginResponse: HttpResponse = [401, "Unauthorized"];

console.log(loginResponse);
// Output: [401, "Unauthorized"]

console.log("\n");

/*
10. Tuple digunakan sebagai konfigurasi web (contoh: route)
*/

console.log("10. Tuple sebagai Route Config\n");

type Route = [path: string, method: "GET" | "POST"];

let loginRoute: Route = ["/login", "POST"];

console.log(loginRoute);
// Output: ["/login", "POST"]

console.log("\n");

/*
11. Tuple untuk validasi form (errorCode, fieldName)
*/

console.log("11. Tuple Validasi Form\n");

type FormError = [string, string];

let emailError: FormError = ["email", "Email format is invalid"];

console.log(emailError);
// Output: ["email", "Email format is invalid"]

console.log("\n");

/*
12. Nested Tuple (Tuple di dalam Tuple)
*/

console.log("12. Nested Tuple\n");

type LocationData = [string, [number, number]]; // city + coordinates

let storeLocation: LocationData = ["New York", [40.71, -74.0]];

console.log(storeLocation);
/*
Output:
[
  "New York",
  [40.71, -74.00]
]
*/

console.log("\n");

/*
13. Tuple dengan Rest Element (fleksibel tapi typed)
*/

console.log("13. Tuple dengan Rest Element\n");

let serverLogs: [string, ...string[]] = [
  "Server-1",
  "Connected",
  "OK",
  "Running",
];

console.log(serverLogs);
// Output: ["Server-1", "Connected", "OK", "Running"]

console.log("\n");

/*
14. Complex Tuple (digunakan untuk API modern)
*/

console.log("14. Complex Tuple\n");

type ApiResult = [
  status: number,
  headers: { contentType: string },
  body: { message: string; data: any }
];

let apiResult: ApiResult = [
  200,
  { contentType: "application/json" },
  { message: "Success", data: { id: 10, name: "Oliver" } },
];

console.log(apiResult);
/*
Output:
[
  200,
  { contentType: "application/json" },
  { message: "Success", data: { id: 10, name: "Oliver" } }
]
*/

console.log("\n");
