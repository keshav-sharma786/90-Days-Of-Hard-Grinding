## The Bug: `exports =` vs `module.exports =` 🐛

### The Problem:

```javascript
// ❌ YOUR CODE — This does NOT work
exports = {
  calculateSum: sum,
  calculateMultiply: multiply,
};
```

```javascript
// ✅ CORRECT — This works
module.exports = {
  calculateSum: sum,
  calculateMultiply: multiply,
};
```

---

### Why? — Understanding the relationship between `exports` and `module.exports`

Initially in every Node.js file, this is the situation:

```javascript
// Node.js sets this up internally at the start
module.exports = {};
exports = module.exports; // exports is just a REFERENCE/SHORTCUT to module.exports
```

Think of it like this:

```
module.exports ──→ { }  ←── exports
                    👆
              Both pointing to
               the SAME object
```

### What happens when you do `exports = { ... }`:

```javascript
exports = { calculateSum: sum, calculateMultiply: multiply };

// You just made exports point to a NEW object
// But module.exports still points to the OLD empty {}
```

```
module.exports ──→ { }          (still empty — this is what gets exported)

exports ──→ { calculateSum: sum, calculateMultiply: multiply }  (orphaned, ignored)
```

Node.js only cares about **`module.exports`** when sending data to the other file — so your functions are **lost!**

---

### What happens when you do `module.exports = { ... }`:

```javascript
module.exports = { calculateSum: sum, calculateMultiply: multiply };
```

```
module.exports ──→ { calculateSum: sum, calculateMultiply: multiply }  ✅ (exported correctly)

exports ──→ { }  (doesn't matter anymore)
```

---

### The Fix for your full code:

```javascript
// sumAndMultiply.js
function sum() {
  let a = 10,
    b = 20;
  console.log(a + b);
}

function multiply() {
  let a = 5,
    b = 6;
  console.log(a * b);
}

// ✅ Use module.exports
module.exports = {
  calculateSum: sum,
  calculateMultiply: multiply,
};
```

```javascript
// index.js
const { calculateSum, calculateMultiply } = require("./sumAndMultiply");

calculateSum(); // 30
calculateMultiply(); // 30
```

---

### Quick Rule to Remember:

|                              | Works? | Why                                                |
| ---------------------------- | ------ | -------------------------------------------------- |
| `module.exports = {...}`     | ✅     | Directly sets what gets exported                   |
| `exports.calculateSum = sum` | ✅     | Mutates the same object `module.exports` points to |
| `exports = {...}`            | ❌     | Breaks the reference, `module.exports` stays empty |

**Golden Rule → Always use `module.exports` when exporting an object/multiple things!**

<!-- ! Very Very Very Important Note -->

## Why does Node.js even have `exports`? 🤔

### It's just a **convenience/shortcut** for a specific use case!

When Node.js was designed, they thought developers would often want to export things **one by one**, so they gave a shortcut:

```javascript
// Instead of writing module.exports every time (verbose)
module.exports.sum = sum;
module.exports.multiply = multiply;
module.exports.divide = divide;

// exports shortcut saves you from writing "module." every time
exports.sum = sum;
exports.multiply = multiply;
exports.divide = divide;
```

Both do the **exact same thing** here — because you're just **adding properties** to the same object, not replacing it.

---

### The ONLY valid use case of `exports`:

```javascript
// ✅ Adding properties one by one — WORKS FINE
exports.sum = sum;
exports.multiply = multiply;

// This is equivalent to
module.exports.sum = sum;
module.exports.multiply = multiply;
```

---

### Where it all goes wrong:

The shortcut **breaks** the moment you try to reassign it:

```javascript
// ❌ Reassigning — BREAKS the reference
exports = { sum, multiply };

// ✅ Reassigning — WORKS
module.exports = { sum, multiply };
```

---

### Honest Truth 💀

`exports` is considered a **poorly designed shortcut** by many developers. It causes confusion for almost every beginner in Node.js.

In modern Node.js development, most developers just **always use `module.exports`** and completely ignore `exports` to avoid this confusion entirely.

> Think of `exports` as a shortcut that was meant to be helpful, but ended up being more confusing than useful!

<!--!~Very Very Very Important Note     -->

## Great Question! Let me show you exactly how it works 🎯

### In your `sumAndMultiply.js`:

```javascript
function sum() {
  let a = 10,
    b = 20;
  console.log(a + b);
}

function multiply() {
  let a = 5,
    b = 6;
  console.log(a * b);
}

// Adding properties one by one to the same object
exports.add = sum;
exports.mul = multiply;
```

### What `module.exports` looks like after this:

```javascript
// Since exports and module.exports point to SAME object
// adding properties to exports also adds them to module.exports

module.exports = {
  add: sum,
  mul: multiply,
};
// 👆 This is what gets sent to whoever requires this file
```

---

### In your `index.js`:

```javascript
// You must use the exact key names you used while exporting
// which are "add" and "mul"

const { add, mul } = require("./sumAndMultiply");

add(); // 30
mul(); // 30
```

Or without destructuring:

```javascript
const math = require("./sumAndMultiply");

math.add(); // 30
math.mul(); // 30
```

---

### ❌ This will NOT work:

```javascript
// These names don't exist in the exported object
const { sum } = require("./sumAndMultiply"); // ❌ undefined
const { multiply } = require("./sumAndMultiply"); // ❌ undefined
const { calculateSum } = require("./sumAndMultiply"); // ❌ undefined

// Only these exist 👇
const { add, mul } = require("./sumAndMultiply"); // ✅
```

---

### The Key Rule:

> **Whatever key name you use while exporting — you must use that SAME key name while importing!**

The function name doesn't matter — the **key name** you give during export is what matters! 🎯
