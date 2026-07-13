import { useRef, useState } from "react";
import "./useEffect./useEffect.css"
export default function Ref() {
  let username = "admin";
  let pass = "admin@123";

  const userRef = myRef();
  const passRef = myRef();

  const [msg, setMsg] = useState("");

  function getSubmit() {
    let user = userRef.current.value;
    let password = passRef.current.value;

    if (user === username && password === pass) {
      setMsg("Login Successful");
    } else {
      setMsg("Invalid Username or Password");
    }
  }

  return (
    <div className="card">
      <input type="text"placeholder="Enter Username"ref={myRef} />
      <br /><br />
      <input type="password" placeholder="Enter Password" ref={myRef} />
      <br /><br />
      <button onClick={getSubmit}>LOGIN</button>
      <h2>{msg}</h2>
    </div>
  );
}