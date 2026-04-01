import React, { useEffect, useState } from "react";
import "./styles.css";

function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  function toggle() {
    setIsDark((prev) => {
      return !prev;
    });
  }

  return (
    <div className={isDark ? "dark-mode container" : "light-mode container"}>
      <h1>Dark Mode Toggle</h1>
      <div className="toggle-container">
        <label className="switch">
          <input type="checkbox" onClick={toggle} />
          <span className="slider round"></span>
        </label>
        <span className="mode-text">
          {isDark ? <p>Dark Mode</p> : <p>Light Mode</p>}
        </span>
      </div>
    </div>
  );
}

export default DarkModeToggle;
