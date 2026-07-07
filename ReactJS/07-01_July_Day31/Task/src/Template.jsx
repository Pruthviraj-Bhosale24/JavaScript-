import { useState } from "react";
import "./Template.css";

function Template() {
  const [login, setLogin] = useState(true);

  return (
    <div className="box">
      <div className="form">

        <h2>Login Form</h2>

        <div className="buttons">
          <button onClick={() => setLogin(true)}>Login</button>
          <button onClick={() => setLogin(false)}>Signup</button>
        </div>

        {!login && <input type="text" placeholder="Name" />}

        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button className="submit">
          {login ? "Login" : "Signup"}
        </button>

        <p>
          {login ? "Not a member? Signup" : "Already have account? Login"}
        </p>

      </div>
    </div>
  );
}

export default Template;