import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

function TogglePassword() {
  const [password, setPassword] = useState(null);
  const [passwordType, setPasswordType] = useState(false);
  const [eyeSymbol, setEyeSymbol] = useState(false);
  const [passwordDescription, setPasswordDescription] = useState(false);
  return (
    <div className="container">
      <h1 className="title">Toggle Password</h1>
      <div className="password-wrapper">
        <input
          type={!passwordType ? "password" : "text"}
          id="password"
          placeholder="Enter password"
          className="password-input"
          data-testid="password-input"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <span
          className="icon"
          data-testid="toggle-icon"
          onClick={() => {
            setEyeSymbol(!eyeSymbol);
            setPasswordType(!passwordType);
            setPasswordDescription(!passwordDescription);
          }}
        >
          {/* <EyeOff size={18} /> */}
          {!eyeSymbol ? <EyeOff size={18} /> : <Eye size={18} />}
        </span>
      </div>
      <span className="visibility-label" data-testid="visibility-label">
        {!passwordDescription ? (
          <div>Password Hidden</div>
        ) : (
          <div>Password Visible</div>
        )}
      </span>
    </div>
  );
}

export default TogglePassword;
