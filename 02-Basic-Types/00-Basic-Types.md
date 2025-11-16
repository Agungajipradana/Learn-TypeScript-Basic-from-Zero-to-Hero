# Basic Types

## 1. `string` — Text

`string` digunakan untuk menyimpan teks.

```ts
// Mendeklarasikan variabel bertipe string
let firstName: string = "Alice";
console.log("Hello, " + firstName + "!"); // Output: Hello, Alice!
```

Penjelasan singkat: `string` hanya menerima nilai teks, bukan angka.

---

## 2. `number` — Numbers

`number` untuk integer dan floating point.

```ts
// Mendeklarasikan variabel bertipe number
let age: number = 28;
let price: number = 19.99;
console.log(firstName + " is " + age + " years old."); // Output: Alice is 28 years old.
console.log("Price:", price); // Output: Price: 19.99
```

Penjelasan singkat: TypeScript tidak membedakan integer/float — keduanya `number`.

---

## 3. `boolean` — True / False

```ts
// Mendeklarasikan variabel bertipe boolean
let isMember: boolean = true;
let isActive: boolean = false;
console.log("isMember:", isMember); // Output: isMember: true
console.log("isActive:", isActive); // Output: isActive: false
```

Penjelasan singkat: Cocok untuk kondisi/flag.

---

## 4. `any` — Dynamic / Any Type (Hindari bila memungkinkan)

`any` mematikan pemeriksaan tipe — gunakan hanya bila perlu.

```ts
// Menggunakan any (tidak disarankan kecuali perlu)
let data: any = "Hello";
console.log(data); // Output: Hello

data = 123;
console.log(data); // Output: 123

data = { name: "John" };
console.log(data); // Output: { name: 'John' }
```

Penjelasan singkat: `any` fleksibel tapi bisa menyembunyikan bug.

---

## 5. `unknown` — Safer Any (Lebih aman dari any)

`unknown` mirip `any` tetapi memaksa pengecekan tipe sebelum digunakan.

```ts
// unknown memaksa kita melakukan pengecekan tipe
let value: unknown = "Hello world";

// Jika ingin memakai sebagai string, cek dulu
if (typeof value === "string") {
  console.log(value.toUpperCase()); // Output: HELLO WORLD
}
```

Penjelasan singkat: Gunakan `unknown` untuk data yang belum diketahui tipenya.

---

## 6. `array` — Typed Arrays

Dua gaya penulisan umum:

```ts
// Gaya 1: T[]
let scores: number[] = [90, 85, 88];
console.log(scores); // Output: [ 90, 85, 88 ]

// Gaya 2: Array<type>
let names: Array<string> = ["Alice", "Bob", "Michael"];
console.log(names); // Output: [ 'Alice', 'Bob', 'Michael' ]
```

Penjelasan singkat: Array hanya menerima elemen sesuai tipe yang ditetapkan.

---

## 7. `tuple` — Fixed-length Array

Tuple menyatakan jumlah dan tipe elemen yang pasti.

```ts
// Tuple: [string, number]
let person: [string, number] = ["John", 30];
console.log(person[0]); // Output: John
console.log(person[1]); // Output: 30

// person = [30, "John"]; // ❌ Error: type mismatch
```

Penjelasan singkat: Berguna untuk pasangan nilai yang terstruktur.

---

## 8. `enum` — Named Constant Set (Kumpulan Konstanta Bernama)

`enum` memudahkan penggunaan nilai tetap.

```ts
// Enum numeric
enum Role {
  Admin,
  User,
  Guest,
}

let roleA: Role = Role.Admin;
console.log(roleA); // Output: 0
console.log(Role[roleA]); // Output: Admin

// Enum string (lebih jelas)
enum Status {
  Pending = "PENDING",
  Success = "SUCCESS",
  Failed = "FAILED",
}

let orderStatus: Status = Status.Success;
console.log(orderStatus); // Output: SUCCESS
```

Penjelasan singkat: `enum` membantu readability dan mencegah typo.

