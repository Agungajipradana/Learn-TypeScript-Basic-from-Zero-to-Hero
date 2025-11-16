// Membuat file ini menjadi module agar variabel tidak bentrok dengan file lain
export {};

/*
Notes & Best Practices adalah prinsip dasar yang sangat penting dalam TypeScript.
Materi ini membantu menjaga kualitas kode, mengurangi bug, dan meningkatkan kejelasan proyek.
*/

console.log(
  "------------------------------------------- Notes & Best Practices --------------------------------------\n"
);

/*
1. Strict Mode (tsconfig.json)
   - Strict mode adalah konfigurasi penting yang membuat TypeScript memperketat pemeriksaan tipe.
*/

console.log("1. Strict Mode (tsconfig)\n");

console.log(`Contoh pengaturan di tsconfig.json:
{
  "compilerOptions": {
    "strict": true
  }
}
`);

console.log("\n");

/*
2. Gunakan unknown daripada any
   - unknown lebih aman karena wajib diverifikasi sebelum digunakan.
*/

console.log("2. unknown vs any\n");

// Contoh buruk (menggunakan any)
// let apiDataAny: any = "Success";
// apiDataAny = 123;

// Contoh benar (menggunakan unknown)
let apiDataUnknown: unknown = "Success";

if (typeof apiDataUnknown === "string") {
  console.log(apiDataUnknown.toUpperCase());
}

console.log("\n");

/*
3. Gunakan penamaan variabel yang aman.
*/

console.log("3. Penamaan Variabel yang Aman\n");

let userFullName: string = "Elizabeth Rogers";
let httpStatusCode: number = 200;

console.log(userFullName);
console.log(httpStatusCode);

console.log("\n");

/*
4. Explicit Types untuk public API
*/

console.log("4. Explicit Types untuk Public API\n");

type LoginRequest = {
  email: string;
  password: string;
};

function loginUser(data: LoginRequest): string {
  return `Login attempt from ${data.email}`;
}

console.log(
  loginUser({ email: "david@example.com", password: "superPass123" })
);

console.log("\n");

/*
5. Gunakan type inference untuk variabel lokal
*/

console.log("5. Type Inference untuk Variabel Lokal\n");

let productName = "Mechanical Keyboard";
let productStock = 35;

console.log(productName);
console.log(productStock);

console.log("\n");

/*
6. Gunakan tsc --noEmit untuk pengecekan tipe
*/

console.log("6. tsc --noEmit\n");

console.log("Command: tsc --noEmit");

console.log("\n");

/*
7. Contoh buruk vs contoh baik
*/

console.log("7. Contoh Buruk dan Contoh Baik\n");

// Contoh buruk (dikomentari agar tidak error)
// function sumBad(a, b) {
//   return a + b;
// }

// Contoh baik
function sumGood(a: number, b: number): number {
  return a + b;
}

console.log(sumGood(10, 20));

console.log("\n");

/*
8. unknown untuk validasi data API
*/

console.log("8. unknown untuk Data API (Web)\n");

function validateApiResponse(response: unknown) {
  if (
    typeof response === "object" &&
    response !== null &&
    "email" in response
  ) {
    console.log((response as { email: string }).email);
  } else {
    console.log("Invalid response received");
  }
}

validateApiResponse({ email: "charlotte@example.com" });
validateApiResponse("Error message");

console.log("\n");

/*
9. Strict Null Checking
*/

console.log("9. Strict Null Check\n");

function getDisplayName(name: string | null): string {
  return name ?? "Guest";
}

console.log(getDisplayName("William"));
console.log(getDisplayName(null));

console.log("\n");

/*
10. Hindari Mutasi Data
*/

console.log("10. Hindari Mutasi Data\n");

const userProfile = {
  fullName: "George Lennon",
  age: 25,
};

userProfile.age = 26;

console.log(userProfile);

console.log("\n");

/*
11. readonly
*/

console.log("11. readonly untuk Data yang Tidak Boleh Diubah\n");

type AppConfig = {
  readonly baseUrl: string;
  readonly version: number;
};

const config: AppConfig = {
  baseUrl: "https://api.example.com",
  version: 1,
};

console.log(config);

console.log("\n");

/*
12. Final Example (Kombinasi Best Practices)
*/

console.log("12. Final Example (Kombinasi Praktik Terbaik)\n");

type User = {
  id: number;
  fullName: string;
  email: string;
  isActive: boolean;
};

function createUser(data: unknown): User | null {
  if (
    typeof data === "object" &&
    data !== null &&
    "fullName" in data &&
    "email" in data
  ) {
    return {
      id: Date.now(),
      fullName: (data as any).fullName,
      email: (data as any).email,
      isActive: true,
    };
  }

  return null;
}

let newUser = createUser({
  fullName: "Alexander Graham",
  email: "alex@example.com",
});

console.log(newUser);

console.log("\n");
