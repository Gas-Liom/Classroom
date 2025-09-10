import Navbar from "./Navbar";

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <h1 className="logo">📚 MyClassroom</h1>
      
      <Navbar />
    </header>
  );
};

export default Header;
