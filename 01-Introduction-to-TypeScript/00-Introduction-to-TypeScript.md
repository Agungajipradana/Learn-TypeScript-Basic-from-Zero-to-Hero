# Introduction to TypeScript (Pengenalan TypeScript)

TypeScript adalah **bahasa pemrograman turunan (superset)** dari JavaScript yang menambahkan **static typing (pengetikan statis)** dan fitur modern lainnya untuk meningkatkan keandalan serta keterbacaan kode.

Semua kode JavaScript valid juga merupakan kode TypeScript, tetapi TypeScript memberi kita **keamanan tipe** dan **pengecekan error sebelum runtime**.

---

## 1. What is TypeScript?

TypeScript dikembangkan oleh Microsoft untuk menulis JavaScript dengan dukungan:

- **Tipe data**
- **Class & Interface**
- **Error checking sebelum runtime**

File TypeScript (`.ts`) harus dikompilasi menjadi JavaScript (`.js`) menggunakan compiler `tsc`.

Contoh:

```ts
// Menampilkan pesan ke konsol
let message: string = "Hello TypeScript!";
console.log(message); // Output: Hello TypeScript!
```

Penjelasan singkat:

- `: string` → variabel `message` hanya boleh berisi teks.
- TypeScript akan error jika tipe datanya disalahgunakan.

---

## 2. Why Use TypeScript?

TypeScript membuat kode lebih aman, mudah dirawat, dan meminimalkan bug.

| Fitur (Feature)                   | JavaScript     | TypeScript |
| --------------------------------- | -------------- | ---------- |
| Static Typing (pengetikan statis) | ❌ Tidak ada   | ✅ Ada     |
| Error checking sebelum runtime    | ❌ Tidak       | ✅ Ya      |
| Auto-complete IDE                 | Terbatas       | Lengkap    |
| Compile step                      | ❌ Tidak perlu | ✅ Perlu   |
| OOP support                       | Terbatas       | Lengkap    |

---

## 3. Installing TypeScript

Cek Node.js:

```bash
node -v
npm -v
```

Instal TypeScript:

```bash
npm install -g typescript
```

Cek versi TS:

```bash
tsc -v
```

Opsional — instal ts-node:

```bash
npm install -g ts-node
```

---

## 4. Your First TypeScript Program

Buat file bernama `hello.ts`:

```ts
// Menampilkan pesan ke konsol
let message: string = "Hello TypeScript!";
console.log(message); // Output: Hello TypeScript!

// Mendeklarasikan variabel bertipe string
let userName: string = "John";
console.log("Hello, " + userName + "!"); // Output: Hello, John!

// Mendefinisikan variabel dengan tipe string dan number
let firstName: string = "Alice";
let age: number = 28;
console.log(firstName + " is " + age + " years old."); // Output: Alice is 28 years old.
```

---

## 5. Compiling TypeScript

Compile file `.ts` menjadi `.js`:

```bash
tsc hello.ts
```

Output file `hello.js` akan otomatis berada pada **folder yang sama**, karena kita tidak menggunakan `src/` dan `dist/`.

Jalankan:

```bash
node hello.js
```

Output:

```
Hello TypeScript!
Hello, John!
Alice is 28 years old.
```

---

## 6. Running TypeScript Directly (Optional)

Jika menggunakan `ts-node`, kamu dapat menjalankan `.ts` tanpa kompilasi:

```bash
ts-node hello.ts
```

---

## 7. Comparing with JavaScript

Contoh JavaScript biasa:

```js
let personName = "Michael";
console.log("Hello, " + personName + "!");
```

Perbandingan:

| Aspek                 | JavaScript     | TypeScript |
| --------------------- | -------------- | ---------- |
| Type checking         | ❌ Tidak ada   | ✅ Ada     |
| Compile before run    | ❌ Tidak perlu | ✅ Ya      |
| Error sebelum runtime | ❌ Tidak       | ✅ Ya      |
| IntelliSense          | Terbatas       | Lengkap    |

---

## 8. Creating a Simple TypeScript Project

Untuk setup sederhana (tanpa `src/` dan `dist`):

1. Inisialisasi project:

```bash
npm init -y
```

2. Install TypeScript:

```bash
npm install --save-dev typescript
```

3. Generate `tsconfig.json`:

```bash
npx tsc --init
```

4. Sesuaikan konfigurasi minimal, seperti:

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "CommonJS",
    "strict": true
  }
}
```

⚠ **Tidak ada `rootDir` dan `outDir`**, karena file `.ts` dan `.js` berada dalam folder yang sama.

5. Compile semuanya:

```bash
npx tsc
```

---

## 9. Type Checking Example

```ts
// Mendeklarasikan variabel bertipe number
let userAge: number = 25;

// userAge = "twenty-five"; // ❌ Error: Type 'string' is not assignable to type 'number'

console.log("Age:", userAge); // Output: Age: 25
```

---

## 10. Summary

- TypeScript = JavaScript + static typing.
- File `.ts` perlu dikompilasi menjadi `.js`.
- TypeScript mencegah error sebelum runtime.
- Setup sederhana tidak membutuhkan `src/` dan `dist`.

---

## 11. Example Program

```ts
// Mendefinisikan variabel dengan tipe string dan number
let firstName: string = "Alice";
let userAge: number = 28;

// Menampilkan hasil ke konsol
console.log(firstName + " is " + userAge + " years old."); // Output: Alice is 28 years old.
```

---

## 12. Next Lesson

➡️ **Lanjut ke: 02 - Basic Types (Tipe Data Dasar)**
