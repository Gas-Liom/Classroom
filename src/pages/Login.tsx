import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [formData, setFormData] = useState({ regnumber: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setMessage(`✅ Welcome ${data.student.firstname} ${data.student.surname}`);

        // Save user info (optional: localStorage/sessionStorage)
        localStorage.setItem("student", JSON.stringify(data.student));

        // Redirect to Home page
        navigate("/home");
      } else {
        setMessage("❌ " + data.error);
      }
    } catch (err) {
      setMessage("⚠️ Could not connect to server");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <input type="text" name="regnumber" placeholder="Registration Number" required onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
        <button type="submit">Login</button>
      </form>

      {message && <p>{message}</p>}

      <p>
        Don’t have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Login;
