import "./logo.css";
import logo from "../assets/logo.jpg"; // path check kar lena

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Adarsh Logo" />
      </div>

      {/* baaki nav links */}
    </nav>
  );
};

export default Navbar;
