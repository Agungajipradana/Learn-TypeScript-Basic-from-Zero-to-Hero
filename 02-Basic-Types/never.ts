// Membuat file ini menjadi module agar variabel tidak bentrok dengan file lain
export {};

/*
Tipe data `never` digunakan untuk nilai yang tidak akan pernah terjadi.
Biasanya digunakan untuk:
  - Fungsi yang selalu error
  - Fungsi infinite loop
  - Exhaustive checking
*/

console.log(
  "------------------------------------------- Contoh Penggunaan `never` --------------------------------------\n"
);

/*
1. Fungsi yang Selalu Melempar Error (Paling Mudah)
*/

console.log("1. Fungsi yang Selalu Melempar Error\n");

function throwError(message: string): never {
  throw new Error(message); // fungsi tidak pernah kembali
}

try {
  throwError("Something went wrong!");
} catch (err) {
  console.log("Error caught:", (err as Error).message);
}

console.log("\n");

/*
2. Fungsi dengan Infinite Loop
*/

console.log("2. Infinite Loop\n");

function loopForever(): never {
  while (true) {
    console.log("Processing...");
  }
}

console.log("Infinite loop function defined (not executed).");
console.log("\n");

/*
3. `never` dalam Validasi Role User
*/

console.log("3. Validasi Role User\n");

type UserRole = "admin" | "editor" | "viewer";

function handleRole(role: UserRole) {
  if (role === "admin") {
    console.log("Admin access granted.");
  } else if (role === "editor") {
    console.log("Editor access granted.");
  } else if (role === "viewer") {
    console.log("Viewer access granted.");
  } else {
    const _exhaust: never = role;
    console.log(_exhaust);
  }
}

handleRole("editor");
console.log("\n");

/*
4. `never` untuk Validasi Response API
*/

console.log("4. Validasi Response API\n");

type ApiResponse =
  | { status: "success"; data: string[] }
  | { status: "error"; message: string };

function handleApiResponse(response: ApiResponse) {
  switch (response.status) {
    case "success":
      console.log("Data loaded:", response.data);
      break;

    case "error":
      console.log("API error:", response.message);
      break;

    default:
      const _neverCheck: never = response;
      console.log(_neverCheck);
  }
}

handleApiResponse({ status: "success", data: ["Laptop", "Keyboard"] });
console.log("\n");

/*
5. State Machine Example
*/

console.log("5. State Machine Example\n");

type PageState = "loading" | "loaded" | "error";

function renderPage(state: PageState) {
  switch (state) {
    case "loading":
      console.log("Page is loading...");
      break;

    case "loaded":
      console.log("Page loaded successfully.");
      break;

    case "error":
      console.log("Failed to load page.");
      break;

    default:
      const _neverState: never = state;
      console.log(_neverState);
  }
}

renderPage("loading");
console.log("\n");

/*
6. Fungsi Utility untuk Validasi Input
*/

console.log("6. Fungsi Utility untuk Validasi Input\n");

function validateString(input: string | undefined): string {
  if (typeof input === "string") {
    return input.trim();
  }

  // Jika input === undefined
  if (input === undefined) {
    return handleInvalidInput(input as never);
  }

  return handleInvalidInput(input as never);
}

function handleInvalidInput(value: never): never {
  throw new Error("Invalid input received!");
}

console.log(validateString("   Hello World   "));
console.log("\n");

/*
7. Function Overload
*/

console.log("7. Function Overload dengan `never`\n");

function getValue(value: string): string;
function getValue(value: number): number;
function getValue(value: never): never;
function getValue(value: string | number): string | number {
  if (typeof value === "string") {
    return value.toUpperCase();
  }

  if (typeof value === "number") {
    return value * 2;
  }

  throw new Error("Unsupported type!");
}

console.log(getValue("hello"));
console.log(getValue(20));
console.log("\n");

/*
8. Routing Check
*/

console.log("8. Routing Check\n");

type Route = "/home" | "/products" | "/profile";

function navigateTo(route: Route) {
  switch (route) {
    case "/home":
      console.log("Navigate to Home Page");
      break;

    case "/products":
      console.log("Navigate to Products Page");
      break;

    case "/profile":
      console.log("Navigate to Profile Page");
      break;

    default:
      const _invalidRoute: never = route;
      console.log(_invalidRoute);
  }
}

navigateTo("/products");
console.log("\n");

/*
9. Pattern Matching
*/

console.log("9. Pattern Matching\n");

type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; size: number }
  | { kind: "rectangle"; width: number; height: number };

function calculateArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return 3.14 * shape.radius * shape.radius;

    case "square":
      return shape.size * shape.size;

    case "rectangle":
      return shape.width * shape.height;

    default:
      const _neverShape: never = shape;
      return _neverShape;
  }
}

console.log(calculateArea({ kind: "square", size: 5 }));
console.log("\n");
