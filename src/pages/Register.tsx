import { useState } from "react";
import { Link } from "react-router-dom";

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    surname: "",
    middlename: "",
    regnumber: "",
    level_of_class: "",
    class_teacher: "",
    age: "",
    dateofbirth: "",
    password: "",
    village: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setMessage("✅ Registration successful!");
      } else {
        setMessage("❌ Registration failed: " + data.error);
      }
    } catch (err) {
      setMessage("⚠️ Could not connect to server.");
    }
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <input type="text" name="firstname" placeholder="First Name" required onChange={handleChange} />
        <input type="text" name="surname" placeholder="Surname" required onChange={handleChange} />
        <input type="text" name="middlename" placeholder="Middle Name" onChange={handleChange} />
        <input type="text" name="regnumber" placeholder="Registration Number" required onChange={handleChange} />
        <input type="text" name="level_of_class" placeholder="Level of Class" required onChange={handleChange} />
        <input type="text" name="class_teacher" placeholder="Class Teacher" required onChange={handleChange} />
        <input type="number" name="age" placeholder="Age" required onChange={handleChange} />
        <input type="date" name="dateofbirth" required onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
        <input type="text" name="village" placeholder="Village" required onChange={handleChange} />

        <button type="submit">Register</button>
      </form>

      {message && <p>{message}</p>}

      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Register;
