// Membuat file ini menjadi module agar variabel tidak bentrok dengan file lain
export {};

/*
Tipe data void dalam TypeScript digunakan untuk fungsi yang tidak mengembalikan nilai.
Umumnya dipakai untuk:

    - Menampilkan pesan di console
    - Mengubah state
    - Mengirim request tanpa return
    - Menjalankan efek samping (side effect) di frontend/backend
    - Handler event (onClick, onSubmit, dsb.)

Ciri-ciri Tipe Data void:
    1. Fungsi tidak memiliki return value (return undefined)
    2. Tidak digunakan untuk variabel (tidak direkomendasikan)
    3. Sangat umum pada pengembangan web, terutama event handling
*/

console.log(
  "------------------------------------------- Contoh Penggunaan void -------------------------------------------\n"
);

/*
1. Fungsi sederhana yang tidak mengembalikan nilai
*/

console.log("1. Fungsi void sederhana\n");

function sayHello(): void {
  console.log("Hello from void function!");
}

sayHello();
// Output: Hello from void function!

console.log("\n");

/*
2. Fungsi void dengan parameter
*/

console.log("2. Fungsi void dengan parameter\n");

function greetUser(name: string): void {
  console.log(`Welcome, ${name}!`);
}

greetUser("Jonathan");
// Output: Welcome, Jonathan!

console.log("\n");

/*
3. void untuk logging (umum pada backend/API)
*/

console.log("3. Logging pada Backend\n");

function logRequest(url: string, method: string): void {
  console.log(`Request received: ${method} ${url}`);
}

logRequest("/api/users", "GET");
// Output: Request received: GET /api/users

console.log("\n");

/*
4. Fungsi void untuk update state (Frontend/React/Next.js)
*/

console.log("4. Update State (Frontend)\n");

let isSidebarOpen: boolean = false;

function toggleSidebar(): void {
  isSidebarOpen = !isSidebarOpen;
  console.log("Sidebar updated:", isSidebarOpen);
}

toggleSidebar(); // Output: Sidebar updated: true
toggleSidebar(); // Output: Sidebar updated: false

console.log("\n");

/*
5. Fungsi void untuk validasi tanpa return (hanya efek samping)
*/

console.log("5. Fungsi void untuk Validasi Form\n");

function validateEmail(email: string): void {
  if (!email.includes("@")) {
    console.log("Invalid email format.");
    return;
  }

  console.log("Email looks good.");
}

validateEmail("michael@example.com"); // Output: Email looks good.
validateEmail("invalid-email"); // Output: Invalid email format.

console.log("\n");

/*
6. void digunakan untuk event handler (Frontend)
*/

console.log("6. Event Handler (Simulasi)\n");

function onButtonClick(): void {
  console.log("Button clicked!");
}

onButtonClick();
// Output: Button clicked!

console.log("\n");

/*
7. void pada fungsi async tanpa return (Backend/Frontend)
*/

console.log("7. void untuk Fungsi Async (tanpa return)\n");

async function fetchUser(): Promise<void> {
  console.log("Fetching user...");
  await new Promise((res) => setTimeout(res, 500));
  console.log("User fetched successfully.");
}

fetchUser();
// Output:
// Fetching user...
// User fetched successfully.

console.log("\n");

/*
8. void untuk Notifikasi (Toast, Alert, Snackbar)
*/

console.log("8. Notifikasi Web\n");

function showNotification(message: string): void {
  console.log(`Notification: ${message}`);
}

showNotification("Profile updated successfully.");
// Output: Notification: Profile updated successfully.

console.log("\n");

/*
9. void untuk Handler API Response (tanpa mengembalikan data)
*/

console.log("9. Handler API Response\n");

function handleApiError(errorMessage: string): void {
  console.log("API Error:", errorMessage);
}

handleApiError("Unauthorized");
// Output: API Error: Unauthorized

console.log("\n");

/*
10. void dalam Higher-Order Function (Level lanjut)
*/

console.log("10. Higher-Order Function (Void)\n");

function createLogger(prefix: string): (msg: string) => void {
  return function (msg: string): void {
    console.log(`[${prefix}] ${msg}`);
  };
}

const serverLogger = createLogger("SERVER");
serverLogger("Server is running on port 3000");
// Output: [SERVER] Server is running on port 3000

console.log("\n");

/*
11. void sebagai type argument (generic function)
*/

console.log("11. void di Generic Function\n");

function executeTask(task: () => void): void {
  console.log("Executing task...");
  task();
  console.log("Task finished.");
}

executeTask(() => {
  console.log("Running background cleanup...");
});

/*
Output:
Executing task...
Running background cleanup...
Task finished.
*/

console.log("\n");

/*
12. Perbedaan void vs undefined (Penting!)
*/

console.log("12. Perbedaan void vs undefined\n");

// void = tipe data untuk fungsi tanpa return
function noReturn(): void {
  console.log("This function returns nothing.");
}

let result = noReturn();

console.log(result);
// Output: undefined (karena void sebenarnya menghasilkan undefined)

console.log("\n");