---

## 9. Union Types (`|`) — Multiple Possible Types

```ts
// Variabel bisa number atau string
let id: number | string;

id = 100;
console.log(id); // Output: 100

id = "USER-001";
console.log(id); // Output: USER-001
```

Penjelasan singkat: Gunakan union saat sebuah nilai sah jika dari beberapa tipe.

---

## 10. Literal Types — Fixed Value Options

```ts
// Hanya menerima 'left' atau 'right'
let direction: "left" | "right";

direction = "left";
console.log(direction); // Output: left

// direction = "up"; // ❌ Error: not assignable
```

Penjelasan singkat: Literal types membatasi nilai ke opsi yang telah ditentukan.

---

## 11. `void` — No Return (Tanpa nilai kembali)

Biasanya dipakai untuk fungsi yang tidak mengembalikan nilai.

```ts
// Fungsi yang tidak mengembalikan apapun
function logMessage(message: string): void {
  console.log(message);
}

logMessage("Hello from function"); // Output: Hello from function
```

Penjelasan singkat: `void` menjelaskan intent fungsi hanya melakukan side-effect.

---

## 12. `null` & `undefined` — Missing Values (Nilai tidak ada)

```ts
// Explicit null / undefined
let nothing: null = null;
let notAssigned: undefined = undefined;

console.log(nothing); // Output: null
console.log(notAssigned); // Output: undefined

// Dalam strict mode, tipe harus mengizinkan null/undefined secara eksplisit
let maybeName: string | null = null;
maybeName = "Michael";
console.log(maybeName); // Output: Michael
```

Penjelasan singkat: `strictNullChecks` mengharuskan penanganan null/undefined secara eksplisit.

---

## 13. `never` — Functions that never return (Tidak pernah kembali)

`never` dipakai untuk fungsi yang selalu melempar error atau infinite loop.

```ts
// Fungsi yang selalu melempar error
function fail(message: string): never {
  throw new Error(message);
}

// fail("Something went wrong"); // Jika dipanggil, akan throw Error
```

Penjelasan singkat: `never` menjaga tipe unreachable code.

---

## 14. Type Assertions (As & Angle-bracket)

Kamu bisa 'memberitahu' TypeScript bahwa kamu tahu tippenya.

```ts
let someValue: unknown = "hello world";

// Gaya 'as'
let strLength1: number = (someValue as string).length;
console.log(strLength1); // Output: 11

// Gaya angle-bracket (jangan gunakan di JSX)
let strLength2: number = (<string>someValue).length;
console.log(strLength2); // Output: 11
```

Penjelasan singkat: Gunakan assertion saat kamu pasti terhadap tipe runtime.

---

## 15. Practical Example (Menggabungkan beberapa tipe)

```ts
// Person object dengan tipe yang jelas
type Person = {
  firstName: string;
  lastName?: string; // optional
  age: number | null;
  roles: Role[]; // menggunakan enum Role dari atas
};

let personA: Person = {
  firstName: "Emma",
  lastName: "Brown",
  age: 32,
  roles: [Role.User],
};

console.log(personA);
// Output: { firstName: 'Emma', lastName: 'Brown', age: 32, roles: [ 1 ] }
```

Penjelasan singkat: Gabungan tipe membantu membuat object shape yang eksplisit dan aman.

---

## 16. Notes & Best Practices

- Aktifkan `strict: true` di `tsconfig.json` untuk pengecekan tipe ketat (recommended).
- Gunakan `unknown` bukan `any` bila memungkinkan.
- Hindari redeclare global names (contoh: `name`) — gunakan `userName`, `firstName`, dsb.
- Prefer explicit types untuk public API; gunakan type inference untuk local vars saat jelas.
- Gunakan `tsc --noEmit` untuk hanya mengecek type tanpa menghasilkan file `.js`.

---

## 17. Next Lesson

➡️ Lanjut ke: **03 - Array, Tuple & Enum (Array, Tuple & Enum)**
