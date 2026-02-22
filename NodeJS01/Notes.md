## Great Question! The code in `sum.js` will run **only 1 time** 🎯

### Why? — **Module Caching**

Node.js has a built-in **module caching system**. Here's what happens step by step:

```
1st require("./sum")  →  Node checks cache → NOT found → Loads & EXECUTES sum.js → Stores in cache
2nd require("./sum")  →  Node checks cache → FOUND ✅  → Returns cached version → SKIPS execution
```

### How Node.js handles `require()` internally:

```javascript
// Internally, Node.js does something like this:
const moduleCache = {}; // require.cache

function require(filePath) {
    if (moduleCache[filePath]) {
        return moduleCache[filePath].exports; // Return cached, NO re-execution
    }
    
    // First time only — load and execute the file
    const module = { exports: {} };
    executeFile(filePath, module);
    moduleCache[filePath] = module; // Store in cache
    
    return module.exports;
}
```

### You can verify this yourself:

```javascript
// sum.js
console.log("sum.js is running!"); // You'll see this ONLY ONCE
```

```javascript
// index.js
require("./sum"); // → "sum.js is running!"
require("./sum"); // → (nothing printed)
```

### The Benefits of this caching behavior:

**Performance** — No need to re-read and re-execute files on every `require()` call.

**Singleton Pattern** — Every file that requires the same module gets the *exact same instance*, which is why shared state works consistently across modules.

**Avoid Infinite Loops** — If Module A requires Module B and Module B requires Module A, caching prevents an infinite loop.

---

You can actually inspect Node's module cache yourself in your code:

```javascript
require("./sum");
require("./sum");

console.log(require.cache); // Shows all cached modules
```

This will show `sum.js` stored **once** in the cache object!