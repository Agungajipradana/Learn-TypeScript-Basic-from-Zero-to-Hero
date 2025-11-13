# 🚀 Learn TypeScript Basic from Zero to Hero 💡

Welcome to **Learn TypeScript Basic from Zero to Hero**,  
a repository designed to help you master TypeScript fundamentals from the ground up! 🎯

TypeScript is a powerful superset of JavaScript that adds static typing and modern features to make your code more reliable and maintainable.  
With this repository, you will:

- 📖 Understand TypeScript’s essential concepts.
- 🧠 Learn how to use types effectively.
- 🛠️ Practice through simple, real-world examples.
- ✅ Build a solid foundation before advancing to intermediate and expert levels.

---

## 💡 Why Learn TypeScript?

TypeScript is now widely used across different layers of development:

| Area                             | Description                                                         | Example                  |
| -------------------------------- | ------------------------------------------------------------------- | ------------------------ |
| 🖥️ **Frontend**                  | Type-safe development for modern frameworks.                        | React, Next.js, Vue      |
| ⚙️ **Backend**                   | Reliable server-side development with static typing.                | Node.js, NestJS, Express |
| 🔧 **Fullstack**                 | Shared types between frontend and backend for consistency.          | Next.js + Express/Nest   |
| 🧩 **Library / SDK Development** | Building reusable libraries and tools with strong type definitions. | npm packages, SDKs       |

With TypeScript, you gain **type safety**, **better refactoring**, and **intelligent autocompletion** — making you more productive and confident in your code.

---

## 📚 What Will You Learn?

Here’s the learning path following the repository folder structure:

---

### 01. **Introduction to TypeScript**

- What is TypeScript and why use it?
- TypeScript vs JavaScript.
- Installing and running TypeScript.
- Compiling `.ts` to `.js`.
- Using `tsc` and `ts-node`.

---

### 02. **Basic Types**

- `string`, `number`, `boolean`, `any`, `unknown`, `void`, `never`.
- Type inference and type annotations.
- Examples of using each type.

---

### 03. **Array, Tuple, and Enum**

- Defining typed arrays.
- Using tuples for fixed-length structures.
- Using `enum` for readable constant sets.

---

### 04. **Type Inference and Assertion**

- How TypeScript infers types automatically.
- Using `as` and `<Type>` syntax for assertions.
- Safe conversions from `unknown`.

---

### 05. **Union and Intersection Types**

- Combining multiple types using `|` (union).
- Merging types using `&` (intersection).
- Real-world use cases.

---

### 06. **Type Alias and Interface**

- Creating custom types with `type`.
- Defining contracts with `interface`.
- Extending interfaces and differences between them.

---

### 07. **Functions**

- Typing parameters and return values.
- Optional and default parameters.
- Arrow functions and function overloading.

---

### 08. **Objects and Interface Extension**

- Defining object shapes with types.
- Nested objects and optional properties.
- Extending interfaces and reusing structures.

---

### 09. **TSConfig Setup**

- Understanding `tsconfig.json`.
- Common options: `target`, `rootDir`, `outDir`, `strict`, `esModuleInterop`.
- Setting up project structure for compilation.

---

### 10. **Practical Examples**

- Building small TypeScript programs.
- Examples: Calculator, Greeter, or Type Checker.
- Combining multiple basic concepts in one project.

---

## 📂 Repository Structure

```bash
Learn-TypeScript-Basic-from-Zero-to-Hero/
├── 01-Introduction-to-TypeScript/
├── 02-Basic-Types/
├── 03-Array-Tuple-Enum/
├── 04-Type-Inference-and-Assertion/
├── 05-Union-and-Intersection/
├── 06-Type-Alias-and-Interface/
├── 07-Functions/
├── 08-Objects-and-Interface-Extension/
├── 09-TSConfig/
├── 10-Practical-Examples/
└── README.md
```

---

## 🛠️ Tools & VS Code Extensions

To make your TypeScript development smoother, here are recommended tools and extensions:

### 🔧 **Core Tools**

- **Node.js** — LTS version recommended
- **TypeScript** — latest stable version

### 🧩 **VS Code Extensions**

| Extension                                                                                        | Description                                                                                               |
| ------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| [**Quokka.js**](https://marketplace.visualstudio.com/items?itemName=WallabyJs.quokka-vscode)     | Instantly run and test TypeScript/JavaScript code inside VS Code — no need to use `npx ts-node` manually. |
| [**Code Runner**](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner) | Run snippets of code quickly from the editor.                                                             |
| [**TypeScript Hero**](https://marketplace.visualstudio.com/items?itemName=rbbit.typescript-hero) | Simplifies TypeScript imports and navigation.                                                             |
| [**ESLint**](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)         | Linting and code quality enforcement.                                                                     |
| [**Prettier**](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)       | Auto-format code for consistent styling.                                                                  |

💡 _Tip:_ With **Quokka.js**, you can just open a `.ts` file and start coding instantly — results appear inline without running commands!

---

## 📖 How to Use

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Agungajipradana/Learn-TypeScript-Basic-from-Zero-to-Hero.git
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run your code**:

   - Using `ts-node`:

     ```bash
     npx ts-node 01-Introduction-to-TypeScript/hello.ts
     ```

   - Or compile manually:

     ```bash
     npx tsc
     node dist/01-Introduction-to-TypeScript/hello.js
     ```

   - Or even faster — use **Quokka.js** in VS Code:

     - Open `hello.ts`
     - Press `Ctrl + K Q` (or use “Start Quokka” command)
     - See results instantly!

4. **Follow the learning path** step-by-step from
   `01-Introduction-to-TypeScript` → `10-Practical-Examples`.

---

## 🤝 Contributions

Contributions are welcome!
Feel free to open a pull request or suggest improvements to examples and documentation.

---

## 💬 Feedback

For questions or suggestions, contact:
📧 **[agungajipradana.business@gmail.com](mailto:agungajipradana.business@gmail.com)**
