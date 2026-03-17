## How `<Link>` Works Behind the Scenes in React

The `<Link>` component (from **React Router**) enables client-side navigation without a full page reload. Here's what happens under the hood:

---

### 1. It Renders an Anchor Tag `<a>`

`<Link to="/about">` ultimately renders a normal `<a href="/about">` in the DOM. However, it intercepts the click event before the browser handles it.

```jsx
// What you write
<Link to="/about">About</Link>

// What renders in the DOM
<a href="/about">About</a>
```

---

### 2. Click Interception

When clicked, `<Link>` calls `event.preventDefault()` to **stop the browser's default behavior** (which would be a full HTTP request + page reload).

```js
anchor.addEventListener("click", (event) => {
  event.preventDefault(); // No full reload!
  // Handle navigation internally
});
```

---

### 3. The History API

React Router uses the browser's built-in **`window.history` API** to update the URL without reloading:

```js
// Pushes a new entry onto the browser history stack
window.history.pushState({}, "", "/about");
```

This changes the URL in the address bar silently — no request is sent to the server.

| Method         | Behavior                                    |
| -------------- | ------------------------------------------- |
| `pushState`    | Adds new URL to history (back button works) |
| `replaceState` | Replaces current URL (no new history entry) |

`<Link>` uses `pushState` by default. `<Link replace>` uses `replaceState`.

---

### 4. The Router Detects the URL Change

React Router maintains a **history object** (via the `history` library). When the URL changes, it fires a listener:

```js
history.listen(({ location }) => {
  // New location detected → re-render the tree
});
```

---

### 5. React Re-renders the Matching Component

The `<Router>` context updates its state with the new location. This causes `<Routes>` / `<Route>` to re-evaluate and render the **matching component** for the new path — no HTML reload, just a React re-render.

```
URL changes → Router context updates → Routes re-matches → New component renders
```

---

### The Full Flow (Summary)

```
User clicks <Link to="/about">
        ↓
event.preventDefault()        ← stops browser reload
        ↓
history.pushState('/about')   ← URL bar updates silently
        ↓
history.listen() fires        ← Router detects change
        ↓
Router state updates          ← new location in context
        ↓
<Routes> re-matches           ← finds matching <Route>
        ↓
<AboutPage /> renders         ← only the component swaps
```

---

### Why This Is Better Than a Full Reload

| Full Page Reload             | `<Link>` (Client-side)       |
| ---------------------------- | ---------------------------- |
| New HTTP request to server   | No server request            |
| Re-downloads HTML/CSS/JS     | Reuses already-loaded bundle |
| Loses JS state (Redux, etc.) | State is preserved           |
| Visible flash/blank screen   | Instant, smooth transition   |

This is the core of what makes React apps feel like **Single Page Applications (SPAs)**.
