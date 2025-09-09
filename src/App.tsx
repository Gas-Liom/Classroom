import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome"; // new landing page
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-layout">
      <Header />
      <main className="app-content">
        <Routes>
          <Route path="/" element={<Welcome />} />  
          <Route path="/home" element={<Home />} />  
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
