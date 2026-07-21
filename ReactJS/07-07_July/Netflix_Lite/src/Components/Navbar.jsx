import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav>
      <img src={logo} className="logo" alt="Logo" />

      <div className="nav-right">
        <select>
          <option>English</option>
          <option>हिंदी</option>
        </select>

        <button className="signin">Sign In</button>
      </div>
    </nav>
  );
}

export default Navbar;