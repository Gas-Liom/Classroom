import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <h1 className="logo">📚 MyClassroom</h1>
      <div className="header-links">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
