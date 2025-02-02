# Understanding Variables and Data Types in JavaScript

## Introduction to Variables
Variables are used to store data in JavaScript. They act as containers for values that can change during the execution of a program.

### Declaring Variables
JavaScript provides three ways to declare variables:
1. **`var`** (old way, not recommended)
2. **`let`** (modern, recommended for variables that change)
3. **`const`** (for values that don't change)

### Example:
```javascript
var oldVariable = "I'm old"; // Avoid using var
let name = "Alice";  // Can be reassigned
const age = 25;  // Cannot be reassigned
```

## Understanding Data Types
JavaScript has different types of data that variables can hold.

### Primitive Data Types
These are the basic types of values in JavaScript:
1. **String** – Text values.
   ```javascript
   let greeting = "Hello, World!";
   ```
2. **Number** – Integer or decimal values.
   ```javascript
   let score = 95.5;
   ```
3. **Boolean** – Represents `true` or `false`.
   ```javascript
   let isLoggedIn = true;
   ```
4. **Undefined** – A variable that has been declared but not assigned a value.
   ```javascript
   let notAssigned;
   console.log(notAssigned); // undefined
   ```
5. **Null** – Represents an empty or unknown value.
   ```javascript
   let emptyValue = null;
   ```
6. **BigInt** – Used for very large numbers.
   ```javascript
   let bigNumber = 123456789012345678901234567890n;
   ```
7. **Symbol** – Used for unique values.
   ```javascript
   let uniqueID = Symbol("id");
   ```

### Non-Primitive (Reference) Data Types
These are more complex data types:
1. **Objects** – A collection of key-value pairs.
   ```javascript
   let person = { name: "John", age: 30 };
   ```
2. **Arrays** – A list of values.
   ```javascript
   let colors = ["Red", "Green", "Blue"];
   ```
3. **Functions** – A block of reusable code.
   ```javascript
   function sayHello() {
     console.log("Hello!");
   }
   ```

## Type Checking
To check the type of a variable, use `typeof`:
```javascript
console.log(typeof "Hello"); // "string"
console.log(typeof 42); // "number"
console.log(typeof true); // "boolean"
console.log(typeof null); // "object" 
console.log(typeof undefined); // "undefined"
console.log(typeof { key: "value" }); // "object"
console.log(typeof [1, 2, 3]); // "object" (arrays are objects)
console.log(typeof function(){}); // "function"
```

## Variable Reassignment and Mutability
- `let` variables can be reassigned.
- `const` variables **cannot** be reassigned but **objects and arrays inside them can be modified**.

```javascript
let city = "New York";
city = "Los Angeles"; // ✅ Allowed

const country = "USA";
country = "Canada"; // ❌ Error!

const user = { name: "Alice" };
user.name = "Bob"; // ✅ Allowed because objects are mutable
```

## Summary
- JavaScript variables can be declared using `var`, `let`, or `const`.
- JavaScript has **primitive** (String, Number, Boolean, Null, Undefined, BigInt, Symbol) and **non-primitive** (Objects, Arrays, Functions) data types.
- Use `typeof` to check a variable’s type.
- `const` prevents reassignment, but objects inside can still be modified.
