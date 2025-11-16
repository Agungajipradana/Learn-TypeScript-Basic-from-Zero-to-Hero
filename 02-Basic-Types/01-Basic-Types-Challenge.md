# TypeScript Basic Types Challenges

Tipe data dasar pada TypeScript adalah fondasi yang penting dalam pengembangan aplikasi web modern. Dengan memahami tipe seperti `string`, `number`, `boolean`, `array`, `tuple`, `enum`, `unknown`, union types, hingga praktik terbaik, kamu dapat menulis kode yang lebih aman, konsisten, dan mudah dipelihara.

---

# Easy

1. Buat variabel `fullName` berisi `"Daniel Thompson"` dan tampilkan ke console.
2. Buat variabel `pageCount` dengan nilai number `120`. Tampilkan output:
   `Total pages: 120`
3. Buat variabel boolean `isPublished` bernilai `false`. Tampilkan nilai tersebut.
4. Buat string `"typescript basics"` lalu ubah menjadi uppercase. Output yang diharapkan:
   `TYPESCRIPT BASICS`
5. Hitung panjang string `"Welcome to TypeScript"` menggunakan `.length`.
6. Buat array `tags` berisi `["web", "api", "typescript"]`. Tampilkan elemen kedua.
7. Buat tuple `[string, number]` berisi `["Laptop", 4]`. Tampilkan:
   `Product: Laptop, Stock: 4`
8. Buat union type `userId: string | number` lalu isi dengan `5012`.
9. Buat variabel `userEmail: string | null` dan set nilainya menjadi `null`. Tampilkan ke console.
10. Buat object `employee` dengan property `name` dan `role`, lalu tampilkan:
    `Employee: <name> - Role: <role>`

---

# Medium

11. Buat fungsi `getUserFullName(first: string, last: string)` yang menghasilkan output:
    `Full Name: Emma Wilson`
12. Buat fungsi `calculateDiscount(price: number, discount: number)` yang menghitung harga akhir.
    Contoh input: `100, 20`
    Output yang diharapkan: `Final Price: 80`
13. Buat array berisi beberapa email. Tampilkan semua email menggunakan `for...of`.
14. Buat type `Product = { id: number; name: string; price: number }`.
    Buat 1 object product dan tampilkan format:
    `Product #12: Monitor ($250)`
15. Buat fungsi `isUserVerified(email: string | null)` yang menghasilkan output:

    - Jika email ada: `"Verified: <email>"`
    - Jika null: `"Email not provided"`

16. Buat fungsi `getFirstTag(tags: string[])` yang mengembalikan tag pertama atau `"No tags found"`.
17. Buat enum `AccountType` dengan nilai: `"ADMIN"`, `"EDITOR"`, `"GUEST"`. Tampilkan salah satunya.
18. Buat fungsi `toSlug(text: string)` yang mengubah `"Hello World Example"` menjadi:
    `hello-world-example`
19. Buat array berisi object user `{name: string; age: number}`.
    Tampilkan semua user dengan umur di atas 25.
20. Buat fungsi yang menerima parameter unknown, lalu jika typeof adalah string, tampilkan panjangnya.
    Output contoh:
    `Length: 14`

---

# Hard

21. Buat fungsi `sanitizeInput(text: string)` yang:

    - menghapus whitespace di awal & akhir
    - mengubah ke lowercase
      Input: `"   Hello WORLD   "`
      Output: `hello world`

22. Buat fungsi `maskEmail(email: string)` yang mengubah:
    `"richard@example.com"`
    menjadi:
    `"r*****@example.com"`
23. Buat fungsi `parseArticleId(url: string)` untuk mengambil ID artikel:
    Input: `"https://site.com/articles/98231"`
    Output: `Article ID: 98231`
24. Buat generic type `ApiResponse<T>` dengan field:

    - `status: number`
    - `data: T`
    - `error: string | null`

25. Buat fungsi `createUser(data: unknown): User | null`
    Validasi bahwa object harus punya `fullName` dan `email`.
    Jika valid, return object `User`. Jika tidak, return null.
26. Buat fungsi `countWords(text: string)` yang menghitung jumlah kata.
    Input: `"Learning TypeScript step by step"`
    Output: `Word Count: 5`
27. Buat fungsi `filterActiveUsers(users: {name: string; isActive: boolean}[])`
    Output contoh:
    `Active User: Jonathan Reed`
28. Buat fungsi dengan parameter readonly array.
    Coba lakukan mutasi, pastikan TypeScript menolak dan beri komentar kenapa.
29. Buat fungsi `validatePassword(password: string)` dengan aturan:

    - minimal 8 karakter
    - mengandung angka
      Output contoh:
      `"Password valid"` atau `"Password invalid"`

30. Buat fungsi validasi API input yang menerima unknown:

    - Harus object
    - Harus memiliki key `email` dan `name`
      Output contoh jika valid:
      `Valid user: stella@example.com`
      Jika tidak valid:
      `Invalid API data`
