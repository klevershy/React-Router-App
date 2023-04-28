import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <h3>Klever SU</h3>
        </div>
        <div className="listMenu">
          <Link to="/">Home </Link>
          <Link to="/about">About </Link>
          <Link to="/services">Services </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
